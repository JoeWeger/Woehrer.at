import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "Wöhrer Baugesellschaft – Bau, Sanierung, Immobilien", template: "%s – Wöhrer" },
  description: "Wöhrer Baugesellschaft mit Sanierungskompetenz: Neubau, Umbau, Sanierung und Immobilien aus einer Hand.",
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
