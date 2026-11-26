import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SubpageNav } from "@/components/sections/SubpageNav";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { TestimonialGrid } from "@/components/sections/TestimonialGrid";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { MediaFeature } from "@/components/sections/MediaFeature";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import {
  bookSubnav,
  insideBookThemes,
  orderOptions,
  pressItems,
  readerReviews,
} from "@/data/book";

export const metadata: Metadata = {
  title: "The Hat & The Hill",
  description:
    "The Hat and the Hill. She Hit 50, Took Testosterone, and Lit the Fuse — power, hormones, identity, and the moment a woman stops asking for permission.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Power, hormones, identity, and the moment a woman stops asking for permission"
        title="The Hat and the Hill. She Hit 50, Took Testosterone, and Lit the Fuse"
        lead={[
          "What happens when a woman reaches midlife and discovers that the life she has built no longer tells the whole story? In The Hat and the Hill, Dr. Zrinka K. Fidermuc Maler takes readers on an unpredictable journey through hormones, ambition, relationships, identity, and the peculiar madness of modern life.",
          "Part memoir, part investigation, and part unapologetic conversation about what changes after 50, it moves between science and personal experience, cultural observations and moments of glorious absurdity. Sharp, funny, intellectually curious—and not particularly interested in telling women to age gracefully.",
        ]}
        primaryCta={{
          label: "Order signed copy · €29",
          href: "mailto:buch@dr-zrinka.com?subject=Signed%20Copy%20Order%20%E2%80%94%20The%20Hat%20and%20the%20Hill",
        }}
        secondaryCta={{ label: "Read the Opening Chapter", href: "/book/sample-chapter" }}
        media={{
          src: "/images/book-cover-3d.png",
          alt: "The Hat and the Hill by Dr. Zrinka K. Fidermuc Maler — 3D Book Cover",
          width: 961,
          height: 1536,
          frame: "book",
          caption: "Sovereign Red Hat Press · Frankfurt/M—Zagreb",
        }}
      />

      <SubpageNav items={bookSubnav} />

      <PillarGrid
        surface="paper"
        eyebrow="Acquire the Book"
        title="Order The Hat and the Hill"
        intro="Available directly as a personally signed edition from Sovereign Red Hat Press, or worldwide in paperback and Kindle eBook through Amazon."
        items={orderOptions}
        columns={2}
      />

      <EditorialSplit
        surface="white"
        eyebrow="From the Book"
        title="This is not a polite little book about aging gracefully"
        quote="It is sharp, direct, occasionally outrageous, and frequently funny."
        paragraphs={[
          "Curious what happens when a woman stops following the script? Start with the opening chapter. You’ll get a taste of the humour, the honesty, and the unexpected turns that make The Hat and the Hill anything but a conventional midlife book.",
          "Not because the subjects are trivial, but because humour has a way of revealing truths that solemn explanations sometimes miss. You may find yourself laughing at something you expected to take seriously. That’s entirely intentional.",
        ]}
        cta={{ label: "→ Read the Opening Chapter", href: "/book/sample-chapter", variant: "secondary" }}
      />

      <TestimonialGrid
        surface="paper"
        eyebrow="Resonance"
        title="What readers say"
        items={readerReviews}
      />

      <QuoteBand
        surface="ink"
        eyebrow="The Turning Point"
        quote="It begins when what carried you stops working."
        subtext="There comes a moment when the familiar answers no longer fit. When the roles, expectations, and habits that shaped your life begin to feel too small. That moment isn’t necessarily a crisis. Sometimes, it’s the beginning of something far more interesting."
      />

      <MediaFeature
        surface="white"
        imagePosition="left"
        frame="editorial"
        eyebrow="Beyond the Pages"
        title="When a Book Becomes a Conversation"
        paragraphs={[
          "An evening of laughter, unexpected questions, and wonderfully candid conversations at the Zagreb launch of The Hat and the Hill, October 2026.",
          "Across Frankfurt, Zagreb, and international salons, readers gather for open discussions about hormones, ambition, leadership, and refusing to shrink in midlife.",
        ]}
        image={{
          src: "/images/book-zagreb-launch.jpg",
          alt: "Zagreb launch evening of The Hat and the Hill",
          width: 1536,
          height: 1024,
          caption: "Zagreb Launch Evening · October 2026",
        }}
        cta={{ label: "See Live Author Events", href: "/events", variant: "secondary" }}
      />

      <PillarGrid
        surface="paper"
        eyebrow="Inside the Work"
        title="Inside the Book"
        items={insideBookThemes}
        columns={3}
      />

      <EditorialSplit
        surface="white"
        eyebrow="Why This Book Matters Now"
        title="Because women have changed. The conversation hasn’t quite caught up."
        quote="Not another instruction manual for becoming a better version of yourself. A book about finally having the nerve to be yourself."
        paragraphs={[
          "We live in an age obsessed with longevity, wellness, looking younger, and optimizing practically everything. Yet remarkably little is said about what happens when a woman reaches midlife and begins questioning the rules she’s spent decades following.",
          "What about desire, ambition, relationships, hormones, disappointment, curiosity, and the freedom to change your mind? The Hat and the Hill brings these conversations into the open—with science, personal stories, cultural observations, and a generous dose of humour.",
        ]}
      >
        <div className="mt-8 border border-line border-t-[3px] border-t-gold bg-paper p-7">
          <p className="mb-1 text-xs font-medium tracking-[0.14em] text-red uppercase">Join the Readers</p>
          <p className="mb-4 font-serif text-2xl font-medium text-ink">
            Receive reading notes, dispatches &amp; upcoming launch invitations
          </p>
          <NewsletterForm />
        </div>
      </EditorialSplit>

      <MediaFeature
        surface="paper"
        imagePosition="right"
        frame="editorial"
        eyebrow="About the Author"
        title="A PhD, a yoga mat, a red hat—and a healthy disrespect for the rules of aging gracefully."
        paragraphs={[
          "Dr. Zrinka K. Fidermuc Maler is a writer, international relations scholar, and advisor who has spent much of her professional life exploring how people think, behave, change, and occasionally make spectacularly questionable decisions.",
          "With a background spanning politics, literature, movement, and human development, she has never been particularly interested in staying inside one discipline—or taking herself too seriously.",
          "The Hat and the Hill grew out of her own adventures in midlife, when hormones, ambition, relationships, and a lifetime of accumulated wisdom collided with the rather inconvenient discovery that there was still plenty left to figure out. She writes with curiosity, self-irony, and the firm belief that some of life’s most important conversations are considerably better with a sense of humour. And preferably a red hat.",
        ]}
        image={{
          src: "/images/author-stand.jpg",
          alt: "Dr. Zrinka K. Fidermuc Maler presenting her book",
          width: 800,
          height: 1200,
        }}
        cta={{ label: "About Dr. Zrinka", href: "/about", variant: "outline" }}
      />

      <PillarGrid
        surface="white"
        eyebrow="In the Press"
        title="Conversations beyond its pages"
        intro="From the changing experience of midlife to the roles, expectations, and assumptions women begin to question, the book is finding its way into the public conversation. Explore selected interviews and media coverage."
        items={pressItems}
        columns={2}
      />

      <ClosingCTA
        eyebrow="The Hat and the Hill"
        title="Ready to open the conversation?"
        description="Read the opening chapter online or order your personally signed copy directly from Sovereign Red Hat Press."
        ctaLabel="Read the Opening Chapter"
        ctaHref="/book/sample-chapter"
        secondaryLabel="Order on Amazon"
        secondaryHref="https://amzn.eu/d/06AwoV6U"
      />
    </>
  );
}
