import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "Wöhrer Baugesellschaft – Bau, Sanierung, Immobilien", template: "%s – Wöhrer" },
  description: "Der Baumeister mit Sanierungskompetenz in Traun bei Linz: Neubau, Umbau, Althaus-, Brand- und Wasserschadensanierung, Kellertrockenlegung, Hoch- und Tiefbau.",
  keywords: ["Baufirma Traun", "Baufirma Linz", "Baumeister", "Sanierung", "Althaussanierung", "Brandschadensanierung", "Wasserschadensanierung", "Kellertrockenlegung", "Umbau", "Neubau", "Hochbau", "Tiefbau", "Wohnbau", "Immobilien", "Wöhrer"],
};
export const viewport: Viewport = { themeColor: "#f4f2ec" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <SiteHeader />
        <main id="inhalt">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
