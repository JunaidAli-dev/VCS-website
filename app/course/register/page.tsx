import { auth } from "@/auth";
import { redirect } from "next/navigation";
import RegisterFormPage from "./RegisterFormPage";

export default async function Page() {
  const session = await auth();

  // If no session → redirect to login/auth
  if (!session?.user?.email) {
    redirect("/auth");
  }

  // Fetch registration status
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`
      : "http://localhost:3000";

  const req = await fetch(`${baseUrl}/api/user/${session.user.email}`, {
    cache: "no-store",
  });

  const res = await req.json();

  // If already registered → redirect to /course
  if (res?.registered_course_id) {
    redirect("/course");
  }

  // If unregistered → render form
  return <RegisterFormPage />;
}
