import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/sections/Newsletter";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
const sans = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://dr-zrinka.com"),
  title: { default: "Dr. Zrinka K. Fidermuc Maler", template: "%s | Dr. Zrinka K. Fidermuc Maler" },
  description:
    "Executive and organizational advisor, author and keynote speaker. Align people, strengthen leadership, turn ambition into action.",
  openGraph: {
    title: "Dr. Zrinka K. Fidermuc Maler",
    description: "Executive advisory, writing and leadership.",
    url: "https://dr-zrinka.com",
    siteName: "Dr. Zrinka K. Fidermuc Maler",
    images: ["/images/portrait.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Newsletter />
      </body>
    </html>
  );
}
