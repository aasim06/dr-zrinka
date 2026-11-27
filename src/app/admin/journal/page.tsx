"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Pencil, Plus, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Eyebrow, Heading } from "@/components/ui/Heading";

type PostRow = {
  _id: string;
  title: string;
  slug: string;
  readingTime: number;
  published: boolean;
  updatedAt: string;
};

export default function AdminJournalListPage() {
  const [posts, setPosts] = useState<PostRow[]>([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function load(search = "") {
    setLoading(true);
    try {
      const url = search ? `/api/admin/posts?q=${encodeURIComponent(search)}` : "/api/admin/posts";
      const res = await fetch(url);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load posts");
      setPosts(data.posts || []);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error loading posts");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this entry permanently?")) return;
    await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    load(query);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-6">
        <div>
          <Eyebrow tone="red" className="mb-2">The Journal</Eyebrow>
          <Heading level={1} className="!text-[clamp(30px,3.8vw,42px)]">Journal Manager</Heading>
        </div>
        <Button href="/admin/journal/new" variant="secondary" size="sm">
          <span className="inline-flex items-center gap-1.5">
            <Plus className="h-3.5 w-3.5" /> New Entry
          </span>
        </Button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          load(query);
        }}
        className="flex items-end gap-3"
      >
        <div className="max-w-sm flex-1">
          <Input
            label="Search articles"
            hideLabel
            placeholder="Search by title, slug, or excerpt…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mb-0"
          />
        </div>
        <Button type="submit" variant="outline" size="sm" className="mb-2.5">
          <span className="inline-flex items-center gap-1.5">
            <Search className="h-3.5 w-3.5" /> Search
          </span>
        </Button>
      </form>

      {error && <p className="border border-red/40 bg-white p-4 text-sm text-red">{error}</p>}

      <div className="border border-line bg-white">
        {loading ? (
          <p className="p-6 text-sm text-muted">Loading entries…</p>
        ) : posts.length === 0 ? (
          <p className="p-8 text-sm text-muted">
            No Firestore articles found. Click <strong>New Entry</strong> or import static essays from the Overview
            dashboard.
          </p>
        ) : (
          <ul className="m-0 list-none divide-y divide-line p-0">
            {posts.map((p) => (
              <li key={p._id} className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={[
                        "border px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase",
                        p.published ? "border-gold bg-paper text-red" : "border-line text-muted",
                      ].join(" ")}
                    >
                      {p.published ? "Published" : "Draft"}
                    </span>
                    <span className="text-xs text-muted">{p.readingTime || 1} min read</span>
                  </div>
                  <Link href={`/admin/journal/${p._id}`} className="mt-1.5 block font-serif text-2xl font-medium hover:text-red">
                    {p.title}
                  </Link>
                  <p className="text-xs text-muted">/journal/{p.slug}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin/journal/${p._id}`}
                    className="inline-flex items-center gap-1.5 border border-line px-3 py-2 text-xs font-medium hover:border-gold hover:text-red"
                  >
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(p._id)}
                    aria-label={`Delete ${p.title}`}
                    className="inline-flex items-center border border-line p-2 text-muted hover:border-red hover:text-red"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
