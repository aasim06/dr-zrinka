import { NextResponse } from "next/server";
import { requireFirestoreDb } from "@/lib/firebase";
import { apiErrorResponse } from "@/lib/api-helpers";
import { ensureBaseSeedData } from "@/lib/seed";
import { PostRepo } from "@/models/Post";
import { EventRepo } from "@/models/Event";
import { InquiryRepo } from "@/models/Inquiry";
import { AiChatLogRepo } from "@/models/AiChatLog";
import { SubscriberRepo } from "@/models/Subscriber";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const db = requireFirestoreDb();
    await ensureBaseSeedData();

    const [posts, events, inquiries, totalConversations, subscribers] = await Promise.all([
      PostRepo.list(undefined, db),
      EventRepo.list(db),
      InquiryRepo.list(undefined, db),
      AiChatLogRepo.count(db),
      SubscriberRepo.list(100, db).catch(() => []),
    ]);

    return NextResponse.json({
      metrics: {
        publishedArticles: posts.filter((p) => p.published).length,
        totalArticles: posts.length,
        upcomingEvents: events.filter((e) => !e.isPast).length,
        unreadInquiries: inquiries.filter((i) => i.status === "New").length,
        totalConversations,
        googleSubscribers: subscribers.length,
      },
      recentInquiries: inquiries.slice(0, 5),
      recentSubscribers: subscribers.slice(0, 5),
    });
  } catch (err) {
    return apiErrorResponse(err, "Failed to load dashboard overview");
  }
}
