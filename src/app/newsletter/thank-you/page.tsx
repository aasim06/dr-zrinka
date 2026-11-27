import type { Metadata } from "next";
import { ThankYouView } from "@/components/views/general-views";

export const metadata: Metadata = {
  title: "Subscription Confirmed",
  description: "Thank you for confirming your email subscription to The Journal.",
};

export default function ThankYouPage() {
  return <ThankYouView />;
}
