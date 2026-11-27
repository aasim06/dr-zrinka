import { getFirestoreDb } from "@/lib/firebase";
import { PostRepo } from "@/models/Post";
import { EventRepo } from "@/models/Event";
import { SiteSettingsRepo } from "@/models/SiteSettings";
import { AiKnowledgeRepo } from "@/models/AiKnowledge";
import { DEFAULT_INSTITUTIONS, DEFAULT_KNOWLEDGE_BLOCKS } from "@/lib/seed";
import { journalPosts, type JournalPost } from "@/data/journal";
import { upcomingEvents, pastEvents, type EventItem } from "@/data/events";

export async function getPublicSiteSettings() {
  const defaults = {
    institutionLogos: DEFAULT_INSTITUTIONS,
    speakerKitPdfUrl: "",
    bookingCalendarUrl: "/strategic-conversation",
    impressumHtml: "",
    datenschutzHtml: "",
  };

  try {
    const db = getFirestoreDb();
    if (!db) return defaults;
    const doc = await SiteSettingsRepo.get(db);
    if (!doc) return defaults;
    return {
      institutionLogos: doc.institutionLogos?.length ? doc.institutionLogos : defaults.institutionLogos,
      speakerKitPdfUrl: doc.speakerKitPdfUrl || "",
      bookingCalendarUrl: doc.bookingCalendarUrl || "/strategic-conversation",
      impressumHtml: doc.impressumHtml || "",
      datenschutzHtml: doc.datenschutzHtml || "",
    };
  } catch {
    return defaults;
  }
}

export async function getActiveAiKnowledge(): Promise<{ topic: string; content: string }[]> {
  try {
    const db = getFirestoreDb();
    if (!db) {
      return DEFAULT_KNOWLEDGE_BLOCKS.map(({ topic, content }) => ({ topic, content }));
    }
    const docs = await AiKnowledgeRepo.list(true, db);
    if (!docs.length) {
      return DEFAULT_KNOWLEDGE_BLOCKS.map(({ topic, content }) => ({ topic, content }));
    }
    return docs.map((d) => ({ topic: d.topic, content: d.content }));
  } catch {
    return DEFAULT_KNOWLEDGE_BLOCKS.map(({ topic, content }) => ({ topic, content }));
  }
}

export type PublicPostSummary = {
  slug: string;
  title: string;
  date: string;
  lang: "EN" | "DE";
  readTime: string;
  excerpt: string;
  coverImage?: string;
  audioUrl?: string;
  source: "db" | "static";
};

export async function getPublicJournalPosts(locale: "en" | "de" = "en"): Promise<PublicPostSummary[]> {
  const formatRead = (mins: number) => (locale === "de" ? `${mins} Min. Lesezeit` : `${mins} min read`);
  const staticList: PublicPostSummary[] = journalPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    lang: p.lang,
    readTime: locale === "de" ? p.readTime.replace(/\bmin read\b/i, "Min. Lesezeit") : p.readTime,
    excerpt: p.excerpt,
    source: "static",
  }));

  try {
    const db = getFirestoreDb();
    if (!db) return staticList;
    const docs = await PostRepo.list({ publishedOnly: true }, db);
    if (!docs.length) return staticList;

    const dbSlugs = new Set(docs.map((d) => d.slug));
    const dbList: PublicPostSummary[] = docs.map((d) => ({
      slug: d.slug,
      title: d.title,
      date: (d.publishedAt || d.createdAt || new Date().toISOString()).slice(0, 10),
      lang: d.language === "DE" ? "DE" : "EN",
      readTime: formatRead(d.readingTime || 2),
      excerpt: d.excerpt || "",
      coverImage: d.coverImage || undefined,
      audioUrl: d.audioUrl || undefined,
      source: "db",
    }));

    return [...dbList, ...staticList.filter((s) => !dbSlugs.has(s.slug))];
  } catch {
    return staticList;
  }
}

export async function getPublicPostBySlug(slug: string): Promise<{
  title: string;
  date: string;
  lang: "EN" | "DE";
  readTime: string;
  excerpt: string;
  coverImage?: string;
  audioUrl?: string;
  htmlContent?: string;
  blocks?: JournalPost["blocks"];
} | null> {
  try {
    const db = getFirestoreDb();
    if (db) {
      const doc = await PostRepo.getPublishedBySlug(slug, db);
      if (doc) {
        return {
          title: doc.title,
          date: (doc.publishedAt || doc.createdAt || new Date().toISOString()).slice(0, 10),
          lang: doc.language === "DE" ? "DE" : "EN",
          readTime: `${doc.readingTime || 2} min read`,
          excerpt: doc.excerpt || "",
          coverImage: doc.coverImage || undefined,
          audioUrl: doc.audioUrl || undefined,
          htmlContent: doc.content || "",
        };
      }
    }
  } catch {
    // Fallback to static archive
  }

  const staticPost = journalPosts.find((p) => p.slug === slug);
  if (!staticPost) return null;
  return {
    title: staticPost.title,
    date: staticPost.date,
    lang: staticPost.lang,
    readTime: staticPost.readTime,
    excerpt: staticPost.excerpt,
    blocks: staticPost.blocks,
  };
}

export async function getPublicEvents(): Promise<{ upcoming: EventItem[]; past: EventItem[] }> {
  try {
    const db = getFirestoreDb();
    if (!db) return { upcoming: upcomingEvents, past: pastEvents };
    const docs = await EventRepo.list(db);
    if (!docs.length) return { upcoming: upcomingEvents, past: pastEvents };

    const mapDoc = (d: (typeof docs)[number]): EventItem => ({
      slug: d._id,
      date: new Date(d.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      location: d.location || "International",
      language: "EN / DE",
      title: d.title,
      description: (d.description || "").split(/\n\n+/).filter(Boolean),
      status: d.isPast ? "past" : "upcoming",
      externalRegisterUrl: d.externalLink || undefined,
      banner: d.galleryImages?.[0] || undefined,
    });

    const dbUpcoming = docs.filter((d) => !d.isPast).map(mapDoc);
    const dbPast = docs.filter((d) => d.isPast).map(mapDoc);
    return {
      upcoming: [...dbUpcoming, ...upcomingEvents],
      past: [...dbPast, ...pastEvents],
    };
  } catch {
    return { upcoming: upcomingEvents, past: pastEvents };
  }
}
