"use client";

/* Counter — número que conta a partir do zero quando entra na viewport.
   Respeita prefers-reduced-motion, exibindo o valor final direto. */

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  /* Valor final da contagem */
  value: number;
  /* Sufixo exibido colado ao número (ex: "+", "%") */
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function Counter({
  value,
  suffix = "",
  duration = 1600,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          /* easeOutCubic — desacelera no fim, como os contadores do layout */
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}
