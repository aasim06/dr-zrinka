"use client";
import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { cn } from "@/lib/utils";

type KnowledgeRow = {
  _id: string;
  topic: string;
  content: string;
  active: boolean;
  updatedAt: string;
};

type ChatLogRow = {
  _id: string;
  sessionId: string;
  leadCaptured: boolean;
  createdAt: string;
  messages: { role: "user" | "assistant"; content: string; timestamp: string }[];
};

export default function AdminAiConciergePage() {
  const [tab, setTab] = useState<"knowledge" | "logs">("knowledge");
  const [items, setItems] = useState<KnowledgeRow[]>([]);
  const [logs, setLogs] = useState<ChatLogRow[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [active, setActive] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function loadAll() {
    try {
      const [kRes, lRes] = await Promise.all([fetch("/api/admin/knowledge"), fetch("/api/admin/chat-logs")]);
      const kJson = await kRes.json();
      const lJson = await lRes.json();
      if (!kRes.ok) throw new Error(kJson.error || "Failed to load AI knowledge");
      setItems(kJson.items || []);
      setLogs(lJson.logs || []);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load AI Concierge data");
    }
  }

  useEffect(() => {
    loadAll();
  }, []);

  function resetForm() {
    setEditingId(null);
    setTopic("");
    setContent("");
    setActive(true);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!topic.trim() || !content.trim()) {
      setError("Topic and content are required.");
      return;
    }
    setSaving(true);
    setError("");
    try {
      const url = editingId ? `/api/admin/knowledge/${editingId}` : "/api/admin/knowledge";
      const method = editingId ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, content, active }),
      });
      if (!res.ok) throw new Error("Save failed");
      resetForm();
      await loadAll();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save knowledge block");
    } finally {
      setSaving(false);
    }
  }

  async function toggleActive(item: KnowledgeRow) {
    await fetch(`/api/admin/knowledge/${item._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: !item.active }),
    });
    loadAll();
  }

  async function deleteItem(id: string) {
    if (!confirm("Delete this knowledge block?")) return;
    await fetch(`/api/admin/knowledge/${id}`, { method: "DELETE" });
    loadAll();
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-6">
        <div>
          <Eyebrow tone="red" className="mb-2">AI Concierge</Eyebrow>
          <Heading level={1} className="!text-[clamp(30px,3.8vw,42px)]">AI Agent Control Center</Heading>
        </div>

        <div className="inline-flex border border-line bg-white p-0.5">
          <button
            type="button"
            onClick={() => setTab("knowledge")}
            className={cn(
              "px-4 py-2 text-xs font-medium tracking-wider uppercase",
              tab === "knowledge" ? "bg-red text-white" : "text-muted hover:text-ink"
            )}
          >
            Knowledge Base ({items.length})
          </button>
          <button
            type="button"
            onClick={() => setTab("logs")}
            className={cn(
              "px-4 py-2 text-xs font-medium tracking-wider uppercase",
              tab === "logs" ? "bg-red text-white" : "text-muted hover:text-ink"
            )}
          >
            Visitor Chat Logs ({logs.length})
          </button>
        </div>
      </div>

      {error && <p className="border border-red/40 bg-white p-4 text-xs text-red">{error}</p>}

      {tab === "knowledge" ? (
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <form onSubmit={onSubmit} className="border border-line border-t-[3px] border-t-gold bg-white p-6">
            <Heading level={3} className="mb-5 !text-[24px]">
              {editingId ? "Edit Knowledge Block" : "Add Knowledge Block"}
            </Heading>
            <Input
              label="Topic"
              placeholder="e.g., Book: The Hat & The Hill"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
            />
            <Textarea
              label="Context Content"
              placeholder="Verified details injected into the Executive Concierge prompt…"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[180px]"
              required
            />
            <label className="my-4 flex cursor-pointer items-center gap-2.5 text-sm">
              <input
                type="checkbox"
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
                className="accent-red"
              />
              <span>Active in AI Concierge context</span>
            </label>
            <div className="flex gap-3">
              <Button type="submit" variant="secondary" size="sm" disabled={saving}>
                {saving ? "Saving…" : editingId ? "Update Block" : "Add Knowledge"}
              </Button>
              {editingId && (
                <Button type="button" variant="outline" size="sm" onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </div>
          </form>

          <div className="space-y-4">
            {items.map((item) => (
              <div key={item._id} className="border border-line bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleActive(item)}
                      className={cn(
                        "mb-2 border px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase",
                        item.active ? "border-gold bg-paper text-red" : "border-line text-muted"
                      )}
                    >
                      {item.active ? "Active" : "Inactive"}
                    </button>
                    <Heading level={3} className="!text-[22px]">{item.topic}</Heading>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingId(item._id);
                        setTopic(item.topic);
                        setContent(item.content);
                        setActive(item.active);
                      }}
                      className="border border-line p-2 text-muted hover:border-gold hover:text-red"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteItem(item._id)}
                      className="border border-line p-2 text-muted hover:border-red hover:text-red"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {logs.length === 0 ? (
            <div className="border border-line bg-white p-8 text-sm text-muted">No visitor chat logs recorded yet.</div>
          ) : (
            logs.map((log) => (
              <div key={log._id} className="border border-line bg-white p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3 text-xs text-muted">
                  <span>
                    Session <strong className="text-ink">{log.sessionId.slice(0, 14)}</strong> ·{" "}
                    {new Date(log.createdAt).toLocaleString()}
                  </span>
                  {log.leadCaptured && (
                    <span className="border border-gold bg-paper px-2 py-0.5 text-[10px] font-medium text-red uppercase">
                      Advisory / Booking Intent
                    </span>
                  )}
                </div>
                <div className="space-y-3 text-sm">
                  {log.messages.map((m, i) => (
                    <div key={i} className={m.role === "user" ? "pl-0" : "border-l-2 border-gold pl-4"}>
                      <span className="block text-[10px] font-medium tracking-wider text-muted uppercase">
                        {m.role === "user" ? "Visitor" : "Concierge"}
                      </span>
                      <p className="mt-0.5 whitespace-pre-wrap text-ink">{m.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
