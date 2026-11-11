// Alle Inhalte sind Platzhalter – bitte durch echte Daten ersetzen.
export const site = {
  name: "Wöhrer Baugesellschaft",
  claim: "mit Sanierungskompetenz",
  phone: "+43 000 000 000",
  mail: "office@woehrer.at",
  address: ["Musterstraße 1", "0000 Musterort"],
  brennereiUrl: "https://brennerei.woehrer.at",
  founded: 1990,
};

export const services = [
  { n: "01", slug: "neubau", title: "Neubau", text: "Wohn-, Gewerbe- und Industriebau, geplant und gebaut aus einer Hand." },
  { n: "02", slug: "umbau", title: "Um- & Zubau", text: "Erweiterungen und Umbauten im Bestand – mit Blick auf Statik und Budget." },
  { n: "03", slug: "sanierung", title: "Sanierung", text: "Fassade, Dach, Feuchtigkeit, Energie. Unsere Kernkompetenz seit Jahren." },
  { n: "04", slug: "generalunternehmer", title: "Generalunternehmer", text: "Ein Ansprechpartner, ein Termin, ein Preis. Alle Gewerke koordiniert." },
];

export const projects = [
  { slug: "wohnanlage-musterort", title: "Wohnanlage Musterort", type: "Neubau", place: "Musterort", year: 2024, area: "3.200 m²", text: "Platzhalter: 24 Wohneinheiten in ruhiger Lage, fertiggestellt in 14 Monaten." },
  { slug: "villa-sanierung", title: "Villa Sanierung", type: "Sanierung", place: "Musterstadt", year: 2023, area: "420 m²", text: "Platzhalter: Denkmalgerechte Sanierung inklusive neuer Haustechnik." },
  { slug: "gewerbehalle", title: "Gewerbehalle", type: "Neubau", place: "Musterdorf", year: 2023, area: "1.800 m²", text: "Platzhalter: Stahlbetonhalle mit Büroanbau." },
  { slug: "dachausbau", title: "Dachgeschoss-Ausbau", type: "Umbau", place: "Musterstadt", year: 2022, area: "160 m²", text: "Platzhalter: Aufstockung in Holzbauweise auf bestehendem Altbau." },
  { slug: "fassade-wohnhaus", title: "Fassadensanierung", type: "Sanierung", place: "Musterort", year: 2022, area: "950 m²", text: "Platzhalter: Wärmedämmung und neue Putzfassade." },
  { slug: "einfamilienhaus", title: "Einfamilienhaus", type: "Neubau", place: "Musterdorf", year: 2021, area: "190 m²", text: "Platzhalter: Massivbau mit Satteldach, schlüsselfertig." },
];

export const properties = [
  { slug: "wohnung-musterstadt", title: "3-Zimmer-Wohnung", place: "Musterstadt", area: 82, rooms: 3, price: 289000, mode: "Kauf", text: "Platzhalter: Helle Neubauwohnung mit Balkon und Tiefgaragenplatz." },
  { slug: "haus-musterort", title: "Einfamilienhaus", place: "Musterort", area: 120, rooms: 5, price: 415000, mode: "Kauf", text: "Platzhalter: Familienhaus mit Garten, ruhige Siedlungslage." },
  { slug: "buero-musterdorf", title: "Büro / Praxis", place: "Musterdorf", area: 64, rooms: 2, price: 1150, mode: "Miete", text: "Platzhalter: Erdgeschoss, barrierefrei, Parkplätze vor dem Haus." },
  { slug: "grundstueck-muster", title: "Baugrund", place: "Musterstadt", area: 780, rooms: 0, price: 198000, mode: "Kauf", text: "Platzhalter: Aufgeschlossenes Baugrundstück, voll erschlossen." },
];

export const facts = [
  { value: 30, suffix: "+", label: "Jahre Erfahrung" },
  { value: 400, suffix: "+", label: "Projekte realisiert" },
  { value: 25, suffix: "", label: "Mitarbeitende" },
  { value: 100, suffix: "%", label: "Alles aus einer Hand" },
];

export const formatPrice = (p: { price: number; mode: string }) =>
  p.mode === "Miete" ? `€ ${p.price.toLocaleString("de-AT")} / Monat` : `€ ${p.price.toLocaleString("de-AT")}`;
