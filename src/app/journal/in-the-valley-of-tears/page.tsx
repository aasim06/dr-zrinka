import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { JournalUnlock } from "@/components/forms/JournalUnlock";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Journal — In the Valley of Tears",
  description:
    "Subscriber edition of The Journal by Dr. Zrinka K. Fidermuc Maler: In the Valley of Tears.",
};

export default function ValleyOfTearsPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="The Journal · Subscriber Entry"
        title="In the Valley of Tears"
        lead="This entry is reserved for subscribers of The Journal. Enter your subscriber password below or subscribe to receive immediate access."
        secondaryCta={{ label: "Back to The Journal", href: "/journal" }}
      />

      <section className="bg-paper py-[72px] md:py-[104px]">
        <Container className="max-w-[960px]">
          <JournalUnlock />
        </Container>
      </section>

      <ClosingCTA />
    </>
  );
}
