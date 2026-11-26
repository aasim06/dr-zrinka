import { Hero } from "@/components/sections/Hero";
import { WorkWithMe } from "@/components/sections/WorkWithMe";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Conversations } from "@/components/sections/Conversations";
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkWithMe />
      <TrustedBy />
      <Conversations />
      <WhoThisIsFor />
      <ClosingCTA />
    </>
  );
}
