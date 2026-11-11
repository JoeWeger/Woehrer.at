import type { Metadata } from "next";
import { Container, PageHero } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { Placeholder } from "@/components/placeholder";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "Kontakt" };

export default async function Page({ searchParams }: { searchParams: Promise<{ betreff?: string; bereich?: string }> }) {
  const q = await searchParams;
  return (
    <>
      <PageHero no="06" kicker="Kontakt" title="Sprechen wir darüber." />
      <section className="py-16 md:py-28">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7"><ContactForm betreff={q.betreff} bereich={q.bereich} /></div>
          <aside className="space-y-10 lg:col-span-5">
            <address className="not-italic">
              <p className="label mb-3 text-ink-2">Telefon</p>
              <a className="link-line font-display text-3xl font-extrabold" href={`tel:${site.phoneHref}`}>{site.phone}</a>
              <p className="mt-1 text-ink-2">Fax {site.fax}</p>
              <p className="label mb-3 mt-8 text-ink-2">E-Mail</p>
              <a className="link-line font-display text-2xl font-extrabold" href={`mailto:${site.mail}`}>{site.mail}</a>
              <p className="label mb-3 mt-8 text-ink-2">Adresse</p>
              <p className="text-lg">{site.address.map((l) => <span key={l} className="block">{l}</span>)}</p>
              <p className="label mb-3 mt-8 text-ink-2">Bürozeiten</p>
              <p>Bitte Zeiten ergänzen <span className="text-ink-2">(Platzhalter)</span></p>
            </address>
            <Placeholder note="Karte · Linzer Straße 84, Traun" ratio="aspect-[4/3]" />
          </aside>
        </Container>
      </section>
    </>
  );
}
