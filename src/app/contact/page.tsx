import type { Metadata } from "next";
import { ContactView } from "@/components/views/general-views";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Clear intent. Selective engagement. Reach out regarding executive advisory, keynote speaking, or editorial collaboration.",
};

export default function ContactPage() {
  return <ContactView />;
}
