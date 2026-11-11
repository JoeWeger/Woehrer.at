import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

// Abschnittskopf mit Plan-Nummer und Maßlinie
export function SectionHead({ no, kicker, title, intro, className }: { no: string; kicker: string; title: React.ReactNode; intro?: string; className?: string }) {
  return (
    <header className={cn("mb-12 md:mb-16", className)}>
      <Reveal>
        <div className="mb-6 flex items-center gap-4">
          <span className="label">{no}</span>
          <span aria-hidden className="relative h-px flex-1 bg-ink">
            <span className="absolute -left-px -top-1.5 h-3 w-px bg-ink" />
            <span className="absolute -right-px -top-1.5 h-3 w-px bg-ink" />
          </span>
          <span className="label">{kicker}</span>
        </div>
      </Reveal>
      <Reveal delay={80}><h2 className="max-w-4xl text-[clamp(2.25rem,6vw,4.75rem)]">{title}</h2></Reveal>
      {intro && <Reveal delay={160}><p className="mt-6 max-w-2xl text-lg text-ink-2">{intro}</p></Reveal>}
    </header>
  );
}

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1320px] px-5 md:px-10", className)}>{children}</div>;
}

export function PageHero({ no, kicker, title, intro }: { no: string; kicker: string; title: React.ReactNode; intro?: string }) {
  return (
    <section className="grid-plan border-b-2 border-ink">
      <Container className="pb-16 pt-20 md:pb-24 md:pt-32">
        <SectionHead no={no} kicker={kicker} title={title} intro={intro} className="mb-0" />
      </Container>
    </section>
  );
}
