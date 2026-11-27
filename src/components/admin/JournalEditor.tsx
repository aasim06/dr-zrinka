"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Heading";

export type JournalEditorInitial = {
  _id?: string;
  title: string;
  slug: string;
  language?: "EN" | "DE";
  excerpt: string;
  content: string;
  coverImage: string;
  audioUrl: string;
  published: boolean;
};

function toSlug(val: string) {
  return val
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

export function JournalEditor({ initial }: { initial?: JournalEditorInitial }) {
  const router = useRouter();
  const isEdit = Boolean(initial?._id);

  const [title, setTitle] = useState(initial?.title ?? "");
  const [slug, setSlug] = useState(initial?.slug ?? "");
  const [language, setLanguage] = useState<"EN" | "DE">(initial?.language ?? "EN");
  const [slugLocked, setSlugLocked] = useState(Boolean(initial?.slug));
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [coverImage, setCoverImage] = useState(initial?.coverImage ?? "");
  const [audioUrl, setAudioUrl] = useState(initial?.audioUrl ?? "");
  const [published, setPublished] = useState(initial?.published ?? false);
  const [tab, setTab] = useState<"edit" | "preview">("edit");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const readingTime = useMemo(() => {
    const plain = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (!plain) return 1;
    return Math.max(1, Math.round(plain.split(" ").length / 200));
  }, [content]);

  function handleTitleChange(nextTitle: string) {
    setTitle(nextTitle);
    if (!slugLocked) {
      setSlug(toSlug(nextTitle));
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    setSaving(true);
    setError("");
    try {
      const url = isEdit ? `/api/admin/posts/${initial?._id}` : "/api/admin/posts";
      const method = isEdit ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, slug, language, excerpt, content, coverImage, audioUrl, published }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Save failed");
      router.push("/admin/journal");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save article.");
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!isEdit || !confirm("Delete this journal entry permanently?")) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/posts/${initial?._id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      router.push("/admin/journal");
      router.refresh();
    } catch {
      setError("Could not delete article.");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSave} className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-6">
        <div>
          <Eyebrow tone="red" className="mb-2">The Journal</Eyebrow>
          <Heading level={1} className="!text-[clamp(28px,3.5vw,40px)]">
            {isEdit ? "Edit Journal Entry" : "New Journal Entry"}
          </Heading>
          <p className="mt-1 text-xs text-muted">Estimated reading time: {readingTime} min</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {isEdit && (
            <Button type="button" variant="outline" size="sm" onClick={handleDelete} disabled={saving}>
              Delete
            </Button>
          )}
          <Button type="submit" variant="secondary" size="sm" disabled={saving}>
            {saving ? "Saving…" : published ? "Save & Publish" : "Save Draft"}
          </Button>
        </div>
      </div>

      {error && <p className="border border-red/40 bg-white p-4 text-xs text-red">{error}</p>}

      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-5 border border-line bg-white p-6 md:p-8">
          <Input label="Title" value={title} onChange={(e) => handleTitleChange(e.target.value)} required />

          <div>
            <Input
              label="Slug (URL path)"
              value={slug}
              onChange={(e) => {
                setSlugLocked(true);
                setSlug(toSlug(e.target.value));
              }}
            />
          </div>

          <Textarea
            label="Excerpt"
            placeholder="Brief editorial summary shown on The Journal archive…"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="min-h-[84px]"
          />

          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs tracking-wide text-muted">Content (HTML or Plain Paragraphs)</span>
              <div className="inline-flex border border-line bg-paper p-0.5">
                {(["edit", "preview"] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className={[
                      "px-3 py-1 text-[11px] font-medium uppercase tracking-wider",
                      tab === t ? "bg-red text-white" : "text-muted",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {tab === "edit" ? (
              <Textarea
                label="Content"
                hideLabel
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="<p>Write your essay here…</p>"
                className="min-h-[360px] font-mono text-xs leading-relaxed"
              />
            ) : (
              <div
                className="prose max-w-none border border-line bg-paper p-6 text-sm leading-[1.8] text-ink"
                dangerouslySetInnerHTML={{
                  __html: content.includes("<")
                    ? content
                    : content
                        .split(/\n\n+/)
                        .map((p) => `<p>${p}</p>`)
                        .join(""),
                }}
              />
            )}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="border border-line border-t-[3px] border-t-gold bg-white p-6">
            <Heading level={3} className="mb-4 !text-[22px]">Publishing &amp; Media</Heading>

            <label className="mb-5 flex cursor-pointer items-center gap-3 border-b border-line pb-4 text-sm">
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="h-4 w-4 accent-red"
              />
              <span className="font-medium">Published on public site</span>
            </label>

            <div className="mb-5">
              <span className="mb-1.5 block text-xs tracking-wide text-muted">Article Language</span>
              <div className="inline-flex border border-line bg-paper p-0.5">
                {(["EN", "DE"] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    className={[
                      "px-4 py-1.5 text-xs font-medium tracking-[0.08em]",
                      language === lang ? "bg-red text-white" : "text-muted hover:text-ink",
                    ].join(" ")}
                  >
                    {lang === "EN" ? "English (EN)" : "Deutsch (DE)"}
                  </button>
                ))}
              </div>
            </div>

            <Input
              label="Cover Image URL"
              placeholder="/images/portrait-red.jpg or https://..."
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
            />
            <Input
              label="Audio Narration URL (optional)"
              placeholder="https://..."
              value={audioUrl}
              onChange={(e) => setAudioUrl(e.target.value)}
            />
          </div>
        </aside>
      </div>
    </form>
  );
}
