"use client";
import { useEffect, useState } from "react";
import { Mail, Trash2 } from "lucide-react";
import { Eyebrow, Heading } from "@/components/ui/Heading";
import { INQUIRY_STATUSES, type InquiryStatus } from "@/lib/constants";
import { cn } from "@/lib/utils";

type InquiryRow = {
  _id: string;
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  message: string;
  status: InquiryStatus;
  createdAt: string;
};

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<InquiryRow[]>([]);
  const [filter, setFilter] = useState<"All" | InquiryStatus>("All");
  const [error, setError] = useState("");

  async function load(statusFilter: "All" | InquiryStatus = filter) {
    try {
      const url = statusFilter === "All" ? "/api/admin/inquiries" : `/api/admin/inquiries?status=${statusFilter}`;
      const res = await fetch(url);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to load inquiries");
      setInquiries(json.inquiries || []);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error loading inquiries");
    }
  }

  useEffect(() => {
    load(filter);
  }, [filter]);

  async function updateStatus(id: string, status: InquiryStatus) {
    await fetch(`/api/admin/inquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    load(filter);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this inquiry record?")) return;
    await fetch(`/api/admin/inquiries/${id}`, { method: "DELETE" });
    load(filter);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-6">
        <div>
          <Eyebrow tone="red" className="mb-2">CRM &amp; Leads</Eyebrow>
          <Heading level={1} className="!text-[clamp(30px,3.8vw,42px)]">Strategic Inquiries</Heading>
        </div>

        <div className="inline-flex border border-line bg-white p-0.5">
          {(["All", ...INQUIRY_STATUSES] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilter(s)}
              className={cn(
                "px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase",
                filter === s ? "bg-red text-white" : "text-muted hover:text-ink"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="border border-red/40 bg-white p-4 text-xs text-red">{error}</p>}

      {inquiries.length === 0 ? (
        <div className="border border-line bg-white p-8 text-sm text-muted">
          No inquiries in this view yet. Submissions from Contact and Strategic Conversation forms appear here
          automatically.
        </div>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inq) => (
            <article key={inq._id} className="border border-line border-t-[3px] border-t-gold bg-white p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 text-xs text-muted">
                    <span className="border border-gold/60 bg-paper px-2 py-0.5 font-medium text-red uppercase">
                      {inq.inquiryType}
                    </span>
                    <span>{new Date(inq.createdAt).toLocaleString()}</span>
                  </div>
                  <Heading level={3} className="mt-2 !text-[24px]">{inq.name}</Heading>
                  <p className="text-sm text-muted">
                    {inq.email}
                    {inq.organization ? ` · ${inq.organization}` : ""}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <select
                    aria-label={`Status for ${inq.name}`}
                    value={inq.status}
                    onChange={(e) => updateStatus(inq._id, e.target.value as InquiryStatus)}
                    className="border border-line bg-paper px-3 py-1.5 text-xs font-medium text-ink focus:border-gold focus:outline-none"
                  >
                    {INQUIRY_STATUSES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>

                  <a
                    href={`mailto:${inq.email}?subject=${encodeURIComponent(`Re: ${inq.inquiryType} — Dr. Zrinka K. Fidermuc Maler`)}`}
                    className="inline-flex items-center gap-1.5 border border-ink px-3 py-1.5 text-xs font-medium text-ink hover:bg-ink hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5" /> Reply
                  </a>

                  <button
                    type="button"
                    onClick={() => handleDelete(inq._id)}
                    aria-label="Delete inquiry"
                    className="border border-line p-1.5 text-muted hover:border-red hover:text-red"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <p className="mt-4 whitespace-pre-wrap border-t border-line pt-4 text-sm leading-relaxed text-ink">
                {inq.message}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
