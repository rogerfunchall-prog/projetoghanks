/* Seção Como Funciona — passo a passo do serviço */

const PASSOS = [
  {
    numero: "01",
    titulo: "Diagnóstico gratuito",
    descricao:
      "Analisamos a sua palavra-chave e a concorrência na sua cidade. Você recebe um relatório claro do potencial de posicionamento orgânico.",
    cor: "text-ghanks-blue",
    borderCor: "border-ghanks-blue",
  },
  {
    numero: "02",
    titulo: "Setup de posicionamento",
    descricao:
      "Implementamos toda a estrutura técnica de SEO: otimização on-page, conteúdo estratégico, autoridade de domínio e configuração do Google Meu Negócio.",
    cor: "text-ghanks-green",
    borderCor: "border-ghanks-green",
  },
  {
    numero: "03",
    titulo: "Manutenção mensal",
    descricao:
      "Acompanhamento contínuo do ranking, ajustes técnicos e criação de conteúdo para manter e melhorar a posição no Google.",
    cor: "text-ghanks-yellow",
    borderCor: "border-ghanks-yellow",
  },
  {
    numero: "04",
    titulo: "Acompanhamento de ranking",
    descricao:
      "Relatórios mensais transparentes com a evolução do posicionamento. Você acompanha o resultado em tempo real.",
    cor: "text-ghanks-red",
    borderCor: "border-ghanks-red",
  },
];

export default function ComoFunciona() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title text-ghanks-gray">
            Como funciona o <span className="text-ghanks-green">SEO orgânico</span> da G Hanks
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Um processo simples e transparente para colocar sua empresa na
            primeira página do Google.
          </p>
        </div>

        {/* Passos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PASSOS.map((passo) => (
            <div
              key={passo.numero}
              className={`relative bg-ghanks-light rounded-2xl p-6 border-t-4 ${passo.borderCor}`}
            >
              <span className={`text-4xl font-bold ${passo.cor} opacity-30`}>
                {passo.numero}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-ghanks-gray">
                {passo.titulo}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                {passo.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
