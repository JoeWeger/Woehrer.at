// Inhalte: Firmendaten, Leistungen, Geschichte und Partner stammen von der bisherigen Website.
// Projekte, Immobilien, Team-Namen und Zahlen zu Mitarbeitenden sind weiterhin Beispiele.
export const site = {
  name: "Wöhrer Baugesellschaft mbH",
  claim: "mit Sanierungskompetenz",
  phone: "07229/72411-0",
  phoneHref: "+43722972411",
  fax: "DW 20",
  mail: "office@woehrer.at",
  address: ["Linzer Straße 84", "A-4050 Traun"],
  brennereiUrl: "https://brennerei.woehrer.at",
  founded: 1951,
};
export const years = new Date().getFullYear() - site.founded;

export const services = [
  { n: "01", slug: "neubau", title: "Neubau & Industriebau", text: "Wohnbau, Industriebau und öffentliche Bauten, vom ersten Spatenstich bis zur Übergabe.",
    items: ["Industriebau", "Öffentliche Bauten", "Neubau Wohn- und Gewerbe"] },
  { n: "02", slug: "umbau", title: "Um- & Zubau", text: "Erweiterungen und Umbauten im Bestand, inklusive Abbruch- und Stemmarbeiten.",
    items: ["Aus-, Um- und Zubauten", "Abbruch- und Stemmarbeiten", "Kostenvoranschläge"] },
  { n: "03", slug: "sanierung", title: "Sanierung", text: "Unsere Kernkompetenz: Sanieren, Renovieren und Instandsetzen mit Substanz.",
    items: ["Sanierungen", "Renovierungen", "Wohnungs-Instandsetzungen", "Instandhaltungs- und Instandsetzungsarbeiten"] },
  { n: "04", slug: "kanal", title: "Kanal", text: "Kanalbau und Leitungsarbeiten für Gemeinden, Betriebe und Private.",
    items: ["Kanalbau", "Anschlüsse und Leitungen", "Kostenvoranschläge"] },
];

export const categories = ["Privat", "Sanierung", "Neubau", "Zu- und Umbau", "Gewerbe"] as const;

export const projects: { slug: string; title: string; type: (typeof categories)[number]; place: string; year: number; area: string; text: string }[] = [
  { slug: "tankstelle", title: "Tankstelle mit Shop", type: "Gewerbe", place: "Oberösterreich", year: 2022, area: "–", text: "Beispiel: Neubau einer Tankstelle mit Shop und Waschstraße. Text bitte ersetzen." },
  { slug: "wohnhaus-pool", title: "Wohnhaus mit Terrasse", type: "Privat", place: "Oberösterreich", year: 2021, area: "–", text: "Beispiel: Privates Wohnhaus mit Holzterrasse und Pool. Text bitte ersetzen." },
  { slug: "kindergarten", title: "Bildungseinrichtung", type: "Neubau", place: "Oberösterreich", year: 2020, area: "–", text: "Beispiel: Öffentlicher Bau mit farbigem Außenbereich. Text bitte ersetzen." },
  { slug: "villa-sanierung", title: "Villa Sanierung", type: "Sanierung", place: "Oberösterreich", year: 2023, area: "–", text: "Beispiel: Umfassende Sanierung eines Bestandsgebäudes. Text bitte ersetzen." },
  { slug: "dachausbau", title: "Dachgeschoss-Ausbau", type: "Zu- und Umbau", place: "Oberösterreich", year: 2022, area: "–", text: "Beispiel: Aufstockung auf bestehendem Altbau. Text bitte ersetzen." },
  { slug: "gewerbehalle", title: "Gewerbehalle", type: "Gewerbe", place: "Oberösterreich", year: 2023, area: "–", text: "Beispiel: Halle mit Büroanbau. Text bitte ersetzen." },
];

export const properties = [
  { slug: "wohnung-traun", title: "3-Zimmer-Wohnung", place: "Traun", area: 82, rooms: 3, price: 289000, mode: "Kauf", text: "Beispiel: Helle Neubauwohnung mit Balkon und Tiefgaragenplatz." },
  { slug: "haus-umgebung", title: "Einfamilienhaus", place: "Umgebung Linz", area: 120, rooms: 5, price: 415000, mode: "Kauf", text: "Beispiel: Familienhaus mit Garten, ruhige Siedlungslage." },
  { slug: "buero-traun", title: "Büro / Praxis", place: "Traun", area: 64, rooms: 2, price: 1150, mode: "Miete", text: "Beispiel: Erdgeschoss, barrierefrei, Parkplätze vor dem Haus." },
  { slug: "grundstueck", title: "Baugrund", place: "Oberösterreich", area: 780, rooms: 0, price: 198000, mode: "Kauf", text: "Beispiel: Aufgeschlossenes Baugrundstück, voll erschlossen." },
];

export const facts = [
  { value: years, suffix: "", label: "Jahre Familienbetrieb" },
  { value: 3, suffix: "", label: "Generationen" },
  { value: 4, suffix: "", label: "Leistungsfelder" },
  { value: 1, suffix: "", label: "Ansprechpartner" },
];

export const history: [string, string][] = [
  ["1951", "Firmengründung von Karl Wöhrer"],
  ["1955", "Baumeisterprüfung Karl Wöhrer"],
  ["1970", "Die 2. Generation, Manfred Wöhrer, tritt in das Unternehmen ein"],
  ["1973", "Brigitte Wöhrer tritt als Lohnverrechnerin ein und unterstützt Rosa Wöhrer im Büro"],
  ["1975", "Übernahme der Linzer Tiefbaufirma Pöchtrager"],
  ["1976", "Baumeisterprüfung Manfred Wöhrer und Vereinigung Wöhrer und Pöchtrager zu einer GmbH"],
  ["1982", "Gründergeneration tritt in den Ruhestand"],
  ["1993", "HTL-Matura der 3. Generation, Christoph Wöhrer, anschließend Praxis bei der Firma Mandlbauer in Bad Gleichenberg (Steiermark)"],
  ["2003", "Baumeisterprüfung von Ing. Christoph Wöhrer"],
  ["2008", "Gisela Wöhrer steigt in die Firma ein und unterstützt Brigitte Wöhrer im Büro"],
  ["2010", "Manfred und Brigitte Wöhrer treten in den Ruhestand, die 3. Generation übernimmt das Familienunternehmen"],
];

export const partners = ["Burghart", "Malereibetrieb Niederleitner GmbH"];

export const formatPrice = (p: { price: number; mode: string }) =>
  p.mode === "Miete" ? `€ ${p.price.toLocaleString("de-AT")} / Monat` : `€ ${p.price.toLocaleString("de-AT")}`;
