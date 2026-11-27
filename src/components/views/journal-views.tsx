"use client";
import { PageHero } from "@/components/sections/PageHero";
import { EditorialSplit } from "@/components/sections/EditorialSplit";
import { JournalArchive } from "@/components/sections/JournalArchive";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import { JournalUnlock } from "@/components/forms/JournalUnlock";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/components/providers/LocaleProvider";
import { getPagesCopy } from "@/data/translations-pages";
import { getFeaturedJournal, type JournalPost } from "@/data/journal";
import type { PublicPostSummary } from "@/lib/public-data";
import { localizePath } from "@/lib/i18n";

export function JournalView({ posts }: { posts: PublicPostSummary[] }) {
  const { locale } = useLocale();
  const c = getPagesCopy(locale).journal;
  const featured = getFeaturedJournal(locale);

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        lead={c.lead}
        primaryCta={{ label: c.cta1, href: "/journal/in-the-valley-of-tears" }}
        secondaryCta={{ label: c.cta2, href: "/book/sample-chapter" }}
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
        eyebrow={featured.eyebrow}
        title={featured.title}
        quote={c.featuredQuote}
        paragraphs={featured.lines}
      >
        <div className="flex flex-wrap items-center gap-4 pt-3">
          <Button href={localizePath("/journal/in-the-valley-of-tears", locale)} variant="secondary">
            {c.readFullBtn}
          </Button>
          <Button href={localizePath("/book/sample-chapter", locale)} variant="link">
            {c.previewBookBtn}
          </Button>
        </div>
      </EditorialSplit>

      <JournalArchive posts={posts} />

      <section className="bg-paper py-[72px] md:py-[96px]">
        <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow tone="red" className="mb-4">{c.subscribeEyebrow}</Eyebrow>
            <Heading level={2}>{c.subscribeTitle}</Heading>
            <p className="mt-4 text-muted">{c.subscribeBody}</p>
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

export type PublicPostFull = {
  title: string;
  date: string;
  lang: "EN" | "DE";
  readTime: string;
  excerpt: string;
  coverImage?: string;
  audioUrl?: string;
  htmlContent?: string;
  blocks?: JournalPost["blocks"];
};

export function JournalArticleView({
  post,
  nextPost,
}: {
  post: PublicPostFull;
  nextPost: { slug: string; title: string };
}) {
  const { locale } = useLocale();
  const isDe = locale === "de";
  const journalCopy = getPagesCopy(locale).journal;

  return (
    <>
      <PageHero
        compact
        eyebrow={`The Journal · ${post.date} · ${post.lang} · ${post.readTime}`}
        title={post.title}
        secondaryCta={{ label: isDe ? "← Alle Journal-Beiträge" : "← All Journal Essays", href: "/journal" }}
      />

      <article className="bg-paper py-[72px] md:py-[104px]">
        <Container className="max-w-[760px]">
          <div className="border border-line border-t-[3px] border-t-gold bg-white px-7 py-12 md:px-14 md:py-16">
            {post.coverImage && (
              <img src={post.coverImage} alt={post.title} className="mb-8 aspect-[16/9] w-full object-cover" />
            )}

            {post.audioUrl && (
              <div className="mb-8 border border-line bg-paper p-4">
                <span className="mb-2 block text-[11px] font-medium tracking-[0.12em] text-red uppercase">
                  {isDe ? "Audio-Ausgabe" : "Audio Edition"}
                </span>
                <audio controls src={post.audioUrl} className="w-full" />
              </div>
            )}

            {post.htmlContent ? (
              <div
                className="space-y-5 text-[16.5px] leading-[1.85] text-ink/90 [&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-gold [&_blockquote]:pl-6 [&_blockquote]:font-serif [&_blockquote]:text-2xl [&_blockquote]:italic [&_blockquote]:text-red [&_h3]:pt-5 [&_h3]:font-serif [&_h3]:text-[28px] [&_h3]:text-ink [&_ul]:list-disc [&_ul]:pl-6"
                dangerouslySetInnerHTML={{
                  __html: post.htmlContent.includes("<")
                    ? post.htmlContent
                    : post.htmlContent
                        .split(/\n\n+/)
                        .map((p) => `<p>${p}</p>`)
                        .join(""),
                }}
              />
            ) : (
              <div className="space-y-5 text-[16.5px] leading-[1.85] text-ink/90">
                {(post.blocks || []).map((block, bIdx) => {
                  if (block.kind === "heading") {
                    return (
                      <Heading key={bIdx} level={3} className="pt-5 !text-[26px] text-ink md:!text-[30px]">
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
            )}

            <div className="mt-14 border-t border-line pt-8">
              <Eyebrow tone="red" className="mb-3">{isDe ? "Weiterlesen" : "Continue Reading"}</Eyebrow>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <Button href={localizePath(`/journal/${nextPost.slug}`, locale)} variant="link">
                  {isDe ? "Nächster Beitrag:" : "Next:"} {nextPost.title} →
                </Button>
                <Button href={localizePath("/journal", locale)} variant="outline" size="sm">
                  {isDe ? "Zurück zum Archiv" : "Back to Archive"}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 border border-line border-t-[3px] border-t-ink bg-white p-8 md:p-10">
            <Eyebrow tone="red" className="mb-2">{journalCopy.subscribeEyebrow}</Eyebrow>
            <Heading level={3} className="mb-3 !text-[26px]">{journalCopy.subscribeTitle}</Heading>
            <NewsletterForm />
          </div>
        </Container>
      </article>

      <ClosingCTA />
    </>
  );
}

export function ValleyOfTearsView() {
  const { locale } = useLocale();
  const isDe = locale === "de";

  return (
    <>
      <PageHero
        compact
        eyebrow={isDe ? "The Journal · Abonnenten-Beitrag" : "The Journal · Subscriber Entry"}
        title="In the Valley of Tears"
        lead={
          isDe
            ? "Dieser Beitrag ist für Abonnentinnen und Abonnenten von The Journal reserviert. Melden Sie sich mit Google an oder geben Sie Ihren Zugangscode ein."
            : "This entry is reserved for subscribers of The Journal. Sign in with Google or enter your subscriber password below to unlock."
        }
        secondaryCta={{ label: isDe ? "Zurück zu The Journal" : "Back to The Journal", href: "/journal" }}
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
