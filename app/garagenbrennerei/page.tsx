import { Rays } from "@/components/logo";
import { Placeholder } from "@/components/placeholder";
import { Container, SectionHead } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/data";

// Sortiment: Platzhalter, bitte durch die echten Brände ersetzen.
const range = [
  ["Obstbrand", "Aus reifem Obst der Region, sortenrein gebrannt.", "0,35 l · 40 % vol."],
  ["Edelbrand", "Fein, klar, mit langem Abgang. Kleine Chargen.", "0,35 l · 42 % vol."],
  ["Spezialität", "Eine saisonale Besonderheit, nur solange der Vorrat reicht.", "0,35 l · 43 % vol."],
];
const steps = [["01", "Auswahl", "Nur reifes, sauberes Obst."], ["02", "Maische", "Natürliche Gärung ohne Eile."], ["03", "Destillation", "Langsam, von Hand geführt."], ["04", "Reifung", "Ruhe, bis der Brand rund ist."]];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-x-clip border-b-2 border-ink grid-plan">
        <Rays className="rays-slow pointer-events-none absolute -right-40 top-10 size-[560px] text-signal/20 md:size-[760px]" rays={36} />
        <Container className="relative grid gap-10 py-16 md:grid-cols-12 md:py-28">
          <div className="md:col-span-7">
            <p className="label mb-6 flex items-center gap-3"><span className="inline-block size-3 bg-signal" />Edelbrände · kleine Mengen</p>
            <h1 className="text-[clamp(3rem,9vw,7.5rem)] uppercase">Aus der Garage.<br /><span className="text-signal">In die Flasche.</span></h1>
            <p className="mt-8 max-w-lg text-lg text-ink-2">Platzhaltertext: Handgemachte Edelbrände aus unserer eigenen Destillerie. Jede Charge ein Unikat.</p>
          </div>
          <Reveal className="md:col-span-5"><Placeholder note="Flasche / Destille" ratio="aspect-[4/5]" /></Reveal>
        </Container>
      </section>

      {/* GESCHICHTE */}
      <section id="geschichte" className="scroll-mt-20 py-20 md:py-32">
        <Container className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3"><p className="label pt-3">01 / Geschichte</p></Reveal>
          <Reveal delay={100} className="md:col-span-9">
            <p className="font-display text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-[1.1] tracking-tight" style={{ fontStretch: "100%" }}>
              Was in einer Garage beginnt, muss <span className="bg-signal px-1 text-on-signal [box-decoration-break:clone]">nicht klein denken</span>. Platzhalter: Hier erzählen wir, wie die Brennerei entstanden ist und was uns antreibt.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* HANDWERK */}
      <section className="border-y-2 border-ink py-16 md:py-24">
        <Container>
          <ol className="grid md:grid-cols-4">
            {steps.map(([n, t, d], i) => (
              <Reveal as="li" key={n} delay={i * 70} className="border-ink py-6 md:border-l-2 md:px-6 md:first:border-l-0 md:first:pl-0">
                <span className="label">{n}</span>
                <h3 className="mt-6 font-display text-2xl font-extrabold uppercase">{t}</h3>
                <p className="mt-2 text-ink-2">{d}</p>
              </Reveal>))}
          </ol>
        </Container>
      </section>

      {/* SORTIMENT */}
      <section id="sortiment" className="scroll-mt-20 py-20 md:py-32">
        <Container>
          <SectionHead no="02" kicker="Sortiment" title="Was im Glas landet." intro="Beispielsortiment. Bitte durch die echten Brände, Größen und Preise ersetzen." />
          <div className="grid gap-6 md:grid-cols-3">
            {range.map(([n, d, f], i) => (
              <Reveal key={n} delay={i * 80}>
                <article className="flex h-full flex-col border-2 border-ink">
                  <Placeholder note={n} ratio="aspect-[3/4]" className="border-0 border-b-2" />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-2xl font-extrabold uppercase">{n}</h3>
                    <p className="mt-2 text-ink-2">{d}</p>
                    <p className="label mt-auto pt-5 text-signal">{f}</p>
                  </div>
                </article>
              </Reveal>))}
          </div>
        </Container>
      </section>

      {/* VERKOSTUNG */}
      <section id="verkostung" className="scroll-mt-20 border-y-2 border-ink bg-signal text-on-signal">
        <Container className="grid gap-10 py-16 md:grid-cols-[1.3fr_1fr] md:items-end md:py-24">
          <div>
            <p className="label mb-5">03 / Verkostung</p>
            <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] uppercase">Probieren statt lesen.</h2>
          </div>
          <p className="max-w-md text-lg">Verkostungen für kleine Gruppen nach Vereinbarung. Wir zeigen die Destille und lassen Sie die Brände direkt probieren. Termine bitte anfragen.</p>
        </Container>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="scroll-mt-20 py-20 md:py-32">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHead no="04" kicker="Anfrage" title="Bestellen oder verkosten." className="mb-10 md:mb-12" />
            <ContactForm hint="Welche Brände, wie viele Flaschen, oder Wunschtermin für die Verkostung …" bereich="bestellung" betreff="Garagenbrennerei" areas={[["bestellung", "Bestellung"], ["verkostung", "Verkostung"], ["sonstiges", "Sonstiges"]]} />
          </div>
          <aside className="space-y-8 lg:col-span-5 lg:pt-32">
            <Placeholder note="Destillerie / Standort" ratio="aspect-[4/3]" />
            <p className="text-ink-2">Platzhalter: Adresse und Kontaktdaten der Brennerei bitte ergänzen. Bis dahin erreichen Sie uns über die Wöhrer Baugesellschaft: {site.phone}.</p>
          </aside>
        </Container>
      </section>
    </>
  );
}
