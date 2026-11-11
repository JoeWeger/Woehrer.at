# woehrer.at – Redesign

Next.js (App Router) · Tailwind CSS v4 · shadcn-Stil (cva + Radix Slot)

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Wo wird was getauscht?
- **Inhalte (Platzhalter):** `lib/data.ts` – Kontakt, Leistungen, Projekte, Immobilien, Zahlen
- **Bilder:** `components/placeholder.tsx` durch `next/image` ersetzen (Beschriftung nennt das gewünschte Motiv)
- **Logo:** `components/logo.tsx` ist eine Nachbildung – Original-SVG in `/public` ablegen und dort einsetzen
- **Farben/Theme:** `app/globals.css` (Tokens). Zweites Theme für die Brennerei: `data-theme="brennerei"` am `<html>`
- **Kontaktformular:** `app/api/kontakt/route.ts` – Mailversand noch anbinden
- **Impressum/Datenschutz:** Platzhalter, Rechtstexte ergänzen
