import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default async function Auth() {
  const session = await auth();
  if (session) redirect("/course");

  return (
    <main className="w-full min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 "></div>
      <div className="relative w-full max-w-sm bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-800 shadow-lg space-y-4 text-white">
        <h2 className="text-3xl font-bold text-center mb-6 gradient-text border-b border-cyan-400/30 pb-2">
          Register Now
        </h2>

        <form
          className="mt-4"
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button type="submit" variant="default" size="lg" className="w-full">
            Google
          </Button>
        </form>
      </div>
    </main>
  );
}
