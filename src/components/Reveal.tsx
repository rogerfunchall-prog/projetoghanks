"use client";

/* Reveal — anima o conteúdo (fade + slide up) quando ele entra na viewport.
   Usa IntersectionObserver puro para não adicionar dependência de animação. */

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /* Atraso em ms — usado para escalonar itens de uma mesma grade */
  delay?: number;
  className?: string;
  /* Tag HTML renderizada; útil para manter semântica (li, article, section...) */
  as?: "div" | "li" | "article" | "section";
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
