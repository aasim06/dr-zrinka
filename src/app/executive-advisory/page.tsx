import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SubpageNav } from "@/components/sections/SubpageNav";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { MediaFeature } from "@/components/sections/MediaFeature";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { advisorySubnav, executiveDiagnosticPhases, executiveSituations } from "@/data/advisory";

export const metadata: Metadata = {
  title: "Executive & Leadership Advisory",
  description:
    "Decision clarity under sustained pressure. Structural diagnosis and targeted recalibration for CEOs, founders, executive boards, and institutions.",
};

export default function ExecutiveAdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Executive & Leadership Advisory · Frankfurt · Zagreb · International"
        title="Decision clarity under sustained pressure"
        lead={[
          "Organizations face challenges that expertise alone cannot resolve—from leadership misalignment and stalled decisions to strategic transitions and opportunities for growth.",
          "I work with executive teams to identify what stands in the way of progress, strengthen leadership effectiveness, and translate strategic priorities into coordinated action.",
        ]}
        primaryCta={{ label: "Request a Strategic Conversation", href: "/strategic-conversation" }}
        secondaryCta={{ label: "View Keynotes", href: "/keynotes" }}
        media={{
          src: "/images/portrait-red.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler — Executive Advisor",
          width: 968,
          height: 1024,
          frame: "arch",
          caption: "Independent Executive Advisor & Author · Frankfurt · Zagreb · International",
        }}
      />

      <SubpageNav items={advisorySubnav} />

      <PillarGrid
        surface="paper"
        eyebrow="Typical Situations"
        title="Where structural friction begins to cost clarity"
        items={executiveSituations}
        columns={3}
      />

      <QuoteBand
        surface="white"
        eyebrow="The Objective Is Simple"
        quote="Restore decision clarity, stable authority structures, and leadership capable of operating under pressure."
      />

      <MediaFeature
        surface="paper"
        imagePosition="right"
        frame="editorial"
        eyebrow="Approach"
        title="Structural diagnosis, not additional theory"
        paragraphs={[
          "Rather than introducing new management and leadership theory, the work concentrates on structural diagnosis and targeted recalibration of executive decision environments.",
          "Most mandates begin with a short diagnostic phase to map how authority, responsibility, and decision flow actually operate inside the organization.",
        ]}
        image={{
          src: "/images/workshop-advisory.jpg",
          alt: "Leadership and organizational diagnostic session",
          width: 1024,
          height: 683,
        }}
        cta={{ label: "Request a Strategic Conversation", href: "/strategic-conversation", variant: "secondary" }}
      />

      <PillarGrid
        surface="white"
        eyebrow="Engagement Format"
        title="A Focused Six-Week Leadership & Organizational Diagnostic"
        intro="For organizations facing recurring decision bottlenecks, unclear responsibilities, or stalled execution, a focused six-week diagnostic provides a structured starting point. Other engagements are tailored to the organization’s strategic priorities, leadership needs, and development opportunities."
        items={executiveDiagnosticPhases}
        columns={2}
      />

      <QuoteBand
        surface="paper"
        eyebrow="The Outcome Is Precise"
        quote="A simple executive decision map and a small set of targeted structural interventions."
      />

      <EditorialSplit
        surface="white"
        eyebrow="Who Commissions This Work"
        title="Confidential, selective, and leadership-level"
        quote="Mandates begin with a short strategic conversation to determine whether the situation requires structural intervention."
        paragraphs={["All mandates are confidential and highly selective. Most mandates are commissioned by:"]}
        listItems={[
          { title: "CEOs and founders", text: "Navigating rapid complexity, succession, or strategic inflection points." },
          { title: "Executive boards", text: "Restoring decision coherence across leadership layers under sustained pressure." },
          {
            title: "Institutional leaders",
            text: "Responsible for complex international organizations where authority and execution must align.",
          },
        ]}
        cta={{ label: "Request a Strategic Conversation", href: "/strategic-conversation", variant: "secondary" }}
      />

      <ClosingCTA
        eyebrow="Strategic Conversation"
        title="Request a Strategic Conversation"
        description="For executive advisory inquiries, strategic collaboration, or organizational mandates, please contact directly."
        ctaLabel="Start a Strategic Conversation"
        ctaHref="/strategic-conversation"
      />
    </>
  );
}
