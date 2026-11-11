import type { Metadata } from "next";
import { Container, PageHero } from "@/components/section";

export const metadata: Metadata = { title: "Impressum", robots: { index: false } };

export default function Page() {
  return (
    <>
      <PageHero no="§" kicker="Rechtliches" title="Impressum" />
      <Container className="max-w-3xl py-16 md:py-24">
        <div className="space-y-4 text-ink-2">
          <p className="text-ink"><strong>Wöhrer Baugesellschaft mbH</strong><br />Linzer Straße 84, A-4050 Traun<br />Tel. 07229/72411-0 · Fax DW 20<br />office@woehrer.at</p>
          <p>Platzhalter: UID, Firmenbuchnummer und -gericht, Gewerbebehörde, Kammerzugehörigkeit und Geschäftsführung bitte aus dem bisherigen Impressum übernehmen.</p>
        </div>
      </Container>
    </>
  );
}
