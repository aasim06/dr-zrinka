import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SubpageNav } from "@/components/sections/SubpageNav";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { eventsSubnav, pastEvents, upcomingEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "Keynotes & Events",
  description:
    "Reading & strategic conversation around The Hat and the Hill, leadership after 45, and upcoming author events in Frankfurt, Zagreb, and online.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events · Readings · Conversations"
        title="Reading & Strategic Conversation: The Hat and the Hill"
        lead="An intimate format combining selected readings from “The Hat and the Hill” with a strategic conversation on leadership, physiology, and decision-making under pressure."
        primaryCta={{ label: "Register: Zagreb · Dec 8", href: "/events/zagreb-8-december-2026" }}
        secondaryCta={{ label: "Invite for a Keynote", href: "/keynotes" }}
        media={{
          src: "/images/events-reading.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler reading in auditorium",
          width: 1024,
          height: 683,
          frame: "editorial",
          caption: "Frankfurt · Zagreb · International Salons",
        }}
      />

      <SubpageNav items={eventsSubnav} />

      {/* Upcoming Events */}
      <section className="bg-paper py-[72px] md:py-[104px]">
        <Container>
          <div className="mb-14 max-w-[680px]">
            <Eyebrow tone="red" className="mb-4">Calendar</Eyebrow>
            <Heading level={2}>Upcoming events</Heading>
          </div>

          <div className="border-t border-ink">
            {upcomingEvents.map((ev) => (
              <article
                key={ev.slug}
                className="grid gap-8 border-b border-line py-10 md:grid-cols-[260px_1fr_auto] md:items-start md:gap-12"
              >
                <div>
                  <p className="font-serif text-2xl font-medium text-red">{ev.date}</p>
                  <p className="mt-2 text-sm font-medium text-ink">{ev.location}</p>
                  {ev.time && <p className="mt-1 text-xs tracking-[0.06em] text-muted">{ev.time}</p>}
                  <span className="mt-3 inline-block border border-gold/60 bg-white px-2.5 py-1 text-[11px] font-medium tracking-[0.1em] text-muted uppercase">
                    Language: {ev.language}
                  </span>
                </div>

                <div>
                  <Heading level={3} className="!text-[28px] leading-[1.18]">
                    {ev.title}
                  </Heading>
                  {ev.subtitle && (
                    <p className="mt-2 font-serif text-lg italic text-red">{ev.subtitle}</p>
                  )}
                  <div className="mt-4 space-y-3 text-muted">
                    {ev.description.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                    {ev.hostNote && <p className="text-xs tracking-[0.04em] text-ink/80">{ev.hostNote}</p>}
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 md:items-end">
                  {ev.externalRegisterUrl ? (
                    <Button href={ev.externalRegisterUrl} variant="secondary" size="sm">
                      → View &amp; Register
                    </Button>
                  ) : (
                    <Button href={`/events/${ev.slug}`} variant="secondary" size="sm">
                      → View &amp; Register
                    </Button>
                  )}
                  <Button href={`/events/${ev.slug}`} variant="link">
                    Event details
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Past Events */}
      <section className="border-y border-line bg-white py-[72px] md:py-[104px]">
        <Container>
          <div className="mb-14 max-w-[680px]">
            <Eyebrow tone="muted" className="mb-4">Archive</Eyebrow>
            <Heading level={2}>Past events</Heading>
          </div>

          <div className="grid border-t border-ink md:grid-cols-2">
            {pastEvents.map((ev, i) => (
              <article
                key={ev.slug}
                className={[
                  "flex flex-col justify-between border-b border-line py-8",
                  i % 2 === 0 ? "md:pr-10" : "md:border-l md:border-line md:pl-10",
                ].join(" ")}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-medium tracking-[0.1em] text-muted uppercase">
                      {ev.date} · {ev.location}
                    </span>
                    {ev.soldOut && (
                      <span className="border border-red/40 px-2 py-0.5 text-[10px] font-medium tracking-[0.12em] text-red uppercase">
                        Sold Out
                      </span>
                    )}
                  </div>
                  <Heading level={3} className="mt-3 !text-[24px]">
                    {ev.title}
                  </Heading>
                  <p className="mt-3 text-sm text-muted">{ev.description[0]}</p>
                </div>
                <div className="mt-5 flex items-center justify-between text-xs text-muted">
                  <span>Language: {ev.language}</span>
                  <Button href={`/events/${ev.slug}`} variant="link">
                    Details
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCTA
        eyebrow="Host a Reading or Keynote"
        title="Bring this conversation to your organization or audience."
        description="Inquire about keynote availability, moderated salons, or private reading evenings."
        ctaLabel="Request a Keynote or Event"
        ctaHref="/contact"
        secondaryLabel="Explore Keynote Topics"
        secondaryHref="/keynotes"
      />
    </>
  );
}
