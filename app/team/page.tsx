import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, PageHero, SectionHead } from "@/components/section";
import { Placeholder } from "@/components/placeholder";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = { title: "Team" };

const people = [
  ["Ing. Christoph Wöhrer", "Baumeister, Geschäftsführung"],
  ["Gisela Wöhrer", "Büro"],
  ["Name ergänzen", "Bauleitung"],
  ["Name ergänzen", "Polier"],
];

export default function Page() {
  return (
    <>
      <PageHero no="05" kicker="Team" title="Die Menschen hinter Ihrem Bau." intro="Ein eingespieltes Team aus Büro, Bauleitung und Handwerk. Namen und Rollen bitte ergänzen." />
      <section className="py-16 md:py-28">
        <Container>
          <Reveal><Placeholder note="Teamfoto, Querformat" ratio="aspect-[16/8]" /></Reveal>
          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {people.map(([n, r], i) => (
              <Reveal key={i} delay={i * 70}>
                <Placeholder note="Porträt" ratio="aspect-[4/5]" />
                <h3 className="mt-4 font-display text-xl font-extrabold">{n}</h3>
                <p className="label mt-1 text-ink-2">{r}</p>
              </Reveal>))}
          </div>
        </Container>
      </section>
      <section id="jobs" className="scroll-mt-20 border-y-2 border-ink bg-signal py-16 text-on-signal md:py-28">
        <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="label mb-5">Karriere</p>
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] uppercase">Jobangebot.<br />Jetzt bewerben!</h2>
          </div>
          <div>
            <p className="mb-8 max-w-md text-lg">Offene Stellen und Lehrstellen bitte hier eintragen. Bewerbungen nehmen wir gern per E-Mail entgegen.</p>
            <Button asChild variant="ink" size="lg"><Link href="/kontakt?betreff=Bewerbung&bereich=sonstiges">Bewerbung senden <ArrowUpRight className="size-5" /></Link></Button>
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
