/* StatsCounter — faixa de indicadores de operação, com textos qualitativos
   para evitar claims numéricos não verificáveis. */

import Reveal from "./Reveal";

const STATS = [
  {
    label: "Palavras-chave posicionadas em diversas cidades do Brasil",
    cor: "text-ghanks-blue",
    icone: "📈",
  },
  {
    label: "Empresas atendidas em múltiplos segmentos",
    cor: "text-ghanks-green",
    icone: "🏢",
  },
  {
    label: "Anos de experiência em tecnologia e SEO",
    cor: "text-ghanks-yellow",
    icone: "⚡",
  },
  {
    label: "Escritórios em São Paulo e Limeira",
    cor: "text-ghanks-red",
    icone: "📍",
  },
];

export default function StatsCounter() {
  return (
    <section className="relative bg-ghanks-ink overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/4 w-[30rem] h-[30rem] rounded-full bg-ghanks-blue/10 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {STATS.map((stat, i) => (
            <Reveal as="li" key={stat.label} delay={i * 100} className="text-center lg:text-left">
              <div className={`text-4xl md:text-5xl mb-3`}>{stat.icone}</div>
              <p className="text-sm text-white/70 leading-snug">{stat.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
