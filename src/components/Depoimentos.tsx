/* Seção Depoimentos — prova social com depoimentos reais aprovados pelos clientes */

import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const DEPOIMENTOS = [
  {
    nome: "Vittoria Vitt",
    cargo: "",
    negocio: "Vittoria Vitt Store",
    cidade: "",
    texto:
      "Quando decidi ter minha própria loja virtual, eu queria algo que realmente conversasse com minhas clientes, não só uma vitrine bonita. A tecnologia que a G Hanks usou no meu site fez toda diferença nisso — a navegação é rápida, intuitiva, e minhas clientes sempre comentam como é fácil encontrar o que procuram. Isso gerou uma conexão muito mais próxima e rápida com elas, e o resultado apareceu direto nas vendas. Recomendo de olhos fechados! E agora estamos fazendo um novo projeto com eles também.",
    logo: "/clientes/vittoria-vitt.png",
  },
  {
    nome: "Luiz Felipe",
    cargo: "CEO",
    negocio: "Reluz Galvânica",
    cidade: "Limeira, SP",
    texto:
      "Já trabalhamos com a G Hanks há mais de dois anos, e o resultado fala por si só: sempre nos posicionando nas primeiras posições da primeira página do Google, em todo o Brasil. É um trabalho sério, consistente, e que entrega o que promete. Indico fortemente o trabalho deles para qualquer empresa que queira crescer de verdade no digital.",
    logo: "/clientes/reluz.png",
  },
  {
    nome: "Charles Noronha",
    cargo: "Diretor Comercial",
    negocio: "Top Sacolas",
    cidade: "Taubaté, SP",
    texto:
      "Depois que desenvolvemos o site com a G Hanks, os meus produtos passaram a aparecer em todo o Brasil, e até fora dele — já alcançamos clientes na América do Sul. Foi um divisor de águas para o alcance da Top Sacolas. Trabalho que recomendo sem hesitar.",
    logo: "/clientes/top-sacolas.png",
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          variant="split"
          eyebrow="Depoimentos"
          title={
            <>
              Quem já está na{" "}
              <span className="text-ghanks-green">primeira página</span>
            </>
          }
          description="Veja o que nossos clientes dizem sobre o resultado orgânico no Google."
          className="mb-12 md:mb-16"
        />

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {DEPOIMENTOS.map((dep, i) => (
            <Reveal as="li" key={dep.nome} delay={i * 110}>
              <figure className="group relative h-full bg-white rounded-3xl p-7 border border-gray-100 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10">
                {/* Aspas decorativas */}
                <span
                  className="absolute top-5 right-7 font-display text-6xl leading-none text-gray-100 group-hover:text-ghanks-blue/15 transition-colors"
                  aria-hidden="true"
                >
                  &rdquo;
                </span>

                {/* Estrelas */}
                <div className="flex gap-1 mb-5" aria-label="5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4.5 h-4.5 text-ghanks-yellow" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Texto */}
                <blockquote className="text-gray-600 leading-relaxed mb-6 text-sm flex-1">
                  &ldquo;{dep.texto}&rdquo;
                </blockquote>

                {/* Autor */}
                <figcaption className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <Image
                    src={dep.logo}
                    alt={`Logo ${dep.negocio}`}
                    width={160}
                    height={160}
                    className="w-14 h-14 rounded-xl object-contain bg-white border border-gray-200 shrink-0"
                  />
                  <div>
                    <p className="font-display text-sm font-bold text-ghanks-gray">
                      {dep.nome}
                    </p>
                    <p className="text-xs text-gray-400">
                      {[[dep.cargo, dep.negocio].filter(Boolean).join(", "), dep.cidade]
                        .filter(Boolean)
                        .join(" — ")}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
