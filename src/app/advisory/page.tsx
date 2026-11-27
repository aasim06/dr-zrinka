import type { Metadata } from "next";
import { AdvisoryView } from "@/components/views/advisory-views";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Independent perspective for consequential decisions, leadership, and meaningful change. Private advisory, organizational advisory, and keynotes.",
};

export default function AdvisoryPage() {
  return <AdvisoryView />;
}
