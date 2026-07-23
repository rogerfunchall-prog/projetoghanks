import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projetoghanks.vercel.app";
const WHATSAPP_NUMBER = "5511950809873";

export const metadata: Metadata = {
  title: "Portfólio — Cases de SEO Orgânico e Resultado Real",
  description:
    "Conheça os cases de sucesso da G Hanks: projetos reais de SEO orgânico em diferentes nichos e regiões do Brasil. Resultado orgânico na primeira página do Google.",
  openGraph: {
    title: "Portfólio G Hanks — Cases de SEO Orgânico",
    description:
      "Projetos reais de posicionamento orgânico no Google, sem anúncios pagos.",
    type: "website",
    url: `${siteUrl}/portfolio`,
  },
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
};

const CASES = [
  {
    nome: "Top Sacolas Personalizadas",
    nicho: "Indústria B2B — fabricação de sacolas personalizadas",
    regiao: "Taubaté-SP e Vale do Paraíba",
    imagem: "/case-top-sacolas.png",
    destaque:
      "Ranqueado nas principais buscas do segmento em sua região, como 'sacolas para lojas Taubaté' e 'sacolas personalizadas Taubaté'.",
    contexto: "Fabricante de sacolas personalizadas que precisava dominar as buscas locais no Vale do Paraíba. Com SEO orgânico focado em keywords de alta conversão, posicionamos o site nas primeiras posições para os termos mais buscados do segmento na região.",
    link: "https://topsacolas.com.br",
    badge: null,
  },
  {
    nome: "Marcelo Clay | O Palestrante Financeiro",
    nicho: "Marca pessoal — palestrante corporativo e CFO",
    regiao: "Atuação nacional",
    imagem: "/case-marcelo-clay.png",
    destaque:
      "Posicionamento orgânico para um dos principais palestrantes de finanças corporativas do Brasil.",
    contexto: "Construção de autoridade orgânica para marca pessoal de alto nível, com histórico de palestras para empresas como Itaú, Petrobras e Vale. Estrutura de conteúdo e SEO técnico para posicionar em buscas nacionais de alta competitividade.",
    link: "https://palestrantefinanceiro.com.br",
    badge: null,
  },
  {
    nome: "Condomínios Sorocaba",
    nicho: "Imobiliário — portal de condomínios",
    regiao: "Sorocaba-SP",
    imagem: "/case-condominios-sorocaba.png",
    destaque:
      "SEO e GEO aplicados ao mercado imobiliário local, com conteúdo otimizado para busca orgânica e IAs generativas.",
    contexto: "Portal imobiliário da TG Consultora de Imóveis, com estrutura de dados e conteúdo otimizados não apenas para o Google, mas também para as IAs generativas que começam a responder buscas sobre imóveis.",
    link: "https://condominiossorocaba.com.br",
    badge: null,
  },
  {
    nome: "Reluz Galvânica",
    nicho: "Indústria — galvanização de semijoias",
    regiao: "Limeira-SP",
    imagem: "/case-reluz-galvanica.png",
    destaque:
      "1º lugar no Google Brasil para a palavra-chave 'galvânica Limeira'.",
    contexto: "Indústria de galvanização de semijoias em Limeira. Com conteúdo técnico altamente especializado e SEO cirúrgico, conquistamos a primeira posição absoluta no Google Brasil para a keyword principal do nicho.",
    link: "https://reluzgalvanica.com.br",
    badge: "1º no Google Brasil",
  },
  {
    nome: "Vittoria Vitt",
    nicho: "E-commerce de moda feminina",
    regiao: "Atuação nacional",
    imagem: "/case-vittoria-vitt.png",
    destaque:
      "Loja virtual inteligente com estrutura de e-commerce otimizada para conversão e busca orgânica.",
    contexto: "E-commerce de moda feminina com estrutura técnica pensada desde o início para SEO: categorias otimizadas, URLs semânticas, Schema Product e conteúdo de qualidade em cada página de produto.",
    link: "https://vittoriavitt.com.br",
    badge: null,
  },
];

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Portfólio G Hanks — Cases de SEO Orgânico",
  itemListElement: CASES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.nome,
    url: c.link,
  })),
};

export default function PortfolioPage() {
  return (
    <PageShell>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Portfólio" }]} />

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-ghanks-gray leading-tight mb-6">
            Marcas que já estão na{" "}
            <span className="text-ghanks-blue">primeira página do Google</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Projetos reais de SEO orgânico executados pela G Hanks e pelo
            ecossistema HAPP APPS em diferentes nichos e regiões do Brasil.
          </p>
        </div>

        <div className="space-y-8">
          {CASES.map((c) => (
            <div
              key={c.nome}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm border transition-all hover:shadow-lg ${
                c.badge ? "border-ghanks-green border-2" : "border-gray-100"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Imagem */}
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={c.imagem}
                    alt={`Screenshot do site ${c.nome}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay sutil na base */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* Badge de destaque */}
                  {c.badge && (
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-ghanks-green text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {c.badge}
                    </div>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs bg-blue-50 text-ghanks-blue px-2 py-0.5 rounded-full font-medium">
                      {c.nicho}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                      {c.regiao}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-ghanks-gray mb-2">{c.nome}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">{c.contexto}</p>
                  <p className="text-sm text-gray-500 italic mb-4">"{c.destaque}"</p>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-ghanks-blue hover:underline self-start"
                  >
                    Ver site
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Links internos */}
        <div className="mt-12 bg-ghanks-light rounded-2xl p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-ghanks-gray mb-4">Quer entender como chegamos a esses resultados?</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="/metodo" className="text-ghanks-blue font-semibold hover:underline">Conheça o Método H.A.N.K.S.</a>
              {" "}— os 5 pilares do nosso growth hacking
            </li>
            <li>
              <a href="/planos" className="text-ghanks-blue font-semibold hover:underline">Veja os planos e a exclusividade por cidade</a>
              {" "}— como funciona o investimento
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-gradient-to-br from-ghanks-blue to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Quero um resultado como esses
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Fale com um especialista da G Hanks e descubra o potencial de
            posicionamento orgânico do seu negócio.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi os cases de sucesso e quero um resultado como esses para o meu negócio.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-ghanks-blue px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
          >
            Quero um resultado como esses
          </a>
        </div>
      </div>

      <Script
        id="json-ld-portfolio"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
    </PageShell>
  );
}
