import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Hi, I’m Dr. Zrinka. Executive Advisor, Writer, Speaker — explore The Hat and the Hill, Executive Advisory, The Journal, Events, Keynotes, and LinkedIn.",
};

const connectItems = [
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

export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Executive Advisor · Writer · Speaker"
        title="Hi, I’m Dr. Zrinka."
        lead={[
          "I work with people at the point where the old operating system stops working.",
          "Sometimes that is an executive decision. Sometimes it is leadership under pressure. Sometimes it is midlife, identity, ambition, hormones, or the uncomfortable realization that you have outgrown the room you are standing in.",
        ]}
        primaryCta={{ label: "Start a Strategic Conversation", href: "/strategic-conversation" }}
        secondaryCta={{ label: "Explore Private Advisory", href: "/private-advisory" }}
        media={{
          src: "/images/portrait-red.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler",
          width: 968,
          height: 1024,
          frame: "arch",
          caption: "Author of The Hat and the Hill · Frankfurt · Zagreb · International",
        }}
      />

      <PillarGrid
        surface="paper"
        eyebrow="Directory"
        title="Explore & Connect"
        items={connectItems}
        columns={3}
      />

      <EditorialSplit
        surface="white"
        eyebrow="Philosophy"
        title="Asking the questions that make it harder to keep pretending nothing needs to change."
        quote="I’m the author of The Hat and the Hill."
        paragraphs={[
          "I advise, write, speak, and work directly with CEOs, founders, boards, and women in midlife across Frankfurt, Zagreb, and internationally.",
        ]}
        cta={{ label: "About Dr. Zrinka", href: "/about", variant: "outline" }}
      />

      <ClosingCTA />
    </>
  );
}
