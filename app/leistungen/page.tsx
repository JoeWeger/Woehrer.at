import type { Metadata } from "next";
import { Container, PageHero } from "@/components/section";
import { Placeholder } from "@/components/placeholder";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/lib/data";

export const metadata: Metadata = { title: "Leistungen" };

const steps = ["Beratung & Aufmaß", "Planung & Angebot", "Ausführung", "Übergabe & Gewährleistung"];

export default function Page() {
  return (
    <>
      <PageHero no="02" kicker="Leistungen" title="Bauen. Umbauen. Sanieren." intro="Platzhaltertext: Wir begleiten Ihr Vorhaben von der ersten Idee bis zur Übergabe – mit eigenem Know-how und verlässlichen Partnerbetrieben." />
      <section className="py-16 md:py-28">
        <Container className="space-y-20 md:space-y-32">
          {services.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid scroll-mt-28 gap-8 md:grid-cols-12 md:gap-12">
              <Reveal className={`md:col-span-5 ${i % 2 ? "md:order-2" : ""}`}><Placeholder note={s.title} ratio="aspect-[4/5]" /></Reveal>
              <Reveal delay={100} className={`md:col-span-7 ${i % 2 ? "md:order-1" : ""} flex flex-col justify-center`}>
                <p className="label mb-4">{s.n} / Leistung</p>
                <h2 className="text-[clamp(2.5rem,6vw,5rem)] uppercase">{s.title}</h2>
                <p className="mt-6 max-w-xl text-lg text-ink-2">{s.text} Platzhalter: Hier folgt eine ausführlichere Beschreibung mit typischen Aufgaben, Materialien und Referenzen.</p>
                <ul className="mt-8 max-w-xl divide-y divide-line-soft border-y-2 border-ink">
                  {["Leistungsmerkmal eins", "Leistungsmerkmal zwei", "Leistungsmerkmal drei"].map((l) => (
                    <li key={l} className="flex items-center gap-4 py-3"><span aria-hidden className="size-2 bg-signal outline outline-2 outline-ink" />{l}</li>))}
                </ul>
              </Reveal>
            </article>
          ))}
        </Container>
      </section>
      <section className="border-y-2 border-ink bg-paper-2 py-16 md:py-24">
        <Container>
          <p className="label mb-10">Ablauf</p>
          <ol className="grid gap-0 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s} className="border-ink py-6 md:border-l-2 md:px-6 md:first:border-l-0 md:first:pl-0">
                <span className="font-display text-6xl font-black text-blue" style={{ fontStretch: "120%" }}>{i + 1}</span>
                <p className="mt-3 font-display text-xl font-bold">{s}</p>
              </li>))}
          </ol>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
