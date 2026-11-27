import { getFirestoreDb } from "@/lib/firebase";
import { AiKnowledgeRepo } from "@/models/AiKnowledge";
import { SiteSettingsRepo } from "@/models/SiteSettings";
import { PostRepo } from "@/models/Post";
import { EventRepo } from "@/models/Event";
import { journalPosts } from "@/data/journal";
import { allEvents } from "@/data/events";

export const DEFAULT_INSTITUTIONS = [
  { name: "Vesta Immobilien", logoUrl: "" },
  { name: "Management-Institut Dr. A. Kitzmann", logoUrl: "" },
  { name: "FOM Hochschule", logoUrl: "" },
  { name: "Global Communication Experts", logoUrl: "" },
  { name: "Europäische Zentralbank", logoUrl: "" },
  { name: "Spalteholz Hotelkompetenz", logoUrl: "" },
];

export const DEFAULT_KNOWLEDGE_BLOCKS = [
  {
    topic: "Core Bio & Positioning",
    content:
      "Dr. Zrinka K. Fidermuc Maler is an executive and organizational advisor, author, and keynote speaker based in Frankfurt am Main and Zagreb, working internationally in English and German. With a PhD in politics and over two decades across finance (Zagreb), science policy (DLR-PT Bonn), and executive development (Management-Institut Kitzmann), she specializes in structural clarity, leadership authority under pressure, and physiological intelligence.",
    active: true,
  },
  {
    topic: "Private Advisory Philosophy",
    content:
      "Private Advisory is designed for women in midlife and senior individuals at consequential turning points. We begin with a confidential 90-minute Private Advisory Diagnostic—including preparation and a concise written synthesis—followed optionally by Extended Private Advisory. We prioritize clarity over motivation, precision over positivity, and structural thinking over comfort coaching.",
    active: true,
  },
  {
    topic: "Organizational & Executive Advisory",
    content:
      "For CEOs, founders, executive boards, and institutions navigating operational pressure, rapid organizational complexity, unclear responsibility structures, or stalled initiatives. Engagements typically open with a Focused Six-Week Leadership & Organizational Diagnostic mapping decision authority in practice, responsibility friction, leadership communication, and targeted structural adjustments.",
    active: true,
  },
  {
    topic: "Book: The Hat & The Hill",
    content:
      "The Hat and the Hill: She Hit 50, Took Testosterone, and Lit the Fuse (Sovereign Red Hat Press). Part memoir, part investigation into power, hormones, ambition, identity, and sovereignty in midlife. Available as a personally signed copy (€29 + shipping via buch@dr-zrinka.com) and worldwide in paperback and Kindle eBook on Amazon. Readers can preview the opening chapter ('Before the climb, in the valley of tears') on the website.",
    active: true,
  },
  {
    topic: "Keynote Topics & Speaking",
    content:
      "Keynotes explore leadership, physiology, identity, and authority under pressure: (1) Leadership Under Pressure, (2) Leadership, Power & Authorship, (3) Authority in Complex Organizations, (4) Sovereign Leadership. Formats include conference keynotes, leadership program sessions, and moderated dialogues for executive teams, business schools, and medical/professional organizations.",
    active: true,
  },
];

export async function ensureBaseSeedData(): Promise<void> {
  const db = getFirestoreDb();
  if (!db) return;

  const existingKnowledge = await AiKnowledgeRepo.list(false, db);
  if (existingKnowledge.length === 0) {
    for (const block of DEFAULT_KNOWLEDGE_BLOCKS) {
      await AiKnowledgeRepo.create(block);
    }
  }

  const settings = await SiteSettingsRepo.get(db);
  if (!settings) {
    await SiteSettingsRepo.upsert(
      {
        institutionLogos: DEFAULT_INSTITUTIONS,
        speakerKitPdfUrl: "",
        bookingCalendarUrl: "/strategic-conversation",
        impressumHtml: "",
        datenschutzHtml: "",
      },
      db
    );
  }
}

export async function importStaticContentToDB(): Promise<{ postsImported: number; eventsImported: number }> {
  await ensureBaseSeedData();

  let postsImported = 0;
  for (const jp of journalPosts) {
    const exists = await PostRepo.existsBySlug(jp.slug);
    if (!exists) {
      const htmlContent = jp.blocks
        .map((b) => {
          if (b.kind === "heading") return `<h3>${b.text}</h3>`;
          if (b.kind === "quote") return `<blockquote>${b.text}</blockquote>`;
          if (b.kind === "bullet") return `<ul><li>${b.text}</li></ul>`;
          return `<p>${b.text}</p>`;
        })
        .join("\n");

      await PostRepo.create({
        title: jp.title,
        slug: jp.slug,
        excerpt: jp.excerpt,
        content: htmlContent,
        coverImage: "",
        audioUrl: "",
        published: true,
        publishedAt: new Date(jp.date),
      });
      postsImported++;
    }
  }

  let eventsImported = 0;
  const existingEvents = await EventRepo.list();
  if (existingEvents.length === 0) {
    for (const ev of allEvents) {
      const parsed = Date.parse(ev.date.replace(/–\d+/, ""));
      await EventRepo.create({
        title: ev.title,
        date: Number.isNaN(parsed) ? new Date() : new Date(parsed),
        location: ev.location,
        description: ev.description.join("\n\n"),
        externalLink: ev.externalRegisterUrl || `/events/${ev.slug}`,
        galleryImages: ev.banner ? [ev.banner] : [],
        isPast: ev.status === "past",
      });
      eventsImported++;
    }
  }

  return { postsImported, eventsImported };
}
