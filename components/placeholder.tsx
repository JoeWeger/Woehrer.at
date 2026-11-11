import { cn } from "@/lib/utils";

// Bild-Platzhalter: später durch <Image> ersetzen. `note` beschreibt, was hier hingehört.
export function Placeholder({ note, ratio = "aspect-[4/3]", className }: { note: string; ratio?: string; className?: string }) {
  return (
    <div role="img" aria-label={`Platzhalter: ${note}`}
      className={cn("hatch relative flex items-end overflow-hidden border-2 border-ink bg-paper-2", ratio, className)}>
      <span className="label relative z-10 m-3 max-w-[calc(100%-1.5rem)] bg-paper px-2 py-1 text-ink">Bild · {note}</span>
      <svg aria-hidden className="absolute inset-0 h-full w-full text-ink/25" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}
