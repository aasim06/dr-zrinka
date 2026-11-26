import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

const names = [
  "Vesta Immobilien",
  "Management-Institut Dr. A. Kitzmann",
  "FOM Hochschule",
  "Global Communication Experts",
  "Europäische Zentralbank",
  "Spalteholz Hotelkompetenz",
];

export function TrustedBy() {
  return (
    <div className="border-y border-line bg-white py-[72px]">
      <Container>
        <Heading level={2} className="text-center !text-[clamp(26px,3vw,36px)]">
          Trusted by institutions and organizations
        </Heading>
        <div className="mt-10 flex flex-wrap justify-center gap-x-[54px] gap-y-[18px] text-center font-serif text-[21px] font-medium leading-tight text-[#6d655e]">
          {names.map((n) => <span key={n}>{n}</span>)}
        </div>
      </Container>
    </div>
  );
}
