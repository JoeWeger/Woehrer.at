"use client";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Field, Input, Textarea } from "./ui/field";

const areas = [["bau", "Bauprojekt"], ["sanierung", "Sanierung"], ["immobilie", "Immobilie"], ["sonstiges", "Sonstiges"]];

export function ContactForm({ betreff = "", bereich = "bau" }: { betreff?: string; bereich?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [area, setArea] = useState(bereich);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const r = await fetch("/api/kontakt", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setState(r.ok ? "ok" : "error");
    } catch { setState("error"); }
  }

  if (state === "ok") return (
    <div role="status" className="border-2 border-ink bg-signal p-8 text-on-signal">
      <Check className="size-8" /><h2 className="mt-4 text-3xl uppercase">Danke, wir melden uns.</h2>
      <p className="mt-2">Ihre Nachricht ist bei uns angekommen. Antwort innerhalb von zwei Werktagen.</p>
    </div>);

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate={false}>
      <fieldset>
        <legend className="label mb-3 text-ink-2">Worum geht es?</legend>
        <div className="flex flex-wrap gap-2">
          {areas.map(([v, l]) => (
            <label key={v} className="cursor-pointer">
              <input type="radio" name="bereich" value={v} checked={area === v} onChange={() => setArea(v)} className="peer sr-only" />
              <span className="inline-block min-h-11 border-2 border-ink px-4 py-2.5 font-display text-sm font-bold uppercase transition-colors peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ring hover:bg-signal peer-checked:hover:bg-ink">{l}</span>
            </label>))}
        </div>
      </fieldset>
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Name *" htmlFor="name"><Input id="name" name="name" required autoComplete="name" placeholder="Vor- und Nachname" /></Field>
        <Field label="Telefon" htmlFor="tel"><Input id="tel" name="tel" type="tel" autoComplete="tel" placeholder="+43 …" /></Field>
      </div>
      <Field label="E-Mail *" htmlFor="mail"><Input id="mail" name="mail" type="email" required autoComplete="email" placeholder="name@beispiel.at" /></Field>
      <Field label="Betreff" htmlFor="betreff"><Input id="betreff" name="betreff" defaultValue={betreff} placeholder="Kurz und knapp" /></Field>
      <Field label="Nachricht *" htmlFor="msg"><Textarea id="msg" name="msg" required placeholder="Was haben Sie vor? Ort, Zeitrahmen, Größe …" /></Field>
      <p className="text-sm text-ink-2">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben gemäß <a className="link-line text-blue" href="/datenschutz">Datenschutzerklärung</a> zu.</p>
      <div className="flex flex-wrap items-center gap-6">
        <Button type="submit" size="lg" disabled={state === "sending"}>{state === "sending" ? "Wird gesendet …" : "Nachricht senden"}<ArrowUpRight className="size-5" /></Button>
        {state === "error" && <p role="alert" className="font-medium text-[#b3261e]">Das hat leider nicht geklappt. Bitte rufen Sie uns an oder schreiben Sie direkt.</p>}
      </div>
    </form>
  );
}
