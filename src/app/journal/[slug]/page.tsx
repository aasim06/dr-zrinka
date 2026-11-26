import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { journalPosts } from "@/data/journal";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = journalPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Essay Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function JournalArticlePage({ params }: { params: { slug: string } }) {
  const idx = journalPosts.findIndex((p) => p.slug === params.slug);
  if (idx === -1) notFound();
  const post = journalPosts[idx];
  const nextPost = journalPosts[(idx + 1) % journalPosts.length];

  return (
    <>
      <PageHero
        compact
        eyebrow={`The Journal · ${post.date} · ${post.lang} · ${post.readTime}`}
        title={post.title}
        secondaryCta={{ label: "← All Journal Essays", href: "/journal" }}
      />

      <article className="bg-paper py-[72px] md:py-[104px]">
        <Container className="max-w-[760px]">
          <div className="border border-line border-t-[3px] border-t-gold bg-white px-7 py-12 md:px-14 md:py-16">
            <div className="space-y-5 text-[16.5px] leading-[1.85] text-ink/90">
              {post.blocks.map((block, bIdx) => {
                if (block.kind === "heading") {
                  return (
                    <Heading
                      key={bIdx}
                      level={3}
                      className="pt-5 !text-[26px] text-ink md:!text-[30px]"
                    >
                      {block.text}
                    </Heading>
                  );
                }
                if (block.kind === "quote") {
                  return (
                    <blockquote
                      key={bIdx}
                      className="my-6 border-l-2 border-gold pl-6 font-serif text-2xl italic leading-[1.35] text-red"
                    >
                      {block.text}
                    </blockquote>
                  );
                }
                if (block.kind === "bullet") {
                  return (
                    <div key={bIdx} className="flex items-start gap-3 pl-2 text-[16px]">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                      <span>{block.text}</span>
                    </div>
                  );
                }
                return <p key={bIdx}>{block.text}</p>;
              })}
            </div>

            <div className="mt-14 border-t border-line pt-8">
              <Eyebrow tone="red" className="mb-3">Continue Reading</Eyebrow>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Button href={`/journal/${nextPost.slug}`} variant="link">
                  Next: {nextPost.title} →
                </Button>
                <Button href="/journal" variant="outline" size="sm">
                  Back to Archive
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 border border-line border-t-[3px] border-t-ink bg-white p-8 md:p-10">
            <Eyebrow tone="red" className="mb-2">Your Sunday Morning Read</Eyebrow>
            <Heading level={3} className="mb-3 !text-[26px]">Subscribe to The Journal</Heading>
            <NewsletterForm />
          </div>
        </Container>
      </article>

      <ClosingCTA />
    </>
  );
}
