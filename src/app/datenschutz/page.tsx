import type { Metadata } from "next";
import { DatenschutzView } from "@/components/views/general-views";
import { getPublicSiteSettings } from "@/lib/public-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Datenschutz / Privacy",
  description:
    "Datenschutzerklärung (GDPR Privacy Policy) for Dr. Zrinka K. Fidermuc Maler including hosting, contact inquiries, KlickTipp newsletter, and user rights.",
};

export default async function DatenschutzPage() {
  const settings = await getPublicSiteSettings();
  return <DatenschutzView datenschutzHtml={settings.datenschutzHtml} />;
}
