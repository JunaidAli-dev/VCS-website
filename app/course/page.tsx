import { auth } from "@/auth";
import { headers } from "next/headers";
import CourseClient from "./CourseClient";

export default async function Page() {
  const session = await auth();

  let status: "no-session" | "unregistered" | "registered" = "no-session";

  if (session?.user?.email) {
    try {
      // Get dynamic host from headers
      const headersList = await headers();
      const host = headersList.get("host") || "localhost:3000";
      const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
      const baseUrl = `${protocol}://${host}`;

      const req = await fetch(
        `${baseUrl}/api/user/${session.user.email}`,
        { 
          cache: "no-store",
          signal: AbortSignal.timeout(5000) // 5 second timeout
        }
      );

      if (!req.ok) {
        throw new Error(`HTTP error! status: ${req.status}`);
      }

      const res = await req.json();
      status = res?.registered_course_id ? "registered" : "unregistered";
    } catch (err) {
      console.error("Error fetching user registration:", err);
      // status remains "no-session" or you can set a different fallback
    }
  }

  return <CourseClient status={status} />;
}
