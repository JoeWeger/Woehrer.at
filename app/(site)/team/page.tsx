import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
      {p.photo ? (
        <div className="relative aspect-[3/4] overflow-hidden border-2 border-ink bg-paper-2">
          <Image src={p.photo} alt={`Porträt ${p.name}`} fill sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 90vw" className="object-cover" />
        </div>
      ) : <Placeholder note={`Porträt ${p.name}`} ratio="aspect-[3/4]" />}
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
      <section className="border-y-2 border-ink bg-paper-2 py-12 md:py-16">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-xl text-lg">Aktuell haben wir keine offenen Stellen. Initiativbewerbungen nehmen wir trotzdem gern entgegen.</p>
          <Button asChild variant="outline"><Link href="/kontakt?betreff=Initiativbewerbung&bereich=sonstiges">Initiativ bewerben <ArrowUpRight className="size-4" /></Link></Button>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
