// Vereinfachte Nachbildung des Logos (Strahlensonne, W mit Zirkel, Wortmarke).
// TODO: Original-Logo als SVG nach /public/logo.svg legen und hier einsetzen.
export function Rays({ className = "", rays = 32 }: { className?: string; rays?: number }) {
  const items = Array.from({ length: rays }, (_, i) => {
    const a = (i / rays) * Math.PI * 2;
    const w = Math.PI / rays * 0.55;
    const r = 100;
    const p = (ang: number) => `${100 + Math.cos(ang) * r},${100 + Math.sin(ang) * r}`;
    return <polygon key={i} points={`100,100 ${p(a - w)} ${p(a + w)}`} />;
  });
  return <svg viewBox="0 0 200 200" aria-hidden className={className} fill="currentColor">{items}</svg>;
}

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <g className="text-signal" fill="currentColor" transform="translate(0 6)">
        {Array.from({ length: 13 }, (_, i) => {
          const a = Math.PI + (i / 12) * Math.PI;
          const w = 0.07;
          const p = (ang: number) => `${50 + Math.cos(ang) * 50},${70 + Math.sin(ang) * 66}`;
          return <polygon key={i} points={`50,70 ${p(a - w)} ${p(a + w)}`} />;
        })}
      </g>
      <path d="M22 28 L36 74 L50 40 L64 74 L78 28" fill="none" stroke="var(--blue)" strokeWidth="9" strokeLinejoin="miter" />
    </svg>
  );
}

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="Wöhrer Baugesellschaft">
      <LogoMark />
      <span className={`flex flex-col leading-none ${onDark ? "text-paper" : "text-ink"}`}>
        <span className="font-display text-2xl font-black tracking-[0.04em]" style={{ fontStretch: "125%" }}>WÖHRER</span>
        <span className="label mt-1 !text-[0.62rem] tracking-[0.2em]">Baugesellschaft</span>
      </span>
    </span>
  );
}
