// app/api/admin/upload-scores/route.ts
import { NextRequest, NextResponse } from "next/server";
import { auth, supabase } from "@/auth";

// Expected sheet headers: email | score | week
type SheetRow = {
  email: string;
  score: string | number;
  week: number | string;
};

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Check admin role
  const { data: profile, error: profileError } = await supabase
    .from("users")
    .select("role")
    .eq("email", session.user.email)
    .maybeSingle();

  if (profileError) {
    console.error("Profile fetch error:", profileError);
    return NextResponse.json({ error: "Profile lookup failed" }, { status: 500 });
  }

  if (!profile || profile.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Parse body
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const rows = body?.rows as SheetRow[];
  if (!Array.isArray(rows)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  // Deduplicate by (email, week) and normalize score like "7 / 10" -> 7
  const map = new Map<string, { user_email: string; week: number; score: number | null }>();

  for (const r of rows) {
    if (!r.email || r.week == null) continue;

    const weekNum = Number(r.week);
    if (Number.isNaN(weekNum)) continue;

    const rawScore = String(r.score ?? "").trim();
    const numericPart = rawScore.split("/")[0].trim();
    const scoreNumber =
      numericPart === "" || Number.isNaN(Number(numericPart))
        ? null
        : Number(numericPart);

    const key = `${r.email}__${weekNum}`;
    // later rows overwrite earlier ones for same email+week
    map.set(key, {
      user_email: r.email,
      week: weekNum,
      score: scoreNumber,
    });
  }

  const payload = Array.from(map.values());

  if (payload.length === 0) {
    return NextResponse.json({ error: "No valid rows" }, { status: 400 });
  }

  // Upsert on unique (user_email, week) constraint
  const { error } = await supabase
    .from("scores")
    .upsert(payload, { onConflict: "user_email,week" });

  if (error) {
    console.error("Scores upsert error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ updated: payload.length });
}
