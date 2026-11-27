import type { Metadata } from "next";
import { AboutView } from "@/components/views/general-views";

export const metadata: Metadata = {
  title: "About Dr. Zrinka",
  description:
    "I didn’t reinvent myself. I stopped compromising. Over two decades working where leadership, physiology, and institutional power intersect.",
};

export default function AboutPage() {
  return <AboutView />;
}
