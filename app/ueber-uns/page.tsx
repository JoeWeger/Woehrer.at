import type { Metadata } from "next";
import { Container, PageHero, SectionHead } from "@/components/section";
import { Placeholder } from "@/components/placeholder";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { CtaBand } from "@/components/cta-band";
import { facts, history } from "@/lib/data";

export const metadata: Metadata = { title: "Über uns" };

const values = [
  ["Handschlag", "Wir halten, was wir zusagen: Termine, Preise und Qualität."],
  ["Sorgfalt", "Sauber gebaut ist halb gewonnen. Wir kontrollieren jeden Schritt."],
  ["Vertrauen", "Bauen heißt Vertrauen. Seit drei Generationen."],
];

export default function Page() {
  return (
    <>
      <PageHero no="05" kicker="Über uns" title="Familienbetrieb seit 1951." intro="Von der Gründung durch Karl Wöhrer bis zur dritten Generation: Die Wöhrer Baugesellschaft steht für Bauen mit Verantwortung." />
      <section className="py-16 md:py-28">
        <Container className="grid gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5"><Placeholder note="Historisches Foto / Familie" ratio="aspect-[4/5]" /></Reveal>
          <Reveal delay={100} className="md:col-span-7">
            <h2 className="text-[clamp(2rem,4vw,3.25rem)]">Ihr Umbau- und Sanierungsexperte.</h2>
            <p className="mt-6 max-w-xl text-lg text-ink-2">Hier erfahren Sie mehr über unser Team, unsere aktuellen Tätigkeiten und bereits abgeschlossene Bauvorhaben. Informieren Sie sich über unsere Referenzen oder nutzen Sie einfach die Chance, sich unverbindlich über unsere Leistungen zu informieren.</p>
            <p className="mt-4 max-w-xl text-ink-2">Seit 1951 führt die Familie Wöhrer das Unternehmen, heute in dritter Generation unter Baumeister Ing. Christoph Wöhrer.</p>
          </Reveal>
        </Container>
      </section>
      <section className="border-y-2 border-ink bg-signal text-on-signal">
        <Container>
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {facts.map((f, i) => (
              <div key={f.label} className={`border-ink p-5 py-10 md:p-8 md:py-14 ${i % 2 === 0 ? "border-r-2" : ""} ${i < 2 ? "border-b-2 md:border-b-0" : ""} ${i === 1 ? "md:border-r-2" : ""} ${i === 3 ? "md:border-r-0" : ""}`}>
                <dd className="font-display text-[clamp(2.75rem,6vw,5rem)] font-black leading-none" style={{ fontStretch: "115%" }}><Counter value={f.value} suffix={f.suffix} /></dd>
                <dt className="label mt-3">{f.label}</dt>
              </div>))}
          </dl>
        </Container>
      </section>
      <section className="py-16 md:py-28">
        <Container>
          <SectionHead no="01" kicker="Werte" title="Worauf Verlass ist." />
          <div className="grid border-2 border-ink md:grid-cols-3">
            {values.map(([t, d], i) => (
              <Reveal key={t} delay={i * 80} className="border-b-2 border-ink p-8 last:border-b-0 md:border-b-0 md:border-r-2 md:last:border-r-0">
                <p className="label">0{i + 1}</p>
                <h3 className="mt-10 font-display text-3xl font-extrabold uppercase">{t}</h3>
                <p className="mt-3 text-ink-2">{d}</p>
              </Reveal>))}
          </div>
        </Container>
      </section>
      <section className="border-t-2 border-ink grid-plan py-16 md:py-28">
        <Container>
          <SectionHead no="02" kicker="Geschichte" title="Geschichte des Unternehmens." />
          <ol className="relative border-l-2 border-ink pl-8 md:pl-12">
            {history.map(([y, t]) => (
              <li key={y} className="relative pb-10 last:pb-0">
                <span aria-hidden className="absolute -left-[41px] top-2 size-4 border-2 border-ink bg-signal md:-left-[57px]" />
                <span className="font-display text-4xl font-black text-blue" style={{ fontStretch: "120%" }}>{y}</span>
                <p className="mt-1 max-w-2xl text-lg">{t}</p>
              </li>))}
          </ol>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
