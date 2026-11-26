import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { JournalArchive } from "@/components/sections/JournalArchive";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { featuredJournal, journalPosts } from "@/data/journal";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Essays and field notes on strategic narrative, sovereign leadership, and the art of holding ground in high-stakes positions.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Essays and field notes on strategic narrative, sovereign leadership, and holding ground."
        lead="Your Sunday morning read—reflections on leadership under pressure, physiology, midlife sovereignty, and decisions that hold."
        primaryCta={{ label: "Read the Featured Entry", href: "/journal/in-the-valley-of-tears" }}
        secondaryCta={{ label: "Read Book Excerpt", href: "/book/sample-chapter" }}
        media={{
          src: "/images/red-hat-silhouette.png",
          alt: "Dr. Zrinka Red Hat Emblem",
          width: 300,
          height: 300,
          frame: "emblem",
          caption: "The Journal · Frankfurt/M · Zagreb",
        }}
      />

      <EditorialSplit
        surface="paper"
        eyebrow={featuredJournal.eyebrow}
        title={featuredJournal.title}
        quote="You know pretty well that something is coming to an end. You just don’t know what comes next."
        paragraphs={featuredJournal.lines}
      >
        <div className="flex flex-wrap items-center gap-4 pt-3">
          <Button href="/journal/in-the-valley-of-tears" variant="secondary">
            → Read the Full Journal Entry
          </Button>
          <Button href="/book/sample-chapter" variant="link">
            Preview in The Hat &amp; The Hill
          </Button>
        </div>
      </EditorialSplit>

      <JournalArchive posts={journalPosts} />

      <section className="bg-paper py-[72px] md:py-[96px]">
        <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow tone="red" className="mb-4">Your Sunday Morning Read</Eyebrow>
            <Heading level={2}>Subscribe to The Journal</Heading>
            <p className="mt-4 text-muted">
              Receive new essays, book notes, and invitations to intimate readings and strategic conversations.
              Double opt-in, no noise.
            </p>
          </div>
          <div className="border border-line border-t-[3px] border-t-gold bg-white p-8">
            <NewsletterForm />
          </div>
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
