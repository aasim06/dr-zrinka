"use client";
import { useEffect, useState } from "react";
import { JournalEditor, type JournalEditorInitial } from "@/components/admin/JournalEditor";

export default function EditJournalPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<JournalEditorInitial | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/admin/posts/${params.id}`)
      .then((r) => r.json().then((d) => ({ ok: r.ok, d })))
      .then(({ ok, d }) => {
        if (!ok) throw new Error(d.error || "Not found");
        setPost(d.post);
      })
      .catch((e) => setError(e instanceof Error ? e.message : "Failed to load post"));
  }, [params.id]);

  if (error) return <p className="border border-red/40 bg-white p-6 text-sm text-red">{error}</p>;
  if (!post) return <p className="p-6 text-sm text-muted">Loading entry…</p>;
  return <JournalEditor initial={post} />;
}
