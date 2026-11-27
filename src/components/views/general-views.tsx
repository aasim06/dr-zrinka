"use client";
import { PageHero } from "@/components/sections/PageHero";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { MediaFeature } from "@/components/sections/MediaFeature";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { ContactForm } from "@/components/forms/ContactForm";
import { StrategicConversationForm } from "@/components/forms/StrategicConversationForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getPagesCopy } from "@/data/translations-pages";
import { getCareerArc } from "@/data/about";
import { privacySections } from "@/data/legal";
import { localizePath } from "@/lib/i18n";

export function AboutView() {
  const { locale } = useLocale();
  const c = getPagesCopy(locale).about;
  const isDe = locale === "de";
  const careerArc = getCareerArc(locale);

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lead={c.lead}
        primaryCta={{ label: c.cta1, href: "/executive-advisory" }}
        secondaryCta={{ label: c.cta2, href: "/book" }}
        media={{
          src: "/images/portrait-red.jpg",
          alt: "Portrait of Dr. Zrinka K. Fidermuc Maler",
          width: 968,
          height: 1024,
          frame: "arch",
          caption: isDe
            ? "Autorin & Transformation Advisor · Frankfurt · Zagreb · International"
            : "Writer & Transformation Advisor · Frankfurt · Zagreb · International",
        }}
      />

      <PillarGrid surface="paper" eyebrow={c.arcEyebrow} title={c.arcTitle} intro={c.arcIntro} items={careerArc} columns={3} />

      <QuoteBand surface="white" eyebrow={c.constantEyebrow} quote={c.constantQuote} subtext={c.constantSub} />

      <EditorialSplit surface="paper" eyebrow={c.shiftEyebrow} title={c.shiftTitle} quote={c.shiftQuote} paragraphs={[c.shiftBody]} />

      <MediaFeature
        surface="white"
        imagePosition="left"
        frame="arch"
        eyebrow={c.physEyebrow}
        title={c.physTitle}
        paragraphs={
          isDe
            ? [
                "Wenn Führungskräfte interne Signale übergehen – physiologische Belastung, kognitive Ermüdung, hormonelle Veränderungen oder chronischen Stress – verengt sich ihr Urteilsvermögen. Man wird reaktiv statt strategisch.",
                "Kognitive Klarheit, Risikobewertung, Emotionsregulation und Autorität sind biologisch vermittelt. Gerät das Nervensystem unter Daueranspannung, sinkt die Entscheidungsqualität.",
                "Genau hier setzt meine Arbeit an: Ich verbinde systemisches Denken mit physiologischer Intelligenz – nicht durch oberflächliche Techniken, sondern durch strukturelle Kalibrierung von Denken, Grenzen und innerer Kohärenz.",
              ]
            : [
                "When leaders override their internal signals—physiological strain, cognitive fatigue, hormonal volatility, chronic stress—their judgment narrows. They become reactive instead of strategic. Polite instead of precise. Busy instead of decisive.",
                "Cognitive clarity, risk assessment, emotional regulation, and authority are biologically mediated. When the nervous system is dysregulated, decisions degrade. When hormonal transitions are ignored, executive presence shifts. When stress becomes chronic, compromise feels safer than conviction.",
                "This is where I work. I integrate systemic thinking with physiological intelligence. I restore alignment between decision-making, authority, and biological stability—not through motivation or surface communication tactics, but through structural recalibration of thinking, boundaries, and internal coherence.",
              ]
        }
        quote={c.physQuote}
        image={{
          src: "/images/portrait.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler",
          width: 800,
          height: 1000,
        }}
        cta={{ label: c.closingCta1, href: "/strategic-conversation", variant: "secondary" }}
        secondaryCta={{ label: isDe ? "Zum Buch" : "View the Book", href: "/book", variant: "link" }}
      />

      <ClosingCTA
        eyebrow={c.closingEyebrow}
        title={c.closingTitle}
        description={c.closingDesc}
        ctaLabel={c.closingCta1}
        ctaHref="/strategic-conversation"
        secondaryLabel={c.closingCta2}
        secondaryHref="/advisory"
      />
    </>
  );
}

export function ContactView() {
  const { locale } = useLocale();
  const c = getPagesCopy(locale).contact;

  return (
    <>
      <PageHero
        compact
        eyebrow={c.eyebrow}
        title={c.title}
        lead={[c.lead1, c.lead2]}
        primaryCta={{ label: c.cta1, href: "/strategic-conversation" }}
      />

      <section className="bg-paper py-[72px] md:py-[104px]">
        <Container className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          <div>
            <ContactForm />
          </div>

          <aside className="space-y-8">
            <div className="border border-line border-t-[3px] border-t-ink bg-white p-8">
              <Eyebrow tone="red" className="mb-3">{c.officeEyebrow}</Eyebrow>
              <Heading level={3} className="mb-2 !text-[28px]">{c.officeTitle}</Heading>
              <p className="mb-6 text-sm text-muted">{c.officeDesc}</p>

              <dl className="divide-y divide-line text-sm">
                <div className="py-3.5">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">{c.emailLabel}</dt>
                  <dd className="mt-1 font-medium">
                    <a href="mailto:assistenz@dr-zrinka.com" className="text-ink hover:text-red">
                      assistenz@dr-zrinka.com
                    </a>
                  </dd>
                </div>
                <div className="py-3.5">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">{c.phoneLabel}</dt>
                  <dd className="mt-1 font-medium">
                    <a href="tel:+496967727688" className="text-ink hover:text-red">
                      +49 69 677 27 688
                    </a>
                  </dd>
                </div>
                <div className="py-3.5">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">{c.addressLabel}</dt>
                  <dd className="mt-1 font-medium text-ink">Kaiserstraße 61 · 60329 Frankfurt am Main</dd>
                </div>
                <div className="py-3.5">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">{c.locationsLabel}</dt>
                  <dd className="mt-1 text-muted">Frankfurt/M · Zagreb · International</dd>
                </div>
              </dl>
            </div>

            <div className="border border-line border-t-[3px] border-t-gold bg-white p-8">
              <Eyebrow tone="red" className="mb-3">{c.scBoxEyebrow}</Eyebrow>
              <Heading level={3} className="mb-3 !text-[26px]">{c.scBoxTitle}</Heading>
              <p className="mb-6 text-sm text-muted">{c.scBoxDesc}</p>
              <Button href={localizePath("/strategic-conversation", locale)} variant="outline" size="sm">
                {c.scBoxBtn}
              </Button>
            </div>
          </aside>
        </Container>
      </section>

      <ClosingCTA
        eyebrow={c.closingEyebrow}
        title={c.closingTitle}
        ctaLabel={c.closingCta1}
        ctaHref="/advisory"
        secondaryLabel={c.closingCta2}
        secondaryHref="/connect"
      />
    </>
  );
}

export function StrategicConversationView() {
  const { locale } = useLocale();
  const pages = getPagesCopy(locale);
  const c = pages.strategicConversation;
  const nav = pages.advisorySubnav;

  return (
    <>
      <PageHero compact eyebrow={c.eyebrow} title={c.title} lead={c.lead} secondaryCta={{ label: c.ctaBack, href: "/contact" }} />

      <section className="bg-paper py-[72px] md:py-[104px]">
        <Container className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <StrategicConversationForm />

          <aside className="space-y-6">
            <div className="border border-line border-t-[3px] border-t-ink bg-white p-8">
              <Eyebrow tone="red" className="mb-3">{c.processEyebrow}</Eyebrow>
              <Heading level={3} className="mb-4 !text-[26px]">{c.processTitle}</Heading>
              <ul className="m-0 list-none divide-y divide-line p-0 text-sm text-muted">
                {c.processSteps.map((step) => (
                  <li key={step} className="py-3.5">{step}</li>
                ))}
              </ul>
            </div>

            <div className="border border-line bg-white p-8">
              <Eyebrow tone="muted" className="mb-3">{c.exploreEyebrow}</Eyebrow>
              <div className="flex flex-col items-start gap-3">
                <Button href={localizePath("/private-advisory", locale)} variant="link">
                  → {nav[1].label}
                </Button>
                <Button href={localizePath("/executive-advisory", locale)} variant="link">
                  → {nav[2].label}
                </Button>
                <Button href={localizePath("/keynotes", locale)} variant="link">
                  → {nav[3].label}
                </Button>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}

export function ConnectView() {
  const { locale } = useLocale();
  const c = getPagesCopy(locale).connect;
  const isDe = locale === "de";

  const connectItems = isDe
    ? [
        {
          index: "01",
          eyebrow: "Das Buch",
          title: "The Hat and the Hill",
          text: "Wissenschaft, Souveränität, Führung, Hormone, Lebensmitte – und was geschieht, wenn eine Frau aufhört, gegen sich selbst zu verhandeln.",
          ctaLabel: "→ Buch entdecken",
          ctaHref: "/book",
        },
        {
          index: "02",
          eyebrow: "Advisory",
          title: "Executive Advisory",
          text: "Für Top-Führungskräfte in komplexen Entscheidungen und Situationen, in denen Strategie der Realität standhalten muss.",
          ctaLabel: "→ Executive Advisory entdecken",
          ctaHref: "/executive-advisory",
        },
        {
          index: "03",
          eyebrow: "Essays",
          title: "The Journal",
          text: "Essays und Perspektiven zu Führung, Souveränität, Lebensmitte, Urteilskraft und Fragen, über die es sich zweimal nachzudenken lohnt.",
          ctaLabel: "→ The Journal lesen",
          ctaHref: "/journal",
        },
        {
          index: "04",
          eyebrow: "Live",
          title: "Events & Gespräche",
          text: "Lesungen, Salons, Live-Gespräche und ausgewählte Abende rund um Führung, Souveränität und ‚The Hat and the Hill‘.",
          ctaLabel: "→ Kommende Events ansehen",
          ctaHref: "/events",
        },
        {
          index: "05",
          eyebrow: "Bühnen",
          title: "Keynote Speaking",
          text: "Impulse, die bestehende Denkmuster über Führung, Frauen, Lebensmitte, Urteilskraft und Autorität herausfordern.",
          ctaLabel: "→ Keynotes entdecken",
          ctaHref: "/keynotes",
        },
        {
          index: "06",
          eyebrow: "Social",
          title: "LinkedIn",
          text: "Führung, Schreiben, Gedanken im Entstehen – und die Gespräche hinter der Arbeit.",
          ctaLabel: "→ Auf LinkedIn vernetzen",
          ctaHref: "https://www.linkedin.com/in/dr-zrinka-fidermuc-maler/",
        },
      ]
    : [
        {
          index: "01",
          eyebrow: "The Book",
          title: "The Hat and the Hill",
          text: "Science, sovereignty, leadership, hormones, midlife—and what happens when a woman stops negotiating against herself.",
          ctaLabel: "→ Buy the Book",
          ctaHref: "/book",
        },
        {
          index: "02",
          eyebrow: "Advisory",
          title: "Executive Advisory",
          text: "For senior leaders navigating complex decisions, uncertainty, and the moments when strategy has to survive contact with reality.",
          ctaLabel: "→ Explore Executive Advisory",
          ctaHref: "/executive-advisory",
        },
        {
          index: "03",
          eyebrow: "Writing",
          title: "The Journal",
          text: "Ideas, essays, and executive reflections on leadership, sovereignty, midlife, judgment, and the questions worth thinking about twice.",
          ctaLabel: "→ Read The Journal",
          ctaHref: "/journal",
        },
        {
          index: "04",
          eyebrow: "Live",
          title: "Events & Conversations",
          text: "Readings, salons, live conversations, and selected gatherings around leadership, sovereignty, and The Hat and the Hill.",
          ctaLabel: "→ See Upcoming Events",
          ctaHref: "/events",
        },
        {
          index: "05",
          eyebrow: "Stages",
          title: "Keynote Speaking",
          text: "Ideas that challenge how we think about leadership, women, midlife, judgment, and what becomes possible when experience meets authority.",
          ctaLabel: "→ Explore Keynotes",
          ctaHref: "/keynotes",
        },
        {
          index: "06",
          eyebrow: "Social",
          title: "LinkedIn",
          text: "Leadership, writing, ideas in progress—and the conversations behind the work.",
          ctaLabel: "→ Connect on LinkedIn",
          ctaHref: "https://www.linkedin.com/in/dr-zrinka-fidermuc-maler/",
        },
      ];

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lead={[c.lead1, c.lead2]}
        primaryCta={{ label: c.cta1, href: "/strategic-conversation" }}
        secondaryCta={{ label: c.cta2, href: "/private-advisory" }}
        media={{
          src: "/images/portrait-red.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler",
          width: 968,
          height: 1024,
          frame: "arch",
          caption: isDe
            ? "Autorin von ‚The Hat and the Hill‘ · Frankfurt · Zagreb · International"
            : "Author of The Hat and the Hill · Frankfurt · Zagreb · International",
        }}
      />

      <PillarGrid surface="paper" eyebrow={c.dirEyebrow} title={c.dirTitle} items={connectItems} columns={3} />

      <EditorialSplit
        surface="white"
        eyebrow={c.philEyebrow}
        title={c.philTitle}
        quote={c.philQuote}
        paragraphs={[c.philBody]}
        cta={{ label: c.philBtn, href: "/about", variant: "outline" }}
      />

      <ClosingCTA />
    </>
  );
}

export function CheckEmailView() {
  const { locale } = useLocale();
  const isDe = locale === "de";

  return (
    <>
      <PageHero
        compact
        eyebrow={isDe ? "Fast geschafft" : "Almost There"}
        title={isDe ? "Bitte prüfen Sie Ihr Postfach." : "Please check your inbox."}
        lead={
          isDe
            ? [
                "Wir haben Ihnen eine E-Mail zur Bestätigung Ihres Abonnements von The Journal gesendet. Klicken Sie auf den Bestätigungslink, um Ihre Anmeldung abzuschließen.",
                "Falls Sie innerhalb weniger Minuten keine Nachricht sehen, prüfen Sie bitte auch Ihren Spam- oder Werbungsordner.",
              ]
            : [
                "We have sent you an email to confirm your subscription to The Journal. Click the confirmation link in the email to complete your registration.",
                "Please also check your spam or promotions folder if you do not see it within a few minutes.",
              ]
        }
        primaryCta={{ label: isDe ? "Zur Startseite" : "Back to Home", href: "/" }}
        secondaryCta={{ label: isDe ? "The Journal entdecken" : "Explore The Journal", href: "/journal" }}
      />

      <section className="bg-paper py-16">
        <Container className="max-w-2xl text-center">
          <p className="text-muted">
            {isDe
              ? "Das Double-Opt-In-Verfahren stellt sicher, dass Ihre E-Mail-Adresse verifiziert ist, bevor Ausgaben von The Journal versendet werden."
              : "Double opt-in ensures that your email address is verified before any dispatch from The Journal is delivered."}
          </p>
          <div className="mt-6">
            <Button href={localizePath("/", locale)} variant="outline" size="sm">
              {isDe ? "Zurück zur Startseite" : "Return to Homepage"}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

export function ThankYouView() {
  const { locale } = useLocale();
  const isDe = locale === "de";

  return (
    <>
      <PageHero
        compact
        eyebrow={isDe ? "Bestätigt" : "You’re All Set"}
        title={isDe ? "Vielen Dank für die Bestätigung." : "Thank you for confirming your email."}
        lead={
          isDe
            ? "Sie haben The Journal erfolgreich abonniert. Ihre Sonntagslektüre erreicht Sie direkt in Ihrem Postfach."
            : "You have successfully subscribed to The Journal. Your Sunday morning dispatches will arrive directly in your inbox."
        }
        primaryCta={{
          label: isDe ? "Aktuellen Journal-Beitrag lesen" : "Read the Featured Journal Entry",
          href: "/journal/in-the-valley-of-tears",
        }}
        secondaryCta={{ label: isDe ? "Zur Startseite" : "Back to Home", href: "/" }}
      />

      <section className="bg-paper py-20">
        <Container className="max-w-2xl">
          <div className="border border-line border-t-[3px] border-t-gold bg-white p-8 text-center md:p-10">
            <Eyebrow tone="red" className="mb-3">{isDe ? "Abonnenten-Zugang" : "Subscriber Access"}</Eyebrow>
            <Heading level={3} className="mb-3">In the Valley of Tears</Heading>
            <p className="text-sm text-muted">
              {isDe ? (
                <>
                  Sie können die Abonnenten-Ausgabe von <em>In the Valley of Tears</em> direkt mit Google Sign-In oder
                  dem Zugangscode <strong className="text-ink">journal2026</strong> freischalten.
                </>
              ) : (
                <>
                  You can now read the subscriber edition of <em>In the Valley of Tears</em> using Google Sign-In or the
                  subscriber access code <strong className="text-ink">journal2026</strong>.
                </>
              )}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href={localizePath("/journal/in-the-valley-of-tears", locale)} variant="secondary" size="sm">
                {isDe ? "→ Journal-Beitrag öffnen" : "→ Open Journal Entry"}
              </Button>
              <Button href={localizePath("/book", locale)} variant="outline" size="sm">
                {isDe ? "The Hat & The Hill entdecken" : "Discover The Hat & The Hill"}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export function ImpressumView({
  impressumHtml,
  sections,
}: {
  impressumHtml: string;
  sections: { title: string; paragraphs: string[] }[];
}) {
  const { locale } = useLocale();
  const isDe = locale === "de";

  return (
    <>
      <PageHero
        compact
        eyebrow={isDe ? "Rechtliche Hinweise · Angaben gemäß § 5 TMG / DDG" : "Legal Notice · Angaben gemäß § 5 TMG / DDG"}
        title="Impressum"
        lead="Dr. Zrinka – Executive & Leadership Advisory · Geschäftsführerin: Dr. Zrinka K. Fidermuc Maler"
        secondaryCta={{ label: isDe ? "Datenschutz" : "Datenschutz / Privacy", href: "/datenschutz" }}
      />

      <section className="bg-paper py-[72px] md:py-[104px]">
        <Container className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <aside className="space-y-6">
            <div className="border border-line border-t-[3px] border-t-gold bg-white p-8">
              <Eyebrow tone="red" className="mb-3">Kontakt &amp; Adresse</Eyebrow>
              <Heading level={3} className="mb-5 !text-[26px]">
                Dr. Zrinka – Executive &amp; Leadership Advisory
              </Heading>
              <dl className="divide-y divide-line text-sm">
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Geschäftsführerin</dt>
                  <dd translate="no" className="notranslate mt-1 font-medium text-ink">Dr. Zrinka K. Fidermuc Maler</dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Adresse</dt>
                  <dd className="mt-1 font-medium text-ink">
                    Kaiserstr. 61
                    <br />
                    60329 Frankfurt am Main
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">E-Mail</dt>
                  <dd className="mt-1 font-medium">
                    <a href="mailto:info@dr-zrinka.com" className="text-ink hover:text-red">info@dr-zrinka.com</a>
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Telefon</dt>
                  <dd className="mt-1 font-medium">
                    <a href="tel:+496967727688" className="text-ink hover:text-red">+49 69 677 27 688</a>
                  </dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">USt.-Id.Nr.</dt>
                  <dd className="mt-1 font-medium text-ink">DE258257204</dd>
                </div>
                <div className="py-3">
                  <dt className="text-xs tracking-[0.1em] text-muted uppercase">Fotos Dr. Zrinka</dt>
                  <dd className="mt-1 text-ink">
                    Dietrich Skrock —{" "}
                    <a href="https://www.skrock.de" target="_blank" rel="noopener noreferrer" className="underline hover:text-red">
                      skrock.de
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>

          <div className="space-y-10 border-t border-ink pt-8">
            {impressumHtml ? (
              <div
                className="space-y-4 text-sm leading-[1.8] text-muted [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-ink [&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-ink"
                dangerouslySetInnerHTML={{ __html: impressumHtml }}
              />
            ) : (
              sections.map((sec) => (
                <section key={sec.title} className="border-b border-line pb-8">
                  <Heading level={3} className="mb-4 !text-[26px]">{sec.title}</Heading>
                  <div className="space-y-4 text-sm leading-[1.8] text-muted">
                    {sec.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </section>
              ))
            )}

            <div className="pt-2">
              <Button href={localizePath("/datenschutz", locale)} variant="outline" size="sm">
                → Datenschutzerklärung lesen
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export function DatenschutzView({ datenschutzHtml }: { datenschutzHtml: string }) {
  const { locale } = useLocale();

  return (
    <>
      <PageHero
        compact
        eyebrow="Legal · DSGVO / GDPR"
        title="Datenschutzerklärung"
        lead="Informationen zur Erhebung und Verarbeitung personenbezogener Daten auf dr-zrinka.com gemäß DSGVO."
        secondaryCta={{ label: "Impressum", href: "/impressum" }}
      />

      <section className="bg-paper py-[72px] md:py-[104px]">
        <Container className="grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <aside className="space-y-6">
            <div className="border border-line border-t-[3px] border-t-gold bg-white p-8 md:sticky md:top-28">
              <Eyebrow tone="red" className="mb-3">Inhaltsübersicht</Eyebrow>
              <Heading level={3} className="mb-5 !text-[24px]">Abschnitte</Heading>
              <nav aria-label="Datenschutz Inhaltsverzeichnis">
                <ul className="m-0 list-none divide-y divide-line p-0 text-sm">
                  {privacySections.map((sec, idx) => (
                    <li key={sec.title} className="py-2.5">
                      <a href={`#sec-${idx + 1}`} className="text-muted transition-colors hover:text-red">
                        {sec.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 border-t border-line pt-5">
                <Button href={localizePath("/impressum", locale)} variant="link">
                  → Impressum ansehen
                </Button>
              </div>
            </div>
          </aside>

          <div className="space-y-12 border-t border-ink pt-8">
            {datenschutzHtml ? (
              <div
                className="space-y-4 text-sm leading-[1.85] text-muted [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-red [&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-ink"
                dangerouslySetInnerHTML={{ __html: datenschutzHtml }}
              />
            ) : (
              privacySections.map((sec, idx) => (
                <section key={sec.title} id={`sec-${idx + 1}`} className="scroll-mt-28 border-b border-line pb-10">
                  <Heading level={2} className="mb-6 !text-[clamp(26px,3vw,36px)] text-red">
                    {sec.title}
                  </Heading>
                  <div className="space-y-3.5 text-sm leading-[1.85] text-muted">
                    {sec.blocks.map((block, bIdx) =>
                      block.kind === "heading" ? (
                        <h3 key={bIdx} className="pt-4 font-serif text-[22px] font-medium text-ink">
                          {block.text}
                        </h3>
                      ) : (
                        <p key={bIdx}>{block.text}</p>
                      )
                    )}
                  </div>
                </section>
              ))
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
