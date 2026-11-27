import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalArticleView } from "@/components/views/journal-views";
import { journalPosts } from "@/data/journal";
import { getPublicPostBySlug } from "@/lib/public-data";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPublicPostBySlug(params.slug);
  if (!post) return { title: "Essay Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function JournalArticlePage({ params }: { params: { slug: string } }) {
  const post = await getPublicPostBySlug(params.slug);
  if (!post) notFound();

  const idx = journalPosts.findIndex((p) => p.slug === params.slug);
  const nextRaw = journalPosts[(idx >= 0 ? idx + 1 : 0) % journalPosts.length];

  return (
    <JournalArticleView
      post={post}
      nextPost={{ slug: nextRaw.slug, title: nextRaw.title }}
    />
  );
}
