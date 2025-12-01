// app/api/admin/upload-scores/route.ts
import { NextRequest, NextResponse } from "next/server";
import { auth, supabase } from "@/auth"; // same as in Page

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from("users")
    .select("role")
    .eq("email", session.user.email)
    .maybeSingle();

  if (!profile || profile.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  const rows = body?.rows as Array<{ email: string; week: number; score: number }>;
  if (!Array.isArray(rows)) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  // Map Excel rows -> scores table format
  const payload = rows
    .filter((r) => r.email && r.week != null) // basic sanity check
    .map((r) => ({
      user_email: r.email,
      week: Number(r.week),
      score: !r.score || String(r.score).trim() === "" ? null : Number(r.score),
    }));

  if (payload.length === 0) {
    return NextResponse.json({ error: "No valid rows" }, { status: 400 });
  }

  // Bulk upsert on (user_email, week)
  const { error } = await supabase
    .from("scores")
    .upsert(payload, { onConflict: "user_email,week" });

  if (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ updated: payload.length });
}
