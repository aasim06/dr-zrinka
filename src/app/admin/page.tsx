"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Database, Inbox, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Heading";

type OverviewData = {
  metrics: {
    publishedArticles: number;
    totalArticles: number;
    upcomingEvents: number;
    unreadInquiries: number;
    totalConversations: number;
    googleSubscribers?: number;
  };
  recentInquiries: {
    _id: string;
    name: string;
    email: string;
    inquiryType: string;
    status: string;
    createdAt: string;
  }[];
  recentSubscribers?: {
    _id: string;
    name: string;
    email: string;
    language: "English" | "German";
    subscribedToJournal: boolean;
    lastLoginAt: string;
  }[];
};

export default function AdminDashboardPage() {
  const [data, setData] = useState<OverviewData | null>(null);
  const [error, setError] = useState("");
  const [seeding, setSeeding] = useState(false);
  const [seedMsg, setSeedMsg] = useState("");

  async function load() {
    try {
      const res = await fetch("/api/admin/overview");
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Unable to load overview");
      setData(json);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Database unavailable");
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleSeed() {
    setSeeding(true);
    setSeedMsg("");
    try {
      const res = await fetch("/api/admin/seed", { method: "POST" });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Seed failed");
      setSeedMsg(`Imported ${json.postsImported} articles and ${json.eventsImported} events.`);
      await load();
    } catch (e) {
      setSeedMsg(e instanceof Error ? e.message : "Failed to import data.");
    } finally {
      setSeeding(false);
    }
  }

  const metrics = data?.metrics;

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-6">
        <div>
          <Eyebrow tone="red" className="mb-2">Overview</Eyebrow>
          <Heading level={1} className="!text-[clamp(32px,4vw,44px)]">
            Executive Dashboard
          </Heading>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/admin/journal/new" variant="secondary" size="sm">
            Write New Journal Entry
          </Button>
          <Button href="/admin/events" variant="outline" size="sm">
            Add Event
          </Button>
          <Button href="/admin/ai-concierge" variant="outline" size="sm">
            Update AI Knowledge
          </Button>
        </div>
      </div>

      {error && (
        <div className="border border-red/40 border-l-4 border-l-red bg-white p-6 text-sm">
          <p className="font-medium text-red">Firebase Configuration Required</p>
          <p className="mt-1 text-muted">{error}</p>
        </div>
      )}

      {/* Metric Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Published Articles",
            value: metrics ? metrics.publishedArticles : "—",
            sub: metrics ? `${metrics.totalArticles} total entries` : "The Journal",
            icon: BookOpen,
            href: "/admin/journal",
          },
          {
            label: "Upcoming Events",
            value: metrics ? metrics.upcomingEvents : "—",
            sub: "Readings & Keynotes",
            icon: Calendar,
            href: "/admin/events",
          },
          {
            label: "New Inquiries",
            value: metrics ? metrics.unreadInquiries : "—",
            sub: "Awaiting response",
            icon: Inbox,
            href: "/admin/inquiries",
          },
          {
            label: "AI Conversations",
            value: metrics ? metrics.totalConversations : "—",
            sub:
              typeof metrics?.googleSubscribers === "number"
                ? `${metrics.googleSubscribers} Google subscribers`
                : "Concierge sessions",
            icon: Sparkles,
            href: "/admin/ai-concierge",
          },
        ].map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              href={card.href}
              className="group border border-line border-t-[3px] border-t-gold bg-white p-6 transition-colors hover:border-ink"
            >
              <div className="flex items-center justify-between text-muted">
                <span className="text-xs font-medium tracking-[0.1em] uppercase">{card.label}</span>
                <Icon className="h-4 w-4 text-gold" />
              </div>
              <div className="mt-4 font-serif text-[42px] font-medium leading-none text-ink">
                {card.value}
              </div>
              <p className="mt-3 flex items-center justify-between text-xs text-muted">
                <span>{card.sub}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </p>
            </Link>
          );
        })}
      </div>

      {/* Recent Inquiries & Import Helper */}
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="border border-line bg-white p-6 md:p-8">
          <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
            <Heading level={3} className="!text-[24px]">Recent Inquiries</Heading>
            <Link href="/admin/inquiries" className="text-xs font-medium text-red hover:underline">
              View All →
            </Link>
          </div>
          {data?.recentInquiries?.length ? (
            <ul className="m-0 list-none divide-y divide-line p-0 text-sm">
              {data.recentInquiries.map((inq) => (
                <li key={inq._id} className="flex items-center justify-between gap-4 py-3.5">
                  <div className="min-w-0">
                    <p className="truncate font-medium text-ink">{inq.name}</p>
                    <p className="truncate text-xs text-muted">
                      {inq.email} · {inq.inquiryType}
                    </p>
                  </div>
                  <span className="shrink-0 border border-line bg-paper px-2.5 py-1 text-[11px] font-medium text-ink">
                    {inq.status}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted">No inquiries recorded yet.</p>
          )}
        </div>

        <div className="border border-line bg-white p-6 md:p-8">
          <div className="mb-3 flex items-center gap-2 text-red">
            <Database className="h-4 w-4" />
            <span className="text-xs font-medium tracking-[0.1em] uppercase">Content Sync</span>
          </div>
          <Heading level={3} className="mb-3 !text-[24px]">Import Static Archive</Heading>
          <p className="mb-6 text-sm text-muted">
            Import the existing 11 Journal essays and Events from the static archive into Firebase Firestore so you can
            edit or manage them directly here.
          </p>
          <Button type="button" variant="outline" size="sm" onClick={handleSeed} disabled={seeding}>
            {seeding ? "Importing…" : "Import Static Content"}
          </Button>
          {seedMsg && <p className="mt-4 text-xs text-ink">{seedMsg}</p>}
        </div>
      </div>

      {data?.recentSubscribers && data.recentSubscribers.length > 0 && (
        <div className="border border-line bg-white p-6 md:p-8">
          <div className="mb-5 flex items-center justify-between border-b border-line pb-4">
            <Heading level={3} className="!text-[24px]">
              Recent Google Subscribers ({metrics?.googleSubscribers ?? data.recentSubscribers.length})
            </Heading>
          </div>
          <ul className="m-0 list-none divide-y divide-line p-0 text-sm">
            {data.recentSubscribers.map((sub) => (
              <li key={sub._id} className="flex flex-wrap items-center justify-between gap-4 py-3">
                <div className="min-w-0">
                  <p className="truncate font-medium text-ink">{sub.name || sub.email}</p>
                  <p className="truncate text-xs text-muted">
                    {sub.email} · {sub.language}
                  </p>
                </div>
                <span className="shrink-0 border border-line bg-paper px-2.5 py-1 text-[11px] font-medium text-ink">
                  {sub.subscribedToJournal ? "KlickTipp Opt-In" : "Journal Access"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
