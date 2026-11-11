import type { Metadata } from "next";
import { Container, PageHero } from "@/components/section";

export const metadata: Metadata = { title: "Datenschutzerklärung", robots: { index: false } };

export default function Page() {
  return (
    <>
      <PageHero no="§" kicker="Rechtliches" title="Datenschutzerklärung" />
      <Container className="max-w-3xl py-16 md:py-24">
        <div className="space-y-4 text-ink-2">
          <p>Platzhalter: Rechtstexte bitte vom Unternehmen bzw. einer Rechtsberatung liefern lassen. Firmenwortlaut, Sitz, UID, Firmenbuchnummer, Gewerbebehörde und Kammerzugehörigkeit gehören hier hinein.</p>
        </div>
      </Container>
    </>
  );
}
