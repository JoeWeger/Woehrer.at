import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "group inline-flex items-center justify-center gap-3 border-2 border-ink font-display font-bold uppercase tracking-[0.04em] transition-[background,color,transform] duration-200 min-h-12 px-6 text-sm select-none focus-visible:outline-offset-4 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        signal: "bg-signal text-on-signal hover:bg-ink hover:text-paper",
        ink: "bg-ink text-paper hover:bg-signal hover:text-on-signal",
        outline: "bg-transparent text-ink hover:bg-ink hover:text-paper",
        onDark: "bg-signal text-on-signal border-signal hover:bg-paper hover:border-paper",
      },
      size: { default: "", lg: "min-h-14 px-8 text-base" },
    },
    defaultVariants: { variant: "signal", size: "default" },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  asChild?: boolean;
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...p }, ref) => {
    const C = asChild ? Slot : "button";
    return <C ref={ref} className={cn(button({ variant, size }), className)} {...p} />;
  }
);
Button.displayName = "Button";
