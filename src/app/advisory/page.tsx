import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SubpageNav } from "@/components/sections/SubpageNav";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { MediaFeature } from "@/components/sections/MediaFeature";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { advisorySubnav, workWithMePillars } from "@/data/advisory";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Independent perspective for consequential decisions, leadership, and meaningful change. Private advisory, organizational advisory, and keynotes.",
};

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Work with me"
        title="Independent perspective for consequential decisions, leadership, and meaningful change."
        lead="Whether you're navigating a personal turning point, leading through organizational complexity, or seeking a fresh perspective for your audience, I bring independent judgment, strategic thinking, and candid conversation to the questions that matter."
        primaryCta={{ label: "Request a Strategic Conversation", href: "/strategic-conversation" }}
        secondaryCta={{ label: "Explore Private Advisory", href: "/private-advisory" }}
        media={{
          src: "/images/portrait-red.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler",
          width: 968,
          height: 1024,
          frame: "arch",
          caption: "Writer & Transformation Advisor · Frankfurt · Zagreb · International",
        }}
      />

      <SubpageNav items={advisorySubnav} />

      <PillarGrid
        surface="paper"
        eyebrow="Areas of Practice"
        title="Three ways we work together"
        intro="Every engagement is confidential, selective, and designed around clarity, authority, and meaningful movement."
        items={workWithMePillars}
        columns={3}
      />

      <MediaFeature
        id="private"
        surface="white"
        imagePosition="right"
        frame="arch"
        eyebrow="Private Advisory"
        title="When the rules that brought you this far no longer work"
        paragraphs={[
          "Confidential strategic advisory for women in midlife and senior individuals navigating career transitions, questions of authority, and personal or professional reinvention.",
          "We begin with a focused 90-minute Private Advisory Diagnostic—including preparation and a concise written synthesis—to question assumptions and identify decisions you can stand behind.",
        ]}
        quote="I help you make decisions you can stand behind."
        image={{
          src: "/images/private-advisory.png",
          alt: "Dr. Zrinka K. Fidermuc Maler — Private Advisory",
          width: 836,
          height: 1024,
        }}
        cta={{ label: "Explore Private Advisory", href: "/private-advisory", variant: "secondary" }}
        secondaryCta={{ label: "Apply for a Diagnostic", href: "/strategic-conversation", variant: "link" }}
      />

      <MediaFeature
        id="organizations"
        surface="paper"
        imagePosition="left"
        frame="editorial"
        eyebrow="For Organizations"
        title="Decision clarity under sustained pressure"
        paragraphs={[
          "Organizations face challenges that expertise alone cannot resolve—from leadership misalignment and stalled decisions to strategic transitions and unclear responsibility structures.",
          "Rather than introducing additional management theory, most mandates begin with a focused six-week Leadership & Organizational Diagnostic to map how authority, responsibility, and decision flow actually operate.",
        ]}
        quote="Restore decision clarity, stable authority structures, and leadership capable of operating under pressure."
        image={{
          src: "/images/workshop-advisory.jpg",
          alt: "Executive & Organizational Advisory Workshop",
          width: 1024,
          height: 683,
        }}
        cta={{ label: "Explore Executive Advisory", href: "/executive-advisory", variant: "secondary" }}
        secondaryCta={{ label: "Inquire for Your Organization", href: "/strategic-conversation", variant: "link" }}
      />

      <QuoteBand
        surface="white"
        eyebrow="Speaking & Leadership"
        quote="Leadership fails not when strategy disappears, but when authority collapses under pressure."
        subtext="Keynote talks for executive leadership teams, business schools, and international conferences."
      />

      <ClosingCTA
        eyebrow="Strategic Conversation"
        title="Mandates begin with a short strategic conversation."
        description="Tell me briefly what you are currently navigating. Requests are reviewed personally."
        ctaLabel="Start a Strategic Conversation"
        ctaHref="/strategic-conversation"
        secondaryLabel="Explore Keynotes"
        secondaryHref="/keynotes"
      />
    </>
  );
}
