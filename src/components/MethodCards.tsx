/* MethodCards — os 5 pilares do método H.A.N.K.S. em cards com hover animado.
   Os textos são os mesmos já usados na página /metodo. */

import Reveal from "./Reveal";

const PILARES = [
  {
    letra: "H",
    titulo: "Hacking de Crescimento",
    resumo: "Técnicas avançadas de growth hacking para acelerar o posicionamento orgânico.",
    cor: "bg-ghanks-blue",
    glow: "group-hover:shadow-blue-500/20",
    borda: "group-hover:border-ghanks-blue/40",
  },
  {
    letra: "A",
    titulo: "Autoridade Orgânica",
    resumo: "Construímos autoridade real para o seu domínio com conteúdo e SEO técnico.",
    cor: "bg-ghanks-green",
    glow: "group-hover:shadow-green-500/20",
    borda: "group-hover:border-ghanks-green/40",
  },
  {
    letra: "N",
    titulo: "Nichos e Cidades Exclusivas",
    resumo: "Exclusividade total: uma palavra-chave por cidade.",
    cor: "bg-ghanks-yellow",
    glow: "group-hover:shadow-yellow-500/20",
    borda: "group-hover:border-ghanks-yellow/50",
  },
  {
    letra: "K",
    titulo: "Keywords Estratégicas",
    resumo: "Pesquisa profunda de palavras-chave que realmente trazem clientes.",
    cor: "bg-ghanks-red",
    glow: "group-hover:shadow-red-500/20",
    borda: "group-hover:border-ghanks-red/40",
  },
  {
    letra: "S",
    titulo: "Sustentabilidade de Resultado",
    resumo: "Resultado que dura, sem depender de investimento contínuo em Ads.",
    cor: "bg-ghanks-blue",
    glow: "group-hover:shadow-blue-500/20",
    borda: "group-hover:border-ghanks-blue/40",
  },
];

export default function MethodCards() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {PILARES.map((pilar, i) => (
        <Reveal as="li" key={pilar.letra} delay={i * 90}>
          <article
            className={`group h-full bg-white rounded-2xl border border-gray-100 p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-2xl ${pilar.glow} ${pilar.borda}`}
          >
            <div className="flex items-center justify-between mb-5">
              <span
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${pilar.cor} text-white font-display text-xl font-bold transition-transform duration-300 group-hover:scale-110`}
              >
                {pilar.letra}
              </span>
              <span className="font-display text-2xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-display text-base font-bold text-ghanks-gray leading-snug">
              {pilar.titulo}
            </h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">{pilar.resumo}</p>
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
