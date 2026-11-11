import type { Metadata } from "next";
import { Container, PageHero } from "@/components/section";
import { PropertyCard } from "@/components/cards";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { properties } from "@/lib/data";

export const metadata: Metadata = { title: "Immobilien" };

export default function Page() {
  return (
    <>
      <PageHero no="04" kicker="Immobilien" title="Aktuelle Angebote." intro="Wohnungen, Häuser, Gewerbe und Grundstücke. Angebote sind Beispieldaten." />
      <section className="py-16 md:py-28">
        <Container>
          <p className="label mb-8 border-b-2 border-ink pb-3">{properties.length} Objekte</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 80}><PropertyCard p={p} /></Reveal>)}
          </div>
        </Container>
      </section>
      <CtaBand title="Nichts Passendes dabei?" text="Teilen Sie uns Ihre Wünsche mit. Wir informieren Sie, sobald ein passendes Objekt verfügbar ist." />
    </>
  );
}
