import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Placeholder } from "./placeholder";
import { formatPrice, projects, properties } from "@/lib/data";

export function ProjectCard({ p, ratio }: { p: (typeof projects)[number]; ratio?: string }) {
  return (
    <Link href={`/projekte/${p.slug}`} className="group block">
      <div className="overflow-hidden border-2 border-ink">
        <Placeholder note={`${p.title}`} ratio={ratio ?? "aspect-[4/3]"} className="border-0 transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 border-b-2 border-ink pb-4">
        <div>
          <h3 className="font-display text-2xl font-extrabold leading-tight">{p.title}</h3>
          <p className="label mt-2 text-ink-2">{p.type} · {p.place} · {p.year}</p>
        </div>
        <ArrowUpRight className="mt-1 size-6 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

export function PropertyCard({ p }: { p: (typeof properties)[number] }) {
  return (
    <Link href={`/immobilien/${p.slug}`} className="group flex flex-col border-2 border-ink bg-paper transition-colors hover:bg-paper-2">
      <div className="relative">
        <Placeholder note={p.title} ratio="aspect-[16/10]" className="border-0 border-b-2" />
        <span className="label absolute left-3 top-3 bg-signal px-2 py-1 text-on-signal">{p.mode}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="label text-ink-2">{p.place}</p>
        <h3 className="mt-1 font-display text-2xl font-extrabold">{p.title}</h3>
        <dl className="label mt-4 flex gap-5 text-ink-2">
          <div><dt className="sr-only">Fläche</dt><dd>{p.area} m²</dd></div>
          {p.rooms > 0 && <div><dt className="sr-only">Zimmer</dt><dd>{p.rooms} Zi</dd></div>}
        </dl>
        <div className="mt-auto flex items-end justify-between pt-6">
          <span className="font-display text-2xl font-extrabold">{formatPrice(p)}</span>
          <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
