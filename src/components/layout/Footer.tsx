import Link from "next/link";
import { Container } from "@/components/ui/Container";

const cols = [
  [
    { href: "/", label: "Home" },
    { href: "/advisory", label: "Work With Me" },
    { href: "/executive-advisory", label: "Executive Advisory" },
    { href: "/private-advisory", label: "Private Advisory" },
    { href: "/keynotes", label: "Keynote Speaking" },
  ],
  [
    { href: "/book", label: "The Hat & The Hill" },
    { href: "/events", label: "Events" },
    { href: "/about", label: "About" },
    { href: "/journal", label: "The Journal" },
    { href: "/contact", label: "Contact" },
  ],
  [
    { href: "/strategic-conversation", label: "Strategic Conversation" },
    { href: "/connect", label: "Connect" },
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz / Privacy" },
    { href: "https://www.linkedin.com/in/dr-zrinka-fidermuc-maler/", label: "LinkedIn", external: true },
  ],
];

export function Footer() {
  return (
    <>
      <footer className="bg-paper pb-7 pt-[72px]">
        <Container className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="font-serif text-[26px] font-semibold leading-none tracking-[0.02em]">
              Dr. Zrinka K. Fidermuc Maler
            </div>
            <p className="mt-3.5 max-w-[320px] text-[13px] text-muted">
              The website is presented in English to reflect the international scope of Dr. Zrinka Fidermuc Maler’s
              advisory and speaking work across Europe.
            </p>
            <p className="mt-3 text-xs tracking-[0.08em] text-muted">Frankfurt/M · Zagreb · International</p>
          </div>
          {cols.map((c, i) => (
            <ul key={i} className="list-none p-0 text-[13px] leading-[2.3]">
              {c.map((l) => (
                <li key={l.label}>
                  {"external" in l && l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-red">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="hover:text-red">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </Container>
      </footer>
      <div className="bg-red p-3.5 text-center text-xs text-[#f0dcda]">
        © 2026 Dr. Zrinka K. Fidermuc Maler · Executive &amp; Leadership Advisory
      </div>
    </>
  );
}
