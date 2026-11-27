"use client";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
const ExecutiveConcierge = dynamic(
  () => import("@/components/ai/ExecutiveConcierge").then((m) => m.ExecutiveConcierge),
  { ssr: false }
);

// ssr:false → completely excluded from server HTML → zero hydration mismatch
const Newsletter = dynamic(
  () => import("@/components/sections/Newsletter").then((m) => m.Newsletter),
  { ssr: false }
);

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Newsletter />
      <ExecutiveConcierge />
    </>
  );
}
