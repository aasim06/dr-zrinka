"use client";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { getUiCopy } from "@/data/translations";
import { useLocale } from "@/components/providers/LocaleProvider";

const defaultNames = [
  "Vesta Immobilien",
  "Management-Institut Dr. A. Kitzmann",
  "FOM Hochschule",
  "Global Communication Experts",
  "Europäische Zentralbank",
  "Spalteholz Hotelkompetenz",
];

export function TrustedBy({
  institutions,
}: {
  institutions?: { name: string; logoUrl?: string }[];
}) {
  const { locale } = useLocale();
  const copy = getUiCopy(locale).home;
  const list =
    institutions && institutions.length > 0
      ? institutions
      : defaultNames.map((name) => ({ name, logoUrl: "" }));

  return (
    <div className="border-y border-line bg-white py-[72px]">
      <Container>
        <Heading level={2} className="text-center !text-[clamp(26px,3vw,36px)]">
          {copy.trustedHeading}
        </Heading>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-[54px] gap-y-[18px] text-center font-serif text-[21px] font-medium leading-tight text-[#6d655e]">
          {list.map((item) =>
            item.logoUrl ? (
              <img
                key={item.name}
                src={item.logoUrl}
                alt={item.name}
                className="h-9 w-auto object-contain opacity-80 grayscale transition-opacity hover:opacity-100"
              />
            ) : (
              <span key={item.name}>{item.name}</span>
            )
          )}
        </div>
      </Container>
    </div>
  );
}
