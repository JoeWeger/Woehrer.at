import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, PageHero, SectionHead } from "@/components/section";
import { Placeholder } from "@/components/placeholder";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { crew, office, telHref, type Person } from "@/lib/data";

export const metadata: Metadata = { title: "Team" };

function PersonCard({ p, i }: { p: Person; i: number }) {
  return (
    <Reveal delay={(i % 4) * 70} className="flex h-full flex-col">
      <Placeholder note={`Porträt ${p.name}`} ratio="aspect-[3/4]" />
      <div className="flex-1 border-2 border-t-0 border-ink px-4 py-4">
        <h3 className="font-display text-xl font-extrabold leading-tight">{p.name}</h3>
        {p.role && <p className="label mt-1.5 text-ink-2">{p.role}</p>}
        <ul className="mt-3 space-y-0.5">
          {p.phones.map((n) => (
            <li key={n}><a href={`tel:${telHref(n)}`} className="link-line font-mono text-sm tabular-nums">{n}</a></li>))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Page() {
  return (
    <>
      <PageHero no="05" kicker="Team" title="Die Menschen hinter Ihrem Bau." intro="Ein eingespieltes Team aus Büro und Baustelle. Sie erreichen uns direkt, ohne Umwege." />
      <section className="py-16 md:py-28">
        <Container>
          <Reveal><Placeholder note="Teamfoto, Querformat" ratio="aspect-[16/8]" /></Reveal>
          <p className="label mb-6 mt-16 border-b-2 border-ink pb-3">Büro &amp; Geschäftsführung</p>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {office.map((p, i) => <PersonCard key={p.name} p={p} i={i} />)}
          </div>
          <p className="label mb-6 mt-20 border-b-2 border-ink pb-3">Baustelle</p>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {crew.map((p, i) => <PersonCard key={p.name} p={p} i={i} />)}
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
