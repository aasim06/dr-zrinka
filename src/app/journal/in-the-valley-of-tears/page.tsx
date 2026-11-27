import type { Metadata } from "next";
import { ValleyOfTearsView } from "@/components/views/journal-views";

export const metadata: Metadata = {
  title: "Journal — In the Valley of Tears",
  description:
    "Subscriber edition of The Journal by Dr. Zrinka K. Fidermuc Maler: In the Valley of Tears.",
};

export default function ValleyOfTearsPage() {
  return <ValleyOfTearsView />;
}
