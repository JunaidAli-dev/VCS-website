import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createClient } from "@supabase/supabase-js";

// Supabase client
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const { signIn, signOut, auth, handlers } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],

  secret: process.env.AUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      if (!user?.email) return false;

      // 🔒 REGISTRATION SWITCH
      const REGISTRATION_OPEN = false;

      // Check if user already exists
      const { data: existingUser, error } = await supabase
        .from("users")
        .select("email")
        .eq("email", user.email)
        .maybeSingle();

      if (error) {
        console.error("Supabase fetch error:", error);
        return false;
      }

      // ❌ Block NEW users when registrations are closed
      if (!existingUser && !REGISTRATION_OPEN) {
        console.warn("Registrations are closed. New user blocked:", user.email);
        return false;
      }

      // ✅ Existing user → allow login
      if (existingUser) {
        return true;
      }

      // ✅ Registration open → create new user
      const provider_id = account?.providerAccountId;

      const { error: insertError } = await supabase.from("users").insert([
        {
          uuid: provider_id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: "user",
        },
      ]);

      if (insertError) {
        console.error("Supabase insert error:", insertError);
        return false;
      }

      return true;
    },

    async session({ session }) {
      try {
        if (session?.user?.email) {
          const { data } = await supabase
            .from("users")
            .select("role")
            .eq("email", session.user.email)
            .maybeSingle();

          if (data?.role) {
            (session.user as any).role = data.role;
          }
        }
      } catch (e) {
        console.error("Session callback error:", e);
      }

      return session;
    },
  },
});
