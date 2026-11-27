import type { Metadata } from "next";
import { ExecutiveAdvisoryView } from "@/components/views/advisory-views";

export const metadata: Metadata = {
  title: "Executive & Leadership Advisory",
  description:
    "Decision clarity under sustained pressure. Structural diagnosis and targeted recalibration for CEOs, founders, executive boards, and institutions.",
};

export default function ExecutiveAdvisoryPage() {
  return <ExecutiveAdvisoryView />;
}
