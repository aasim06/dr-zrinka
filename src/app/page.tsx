import { Hero } from "@/components/sections/Hero";
import { WorkWithMe } from "@/components/sections/WorkWithMe";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Conversations } from "@/components/sections/Conversations";
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor";
import { ClosingCTA } from "@/components/sections/ClosingCTA";
import { getPublicSiteSettings } from "@/lib/public-data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const settings = await getPublicSiteSettings();

  return (
    <>
      <Hero />
      <WorkWithMe />
      <TrustedBy institutions={settings.institutionLogos} />
      <Conversations />
      <WhoThisIsFor />
      <ClosingCTA ctaHref={settings.bookingCalendarUrl || "/strategic-conversation"} />
    </>
  );
}
