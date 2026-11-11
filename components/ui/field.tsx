import * as React from "react";
import { cn } from "@/lib/utils";

const base = "w-full bg-transparent border-0 border-b-2 border-ink px-0 py-3 text-base placeholder:text-ink-2/60 focus:outline-none focus:border-blue focus:bg-paper-2/60 transition-colors rounded-none";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...p }, ref) => <input ref={ref} className={cn(base, className)} {...p} />);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...p }, ref) => <textarea ref={ref} className={cn(base, "min-h-32 resize-y", className)} {...p} />);
Textarea.displayName = "Textarea";

export function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="label block text-ink-2">{label}</label>
      {children}
    </div>
  );
}
