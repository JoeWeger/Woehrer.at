"use client";
import { useEffect, useRef, useState } from "react";

export function Reveal({ children, delay = 0, as: Tag = "div", className = "" }:
  { children: React.ReactNode; delay?: number; as?: React.ElementType; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <Tag ref={ref} style={{ "--d": `${delay}ms` } as React.CSSProperties} className={`reveal ${on ? "is-in" : ""} ${className}`}>{children}</Tag>;
}
