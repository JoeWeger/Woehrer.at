import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero } from "@/components/section";
import { ProjectCard } from "@/components/cards";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { categories, projects } from "@/lib/data";

export const metadata: Metadata = { title: "Referenzen" };

export default async function Page({ searchParams }: { searchParams: Promise<{ kategorie?: string }> }) {
  const { kategorie } = await searchParams;
  const active = categories.find((c) => c === kategorie);
  const list = active ? projects.filter((p) => p.type === active) : projects;
  const chip = "inline-block min-h-11 border-2 border-ink px-4 py-2.5 font-display text-sm font-bold uppercase transition-colors";
  return (
    <>
      <PageHero no="03" kicker="Referenzen" title="Bilder sagen mehr als Worte." intro="Ein kleiner Auszug aus unseren Bauvorhaben. Projektdaten sind derzeit Beispiele." />
      <section className="py-16 md:py-28">
        <Container>
          <nav aria-label="Kategorien" className="mb-12 flex flex-wrap gap-2">
            <Link href="/projekte" aria-current={!active ? "true" : undefined} className={`${chip} ${!active ? "bg-ink text-paper" : "hover:bg-signal"}`}>Alle</Link>
            {categories.map((c) => (
              <Link key={c} href={`/projekte?kategorie=${encodeURIComponent(c)}`} aria-current={active === c ? "true" : undefined} className={`${chip} ${active === c ? "bg-ink text-paper" : "hover:bg-signal"}`}>{c}</Link>))}
          </nav>
          {list.length === 0 && <p className="text-ink-2">In dieser Kategorie sind noch keine Projekte hinterlegt.</p>}
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 80}><ProjectCard p={p} /></Reveal>)}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
