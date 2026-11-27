import { NextResponse } from "next/server";
import { requireFirestoreDb } from "@/lib/firebase";
import { apiErrorResponse, slugify } from "@/lib/api-helpers";
import { PostRepo } from "@/models/Post";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const db = requireFirestoreDb();
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q")?.trim();
    const posts = await PostRepo.list({ search: q }, db);
    return NextResponse.json({ posts });
  } catch (err) {
    return apiErrorResponse(err, "Failed to fetch posts");
  }
}

export async function POST(req: Request) {
  try {
    requireFirestoreDb();
    const body = await req.json().catch(() => null);
    const title = typeof body?.title === "string" ? body.title.trim() : "";
    if (!title) {
      return NextResponse.json({ error: "Title is required." }, { status: 400 });
    }

    const rawSlug = typeof body?.slug === "string" && body.slug.trim() ? body.slug : title;
    const baseSlug = slugify(rawSlug) || `entry-${Date.now()}`;
    let finalSlug = baseSlug;
    let suffix = 1;
    while (await PostRepo.existsBySlug(finalSlug)) {
      finalSlug = `${baseSlug}-${suffix++}`;
    }

    const post = await PostRepo.create({
      title,
      slug: finalSlug,
      language: body?.language === "DE" ? "DE" : "EN",
      excerpt: typeof body?.excerpt === "string" ? body.excerpt.trim() : "",
      content: typeof body?.content === "string" ? body.content : "",
      coverImage: typeof body?.coverImage === "string" ? body.coverImage.trim() : "",
      audioUrl: typeof body?.audioUrl === "string" ? body.audioUrl.trim() : "",
      published: Boolean(body?.published),
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch (err) {
    return apiErrorResponse(err, "Failed to create post");
  }
}
