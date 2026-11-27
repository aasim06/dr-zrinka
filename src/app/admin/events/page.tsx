"use client";
import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Heading";

type EventRow = {
  _id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  externalLink: string;
  galleryImages: string[];
  isPast: boolean;
};

export default function AdminEventsPage() {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [externalLink, setExternalLink] = useState("");
  const [galleryText, setGalleryText] = useState("");
  const [isPast, setIsPast] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    try {
      const res = await fetch("/api/admin/events");
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to load events");
      setEvents(json.events || []);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error loading events");
    }
  }

  useEffect(() => {
    load();
  }, []);

  function resetForm() {
    setEditingId(null);
    setTitle("");
    setDate("");
    setLocation("");
    setDescription("");
    setExternalLink("");
    setGalleryText("");
    setIsPast(false);
  }

  function startEdit(ev: EventRow) {
    setEditingId(ev._id);
    setTitle(ev.title);
    setDate(ev.date ? ev.date.slice(0, 10) : "");
    setLocation(ev.location || "");
    setDescription(ev.description || "");
    setExternalLink(ev.externalLink || "");
    setGalleryText((ev.galleryImages || []).join("\n"));
    setIsPast(Boolean(ev.isPast));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !date) {
      setError("Title and date are required.");
      return;
    }
    setSaving(true);
    setError("");
    const galleryImages = galleryText
      .split(/[\n,]/)
      .map((s) => s.trim())
      .filter(Boolean);

    try {
      const url = editingId ? `/api/admin/events/${editingId}` : "/api/admin/events";
      const method = editingId ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date, location, description, externalLink, galleryImages, isPast }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Save failed");
      resetForm();
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save event");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this event?")) return;
    await fetch(`/api/admin/events/${id}`, { method: "DELETE" });
    if (editingId === id) resetForm();
    load();
  }

  return (
    <div className="space-y-8">
      <div className="border-b border-ink pb-6">
        <Eyebrow tone="red" className="mb-2">Calendar</Eyebrow>
        <Heading level={1} className="!text-[clamp(30px,3.8vw,42px)]">Events &amp; Keynotes</Heading>
      </div>

      {error && <p className="border border-red/40 bg-white p-4 text-xs text-red">{error}</p>}

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <form onSubmit={onSubmit} className="border border-line border-t-[3px] border-t-gold bg-white p-6">
          <Heading level={3} className="mb-5 !text-[24px]">
            {editingId ? "Edit Event" : "Add Event / Keynote"}
          </Heading>
          <Input label="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <Input
              label="Location"
              placeholder="Frankfurt/M or Zagreb"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <Input
            label="Registration / External Link"
            placeholder="https://... or /events/..."
            value={externalLink}
            onChange={(e) => setExternalLink(e.target.value)}
          />
          <Textarea
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[100px]"
          />
          <Textarea
            label="Gallery Image URLs (one per line)"
            value={galleryText}
            onChange={(e) => setGalleryText(e.target.value)}
            className="min-h-[76px]"
          />
          <label className="my-4 flex cursor-pointer items-center gap-2.5 text-sm">
            <input type="checkbox" checked={isPast} onChange={(e) => setIsPast(e.target.checked)} className="accent-red" />
            <span>Archive as Past Event</span>
          </label>
          <div className="flex gap-3">
            <Button type="submit" variant="secondary" size="sm" disabled={saving}>
              {saving ? "Saving…" : editingId ? "Update Event" : "Create Event"}
            </Button>
            {editingId && (
              <Button type="button" variant="outline" size="sm" onClick={resetForm}>
                Cancel
              </Button>
            )}
          </div>
        </form>

        <div className="border border-line bg-white">
          <div className="border-b border-line px-6 py-4">
            <Heading level={3} className="!text-[22px]">All Events ({events.length})</Heading>
          </div>
          {events.length === 0 ? (
            <p className="p-6 text-sm text-muted">No Firestore events saved yet.</p>
          ) : (
            <ul className="m-0 list-none divide-y divide-line p-0">
              {events.map((ev) => (
                <li key={ev._id} className="flex items-start justify-between gap-4 px-6 py-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <span>{ev.date?.slice(0, 10)}</span>
                      <span>·</span>
                      <span>{ev.location || "TBA"}</span>
                      {ev.isPast && (
                        <span className="border border-line px-1.5 py-0.5 text-[10px] uppercase">Past</span>
                      )}
                    </div>
                    <p className="mt-1 font-serif text-xl font-medium text-ink">{ev.title}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(ev)}
                      aria-label={`Edit ${ev.title}`}
                      className="border border-line p-2 text-muted hover:border-gold hover:text-red"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(ev._id)}
                      aria-label={`Delete ${ev.title}`}
                      className="border border-line p-2 text-muted hover:border-red hover:text-red"
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
    </div>
  );
}
