import { Button } from "@/components/ui/button";

type RegisterButtonProps = {
  status: "no-session" | "unregistered" | "registered";
};

export default function RegisterButton({ status }: RegisterButtonProps) {
  if (status === "no-session") {
    return (
      <Button size="lg" disabled className="rounded-full px-8">
        LOGIN REQUIRED
      </Button>
    );
  }

  if (status === "registered") {
    return (
      <a href="/course/registered">
        <Button size="lg" className="bg-green-500 text-white rounded-full px-8">
         ASSIGNMENT SUBMISSION
        </Button>
      </a>
    );
  }

  // unregistered case - redirect to registration form
  return (
    <Button asChild size="lg" variant="cosmic">
      <a href="/course/register">REGISTER </a>
    </Button>
  );
}
