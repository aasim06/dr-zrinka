import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { SubpageNav } from "@/components/sections/SubpageNav";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { EventRegistrationForm } from "@/components/forms/EventRegistrationForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { allEvents, eventsSubnav } from "@/data/events";

export function generateStaticParams() {
  return allEvents.map((ev) => ({ slug: ev.slug }));
}

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

  return (
    <>
      <PageHero
        compact
        eyebrow={ev.status === "upcoming" ? "Author Event · Registration" : "Past Event Archive"}
        title={ev.title}
        lead={ev.description}
        primaryCta={
          ev.externalRegisterUrl
            ? { label: "→ Register via Host Page", href: ev.externalRegisterUrl }
            : ev.soldOut
            ? { label: "See Upcoming Events", href: "/events" }
            : undefined
        }
        secondaryCta={{ label: "All Events", href: "/events" }}
        media={
          ev.banner
            ? {
                src: ev.banner,
                alt: ev.title,
                width: 908,
                height: 1024,
                frame: "editorial",
                caption: `${ev.date} · ${ev.location}`,
              }
            : undefined
        }
      />

      <SubpageNav items={eventsSubnav} />

      <section className="bg-paper py-[72px] md:py-[104px]">
        <Container className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <aside className="space-y-6">
            <div className="border border-line border-t-[3px] border-t-ink bg-white p-8">
              <Eyebrow tone="red" className="mb-3">Event Details</Eyebrow>
              <Heading level={3} className="mb-6 !text-[26px]">Event Information</Heading>
              <dl className="divide-y divide-line text-sm">
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Location / Ort</dt>
                  <dd className="mt-1 font-medium text-ink">{ev.location}</dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Date / Datum</dt>
                  <dd className="mt-1 font-medium text-ink">{ev.date}</dd>
                </div>
                {ev.time && (
                  <div className="py-3">
                    <dt className="text-xs tracking-[0.1em] text-muted uppercase">Time / Uhrzeit</dt>
                    <dd className="mt-1 font-medium text-ink">{ev.time}</dd>
                  </div>
                )}
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Language</dt>
                  <dd className="mt-1 font-medium text-ink">{ev.language}</dd>
                </div>
              </dl>
              {ev.admissionNote && (
                <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">
                  {ev.admissionNote}
                </p>
              )}
              {ev.externalRegisterUrl && (
                <div className="mt-6">
                  <Button href={ev.externalRegisterUrl} variant="secondary">
                    → Register on Partner Portal
                  </Button>
                </div>
              )}
            </div>
          </aside>

          <div>
            <EventRegistrationForm
              eventSlug={ev.slug}
              eventTitle={`${ev.title} (${ev.date})`}
              soldOut={ev.soldOut}
              showGuestCount={ev.showGuestCount}
            />
          </div>
        </Container>
      </section>

      <ClosingCTA
        eyebrow="The Hat and the Hill"
        title="Discover the book behind the conversations."
        ctaLabel="Explore the Book"
        ctaHref="/book"
        secondaryLabel="Back to Events"
        secondaryHref="/events"
      />
    </>
  );
}
