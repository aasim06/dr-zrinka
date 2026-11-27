import type { Metadata } from "next";
import { BookView } from "@/components/views/book-events-views";

export const metadata: Metadata = {
  title: "The Hat & The Hill",
  description:
    "The Hat and the Hill. She Hit 50, Took Testosterone, and Lit the Fuse — power, hormones, identity, and the moment a woman stops asking for permission.",
};

export default function BookPage() {
  return <BookView />;
}
