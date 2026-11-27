"use client";
import { PageHero } from "@/components/sections/PageHero";
import { SubpageNav } from "@/components/sections/SubpageNav";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { MediaFeature } from "@/components/sections/MediaFeature";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { ComparisonColumns } from "@/components/sections/ComparisonColumns";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getPagesCopy } from "@/data/translations-pages";
import {
  getExecutiveDiagnosticPhases,
  getExecutiveSituations,
  getPrivateFormats,
  getPrivateSituations,
} from "@/data/advisory";
import { getKeynoteContent } from "@/data/events";

export function AdvisoryView() {
  const { locale } = useLocale();
  const pages = getPagesCopy(locale);
  const c = pages.advisory;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lead={c.lead}
        primaryCta={{ label: c.cta1, href: "/strategic-conversation" }}
        secondaryCta={{ label: c.cta2, href: "/private-advisory" }}
        media={{
          src: "/images/portrait-red.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler",
          width: 968,
          height: 1024,
          frame: "arch",
          caption:
            locale === "de"
              ? "Autorin & Transformation Advisor · Frankfurt · Zagreb · International"
              : "Writer & Transformation Advisor · Frankfurt · Zagreb · International",
        }}
      />

      <SubpageNav items={[...pages.advisorySubnav]} />

      <PillarGrid
        surface="paper"
        eyebrow={c.areasEyebrow}
        title={c.areasTitle}
        intro={c.areasIntro}
        items={c.pillars.map((p) => ({
          index: p.index,
          eyebrow: p.eyebrow,
          title: p.title,
          text: p.text,
          ctaLabel: p.ctaLabel,
          ctaHref: p.href,
        }))}
        columns={3}
      />

      <MediaFeature
        id="private"
        surface="white"
        imagePosition="right"
        frame="arch"
        eyebrow={c.privateSection.eyebrow}
        title={c.privateSection.title}
        paragraphs={[c.privateSection.p1, c.privateSection.p2]}
        quote={c.privateSection.quote}
        image={{
          src: "/images/private-advisory.png",
          alt: "Dr. Zrinka K. Fidermuc Maler — Private Advisory",
          width: 836,
          height: 1024,
        }}
        cta={{ label: c.privateSection.cta1, href: "/private-advisory", variant: "secondary" }}
        secondaryCta={{ label: c.privateSection.cta2, href: "/strategic-conversation", variant: "link" }}
      />

      <MediaFeature
        id="organizations"
        surface="paper"
        imagePosition="left"
        frame="editorial"
        eyebrow={c.orgSection.eyebrow}
        title={c.orgSection.title}
        paragraphs={[c.orgSection.p1, c.orgSection.p2]}
        quote={c.orgSection.quote}
        image={{
          src: "/images/workshop-advisory.jpg",
          alt: "Executive & Organizational Advisory Workshop",
          width: 1024,
          height: 683,
        }}
        cta={{ label: c.orgSection.cta1, href: "/executive-advisory", variant: "secondary" }}
        secondaryCta={{ label: c.orgSection.cta2, href: "/strategic-conversation", variant: "link" }}
      />

      <QuoteBand surface="white" eyebrow={c.quoteBandEyebrow} quote={c.quoteBand} subtext={c.quoteBandSub} />

      <ClosingCTA
        eyebrow={c.closingEyebrow}
        title={c.closingTitle}
        description={c.closingDesc}
        ctaLabel={c.closingCta1}
        ctaHref="/strategic-conversation"
        secondaryLabel={c.closingCta2}
        secondaryHref="/keynotes"
      />
    </>
  );
}

export function PrivateAdvisoryView() {
  const { locale } = useLocale();
  const pages = getPagesCopy(locale);
  const c = pages.privateAdvisory;
  const isDe = locale === "de";
  const privateSituations = getPrivateSituations(locale);
  const privateFormats = getPrivateFormats(locale);

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lead={c.lead}
        primaryCta={{ label: c.cta1, href: "/strategic-conversation" }}
        secondaryCta={{ label: c.cta2, href: "/book" }}
        media={{
          src: "/images/private-advisory.png",
          alt: "Dr. Zrinka K. Fidermuc Maler",
          width: 836,
          height: 1024,
          frame: "arch",
          caption: c.caption,
        }}
      />

      <SubpageNav items={[...pages.advisorySubnav]} />

      <EditorialSplit
        surface="paper"
        eyebrow={c.relevantEyebrow}
        title={c.relevantTitle}
        quote={c.relevantQuote}
        paragraphs={[c.relevantLead]}
        listItems={privateSituations}
      />

      <EditorialSplit
        surface="white"
        eyebrow={c.diffEyebrow}
        title={c.diffTitle}
        quote={c.diffQuote}
        paragraphs={
          isDe
            ? [
                "Wichtige Entscheidungen entstehen selten im luftleeren Raum. Sie sind geprägt von beruflichen Beziehungen, widerstreitenden Verantwortlichkeiten, Erwartungen und Konsequenzen, die sich nicht in eine simple Pro-und-Kontra-Liste pressen lassen.",
                "Ich schaffe einen neutralen, streng vertraulichen Raum für klares Denken – einen Raum, in dem Sie Ihre Lage ohne Rechtfertigungsdruck und ohne vorschnelle Gewissheit prüfen können.",
                "Neutralität bedeutet jedoch keine gefällige Zustimmung. Ich bringe unabhängiges Urteil, langjährige Führungserfahrung und offene Reflexion ein – und hinterfrage Annahmen, die aus der Innensicht kaum sichtbar sind.",
                "Ihre Entscheidungen treffe ich nicht für Sie – aber Sie werden klarer sehen als zuvor.",
              ]
            : [
                "Important decisions rarely exist in isolation. They are shaped by professional relationships, competing responsibilities, personal histories, expectations, and consequences that cannot always be reduced to a neat list of options.",
                "I create a neutral, confidential space for clear thinking—a space where you can examine your situation without having to defend your position, perform certainty, or arrive with all the answers.",
                "But neutrality does not mean passive agreement. I bring independent judgment, professional experience, candid reflection, and the willingness to challenge what needs challenging. I listen closely, question assumptions, and offer perspectives that may be difficult to recognize from within your own circumstances.",
                "I will not make your decisions for you.",
              ]
        }
      />

      <PillarGrid surface="paper" eyebrow={c.formatsEyebrow} title={c.formatsTitle} items={privateFormats} columns={3} />

      <EditorialSplit
        surface="white"
        eyebrow={c.approachEyebrow}
        title={c.approachTitle}
        paragraphs={
          isDe
            ? [
                "Meine Arbeit ist vertraulich, fokussiert und bewusst in ihrer Kapazität begrenzt.",
                "Wir beginnen mit der Private Advisory Diagnostic – einem intensiven 90-minütigen Strategiegespräch inklusive Vorbereitung und kompakter schriftlicher Synthese.",
                "Für Situationen, die kontinuierliche Sparrings-Begleitung erfordern, bietet Extended Private Advisory eine maßgeschneiderte Zusammenarbeit über einen definierten Zeitraum.",
                "Es gibt keine automatischen Folgebuchungen. Jedes Mandat steht für sich – jede weitere Zusammenarbeit ist eine bewusste Entscheidung.",
              ]
            : [
                "My work is confidential, focused, and intentionally limited in capacity.",
                "We begin with the Private Advisory Diagnostic—a dedicated 90-minute strategic engagement, supported by preparation and a concise written synthesis. Together, we examine your situation, challenge assumptions, and identify meaningful options and next steps.",
                "For challenges requiring continued perspective, guidance, and accountability, Extended Private Advisory offers a tailored partnership over time.",
                "There is no automatic progression. Each engagement stands on its own, and any further collaboration is a deliberate choice.",
              ]
        }
        cta={{ label: c.cta1, href: "/strategic-conversation", variant: "secondary" }}
      />

      <QuoteBand surface="paper" eyebrow={c.nextStepEyebrow} quote={c.nextStepQuote} subtext={c.nextStepSub} />

      <MediaFeature
        surface="white"
        imagePosition="left"
        frame="arch"
        eyebrow={c.aboutEyebrow}
        title={c.aboutTitle}
        paragraphs={
          isDe
            ? [
                "Ich bin Dr. Zrinka K. Fidermuc Maler, Autorin und Executive Advisor an der Schnittstelle von Führung, strategischem Denken, Selbstführung und nachhaltiger Veränderung.",
                "Meine Perspektive stützt sich auf über zwei Jahrzehnte Erfahrung in Unternehmensstrukturen, Wissenschaftspolitik, Führungskräfteentwicklung und vertraulicher Beratung.",
                "Zudem bin ich Autorin von ‚The Hat and the Hill‘ – einer Erkundung von Identität, Wandel und Souveränität in der zweiten Lebenshälfte.",
              ]
            : [
                "I am Dr. Zrinka K. Fidermuc Maler, a writer and executive advisor working at the intersection of leadership, strategic thinking, self-leadership, and meaningful change.",
                "My perspective draws on extensive experience across corporate environments, leadership development, education, and private advisory. I combine intellectual rigor, independent judgment, candid conversation, and a willingness to challenge conventional assumptions.",
                "I am also the author of The Hat and the Hill, a genre-bending nonfiction exploration of identity, change, and sovereignty in the second half of life.",
              ]
        }
        image={{
          src: "/images/portrait-red.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler",
          width: 968,
          height: 1024,
        }}
        cta={{ label: c.cta1, href: "/strategic-conversation", variant: "secondary" }}
        secondaryCta={{
          label: isDe ? "Vollständige Biografie lesen" : "Read Full Biography",
          href: "/about",
          variant: "link",
        }}
      />

      <ClosingCTA
        eyebrow={c.closingEyebrow}
        title={c.closingTitle}
        ctaLabel={isDe ? "Strategisches Gespräch anfragen" : "Request a Strategic Conversation"}
        ctaHref="/strategic-conversation"
      />
    </>
  );
}

export function ExecutiveAdvisoryView() {
  const { locale } = useLocale();
  const pages = getPagesCopy(locale);
  const c = pages.executiveAdvisory;
  const isDe = locale === "de";
  const executiveSituations = getExecutiveSituations(locale);
  const executiveDiagnosticPhases = getExecutiveDiagnosticPhases(locale);

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lead={[c.lead1, c.lead2]}
        primaryCta={{ label: c.cta1, href: "/strategic-conversation" }}
        secondaryCta={{ label: c.cta2, href: "/keynotes" }}
        media={{
          src: "/images/portrait-red.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler — Executive Advisor",
          width: 968,
          height: 1024,
          frame: "arch",
          caption: isDe
            ? "Unabhängige Executive Advisor & Autorin · Frankfurt · Zagreb · International"
            : "Independent Executive Advisor & Author · Frankfurt · Zagreb · International",
        }}
      />

      <SubpageNav items={[...pages.advisorySubnav]} />

      <PillarGrid
        surface="paper"
        eyebrow={c.situationsEyebrow}
        title={c.situationsTitle}
        items={executiveSituations}
        columns={3}
      />

      <QuoteBand surface="white" eyebrow={c.objectiveEyebrow} quote={c.objectiveQuote} />

      <MediaFeature
        surface="paper"
        imagePosition="right"
        frame="editorial"
        eyebrow={c.approachEyebrow}
        title={c.approachTitle}
        paragraphs={
          isDe
            ? [
                "Statt weiterer Management-Theorie konzentriert sich meine Arbeit auf strukturelle Diagnose und gezielte Neuausrichtung von Entscheidungsarchitekturen auf Executive-Ebene.",
                "Die meisten Mandate starten mit einer kurzen Diagnosephase, die sichtbar macht, wie Autorität, Verantwortung und Entscheidungsflüsse in der Organisation real funktionieren.",
              ]
            : [
                "Rather than introducing new management and leadership theory, the work concentrates on structural diagnosis and targeted recalibration of executive decision environments.",
                "Most mandates begin with a short diagnostic phase to map how authority, responsibility, and decision flow actually operate inside the organization.",
              ]
        }
        image={{
          src: "/images/workshop-advisory.jpg",
          alt: "Leadership and organizational diagnostic session",
          width: 1024,
          height: 683,
        }}
        cta={{ label: c.cta1, href: "/strategic-conversation", variant: "secondary" }}
      />

      <PillarGrid
        surface="white"
        eyebrow={c.formatEyebrow}
        title={c.formatTitle}
        intro={c.formatIntro}
        items={executiveDiagnosticPhases}
        columns={2}
      />

      <QuoteBand surface="paper" eyebrow={c.outcomeEyebrow} quote={c.outcomeQuote} />

      <EditorialSplit
        surface="white"
        eyebrow={c.whoEyebrow}
        title={c.whoTitle}
        quote={c.whoQuote}
        paragraphs={[
          isDe
            ? "Alle Mandate unterliegen strenger Vertraulichkeit und Selektivität. Auftraggeber sind typischerweise:"
            : "All mandates are confidential and highly selective. Most mandates are commissioned by:",
        ]}
        listItems={
          isDe
            ? [
                {
                  title: "CEOs und Gründerpersönlichkeiten",
                  text: "In Phasen hoher Komplexität, Nachfolge oder strategischer Neuausrichtung.",
                },
                {
                  title: "Vorstände und Geschäftsführungen",
                  text: "Zur Wiederherstellung kohärenter Entscheidungen unter anhaltendem Druck.",
                },
                {
                  title: "Institutionelle Führungskräfte",
                  text: "Mit Verantwortung für internationale Organisationen, in denen Autorität und Umsetzung greifen müssen.",
                },
              ]
            : [
                { title: "CEOs and founders", text: "Navigating rapid complexity, succession, or strategic inflection points." },
                {
                  title: "Executive boards",
                  text: "Restoring decision coherence across leadership layers under sustained pressure.",
                },
                {
                  title: "Institutional leaders",
                  text: "Responsible for complex international organizations where authority and execution must align.",
                },
              ]
        }
        cta={{ label: c.cta1, href: "/strategic-conversation", variant: "secondary" }}
      />

      <ClosingCTA
        eyebrow={isDe ? "Strategisches Gespräch" : "Strategic Conversation"}
        title={c.cta1}
        description={
          isDe
            ? "Für Executive-Advisory-Anfragen, strategische Partnerschaften oder Unternehmensmandate nehmen Sie gerne direkt Kontakt auf."
            : "For executive advisory inquiries, strategic collaboration, or organizational mandates, please contact directly."
        }
        ctaLabel={c.cta1}
        ctaHref="/strategic-conversation"
      />
    </>
  );
}

export function KeynotesView({ speakerKitPdfUrl }: { speakerKitPdfUrl?: string }) {
  const { locale } = useLocale();
  const pages = getPagesCopy(locale);
  const c = pages.keynotes;
  const isDe = locale === "de";
  const { keynoteAudiences, keynoteFormats, keynoteSignals, keynoteTopics } = getKeynoteContent(locale);

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lead={[c.lead1, c.lead2]}
        primaryCta={{ label: c.ctaRequest, href: "/contact" }}
        secondaryCta={
          speakerKitPdfUrl ? { label: c.ctaKit, href: speakerKitPdfUrl } : { label: c.ctaBook, href: "/book" }
        }
        media={{
          src: "/images/keynote-stage.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler speaking on stage",
          width: 1024,
          height: 683,
          frame: "editorial",
          caption: isDe
            ? "Executive-Verantwortung, Entscheidungsfähigkeit und institutioneller Druck"
            : "Executive responsibility, decision-making, and institutional pressure",
        }}
      />

      <SubpageNav items={[...pages.advisorySubnav]} />

      <EditorialSplit
        surface="paper"
        eyebrow={c.signalsEyebrow}
        title={c.signalsTitle}
        quote={c.signalsQuote}
        paragraphs={
          isDe
            ? [
                "Dieses Format richtet sich an Organisationen, in denen Strategie vorhanden ist und fähige Menschen wirken – und dennoch keine Durchschlagskraft entsteht.",
              ]
            : [
                "This work is designed for situations where the strategy is clear, the people are capable—and yet traction doesn’t follow. Not because of missing competence, but because something in the system prevents decisions from gaining traction.",
              ]
        }
        listItems={keynoteSignals.map((signal) => ({ text: signal }))}
      />

      <MediaFeature
        surface="white"
        imagePosition="left"
        frame="editorial"
        eyebrow={c.descEyebrow}
        title={c.descTitle}
        paragraphs={
          isDe
            ? [
                "In dieser Keynote zeigt Dr. Zrinka K. Fidermuc Maler, wie Physiologie, Identität und Verantwortung Entscheidungsqualität in komplexen Umfeldern prägen.",
                "Aufbauend auf ‚The Hat and the Hill‘ und dem Sovereign Leadership Framework analysiert sie, warum Führung bricht, sobald Erwartungen steigen und Organisationen komplexer werden.",
                "Statt motivierender Floskeln stehen die strukturellen Mechanismen im Mittelpunkt, die über Klarheit und Autorität unter Druck entscheiden.",
              ]
            : [
                "In this keynote, Dr. Zrinka K. Fidermuc Maler explores how physiology, identity, and responsibility shape decision-making in complex environments.",
                "Drawing on the ideas behind The Hat and the Hill and the Sovereign Leadership Framework, she examines why leadership fractures when expectations multiply and organizations become more complex.",
                "Rather than offering formulas or motivational rhetoric, the talk focuses on the deeper structures that determine whether leaders maintain clarity and authority when pressure rises.",
              ]
        }
        quote={
          isDe ? "Genau hier halten Entscheidungen – oder kollabieren." : "This is where decisions either hold or collapse."
        }
        image={{
          src: "/images/events-reading.jpg",
          alt: "Dr. Zrinka speaking to an auditorium audience",
          width: 1024,
          height: 683,
        }}
        cta={{ label: c.ctaRequest, href: "/contact", variant: "secondary" }}
        secondaryCta={
          speakerKitPdfUrl ? { label: "Speaker & Media Kit (PDF)", href: speakerKitPdfUrl, variant: "link" } : undefined
        }
      />

      <PillarGrid
        surface="paper"
        eyebrow={c.themesEyebrow}
        title={c.themesTitle}
        intro={c.themesIntro}
        items={keynoteTopics}
        columns={2}
      />

      <ComparisonColumns
        surface="white"
        left={{
          eyebrow: c.audiencesEyebrow,
          title: c.audiencesTitle,
          items: keynoteAudiences,
        }}
        right={{
          eyebrow: c.formatsEyebrow,
          title: c.formatsTitle,
          items: keynoteFormats,
        }}
      />

      <ClosingCTA
        eyebrow={c.closingEyebrow}
        title={c.closingTitle}
        description={c.closingDesc}
        ctaLabel={c.ctaRequest}
        ctaHref="/contact"
        secondaryLabel={c.closingCta2}
        secondaryHref="/events"
      />
    </>
  );
}
