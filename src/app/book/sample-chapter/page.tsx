import type { Metadata } from "next";
import { SampleChapterView } from "@/components/views/book-events-views";

export const metadata: Metadata = {
  title: "Read a Sample Chapter — The Hat & The Hill",
  description:
    "Sample reading from The Hat and the Hill: Before the climb, in the valley of tears.",
};

export default function SampleChapterPage() {
  return <SampleChapterView />;
}
