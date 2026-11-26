import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SubpageNav } from "@/components/sections/SubpageNav";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { MediaFeature } from "@/components/sections/MediaFeature";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { ComparisonColumns } from "@/components/sections/ComparisonColumns";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { advisorySubnav } from "@/data/advisory";
import { keynoteAudiences, keynoteFormats, keynoteSignals, keynoteTopics } from "@/data/events";

export const metadata: Metadata = {
  title: "Keynote Speaking",
  description:
    "Keynotes on leadership, physiology, identity, and authority under pressure—designed for executive teams, conferences, and business schools.",
};

export default function KeynotesPage() {
  return (
    <>
      <PageHero
        eyebrow="Speaking"
        title="Keynotes on Leadership & Authority Under Pressure"
        lead={[
          "Leadership today does not fail because strategy is missing. My keynote talks explore the intersection of physiology, identity, and leadership in moments where decisions carry real consequences.",
          "Drawing on the ideas behind The Hat and the Hill, these talks invite audiences to rethink how authority holds—or collapses—in modern organizations.",
        ]}
        primaryCta={{ label: "Request a Keynote", href: "/contact" }}
        secondaryCta={{ label: "Explore the Book", href: "/book" }}
        media={{
          src: "/images/keynote-stage.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler speaking on stage",
          width: 1024,
          height: 683,
          frame: "editorial",
          caption: "Executive responsibility, decision-making, and institutional pressure",
        }}
      />

      <SubpageNav items={advisorySubnav} />

      <EditorialSplit
        surface="paper"
        eyebrow="Where This Work Becomes Relevant"
        title="When things should be working—but aren’t"
        quote="Leadership fails not when strategy disappears, but when authority collapses under pressure."
        paragraphs={[
          "This work is designed for situations where the strategy is clear, the people are capable—and yet traction doesn’t follow. Not because of missing competence, but because something in the system prevents decisions from gaining traction.",
        ]}
        listItems={keynoteSignals.map((signal) => ({ text: signal }))}
      />

      <MediaFeature
        surface="white"
        imagePosition="left"
        frame="editorial"
        eyebrow="Keynote Description"
        title="A sharper perspective on leadership under pressure"
        paragraphs={[
          "In this keynote, Dr. Zrinka K. Fidermuc Maler explores how physiology, identity, and responsibility shape decision-making in complex environments.",
          "Drawing on the ideas behind The Hat and the Hill and the Sovereign Leadership Framework, she examines why leadership fractures when expectations multiply and organizations become more complex.",
          "Rather than offering formulas or motivational rhetoric, the talk focuses on the deeper structures that determine whether leaders maintain clarity and authority when pressure rises.",
        ]}
        quote="This is where decisions either hold or collapse."
        image={{
          src: "/images/events-reading.jpg",
          alt: "Dr. Zrinka speaking to an auditorium audience",
          width: 1024,
          height: 683,
        }}
        cta={{ label: "Request a Keynote", href: "/contact", variant: "secondary" }}
      />

      <PillarGrid
        surface="paper"
        eyebrow="Keynote Themes"
        title="Keynote Topics"
        intro="Each keynote can be tailored to the audience and context of the host organization."
        items={keynoteTopics}
        columns={2}
      />

      <ComparisonColumns
        surface="white"
        left={{
          eyebrow: "Ideal Audiences",
          title: "Audiences",
          items: keynoteAudiences,
        }}
        right={{
          eyebrow: "Speaking Formats",
          title: "Formats",
          items: keynoteFormats,
        }}
      />

      <ClosingCTA
        eyebrow="Invitation"
        title="Invite Dr. Zrinka K. Fidermuc Maler"
        description="To inquire about keynote availability for your organization, leadership program, or conference:"
        ctaLabel="Request a Keynote"
        ctaHref="/contact"
        secondaryLabel="See Live Events"
        secondaryHref="/events"
      />
    </>
  );
}
