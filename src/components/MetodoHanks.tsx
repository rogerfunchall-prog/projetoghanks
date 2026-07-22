/* Seção Método H-A-N-K-S — 5 cards com os pilares do serviço */

/* Ícones inline para cada pilar */
const PILARES = [
  {
    letra: "H",
    cor: "bg-ghanks-blue",
    titulo: "Hacking de Crescimento",
    descricao:
      "Técnicas avançadas de growth hacking para acelerar o posicionamento orgânico da sua empresa no Google.",
  },
  {
    letra: "A",
    cor: "bg-ghanks-green",
    titulo: "Autoridade Orgânica",
    descricao:
      "Construímos autoridade real para o seu domínio, com conteúdo estratégico e SEO técnico de alto nível.",
  },
  {
    letra: "N",
    cor: "bg-ghanks-yellow",
    titulo: "Nichos e Cidades Exclusivas",
    descricao:
      "Exclusividade total: trabalhamos uma palavra-chave por cidade, para que nenhum concorrente divida espaço com você.",
  },
  {
    letra: "K",
    cor: "bg-ghanks-red",
    titulo: "Keywords Estratégicas",
    descricao:
      "Pesquisa profunda de palavras-chave para identificar os termos que realmente trazem clientes para o seu negócio.",
  },
  {
    letra: "S",
    cor: "bg-ghanks-blue",
    titulo: "Sustentabilidade de Resultado",
    descricao:
      "Resultado que dura. Nosso trabalho de SEO orgânico gera posicionamento contínuo, sem depender de investimento mensal em Ads.",
  },
];

export default function MetodoHanks() {
  return (
    <section id="metodo" className="py-16 md:py-24 bg-ghanks-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ghanks-gray">
            O Método <span className="text-ghanks-blue">H.A.N.K.S.</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Cinco pilares que sustentam o crescimento orgânico digital da sua
            empresa no Google.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PILARES.map((pilar) => (
            <div
              key={pilar.letra}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              {/* Badge da letra */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${pilar.cor} text-white text-2xl font-bold mb-4`}
              >
                {pilar.letra}
              </div>
              <h3 className="text-lg font-semibold text-ghanks-gray mb-2">
                {pilar.titulo}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {pilar.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
