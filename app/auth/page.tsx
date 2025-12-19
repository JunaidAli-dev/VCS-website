import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default async function Auth() {
  const session = await auth();
  if (session) redirect("/course");

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-lg text-white space-y-4">
        
        <h2 className="text-3xl font-bold text-center">
          Sign In
        </h2>

        <p className="text-center text-slate-300 text-sm">
          New registrations are currently closed. <br />
          Existing users can sign in below.
        </p>

        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button type="submit" size="lg" className="w-full">
            Sign in with Google
          </Button>
        </form>

      </div>
    </main>
  );
}
