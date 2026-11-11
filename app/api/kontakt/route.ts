import { NextResponse } from "next/server";

// PLATZHALTER: Hier E-Mail-Versand anbinden (z. B. Resend, SMTP, Formspree).
export async function POST(req: Request) {
  const d = await req.json().catch(() => null);
  if (!d?.name || !d?.mail || !d?.msg) return NextResponse.json({ ok: false }, { status: 400 });
  console.log("[kontakt]", { bereich: d.bereich, name: d.name });
  return NextResponse.json({ ok: true });
}
