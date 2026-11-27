import type { Metadata } from "next";
import { KeynotesView } from "@/components/views/advisory-views";
import { getPublicSiteSettings } from "@/lib/public-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Keynote Speaking",
  description:
    "Keynotes on leadership, physiology, identity, and authority under pressure—designed for executive teams, conferences, and business schools.",
};

export default async function KeynotesPage() {
  const settings = await getPublicSiteSettings();
  return <KeynotesView speakerKitPdfUrl={settings.speakerKitPdfUrl} />;
}
