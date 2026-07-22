/* Seção Portfólio / Cases de Sucesso */

const WHATSAPP_NUMBER = "5511950809873";

const CASES = [
  {
    nome: "Top Sacolas Personalizadas",
    nicho: "Indústria B2B — fabricação de sacolas personalizadas",
    regiao: "Taubaté-SP e Vale do Paraíba",
    destaque:
      "Ranqueado nas principais buscas do segmento em sua região, como 'sacolas para lojas Taubaté' e 'sacolas personalizadas Taubaté'",
    link: "https://topsacolas.com.br",
    badge: null,
  },
  {
    nome: "Marcelo Clay | O Palestrante Financeiro",
    nicho: "Marca pessoal — palestrante corporativo e CFO",
    regiao: "Atuação nacional",
    destaque:
      "Posicionamento orgânico para um dos principais palestrantes de finanças corporativas do Brasil, com histórico de palestras para empresas como Itaú, Petrobras e Vale",
    link: "https://palestrantefinanceiro.com.br",
    badge: null,
  },
  {
    nome: "Condomínios Sorocaba",
    nicho: "Imobiliário",
    regiao: "Sorocaba-SP",
    destaque:
      "SEO e GEO aplicados ao mercado imobiliário local, com estrutura de dados e conteúdo otimizados para busca orgânica e IAs generativas",
    link: "https://condominiossorocaba.com.br",
    badge: null,
  },
  {
    nome: "Reluz Galvânica",
    nicho: "Indústria — galvanização de semijoias",
    regiao: "Limeira-SP",
    destaque:
      "1º lugar no Google Brasil para a palavra-chave 'galvânica Limeira'",
    link: "https://reluzgalvanica.com.br",
    badge: "1º no Google Brasil",
  },
  {
    nome: "Vittoria Vitt",
    nicho: "E-commerce de moda feminina",
    regiao: "Atuação nacional",
    destaque:
      "Loja virtual inteligente com estrutura de e-commerce otimizada para conversão e busca orgânica",
    link: "https://vittoriavitt.com.br",
    badge: null,
  },
];

export default function Portfolio() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ghanks-gray">
            Marcas que já estão na{" "}
            <span className="text-ghanks-blue">primeira página do Google</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Projetos reais de SEO orgânico executados pela G Hanks e pelo
            ecossistema HAPP APPS em diferentes nichos e regiões do Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <div
              key={c.nome}
              className={`relative bg-ghanks-light rounded-2xl p-6 border transition-all hover:shadow-lg hover:-translate-y-1 ${
                c.badge
                  ? "border-ghanks-green border-2"
                  : "border-gray-100"
              }`}
            >
              {/* Badge de destaque (Reluz) */}
              {c.badge && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 bg-ghanks-green text-white px-3 py-1 rounded-full text-xs font-bold">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {c.badge}
                </div>
              )}

              {/* Placeholder de screenshot */}
              <div className="w-full h-36 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-sm text-gray-400">Screenshot em breve</span>
              </div>

              {/* Conteúdo */}
              <h3 className="text-lg font-bold text-ghanks-gray mb-1">
                {c.nome}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-blue-50 text-ghanks-blue px-2 py-0.5 rounded-full font-medium">
                  {c.nicho}
                </span>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                  {c.regiao}
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {c.destaque}
              </p>
              <a
                href={c.link}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1 text-sm font-semibold text-ghanks-blue hover:underline"
              >
                Ver site
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* CTA do portfólio */}
        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi os cases de sucesso e quero um resultado como esses para o meu negócio.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
          >
            Quero um resultado como esses
          </a>
        </div>
      </div>
    </section>
  );
}
