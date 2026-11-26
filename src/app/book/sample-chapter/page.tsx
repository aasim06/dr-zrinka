import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SubpageNav } from "@/components/sections/SubpageNav";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { bookSubnav, sampleChapterParagraphs } from "@/data/book";

export const metadata: Metadata = {
  title: "Read a Sample Chapter — The Hat & The Hill",
  description:
    "Sample reading from The Hat and the Hill: Before the climb, in the valley of tears.",
};

export default function SampleChapterPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Book Preview · Sample Reading"
        title="The Hat and the Hill — Before the climb, in the valley of tears"
        lead="Read the opening preview from The Hat and the Hill by Dr. Zrinka K. Fidermuc Maler."
        primaryCta={{
          label: "Order signed copy · €29",
          href: "mailto:buch@dr-zrinka.com?subject=Signed%20Copy%20Order%20%E2%80%94%20The%20Hat%20and%20the%20Hill",
        }}
        secondaryCta={{ label: "Back to Book Overview", href: "/book" }}
      />

      <SubpageNav items={bookSubnav} />

      <article className="bg-paper py-[72px] md:py-[104px]">
        <Container className="max-w-[760px]">
          <div className="border border-line border-t-[3px] border-t-gold bg-white px-7 py-12 md:px-14 md:py-16">
            <Eyebrow tone="red" className="mb-4">Opening Excerpt</Eyebrow>
            <Heading level={2} className="!text-[clamp(30px,3.8vw,44px)]">
              Before the climb, in the valley of tears
            </Heading>

            <blockquote className="my-8 border-l-2 border-gold pl-6 font-serif text-2xl italic leading-[1.35] text-red md:text-[28px]">
              “{sampleChapterParagraphs[0]}”
            </blockquote>

            <div className="space-y-5 text-[16.5px] leading-[1.85] text-ink/90">
              {sampleChapterParagraphs.slice(1).map((para, idx) => (
                <p
                  key={idx}
                  className={
                    para.startsWith("“Hell no") || para.startsWith("That fever")
                      ? "font-serif text-xl font-medium italic text-red"
                      : undefined
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-line pt-8">
              <Button
                href="mailto:buch@dr-zrinka.com?subject=Signed%20Copy%20Order%20%E2%80%94%20The%20Hat%20and%20the%20Hill"
                variant="secondary"
              >
                → I Want the Book (Signed Copy · €29)
              </Button>
              <Button href="https://amzn.eu/d/06AwoV6U" variant="outline">
                Order on Amazon
              </Button>
            </div>
          </div>
        </Container>
      </article>

      <ClosingCTA
        eyebrow="The Hat and the Hill"
        title="Continue reading beyond the preview."
        ctaLabel="Explore the Full Book"
        ctaHref="/book"
        secondaryLabel="Read The Journal"
        secondaryHref="/journal"
      />
    </>
  );
}
