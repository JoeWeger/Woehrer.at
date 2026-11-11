"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "./ui/button";

const nav = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/projekte", label: "Projekte" },
  { href: "/immobilien", label: "Immobilien" },
  { href: "/ueber-uns", label: "Über uns" },
];

export function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <a href="#inhalt" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-signal focus:px-4 focus:py-2 focus:text-on-signal">Zum Inhalt springen</a>
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 md:px-10">
        <Link href="/" aria-label="Wöhrer – Startseite"><Logo /></Link>
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path.startsWith(n.href) ? "page" : undefined}
              className={`link-line font-display text-sm font-bold uppercase tracking-[0.06em] ${path.startsWith(n.href) ? "text-blue" : ""}`}>{n.label}</Link>
          ))}
          <Button asChild size="default"><Link href="/kontakt">Anfragen <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></Button>
        </nav>
        <button className="grid size-12 place-items-center border-2 border-ink md:hidden" aria-expanded={open} aria-controls="mobilnav" aria-label={open ? "Menü schließen" : "Menü öffnen"} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav id="mobilnav" aria-label="Mobile Navigation" className="fixed inset-x-0 bottom-0 top-[72px] overflow-auto bg-paper px-5 pb-10 pt-6 md:hidden">
          <ul className="divide-y-2 divide-ink border-y-2 border-ink">
            {nav.map((n, i) => (
              <li key={n.href}><Link href={n.href} className="flex items-baseline gap-4 py-5 font-display text-4xl font-extrabold uppercase"><span className="label">0{i + 1}</span>{n.label}</Link></li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8 w-full"><Link href="/kontakt">Projekt anfragen</Link></Button>
        </nav>
      )}
    </header>
  );
}
