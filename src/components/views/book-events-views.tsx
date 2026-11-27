"use client";
import { PageHero } from "@/components/sections/PageHero";
import { SubpageNav } from "@/components/sections/SubpageNav";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { TestimonialGrid } from "@/components/sections/TestimonialGrid";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { MediaFeature } from "@/components/sections/MediaFeature";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import { EventRegistrationForm } from "@/components/forms/EventRegistrationForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getPagesCopy } from "@/data/translations-pages";
import { getBookContent, sampleChapterParagraphs } from "@/data/book";
import type { EventItem } from "@/data/events";
import { localizePath } from "@/lib/i18n";

export function BookView() {
  const { locale } = useLocale();
  const pages = getPagesCopy(locale);
  const c = pages.book;
  const isDe = locale === "de";
  const { insideBookThemes, orderOptions, pressItems, readerReviews } = getBookContent(locale);

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lead={[c.lead1, c.lead2]}
        primaryCta={{
          label: c.ctaSigned,
          href: "mailto:buch@dr-zrinka.com?subject=Signed%20Copy%20Order%20%E2%80%94%20The%20Hat%20and%20the%20Hill",
        }}
        secondaryCta={{ label: c.ctaChapter, href: "/book/sample-chapter" }}
        media={{
          src: "/images/book-cover-3d.png",
          alt: "The Hat and the Hill by Dr. Zrinka K. Fidermuc Maler — 3D Book Cover",
          width: 961,
          height: 1536,
          frame: "book",
          caption: "Sovereign Red Hat Press · Frankfurt/M—Zagreb",
        }}
      />

      <SubpageNav items={[...pages.bookSubnav]} />

      <PillarGrid
        surface="paper"
        eyebrow={c.orderEyebrow}
        title={c.orderTitle}
        intro={c.orderIntro}
        items={orderOptions}
        columns={2}
      />

      <EditorialSplit
        surface="white"
        eyebrow={c.toneEyebrow}
        title={c.toneTitle}
        quote={c.toneQuote}
        paragraphs={
          isDe
            ? [
                "Neugierig, was passiert, wenn eine Frau aufhört, dem erwarteten Drehbuch zu folgen? Starten Sie mit dem ersten Kapitel.",
                "Nicht weil diese Themen nebensächlich wären, sondern weil Humor oft jene Wahrheiten freilegt, an denen ernste Ratgeber vorbeigehen.",
              ]
            : [
                "Curious what happens when a woman stops following the script? Start with the opening chapter. You’ll get a taste of the humour, the honesty, and the unexpected turns that make The Hat and the Hill anything but a conventional midlife book.",
                "Not because the subjects are trivial, but because humour has a way of revealing truths that solemn explanations sometimes miss. You may find yourself laughing at something you expected to take seriously. That’s entirely intentional.",
              ]
        }
        cta={{ label: `→ ${c.ctaChapter}`, href: "/book/sample-chapter", variant: "secondary" }}
      />

      <TestimonialGrid surface="paper" eyebrow={c.reviewsEyebrow} title={c.reviewsTitle} items={readerReviews} />

      <QuoteBand surface="ink" eyebrow={c.turningEyebrow} quote={c.turningQuote} subtext={c.turningSub} />

      <MediaFeature
        surface="white"
        imagePosition="left"
        frame="editorial"
        eyebrow={c.launchEyebrow}
        title={c.launchTitle}
        paragraphs={
          isDe
            ? [
                "Ein Abend voller Lachen, unerwarteter Fragen und offener Gespräche bei der Buchpremiere von ‚The Hat and the Hill‘ in Zagreb.",
                "In Frankfurt, Zagreb und internationalen Salons kommen Leserinnen für ehrliche Debatten über Hormone, Ambition und Haltung in der Lebensmitte zusammen.",
              ]
            : [
                "An evening of laughter, unexpected questions, and wonderfully candid conversations at the Zagreb launch of The Hat and the Hill, October 2026.",
                "Across Frankfurt, Zagreb, and international salons, readers gather for open discussions about hormones, ambition, leadership, and refusing to shrink in midlife.",
              ]
        }
        image={{
          src: "/images/book-zagreb-launch.jpg",
          alt: "Zagreb launch evening of The Hat and the Hill",
          width: 1536,
          height: 1024,
          caption: isDe ? "Buchpremiere Zagreb · Oktober 2026" : "Zagreb Launch Evening · October 2026",
        }}
        cta={{
          label: isDe ? "Aktuelle Autoren-Events ansehen" : "See Live Author Events",
          href: "/events",
          variant: "secondary",
        }}
      />

      <PillarGrid surface="paper" eyebrow={c.insideEyebrow} title={c.insideTitle} items={insideBookThemes} columns={3} />

      <EditorialSplit
        surface="white"
        eyebrow={c.whyEyebrow}
        title={c.whyTitle}
        quote={c.whyQuote}
        paragraphs={
          isDe
            ? [
                "Wir leben in einer Ära voller Optimierungsversprechen. Doch erstaunlich wenig wird darüber gesprochen, was geschieht, wenn eine Frau in der Lebensmitte die Regeln infrage stellt, denen sie Jahrzehnte gefolgt ist.",
                "‚The Hat and the Hill‘ bringt genau diese Gespräche auf den Tisch – mit Wissenschaft, persönlichen Geschichten, Kulturbeobachtung und großzügigem Humor.",
              ]
            : [
                "We live in an age obsessed with longevity, wellness, looking younger, and optimizing practically everything. Yet remarkably little is said about what happens when a woman reaches midlife and begins questioning the rules she’s spent decades following.",
                "What about desire, ambition, relationships, hormones, disappointment, curiosity, and the freedom to change your mind? The Hat and the Hill brings these conversations into the open—with science, personal stories, cultural observations, and a generous dose of humour.",
              ]
        }
      >
        <div className="mt-8 border border-line border-t-[3px] border-t-gold bg-paper p-7">
          <p className="mb-1 text-xs font-medium tracking-[0.14em] text-red uppercase">{c.joinEyebrow}</p>
          <p className="mb-4 font-serif text-2xl font-medium text-ink">{c.joinTitle}</p>
          <NewsletterForm />
        </div>
      </EditorialSplit>

      <MediaFeature
        surface="paper"
        imagePosition="right"
        frame="editorial"
        eyebrow={c.authorEyebrow}
        title={c.authorTitle}
        paragraphs={
          isDe
            ? [
                "Dr. Zrinka K. Fidermuc Maler ist Autorin, promovierte Politikwissenschaftlerin und Executive Advisor zwischen Frankfurt am Main und Zagreb.",
                "‚The Hat and the Hill‘ entstand aus ihren eigenen Entdeckungen in der Lebensmitte – mit Neugier, Selbstironie und dem festen Glauben, dass die wichtigsten Gespräche mit Humor deutlich besser werden. Und vorzugsweise mit rotem Hut.",
              ]
            : [
                "Dr. Zrinka K. Fidermuc Maler is a writer, international relations scholar, and advisor who has spent much of her professional life exploring how people think, behave, change, and occasionally make spectacularly questionable decisions.",
                "With a background spanning politics, literature, movement, and human development, she has never been particularly interested in staying inside one discipline—or taking herself too seriously.",
                "The Hat and the Hill grew out of her own adventures in midlife, when hormones, ambition, relationships, and a lifetime of accumulated wisdom collided with the rather inconvenient discovery that there was still plenty left to figure out. She writes with curiosity, self-irony, and the firm belief that some of life’s most important conversations are considerably better with a sense of humour. And preferably a red hat.",
              ]
        }
        image={{
          src: "/images/author-stand.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler presenting her book",
          width: 800,
          height: 1200,
        }}
        cta={{ label: isDe ? "Über Dr. Zrinka" : "About Dr. Zrinka", href: "/about", variant: "outline" }}
      />

      <PillarGrid surface="white" eyebrow={c.pressEyebrow} title={c.pressTitle} intro={c.pressIntro} items={pressItems} columns={2} />

      <ClosingCTA
        eyebrow="The Hat and the Hill"
        title={c.closingTitle}
        description={c.closingDesc}
        ctaLabel={c.closingCta1}
        ctaHref="/book/sample-chapter"
        secondaryLabel={c.closingCta2}
        secondaryHref="https://amzn.eu/d/06AwoV6U"
      />
    </>
  );
}

export function SampleChapterView() {
  const { locale } = useLocale();
  const isDe = locale === "de";
  const pages = getPagesCopy(locale);

  return (
    <>
      <PageHero
        compact
        eyebrow={isDe ? "Buchvorschau · Leseprobe" : "Book Preview · Sample Reading"}
        title={
          isDe
            ? "The Hat and the Hill — Vor dem Aufstieg, im Tal der Tränen"
            : "The Hat and the Hill — Before the climb, in the valley of tears"
        }
        lead={
          isDe
            ? "Lesen Sie das erste Kapitel von ‚The Hat and the Hill‘ von Dr. Zrinka K. Fidermuc Maler (Originalausgabe auf Englisch)."
            : "Read the opening preview from The Hat and the Hill by Dr. Zrinka K. Fidermuc Maler."
        }
        primaryCta={{
          label: pages.book.ctaSigned,
          href: "mailto:buch@dr-zrinka.com?subject=Signed%20Copy%20Order%20%E2%80%94%20The%20Hat%20and%20the%20Hill",
        }}
        secondaryCta={{ label: isDe ? "Zurück zum Buch" : "Back to Book Overview", href: "/book" }}
      />

      <SubpageNav items={[...pages.bookSubnav]} />

      <article className="bg-paper py-[72px] md:py-[104px]">
        <Container className="max-w-[760px]">
          <div className="border border-line border-t-[3px] border-t-gold bg-white px-7 py-12 md:px-14 md:py-16">
            <Eyebrow tone="red" className="mb-4">{isDe ? "Leseprobe (Kapitel 1)" : "Opening Excerpt"}</Eyebrow>
            <Heading level={2} className="!text-[clamp(30px,3.8vw,44px)]">
              Before the climb, in the valley of tears
            </Heading>

            <blockquote className="my-8 border-l-2 border-gold pl-6 font-serif text-2xl italic leading-[1.35] text-red md:text-[28px]">
              “{sampleChapterParagraphs[0]}”
            </blockquote>

            <div className="space-y-5 text-[16.5px] leading-[1.85] text-ink/90">
              {sampleChapterParagraphs.slice(1).map((para, idx) => (
                <p
                  key={idx}
                  className={
                    para.startsWith("“Hell no") || para.startsWith("That fever")
                      ? "font-serif text-xl font-medium italic text-red"
                      : undefined
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-line pt-8">
              <Button
                href="mailto:buch@dr-zrinka.com?subject=Signed%20Copy%20Order%20%E2%80%94%20The%20Hat%20and%20the%20Hill"
                variant="secondary"
              >
                {isDe ? "→ Signiertes Exemplar bestellen · €29" : "→ I Want the Book (Signed Copy · €29)"}
              </Button>
              <Button href="https://amzn.eu/d/06AwoV6U" variant="outline">
                {pages.book.closingCta2}
              </Button>
            </div>
          </div>
        </Container>
      </article>

      <ClosingCTA
        eyebrow="The Hat and the Hill"
        title={isDe ? "Über die Leseprobe hinaus weiterlesen." : "Continue reading beyond the preview."}
        ctaLabel={isDe ? "Das vollständige Buch entdecken" : "Explore the Full Book"}
        ctaHref="/book"
        secondaryLabel={isDe ? "The Journal lesen" : "Read The Journal"}
        secondaryHref="/journal"
      />
    </>
  );
}

export function EventsView({ upcoming, past }: { upcoming: EventItem[]; past: EventItem[] }) {
  const { locale } = useLocale();
  const pages = getPagesCopy(locale);
  const c = pages.events;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lead={c.lead}
        primaryCta={{ label: c.cta1, href: "/events/zagreb-8-december-2026" }}
        secondaryCta={{ label: c.cta2, href: "/keynotes" }}
        media={{
          src: "/images/events-reading.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler reading in auditorium",
          width: 1024,
          height: 683,
          frame: "editorial",
          caption: "Frankfurt · Zagreb · International Salons",
        }}
      />

      <SubpageNav items={[...pages.eventsSubnav]} />

      <section className="bg-paper py-[72px] md:py-[104px]">
        <Container>
          <div className="mb-14 max-w-[680px]">
            <Eyebrow tone="red" className="mb-4">{c.upcomingEyebrow}</Eyebrow>
            <Heading level={2}>{c.upcomingTitle}</Heading>
          </div>

          <div className="border-t border-ink">
            {upcoming.map((ev) => {
              const hasInternalPage = !/^[a-f0-9]{24}$/i.test(ev.slug);
              return (
                <article
                  key={ev.slug}
                  className="grid gap-8 border-b border-line py-10 md:grid-cols-[260px_1fr_auto] md:items-start md:gap-12"
                >
                  <div>
                    <p className="font-serif text-2xl font-medium text-red">{ev.date}</p>
                    <p className="mt-2 text-sm font-medium text-ink">{ev.location}</p>
                    {ev.time && <p className="mt-1 text-xs tracking-[0.06em] text-muted">{ev.time}</p>}
                    <span className="mt-3 inline-block border border-gold/60 bg-white px-2.5 py-1 text-[11px] font-medium tracking-[0.1em] text-muted uppercase">
                      {c.languageLabel}: {ev.language}
                    </span>
                  </div>

                  <div>
                    <Heading level={3} className="!text-[28px] leading-[1.18]">
                      {ev.title}
                    </Heading>
                    {ev.subtitle && <p className="mt-2 font-serif text-lg italic text-red">{ev.subtitle}</p>}
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
                        {c.viewRegister}
                      </Button>
                    ) : hasInternalPage ? (
                      <Button href={localizePath(`/events/${ev.slug}`, locale)} variant="secondary" size="sm">
                        {c.viewRegister}
                      </Button>
                    ) : null}
                    {hasInternalPage && (
                      <Button href={localizePath(`/events/${ev.slug}`, locale)} variant="link">
                        {c.details}
                      </Button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white py-[72px] md:py-[104px]">
        <Container>
          <div className="mb-14 max-w-[680px]">
            <Eyebrow tone="muted" className="mb-4">{c.pastEyebrow}</Eyebrow>
            <Heading level={2}>{c.pastTitle}</Heading>
          </div>

          <div className="grid border-t border-ink md:grid-cols-2">
            {past.map((ev, i) => {
              const hasInternalPage = !/^[a-f0-9]{24}$/i.test(ev.slug);
              return (
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
                          {c.soldOut}
                        </span>
                      )}
                    </div>
                    <Heading level={3} className="mt-3 !text-[24px]">
                      {ev.title}
                    </Heading>
                    {ev.description[0] && <p className="mt-3 text-sm text-muted">{ev.description[0]}</p>}
                  </div>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted">
                    <span>
                      {c.languageLabel}: {ev.language}
                    </span>
                    {hasInternalPage && (
                      <Button href={localizePath(`/events/${ev.slug}`, locale)} variant="link">
                        {c.details}
                      </Button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <ClosingCTA
        eyebrow={c.closingEyebrow}
        title={c.closingTitle}
        description={c.closingDesc}
        ctaLabel={c.closingCta1}
        ctaHref="/contact"
        secondaryLabel={c.closingCta2}
        secondaryHref="/keynotes"
      />
    </>
  );
}

export function EventDetailView({ ev }: { ev: EventItem }) {
  const { locale } = useLocale();
  const isDe = locale === "de";
  const subnav = getPagesCopy(locale).eventsSubnav;

  return (
    <>
      <PageHero
        compact
        eyebrow={
          ev.status === "upcoming"
            ? isDe
              ? "Autoren-Event · Anmeldung"
              : "Author Event · Registration"
            : isDe
            ? "Veranstaltungs-Archiv"
            : "Past Event Archive"
        }
        title={ev.title}
        lead={ev.description}
        primaryCta={
          ev.externalRegisterUrl
            ? { label: isDe ? "→ Über Gastgeber anmelden" : "→ Register via Host Page", href: ev.externalRegisterUrl }
            : ev.soldOut
            ? { label: isDe ? "Kommende Events ansehen" : "See Upcoming Events", href: "/events" }
            : undefined
        }
        secondaryCta={{ label: isDe ? "Alle Events" : "All Events", href: "/events" }}
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

      <SubpageNav items={[...subnav]} />

      <section className="bg-paper py-[72px] md:py-[104px]">
        <Container className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <aside className="space-y-6">
            <div className="border border-line border-t-[3px] border-t-ink bg-white p-8">
              <Eyebrow tone="red" className="mb-3">{isDe ? "Veranstaltungsdetails" : "Event Details"}</Eyebrow>
              <Heading level={3} className="mb-6 !text-[26px]">
                {isDe ? "Informationen" : "Event Information"}
              </Heading>
              <dl className="divide-y divide-line text-sm">
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Ort / Location</dt>
                  <dd className="mt-1 font-medium text-ink">{ev.location}</dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Datum / Date</dt>
                  <dd className="mt-1 font-medium text-ink">{ev.date}</dd>
                </div>
                {ev.time && (
                  <div className="py-3">
                    <dt className="text-xs tracking-[0.1em] text-muted uppercase">Uhrzeit / Time</dt>
                    <dd className="mt-1 font-medium text-ink">{ev.time}</dd>
                  </div>
                )}
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">{isDe ? "Sprache" : "Language"}</dt>
                  <dd className="mt-1 font-medium text-ink">{ev.language}</dd>
                </div>
              </dl>
              {ev.admissionNote && (
                <p className="mt-5 border-t border-line pt-4 text-xs leading-relaxed text-muted">{ev.admissionNote}</p>
              )}
              {ev.externalRegisterUrl && (
                <div className="mt-6">
                  <Button href={ev.externalRegisterUrl} variant="secondary">
                    {isDe ? "→ Über Partnerportal anmelden" : "→ Register on Partner Portal"}
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
        title={isDe ? "Das Buch hinter den Gesprächen entdecken." : "Discover the book behind the conversations."}
        ctaLabel={isDe ? "Das Buch entdecken" : "Explore the Book"}
        ctaHref="/book"
        secondaryLabel={isDe ? "Zurück zu Events" : "Back to Events"}
        secondaryHref="/events"
      />
    </>
  );
}
