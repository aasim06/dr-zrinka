import type { Metadata } from "next";
import { CheckEmailView } from "@/components/views/general-views";

export const metadata: Metadata = {
  title: "Please Check Your Inbox",
  description: "Confirm your email subscription to The Journal by Dr. Zrinka K. Fidermuc Maler.",
};

export default function CheckEmailPage() {
  return <CheckEmailView />;
}
