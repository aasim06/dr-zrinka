import type { Metadata } from "next";
import { StrategicConversationView } from "@/components/views/general-views";

export const metadata: Metadata = {
  title: "Strategic Conversation",
  description:
    "Apply for a confidential Strategic Conversation with Dr. Zrinka K. Fidermuc Maler regarding advisory work or executive leadership mandates.",
};

export default function StrategicConversationPage() {
  return <StrategicConversationView />;
}
