"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";

type Status = "no-session" | "unregistered" | "registered";

export default function HomeClient({ status }: { status: Status }) {
  return (
    <div className="flex gap-4 flex-wrap pt-4">
      {/* Hide Join button if registered */}
      {status !== "registered" && (
        <Button asChild variant="default" size="lg">
          <Link href={status === "no-session" ? "/auth" : "/course/register"}>
            Join Now
            <MdArrowOutward />
          </Link>
        </Button>
      )}

      <Button asChild variant="outline" size="lg">
        <Link href="/course">Explore Course</Link>
      </Button>
    </div>
  );
}
