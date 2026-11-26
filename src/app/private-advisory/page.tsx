import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SubpageNav } from "@/components/sections/SubpageNav";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { MediaFeature } from "@/components/sections/MediaFeature";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { advisorySubnav, privateFormats, privateSituations } from "@/data/advisory";

export const metadata: Metadata = {
  title: "Private Advisory for Women in Midlife",
  description:
    "Confidential strategic advisory for women navigating consequential decisions, career transitions, and questions of authority in midlife.",
};

export default function PrivateAdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Advisory for Women in Midlife"
        title="When the Rules That Brought You This Far No Longer Work"
        lead="Your experience has brought you this far. But when your circumstances, priorities, or ambitions change, the strategies that once served you may no longer be enough."
        primaryCta={{ label: "Inquire About Private Advisory", href: "/strategic-conversation" }}
        secondaryCta={{ label: "Explore the Book", href: "/book" }}
        media={{
          src: "/images/private-advisory.png",
          alt: "Dr. Zrinka K. Fidermuc Maler",
          width: 836,
          height: 1024,
          frame: "arch",
          caption: "Confidential · Independent · Intentionally limited capacity",
        }}
      />

      <SubpageNav items={advisorySubnav} />

      <EditorialSplit
        surface="paper"
        eyebrow="Where This Work Becomes Relevant"
        title="When the old way of carrying responsibility no longer works"
        quote="This is where clarity becomes leadership."
        paragraphs={[
          "You may still be performing well. You may still be trusted, capable, and outwardly successful. But something has shifted—and the approaches that once served you no longer feel entirely right.",
        ]}
        listItems={privateSituations}
      />

      <EditorialSplit
        surface="white"
        eyebrow="The Difference"
        title="An Independent Perspective. A Conversation That Matters."
        quote="I help you make decisions you can stand behind."
        paragraphs={[
          "Important decisions rarely exist in isolation. They are shaped by professional relationships, competing responsibilities, personal histories, expectations, and consequences that cannot always be reduced to a neat list of options.",
          "I create a neutral, confidential space for clear thinking—a space where you can examine your situation without having to defend your position, perform certainty, or arrive with all the answers.",
          "But neutrality does not mean passive agreement. I bring independent judgment, professional experience, candid reflection, and the willingness to challenge what needs challenging. I listen closely, question assumptions, and offer perspectives that may be difficult to recognize from within your own circumstances.",
          "I will not make your decisions for you.",
        ]}
      />

      <PillarGrid
        surface="paper"
        eyebrow="Formats"
        title="Three Ways to Work Together"
        items={privateFormats}
        columns={3}
      />

      <EditorialSplit
        surface="white"
        eyebrow="Approach"
        title="How the Work Is Structured"
        paragraphs={[
          "My work is confidential, focused, and intentionally limited in capacity.",
          "We begin with the Private Advisory Diagnostic—a dedicated 90-minute strategic engagement, supported by preparation and a concise written synthesis. Together, we examine your situation, challenge assumptions, and identify meaningful options and next steps.",
          "For challenges requiring continued perspective, guidance, and accountability, Extended Private Advisory offers a tailored partnership over time.",
          "There is no automatic progression. Each engagement stands on its own, and any further collaboration is a deliberate choice.",
        ]}
        cta={{ label: "Inquire About Private Advisory", href: "/strategic-conversation", variant: "secondary" }}
      />

      <QuoteBand
        surface="paper"
        eyebrow="Next Step"
        quote="You don’t need to arrive with all the answers. You need to know which questions deserve your attention."
        subtext="Tell me briefly what you would like to examine. We can establish whether the Private Advisory Diagnostic is the right fit for your circumstances."
      />

      <MediaFeature
        surface="white"
        imagePosition="left"
        frame="arch"
        eyebrow="About"
        title="The Perspective Behind the Advisory"
        paragraphs={[
          "I am Dr. Zrinka K. Fidermuc Maler, a writer and executive advisor working at the intersection of leadership, strategic thinking, self-leadership, and meaningful change.",
          "My perspective draws on extensive experience across corporate environments, leadership development, education, and private advisory. I combine intellectual rigor, independent judgment, candid conversation, and a willingness to challenge conventional assumptions.",
          "I am also the author of The Hat and the Hill, a genre-bending nonfiction exploration of identity, change, and sovereignty in the second half of life.",
        ]}
        image={{
          src: "/images/portrait-red.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler",
          width: 968,
          height: 1024,
        }}
        cta={{ label: "Inquire About Private Advisory", href: "/strategic-conversation", variant: "secondary" }}
        secondaryCta={{ label: "Read Full Biography", href: "/about", variant: "link" }}
      />

      <ClosingCTA
        eyebrow="Private Advisory"
        title="Your next move begins with clarity."
        ctaLabel="Request a Strategic Conversation"
        ctaHref="/strategic-conversation"
      />
    </>
  );
}
