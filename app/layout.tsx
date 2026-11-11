import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Wöhrer Baugesellschaft – Bau, Sanierung, Immobilien", template: "%s – Wöhrer" },
  description: "Der Baumeister mit Sanierungskompetenz in Traun bei Linz: Neubau, Umbau, Althaus-, Brand- und Wasserschadensanierung, Kellertrockenlegung, Hoch- und Tiefbau.",
  keywords: ["Baufirma Traun", "Baufirma Linz", "Baumeister", "Sanierung", "Althaussanierung", "Brandschadensanierung", "Wasserschadensanierung", "Kellertrockenlegung", "Umbau", "Neubau", "Hochbau", "Tiefbau", "Wohnbau", "Immobilien", "Wöhrer"],
};
export const viewport: Viewport = { themeColor: "#f4f2ec" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
