/* StatsCounter — faixa de números de operação, com contagem animada ao
   entrar na viewport. Todos os dados já existiam no site. */

import Counter from "./Counter";
import Reveal from "./Reveal";

const STATS = [
  {
    value: 1200,
    suffix: "+",
    label: "Palavras-chave posicionadas",
    cor: "text-ghanks-blue",
  },
  {
    value: 350,
    suffix: "+",
    label: "Cidades atendidas",
    cor: "text-ghanks-green",
  },
  {
    value: 25,
    suffix: "+",
    label: "Anos de tecnologia do fundador",
    cor: "text-ghanks-yellow",
  },
  {
    value: 2,
    suffix: "",
    label: "Escritórios: São Paulo e Limeira",
    cor: "text-ghanks-red",
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
              <p className={`font-display text-4xl md:text-5xl font-bold ${stat.cor}`}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/60 leading-snug">{stat.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
