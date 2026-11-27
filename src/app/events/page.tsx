import type { Metadata } from "next";
import { EventsView } from "@/components/views/book-events-views";
import { getPublicEvents } from "@/lib/public-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Keynotes & Events",
  description:
    "Reading & strategic conversation around The Hat and the Hill, leadership after 45, and upcoming author events in Frankfurt, Zagreb, and online.",
};

export default async function EventsPage() {
  const { upcoming, past } = await getPublicEvents();
  return <EventsView upcoming={upcoming} past={past} />;
}
