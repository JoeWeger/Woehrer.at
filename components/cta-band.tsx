import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Rays } from "./logo";
import { Button } from "./ui/button";
import { Container } from "./section";
import { Reveal } from "./reveal";

export function CtaBand({ title = "Ihr Projekt. Unser Handwerk.", text = "Erzählen Sie uns kurz, was Sie vorhaben. Wir melden uns innerhalb von zwei Werktagen." }: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <Rays className="rays-slow pointer-events-none absolute -right-40 top-1/2 size-[720px] -translate-y-1/2 text-signal/10" rays={40} />
      <Container className="relative grid gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:items-end md:py-28">
        <Reveal><h2 className="text-[clamp(2.5rem,7vw,5.5rem)]">{title}</h2></Reveal>
        <Reveal delay={120}>
          <p className="mb-8 max-w-md text-paper/80">{text}</p>
          <Button asChild variant="onDark" size="lg"><Link href="/kontakt">Anfrage senden <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></Button>
        </Reveal>
      </Container>
    </section>
  );
}
