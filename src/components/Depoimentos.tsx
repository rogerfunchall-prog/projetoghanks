/* Seção Depoimentos — prova social com depoimentos reais aprovados pelos clientes */

const DEPOIMENTOS = [
  {
    nome: "Vittoria Vitt",
    cargo: "",
    negocio: "Vittoria Vitt Store",
    cidade: "",
    texto:
      "Quando decidi ter minha própria loja virtual, eu queria algo que realmente conversasse com minhas clientes, não só uma vitrine bonita. A tecnologia que a G Hanks usou no meu site fez toda diferença nisso — a navegação é rápida, intuitiva, e minhas clientes sempre comentam como é fácil encontrar o que procuram. Isso gerou uma conexão muito mais próxima e rápida com elas, e o resultado apareceu direto nas vendas. Recomendo de olhos fechados! E agora estamos fazendo um novo projeto com eles também.",
    iniciais: "VV",
    cor: "bg-ghanks-blue",
  },
  {
    nome: "Luiz Felipe",
    cargo: "CEO",
    negocio: "Reluz Galvânica",
    cidade: "Limeira, SP",
    texto:
      "Já trabalhamos com a G Hanks há mais de dois anos, e o resultado fala por si só: sempre nos posicionando nas primeiras posições da primeira página do Google, em todo o Brasil. É um trabalho sério, consistente, e que entrega o que promete. Indico fortemente o trabalho deles para qualquer empresa que queira crescer de verdade no digital.",
    iniciais: "LF",
    cor: "bg-ghanks-green",
  },
  {
    nome: "Charles Noronha",
    cargo: "Diretor Comercial",
    negocio: "Top Sacolas",
    cidade: "Taubaté, SP",
    texto:
      "Depois que desenvolvemos o site com a G Hanks, os meus produtos passaram a aparecer em todo o Brasil, e até fora dele — já alcançamos clientes na América do Sul. Foi um divisor de águas para o alcance da Top Sacolas. Trabalho que recomendo sem hesitar.",
    iniciais: "CN",
    cor: "bg-ghanks-red",
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ghanks-gray">
            Quem já está na{" "}
            <span className="text-ghanks-green">primeira página</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Veja o que nossos clientes dizem sobre o resultado orgânico no Google.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEPOIMENTOS.map((dep) => (
            <div
              key={dep.nome}
              className="bg-ghanks-light rounded-2xl p-6 border border-gray-100 flex flex-col"
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-4" aria-label="5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-ghanks-yellow" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-1">
                &ldquo;{dep.texto}&rdquo;
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${dep.cor} text-white flex items-center justify-center text-sm font-bold`}
                >
                  {dep.iniciais}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ghanks-gray">
                    {dep.nome}
                  </p>
                  <p className="text-xs text-gray-400">
                    {[[dep.cargo, dep.negocio].filter(Boolean).join(", "), dep.cidade]
                      .filter(Boolean)
                      .join(" — ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
