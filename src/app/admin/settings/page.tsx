"use client";
import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Heading";

type LogoItem = { name: string; logoUrl: string };

export default function AdminSettingsPage() {
  const [logos, setLogos] = useState<LogoItem[]>([]);
  const [speakerKitPdfUrl, setSpeakerKitPdfUrl] = useState("");
  const [bookingCalendarUrl, setBookingCalendarUrl] = useState("/strategic-conversation");
  const [impressumHtml, setImpressumHtml] = useState("");
  const [datenschutzHtml, setDatenschutzHtml] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json().then((d) => ({ ok: r.ok, d })))
      .then(({ ok, d }) => {
        if (!ok) throw new Error(d.error || "Failed to load settings");
        const s = d.settings;
        if (s) {
          setLogos(s.institutionLogos || []);
          setSpeakerKitPdfUrl(s.speakerKitPdfUrl || "");
          setBookingCalendarUrl(s.bookingCalendarUrl || "/strategic-conversation");
          setImpressumHtml(s.impressumHtml || "");
          setDatenschutzHtml(s.datenschutzHtml || "");
        }
      })
      .catch((e) => setError(e instanceof Error ? e.message : "Error loading settings"));
  }, []);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMsg("");
    setError("");
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          institutionLogos: logos,
          speakerKitPdfUrl,
          bookingCalendarUrl,
          impressumHtml,
          datenschutzHtml,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to save settings");
      setMsg("Settings saved.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save settings");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSave} className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-6">
        <div>
          <Eyebrow tone="red" className="mb-2">Configuration</Eyebrow>
          <Heading level={1} className="!text-[clamp(30px,3.8vw,42px)]">Settings &amp; Legal</Heading>
        </div>
        <Button type="submit" variant="secondary" size="sm" disabled={saving}>
          {saving ? "Saving…" : "Save Settings"}
        </Button>
      </div>

      {error && <p className="border border-red/40 bg-white p-4 text-xs text-red">{error}</p>}
      {msg && <p className="border border-gold bg-white p-4 text-xs text-ink">{msg}</p>}

      {/* Media Kit & Booking */}
      <div className="grid gap-6 border border-line bg-white p-6 md:grid-cols-2 md:p-8">
        <Input
          label="Speaker / Media Kit PDF URL"
          placeholder="https://..."
          value={speakerKitPdfUrl}
          onChange={(e) => setSpeakerKitPdfUrl(e.target.value)}
        />
        <Input
          label="Booking Calendar URL (Calendly / Cal.com / Internal)"
          placeholder="https://cal.com/... or /strategic-conversation"
          value={bookingCalendarUrl}
          onChange={(e) => setBookingCalendarUrl(e.target.value)}
        />
      </div>

      {/* Trusted By Institutions */}
      <div className="border border-line bg-white p-6 md:p-8">
        <div className="mb-5 flex items-center justify-between">
          <Heading level={3} className="!text-[24px]">Trusted By Institutions</Heading>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setLogos((prev) => [...prev, { name: "", logoUrl: "" }])}
          >
            <span className="inline-flex items-center gap-1.5">
              <Plus className="h-3.5 w-3.5" /> Add Institution
            </span>
          </Button>
        </div>

        <div className="space-y-3">
          {logos.map((logo, idx) => (
            <div key={idx} className="grid items-end gap-3 sm:grid-cols-[1fr_1fr_auto]">
              <Input
                label="Institution Name"
                value={logo.name}
                onChange={(e) =>
                  setLogos((prev) => prev.map((it, i) => (i === idx ? { ...it, name: e.target.value } : it)))
                }
              />
              <Input
                label="Logo URL (optional)"
                placeholder="https://..."
                value={logo.logoUrl}
                onChange={(e) =>
                  setLogos((prev) => prev.map((it, i) => (i === idx ? { ...it, logoUrl: e.target.value } : it)))
                }
              />
              <button
                type="button"
                onClick={() => setLogos((prev) => prev.filter((_, i) => i !== idx))}
                aria-label="Remove institution"
                className="mb-2.5 inline-flex h-[46px] items-center justify-center border border-line px-3 text-muted hover:border-red hover:text-red"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Legal HTML Overrides */}
      <div className="grid gap-8 border border-line bg-white p-6 md:grid-cols-2 md:p-8">
        <Textarea
          label="Custom Impressum HTML (leave blank for default)"
          value={impressumHtml}
          onChange={(e) => setImpressumHtml(e.target.value)}
          className="min-h-[200px] font-mono text-xs"
        />
        <Textarea
          label="Custom Datenschutz HTML (leave blank for default)"
          value={datenschutzHtml}
          onChange={(e) => setDatenschutzHtml(e.target.value)}
          className="min-h-[200px] font-mono text-xs"
        />
      </div>
    </form>
  );
}
