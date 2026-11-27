import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventDetailView } from "@/components/views/book-events-views";
import { allEvents } from "@/data/events";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const ev = allEvents.find((e) => e.slug === params.slug);
  if (!ev) return { title: "Event Not Found" };
  return {
    title: `${ev.title} — ${ev.date}`,
    description: ev.description[0],
  };
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const ev = allEvents.find((e) => e.slug === params.slug);
  if (!ev) notFound();
  return <EventDetailView ev={ev} />;
}
