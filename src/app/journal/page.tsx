import type { Metadata } from "next";
import { JournalView } from "@/components/views/journal-views";
import { getPublicJournalPosts } from "@/lib/public-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Essays and field notes on strategic narrative, sovereign leadership, and the art of holding ground in high-stakes positions.",
};

export default async function JournalPage() {
  const posts = await getPublicJournalPosts();
  return <JournalView posts={posts} />;
}
