import type { Metadata } from "next";
import { PrivateAdvisoryView } from "@/components/views/advisory-views";

export const metadata: Metadata = {
  title: "Private Advisory for Women in Midlife",
  description:
    "Confidential strategic advisory for women navigating consequential decisions, career transitions, and questions of authority in midlife.",
};

export default function PrivateAdvisoryPage() {
  return <PrivateAdvisoryView />;
}
