/* SectionHeading — padrão de cabeçalho de seção do site:
   etiqueta curta em caixa alta + título grande (+ texto de apoio opcional).
   Em "split", a etiqueta fica à esquerda e o título à direita no desktop. */

import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /* center: tudo centralizado | split: etiqueta à esquerda, título à direita */
  variant?: "center" | "split";
  /* Aplica cores claras para uso sobre fundo escuro */
  tone?: "light" | "dark";
  className?: string;
}

function Eyebrow({ children, tone }: { children: string; tone: "light" | "dark" }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] ${
        tone === "dark" ? "text-white/70" : "text-ghanks-gray"
      }`}
    >
      <span className="flex items-center gap-1" aria-hidden="true">
        <span className="w-1.5 h-1.5 rounded-full bg-ghanks-blue" />
        <span className="w-1.5 h-1.5 rounded-full bg-ghanks-red" />
        <span className="w-1.5 h-1.5 rounded-full bg-ghanks-yellow" />
        <span className="w-1.5 h-1.5 rounded-full bg-ghanks-green" />
      </span>
      {children}
    </span>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  variant = "center",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const titleColor = tone === "dark" ? "text-white" : "text-ghanks-gray";
  const descColor = tone === "dark" ? "text-white/70" : "text-gray-500";

  if (variant === "split") {
    return (
      <div className={`grid lg:grid-cols-12 gap-4 lg:gap-10 items-start ${className}`}>
        <Reveal className="lg:col-span-4 lg:pt-3">
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-8">
          <h2 className={`section-title ${titleColor}`}>{title}</h2>
          {description && <p className={`mt-4 lead ${descColor}`}>{description}</p>}
        </Reveal>
      </div>
    );
  }

  return (
    <div className={`text-center max-w-3xl mx-auto ${className}`}>
      <Reveal>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={100}>
        <h2 className={`section-title mt-4 ${titleColor}`}>{title}</h2>
        {description && <p className={`mt-5 lead ${descColor}`}>{description}</p>}
      </Reveal>
    </div>
  );
}
