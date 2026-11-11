import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/section";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { formatPrice, properties } from "@/lib/data";

export const dynamicParams = false;
export const generateStaticParams = () => properties.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = properties.find((x) => x.slug === slug);
  return { title: p?.title ?? "Immobilie" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = properties.find((x) => x.slug === slug);
  if (!p) notFound();
  const rows = [["Ort", p.place], ["Fläche", `${p.area} m²`], ...(p.rooms ? [["Zimmer", String(p.rooms)]] : []), ["Angebot", p.mode]];
  return (
    <Container className="py-10 md:py-16">
      <Link href="/immobilien" className="label link-line inline-flex items-center gap-2"><ArrowLeft className="size-4" />Alle Immobilien</Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <Placeholder note="Hauptbild Objekt" ratio="aspect-[4/3]" />
          <div className="grid grid-cols-3 gap-4"><Placeholder note="Bild 2" ratio="aspect-square" /><Placeholder note="Bild 3" ratio="aspect-square" /><Placeholder note="Grundriss" ratio="aspect-square" /></div>
        </div>
        <aside className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <p className="label">{p.place}</p>
          <h1 className="mt-2 text-[clamp(2.5rem,5vw,4rem)] uppercase">{p.title}</h1>
          <p className="mt-6 font-display text-4xl font-extrabold">{formatPrice(p)}</p>
          <dl className="mt-8 border-y-2 border-ink">
            {rows.map(([k, v]) => <div key={k} className="flex justify-between border-b border-line-soft py-3 last:border-0"><dt className="label text-ink-2">{k}</dt><dd className="font-medium">{v}</dd></div>)}
          </dl>
          <p className="mt-8 text-ink-2">{p.text}</p>
          <Button asChild size="lg" className="mt-8 w-full"><Link href={`/kontakt?betreff=${encodeURIComponent(p.title + " " + p.place)}&bereich=immobilie`}>Besichtigung anfragen <ArrowUpRight className="size-5" /></Link></Button>
        </aside>
      </div>
    </Container>
  );
}
