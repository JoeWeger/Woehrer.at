import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Rays } from "@/components/logo";
import { Container } from "@/components/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: { absolute: "Garagenbrennerei – Edelbrände in kleinen Mengen" },
  description: "Garagenbrennerei: Edelbrände und Feinbrände in kleinen Mengen, mit Verkostung auf Anfrage.",
};
export const viewport: Viewport = { themeColor: "#15100c" };

const nav = [["Geschichte", "#geschichte"], ["Sortiment", "#sortiment"], ["Verkostung", "#verkostung"]];

export default function BrennereiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="brennerei" className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur">
        <a href="#inhalt" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-signal focus:px-4 focus:py-2 focus:text-on-signal">Zum Inhalt springen</a>
        <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 md:px-10">
          <Link href="/garagenbrennerei" className="font-display text-xl font-black uppercase tracking-[0.06em] md:text-2xl" style={{ fontStretch: "125%" }}>
            Garagen<span className="text-signal">brennerei</span>
          </Link>
          <nav aria-label="Brennerei" className="flex items-center gap-7">
            {nav.map(([l, h]) => <a key={h} href={h} className="link-line hidden font-display text-sm font-bold uppercase tracking-[0.06em] md:inline">{l}</a>)}
            <Button asChild><a href="#kontakt">Anfragen <ArrowUpRight className="size-4" /></a></Button>
          </nav>
        </div>
      </header>
      <main id="inhalt">{children}</main>
      <footer className="relative overflow-hidden border-t-2 border-ink">
        <Rays className="pointer-events-none absolute -bottom-72 -right-48 size-[560px] text-signal/[0.08]" rays={48} />
        <Container className="relative flex flex-wrap items-end justify-between gap-8 py-12">
          <div>
            <p className="font-display text-2xl font-black uppercase" style={{ fontStretch: "125%" }}>Garagenbrennerei</p>
            <p className="label mt-3 text-ink-2">Abgabe von Spirituosen nur an Personen ab 18 Jahren. Bitte genießen Sie verantwortungsvoll.</p>
          </div>
          <div className="label flex flex-wrap gap-x-8 gap-y-2">
            <Link href="/" className="link-line">Zur Wöhrer Baugesellschaft</Link>
            <Link href="/impressum" className="link-line">Impressum</Link>
            <Link href="/datenschutz" className="link-line">Datenschutz</Link>
          </div>
        </Container>
      </footer>
    </div>
  );
}
