import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { MediaFeature } from "@/components/sections/MediaFeature";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { careerArc } from "@/data/about";

export const metadata: Metadata = {
  title: "About Dr. Zrinka",
  description:
    "I didn’t reinvent myself. I stopped compromising. Over two decades working where leadership, physiology, and institutional power intersect.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About · Dr. Zrinka K. Fidermuc Maler"
        title="I Didn’t Reinvent Myself. I Stopped Compromising."
        lead="For more than two decades, I have worked where leadership, physiology, and institutional power intersect."
        primaryCta={{ label: "Executive Advisory", href: "/executive-advisory" }}
        secondaryCta={{ label: "Explore the Book", href: "/book" }}
        media={{
          src: "/images/portrait-red.jpg",
          alt: "Portrait of Dr. Zrinka K. Fidermuc Maler",
          width: 968,
          height: 1024,
          frame: "arch",
          caption: "Writer & Transformation Advisor · Frankfurt · Zagreb · International",
        }}
      />

      <PillarGrid
        surface="paper"
        eyebrow="Professional Arc"
        title="Institutional depth. Decision reality."
        intro="I began my career in the financial industry in Zagreb, advising within complex corporate environments where risk, capital allocation, and regulatory precision shaped every decision."
        items={careerArc}
        columns={3}
      />

      <QuoteBand
        surface="white"
        eyebrow="The Constant"
        quote="Decisions fail long before strategies do."
        subtext="Across corporate finance, European science policy, and executive advisory, one theme remained constant."
      />

      <EditorialSplit
        surface="paper"
        eyebrow="The Real Shift"
        title="Compromise is not collaboration. Compromise is erosion."
        quote="Leadership failure rarely begins in strategy. It begins in the body."
        paragraphs={[
          "For years, I observed the same pattern across institutions, corporations, and leadership teams: decisions slowed, authority softened, and momentum dissolved—not because of a lack of intelligence, but because of accumulated compromise.",
        ]}
      />

      <MediaFeature
        surface="white"
        imagePosition="left"
        frame="arch"
        eyebrow="What Actually Breaks Under Pressure"
        title="Physiology is not a wellness topic—it is a leadership variable."
        paragraphs={[
          "When leaders override their internal signals—physiological strain, cognitive fatigue, hormonal volatility, chronic stress—their judgment narrows. They become reactive instead of strategic. Polite instead of precise. Busy instead of decisive.",
          "Cognitive clarity, risk assessment, emotional regulation, and authority are biologically mediated. When the nervous system is dysregulated, decisions degrade. When hormonal transitions are ignored, executive presence shifts. When stress becomes chronic, compromise feels safer than conviction.",
          "This is where I work. I integrate systemic thinking with physiological intelligence. I restore alignment between decision-making, authority, and biological stability—not through motivation or surface communication tactics, but through structural recalibration of thinking, boundaries, and internal coherence.",
        ]}
        quote="Authority returns when the system is stable. And stable systems make clear decisions."
        image={{
          src: "/images/portrait.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler",
          width: 800,
          height: 1000,
        }}
        cta={{ label: "Request a Strategic Conversation", href: "/strategic-conversation", variant: "secondary" }}
        secondaryCta={{ label: "View the Book", href: "/book", variant: "link" }}
      />

      <ClosingCTA
        eyebrow="Today"
        title="When clarity, authority, and decision momentum must be restored."
        description="I work with executives, senior leaders, and individuals navigating consequential decisions across Frankfurt, Zagreb, and internationally."
        ctaLabel="Request a Strategic Conversation"
        ctaHref="/strategic-conversation"
        secondaryLabel="View Work With Me"
        secondaryHref="/advisory"
      />
    </>
  );
}
