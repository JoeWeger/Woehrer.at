import type { Metadata } from "next";
import { Container, PageHero } from "@/components/section";
import { ProjectCard } from "@/components/cards";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { projects } from "@/lib/data";

export const metadata: Metadata = { title: "Projekte" };

export default function Page() {
  return (
    <>
      <PageHero no="03" kicker="Referenzen" title="Gebaut. Übergeben. Genutzt." intro="Eine Auswahl unserer realisierten Bauvorhaben. Alle Inhalte sind Platzhalter." />
      <section className="py-16 md:py-28">
        <Container>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 80}><ProjectCard p={p} /></Reveal>)}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
