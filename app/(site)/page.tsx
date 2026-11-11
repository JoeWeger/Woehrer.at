import Link from "next/link";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Rays } from "@/components/logo";
import { Placeholder } from "@/components/placeholder";
import { Container, SectionHead } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import { ProjectCard, PropertyCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { facts, partners, projects, properties, services, site } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-x-clip border-b-2 border-ink">
        <div className="relative">
          <Placeholder note="Hero – Referenzprojekt, Querformat 16:9" ratio="h-[32svh] min-h-[220px] sm:h-[42svh] lg:h-[calc(100svh-72px-330px)] lg:min-h-[280px] lg:max-h-[640px]" className="border-0 [&>span]:absolute [&>span]:left-5 [&>span]:top-5 [&>span]:m-0" />
          <Rays className="rays-slow pointer-events-none absolute -bottom-40 -right-24 size-[420px] text-signal/90 mix-blend-multiply md:-bottom-64 md:size-[640px]" rays={36} />
        </div>
        <Container className="relative">
          <div className="-mt-16 grid gap-8 border-2 border-ink bg-paper p-6 md:-mt-24 md:grid-cols-[1fr_auto] md:items-end md:p-12">
            <div>
              <p className="label mb-5 flex items-center gap-3"><span className="inline-block size-3 bg-signal outline outline-2 outline-ink" />Baugesellschaft · seit {site.founded} in Traun</p>
              <h1 className="text-[clamp(2.6rem,7.2vw,6.5rem)] uppercase">Wir bauen,<br />was bleibt.</h1>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
              <Button asChild size="lg"><Link href="/kontakt">Projekt anfragen <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/projekte">Referenzen ansehen <ArrowDown className="size-5 -rotate-90" /></Link></Button>
            </div>
          </div>
        </Container>
        <div className="h-16 md:h-24" />
      </section>

      {/* MANIFEST */}
      <section className="py-20 md:py-32">
        <Container className="grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-3"><p className="label pt-3">01 / Haltung</p></Reveal>
          <Reveal delay={100} className="md:col-span-9">
            <p className="font-display text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-[1.1] tracking-tight" style={{ fontStretch: "100%" }}>
              Willkommen bei Ihrem <span className="bg-signal px-1 [box-decoration-break:clone]">Umbau- und Sanierungsexperten</span>. Seit 1951 bauen wir in dritter Generation: von der Beratung über die Sanierung bis zum Neubau, mit Baumeister-Handschlag.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* LEISTUNGEN */}
      <section className="border-y-2 border-ink grid-plan py-20 md:py-32">
        <Container>
          <SectionHead no="02" kicker="Leistungen" title="Was wir für Sie tun." />
          <ul className="border-t-2 border-ink bg-paper">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 60} className="border-b-2 border-ink">
                <Link href={`/leistungen#${s.slug}`} className="group grid items-baseline gap-2 px-2 py-7 transition-colors hover:bg-signal md:grid-cols-[4rem_1.7fr_1fr_3rem] md:gap-6 md:px-6 md:py-9">
                  <span className="label">{s.n}</span>
                  <h3 className="min-w-0 font-display text-[1.7rem] font-extrabold uppercase [overflow-wrap:anywhere] md:text-[2.6rem] md:[overflow-wrap:normal]">{s.title}</h3>
                  <p className="min-w-0 text-ink-2 group-hover:text-ink">{s.text}</p>
                  <ArrowUpRight className="hidden size-8 justify-self-end transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:block" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* PROJEKTE */}
      <section className="py-20 md:py-32">
        <Container>
          <SectionHead no="03" kicker="Referenzen" title="Ausgewählte Referenzen." />
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-12">
            <Reveal className="md:col-span-7"><ProjectCard p={projects[0]} ratio="aspect-[4/3]" /></Reveal>
            <Reveal delay={100} className="md:col-span-5 md:mt-24"><ProjectCard p={projects[1]} ratio="aspect-[4/5]" /></Reveal>
            <Reveal className="md:col-span-5"><ProjectCard p={projects[2]} ratio="aspect-[4/5]" /></Reveal>
            <Reveal delay={100} className="md:col-span-7 md:mt-24"><ProjectCard p={projects[3]} ratio="aspect-[4/3]" /></Reveal>
          </div>
          <div className="mt-16"><Button asChild variant="ink" size="lg"><Link href="/projekte">Alle Referenzen <ArrowUpRight className="size-5" /></Link></Button></div>
        </Container>
      </section>

      {/* ZAHLEN */}
      <section className="border-y-2 border-ink bg-signal text-on-signal">
        <Container>
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {facts.map((f, i) => (
              <div key={f.label} className={`border-ink p-5 py-10 md:p-8 md:py-14 ${i % 2 === 0 ? "border-r-2" : ""} ${i < 2 ? "border-b-2 md:border-b-0" : ""} ${i === 1 ? "md:border-r-2" : ""} ${i === 3 ? "md:border-r-0" : ""}`}>
                <dd className="font-display text-[clamp(2.75rem,6vw,5rem)] font-black leading-none" style={{ fontStretch: "115%" }}><Counter value={f.value} suffix={f.suffix} /></dd>
                <dt className="label mt-3">{f.label}</dt>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* IMMOBILIEN */}
      <section className="py-20 md:py-32">
        <Container>
          <SectionHead no="04" kicker="Immobilien" title="Zuhause finden. Anlage sichern." intro="Wohnungen, Häuser, Gewerbeflächen und Baugrund, direkt von Ihrem Bauunternehmen." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.slice(0, 3).map((p, i) => <Reveal key={p.slug} delay={i * 80}><PropertyCard p={p} /></Reveal>)}
          </div>
          <div className="mt-12"><Button asChild variant="outline" size="lg"><Link href="/immobilien">Alle Immobilien <ArrowUpRight className="size-5" /></Link></Button></div>
        </Container>
      </section>

      {/* PARTNER + BAUMEISTER */}
      <section className="border-t-2 border-ink">
        <div className="grid md:grid-cols-2">
          <div className="min-w-0 px-5 py-14 md:border-r-2 md:border-ink md:p-16">
            <p className="label mb-5">Aktive Partnerschaften</p>
            <ul className="divide-y-2 divide-ink border-y-2 border-ink">
              {partners.map((n) => (<li key={n} className="flex items-center justify-between gap-4 py-5 font-display text-xl font-extrabold uppercase md:text-2xl">{n}<span className="label text-ink-2">Logo</span></li>))}
            </ul>
          </div>
          <div className="min-w-0 bg-ink px-5 py-14 text-paper md:p-16">
            <p className="label mb-5 text-signal">Qualität</p>
            <h2 className="text-[clamp(1.9rem,4.2vw,3.5rem)] uppercase">Bauen heißt Vertrauen.</h2>
            <p className="mt-6 max-w-md text-paper/80">Als Baumeisterbetrieb stehen wir für fachgerechte Ausführung und Handschlagqualität, seit 1951.</p>
            <p className="label mt-8 flex items-center gap-3 text-paper"><span aria-hidden className="grid size-10 place-items-center border-2 border-paper font-display font-black">BM</span>Baumeister-Logo folgt</p>
          </div>
        </div>
      </section>

      {/* BRENNEREI */}
      <section className="border-t-2 border-ink">
        <div className="grid grid-cols-[minmax(0,1fr)] items-stretch md:grid-cols-2">
          <div className="min-w-0 border-ink px-5 py-12 md:border-r-2 md:p-16">
            <p className="label mb-5">05 / Abseits der Baustelle</p>
            <h2 className="text-[clamp(1.9rem,4.2vw,3.5rem)] [overflow-wrap:anywhere]">Garagen&shy;brennerei.</h2>
            <p className="mt-6 max-w-md text-ink-2">Edelbrände aus kleinen Mengen, mit derselben Sorgfalt wie unsere Bauwerke. Eine eigene Welt, im selben Geist.</p>
            <Button asChild variant="ink" className="mt-8"><a href={site.brennereiUrl}>Zur Brennerei <ArrowUpRight className="size-4" /></a></Button>
          </div>
          <Placeholder note="Brennerei – Destille / Flaschen" ratio="aspect-[4/3] md:aspect-auto md:min-h-[360px]" className="border-0" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
