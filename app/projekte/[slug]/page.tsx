import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/section";
import { Placeholder } from "@/components/placeholder";
import { CtaBand } from "@/components/cta-band";
import { projects } from "@/lib/data";

export const dynamicParams = false;
export const generateStaticParams = () => projects.map((p) => ({ slug: p.slug }));
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p?.title ?? "Projekt" };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const meta = [["Art", p.type], ["Ort", p.place], ["Fertigstellung", String(p.year)], ["Fläche", p.area]];
  return (
    <>
      <Container className="pt-10 md:pt-16">
        <Link href="/projekte" className="label link-line inline-flex items-center gap-2"><ArrowLeft className="size-4" />Alle Projekte</Link>
        <h1 className="mt-8 text-[clamp(2.75rem,8vw,7rem)] uppercase">{p.title}</h1>
        <dl className="mt-10 grid grid-cols-2 border-y-2 border-ink md:grid-cols-4">
          {meta.map(([k, v]) => (
            <div key={k} className="border-ink px-0 py-5 md:border-l-2 md:px-6 md:first:border-l-0 md:first:pl-0">
              <dt className="label text-ink-2">{k}</dt><dd className="mt-1 font-display text-xl font-bold">{v}</dd>
            </div>))}
        </dl>
      </Container>
      <Container className="py-12 md:py-20">
        <Placeholder note="Hauptbild Projekt" ratio="aspect-[16/9]" />
        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <p className="max-w-2xl text-xl text-ink-2 md:col-span-7">{p.text}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Placeholder note="Detail 1" /><Placeholder note="Detail 2" />
        </div>
      </Container>
      <CtaBand />
    </>
  );
}
