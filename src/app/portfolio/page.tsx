import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

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

const KEYWORDS_MARQUEE = [
  "SEO Orgânico",
  "SEO Local",
  "Autoridade Digital",
  "Growth Hacking",
  "Resultados Reais",
  "Exclusividade por Cidade",
];

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
      {/* ==================================================================
          Hero Principal — ghanks-portfolio-hero.png com padrão B2B premium
          ================================================================== */}
      <section className="relative bg-ghanks-ink overflow-hidden -mt-24 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/ghanks-portfolio-hero.png"
            alt="Ilustração executiva de ecossistema de dados, inteligência de negócios e crescimento orgânico."
            fill
            priority
            quality={85}
            className="object-cover object-[center_right]"
          />
          {/* Gradiente escuro para garantir legibilidade à esquerda */}
          <div className="absolute inset-0 bg-gradient-to-r from-ghanks-ink via-ghanks-ink/90 to-ghanks-ink/40 md:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Início", href: "/" }, { label: "Portfólio" }]}
            tone="dark"
          />

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/90 mb-6">
              <span className="w-2 h-2 rounded-full bg-ghanks-blue" aria-hidden="true" />
              Cases reais de crescimento orgânico
            </span>

            <h1 className="display-title text-white">
              Marcas que conquistaram <span className="text-gradient-brand">visibilidade</span>, autoridade e <span className="text-ghanks-yellow">resultado</span> no Google
            </h1>

            <p className="mt-6 lead text-white/85 max-w-2xl">
              Projetos reais de SEO orgânico executados pela G Hanks e pelo ecossistema HAPP APPS em diferentes nichos e regiões do Brasil.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi o portfólio da G Hanks e quero um resultado como esses para minha empresa.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 text-base"
              >
                Quero um resultado como esses
              </a>
              <Link
                href="/metodo"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm text-base"
              >
                Conheça o Método H.A.N.K.S.
              </Link>
            </div>
          </div>
        </div>

        {/* Faixa de termos na base */}
        <div className="relative z-10 mt-16 md:mt-24 border-t border-white/10 py-5">
          <Marquee items={KEYWORDS_MARQUEE} tone="dark" />
        </div>
      </section>

      {/* ==================================================================
          Seção de Introdução dos Cases
          ================================================================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
                Abordagem estratégica
              </span>
              <h2 className="section-title text-ghanks-gray">
                Estratégia diferente. Resultado mensurável.
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Cada case parte de um cenário diferente: um nicho competitivo, uma cidade específica, uma marca pessoal ou um negócio nacional. O método é adaptado ao contexto, mas a lógica permanece a mesma: diagnóstico, estratégia, execução e evolução contínua.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero descobrir o potencial de posicionamento orgânico da minha região.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-ghanks-blue hover:underline"
                >
                  Descobrir o potencial da minha região &rarr;
                </a>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 aspect-[16/10]">
                <Image
                  src="/ghanks-portfolio-nichos-cidades.png"
                  alt="Ilustração executiva de ecossistema de dados regionais, inteligência de busca e expansão de mercado."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Listagem de Cases (Alternando o lado da imagem e do texto)
          ================================================================== */}
      <section className="py-20 md:py-28 bg-ghanks-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Portfólio Comprovado
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Projetos reais em diferentes mercados
            </h2>
            <p className="mt-4 text-gray-600">
              Conheça como transformamos autoridade digital em liderança de mercado para nossos clientes.
            </p>
          </Reveal>

          <div className="space-y-12">
            {CASES.map((c, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal key={c.nome} delay={index * 60}>
                  <div
                    className={`bg-white rounded-3xl overflow-hidden shadow-sm border ${
                      c.badge ? "border-ghanks-green border-2" : "border-gray-200"
                    } hover:shadow-xl transition-all duration-300 grid lg:grid-cols-12 items-center`}
                  >
                    {/* Imagem do case */}
                    <div className={`lg:col-span-6 relative h-72 sm:h-96 lg:h-[420px] ${isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
                      <Image
                        src={c.imagem}
                        alt={`Screenshot do site ${c.nome}`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {c.badge && (
                        <div className="absolute top-6 left-6 inline-flex items-center gap-2 bg-ghanks-green text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {c.badge}
                        </div>
                      )}
                    </div>

                    {/* Conteúdo do case */}
                    <div className={`lg:col-span-6 p-8 md:p-12 flex flex-col justify-between ${isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-xs bg-blue-50 text-ghanks-blue px-3 py-1 rounded-full font-semibold">
                            {c.nicho}
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium">
                            {c.regiao}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-ghanks-gray mb-3">{c.nome}</h3>
                        <p className="text-gray-600 leading-relaxed text-base mb-6">{c.contexto}</p>

                        {/* Frase de resultado destacada */}
                        <div className="bg-ghanks-light border-l-4 border-ghanks-blue p-4 rounded-r-2xl mb-8">
                          <p className="text-sm font-semibold text-ghanks-gray italic">
                            &ldquo;{c.destaque}&rdquo;
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-gray-100">
                        <a
                          href={c.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-ghanks-blue hover:underline"
                        >
                          Ver site oficial
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi o case ${c.nome} e gostaria de aplicar uma estratégia semelhante no meu negócio.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold bg-blue-50 text-ghanks-blue hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors"
                        >
                          Quero uma estratégia semelhante
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================
          Imagem de Resultados e Evolução (ghanks-portfolio-resultados.png)
          ================================================================== */}
      <section className="py-20 md:py-28 bg-ghanks-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-yellow">
                Sustentabilidade &amp; Ativo Digital
              </span>
              <h2 className="section-title text-white">
                Não mostramos promessas. Mostramos construção.
              </h2>
              <p className="text-white/80 leading-relaxed text-base md:text-lg">
                Resultados orgânicos são construídos com posicionamento, conteúdo, autoridade e consistência. O objetivo não é apenas aparecer uma vez, mas criar uma presença digital que continue gerando descoberta e oportunidades ao longo do tempo.
              </p>
              <div className="pt-4">
                <Link
                  href="/metodo"
                  className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-3.5 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-md text-sm"
                >
                  Conhecer o Método H.A.N.K.S.
                </Link>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10]">
                <Image
                  src="/ghanks-portfolio-resultados.png"
                  alt="Painel analítico avançado de crescimento orgânico e consolidação de performance."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Bloco de Conexão com o Método e Planos
          ================================================================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Sistemas e Planos
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Cases são o resultado. O Método é o caminho.
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed text-base">
              Veja como a G Hanks organiza diagnóstico, posicionamento, execução e crescimento em um sistema proprietário.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/metodo"
                className="inline-flex items-center gap-2 bg-ghanks-ink text-white px-7 py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-all text-sm"
              >
                Conheça o Método H.A.N.K.S. &rarr;
              </Link>
              <Link
                href="/planos"
                className="inline-flex items-center gap-2 bg-ghanks-light text-ghanks-gray border border-gray-200 px-7 py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all text-sm"
              >
                Veja os planos e a exclusividade por cidade &rarr;
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================================================================
          CTA Final de Alta Conversão
          ================================================================== */}
      <section className="bg-gradient-to-br from-ghanks-blue to-blue-700 py-20 md:py-28 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Reveal>
            <h2 className="section-title mb-6 text-white">
              Sua empresa pode ser o próximo case de crescimento orgânico.
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed text-base md:text-lg">
              Fale com um especialista da G Hanks e descubra quais oportunidades de posicionamento existem para o seu negócio, nicho e região.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um diagnóstico gratuito para minha empresa.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-ghanks-blue px-9 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl text-base"
              >
                Solicitar diagnóstico gratuito
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de falar com um especialista da G Hanks sobre SEO orgânico.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-9 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/25 backdrop-blur-sm text-base"
              >
                Falar com um especialista
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Script
        id="json-ld-portfolio"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
    </PageShell>
  );
}
