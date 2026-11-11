import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo, Rays } from "./logo";
import { Container } from "./section";
import { site } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <Rays className="pointer-events-none absolute -bottom-72 -right-48 size-[640px] text-signal/[0.07]" rays={48} />
      <Container className="relative py-16 md:py-24">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo onDark />
            <p className="mt-8 max-w-sm text-paper/75">Neubau, Umbau und Sanierung aus einer Hand. Verlässlich, termintreu, sauber gebaut.</p>
          </div>
          <div className="md:col-span-3">
            <h2 className="label mb-5 !font-mono !text-xs !font-normal text-signal" style={{ fontStretch: "100%", letterSpacing: "0.08em" }}>Kontakt</h2>
            <address className="not-italic leading-relaxed text-paper/90">
              {site.address.map((l) => <div key={l}>{l}</div>)}
              <a className="link-line mt-4 block w-fit" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              <a className="link-line block w-fit" href={`mailto:${site.mail}`}>{site.mail}</a>
            </address>
          </div>
          <nav aria-label="Footer" className="md:col-span-2">
            <h2 className="label mb-5 !font-mono !text-xs !font-normal text-signal" style={{ fontStretch: "100%", letterSpacing: "0.08em" }}>Seiten</h2>
            <ul className="space-y-2">
              {[["Leistungen", "/leistungen"], ["Projekte", "/projekte"], ["Immobilien", "/immobilien"], ["Über uns", "/ueber-uns"], ["Kontakt", "/kontakt"]].map(([l, h]) => (
                <li key={h}><Link className="link-line" href={h}>{l}</Link></li>))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <h2 className="label mb-5 !font-mono !text-xs !font-normal text-signal" style={{ fontStretch: "100%", letterSpacing: "0.08em" }}>Auch von uns</h2>
            <a href={site.brennereiUrl} className="group inline-flex items-center gap-2 border-b-2 border-signal pb-1 font-display text-sm font-bold uppercase">
              Garagenbrennerei <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
        <div className="label mt-16 flex flex-wrap justify-between gap-4 border-t border-paper/25 pt-6 text-paper/60">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span className="flex gap-6"><Link href="/impressum" className="hover:text-paper">Impressum</Link><Link href="/datenschutz" className="hover:text-paper">Datenschutz</Link></span>
        </div>
      </Container>
    </footer>
  );
}
