import { NextResponse } from "next/server";
import { requireFirestoreDb } from "@/lib/firebase";
import { apiErrorResponse, isValidDocId, slugify } from "@/lib/api-helpers";
import { PostRepo } from "@/models/Post";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  try {
    requireFirestoreDb();
    if (!isValidDocId(params.id)) {
      return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
    }
    const post = await PostRepo.getById(params.id);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ post });
  } catch (err) {
    return apiErrorResponse(err, "Failed to fetch post");
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    requireFirestoreDb();
    if (!isValidDocId(params.id)) {
      return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
    }

    const body = await req.json().catch(() => null);
    const patch: Parameters<typeof PostRepo.update>[1] = {};

    if (typeof body?.title === "string" && body.title.trim()) {
      patch.title = body.title.trim();
    }
    if (typeof body?.slug === "string" && body.slug.trim()) {
      const nextSlug = slugify(body.slug);
      if (nextSlug) {
        const collision = await PostRepo.existsBySlug(nextSlug, params.id);
        if (collision) {
          return NextResponse.json({ error: "Slug already in use" }, { status: 409 });
        }
        patch.slug = nextSlug;
      }
    }
    if (body?.language === "EN" || body?.language === "DE") patch.language = body.language;
    if (typeof body?.excerpt === "string") patch.excerpt = body.excerpt.trim();
    if (typeof body?.content === "string") patch.content = body.content;
    if (typeof body?.coverImage === "string") patch.coverImage = body.coverImage.trim();
    if (typeof body?.audioUrl === "string") patch.audioUrl = body.audioUrl.trim();
    if (typeof body?.published === "boolean") patch.published = body.published;

    const post = await PostRepo.update(params.id, patch);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ post });
  } catch (err) {
    return apiErrorResponse(err, "Failed to update post");
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  try {
    requireFirestoreDb();
    if (!isValidDocId(params.id)) {
      return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
    }
    const ok = await PostRepo.remove(params.id);
    if (!ok) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return apiErrorResponse(err, "Failed to delete post");
  }
}
