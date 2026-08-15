import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projetoghanks.vercel.app";
const WHATSAPP_NUMBER = "5511950809873";

export const metadata: Metadata = {
  title: "Guia Completo de SEO Orgânico — Como Aparecer na Primeira Página do Google",
  description:
    "Aprenda tudo sobre SEO orgânico: o que é, como funciona, quanto custa e como colocar sua empresa na primeira página do Google sem pagar por anúncios. Guia completo da G Hanks.",
  keywords: [
    "seo orgânico",
    "guia de seo orgânico",
    "como aparecer na primeira página do google",
    "seo sem google ads",
    "growth hacking",
    "resultado orgânico no google",
    "quanto custa seo orgânico",
    "diferença entre seo orgânico e google ads",
  ],
  openGraph: {
    title: "Guia Completo de SEO Orgânico — G Hanks",
    description:
      "Tudo o que você precisa saber sobre SEO orgânico para posicionar sua empresa no topo do Google, sem anúncios pagos.",
    type: "article",
    url: `${siteUrl}/seo-organico`,
  },
  alternates: {
    canonical: `${siteUrl}/seo-organico`,
  },
};

const KEYWORDS_MARQUEE = [
  "SEO ORGÂNICO",
  "PRIMEIRA PÁGINA DO GOOGLE",
  "SEO LOCAL",
  "GROWTH HACKING",
  "AUTORIDADE DE DOMÍNIO",
  "EXCLUSIVIDADE POR CIDADE",
];

const INDICE_ITENS = [
  { num: "01", titulo: "O que é SEO orgânico", href: "#o-que-e" },
  { num: "02", titulo: "Diferença entre SEO orgânico e Google Ads", href: "#diferenca" },
  { num: "03", titulo: "Growth hacking aplicado ao SEO", href: "#growth-hacking" },
  { num: "04", titulo: "Como funciona o posicionamento na prática", href: "#como-funciona" },
  { num: "05", titulo: "Quanto custa aparecer no Google organicamente", href: "#quanto-custa" },
  { num: "06", titulo: "Exclusividade de palavra-chave por cidade", href: "#exclusividade" },
  { num: "07", titulo: "Quanto tempo leva para aparecer no topo", href: "#tempo" },
  { num: "08", titulo: "SEO orgânico para diferentes nichos", href: "#nichos" },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Guia Completo de SEO Orgânico: como colocar sua empresa na primeira página do Google",
  author: {
    "@type": "Person",
    name: "Roger Funchal",
    jobTitle: "CEO e Founder da G Hanks",
    url: `${siteUrl}/empresa`,
  },
  publisher: {
    "@type": "Organization",
    name: "G Hanks",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo-ghanks.png`,
    },
  },
  url: `${siteUrl}/seo-organico`,
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
};

export default function GuiaSeoOrganico() {
  return (
    <PageShell>
      {/* ==================================================================
          Hero Principal — ghanks-seo-hero.png com padrão B2B premium
          ================================================================== */}
      <section className="relative bg-ghanks-ink overflow-hidden -mt-24 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/ghanks-seo-hero.png"
            alt="Ilustração executiva representando busca no Google, trajetória de crescimento e conexões digitais de SEO orgânico."
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
            items={[{ label: "Início", href: "/" }, { label: "Soluções", href: "/servicos" }, { label: "SEO Orgânico" }]}
            tone="dark"
          />

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/90 mb-6">
              <span className="w-2 h-2 rounded-full bg-ghanks-blue" aria-hidden="true" />
              Posicionamento Orgânico
            </span>

            <h1 className="display-title text-white">
              SEO Orgânico: transforme buscas no <span className="text-gradient-brand">Google</span> em demanda para sua empresa
            </h1>

            <p className="mt-6 lead text-white/80 max-w-2xl">
              Entenda como aparecer na primeira página do Google sem depender exclusivamente de anúncios, usando estratégia, conteúdo, autoridade e inteligência de mercado.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um diagnóstico gratuito de SEO orgânico.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 text-base"
              >
                Solicitar Diagnóstico Gratuito
              </a>
              <a
                href="#indice"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm text-base"
              >
                Ver como funciona
              </a>
            </div>
          </div>
        </div>

        {/* Faixa de termos na base */}
        <div className="relative z-10 mt-16 md:mt-24 border-t border-white/10 py-5">
          <Marquee items={KEYWORDS_MARQUEE} tone="dark" />
        </div>
      </section>

      {/* ==================================================================
          Bloco de Abertura / Enquadramento Estratégico
          ================================================================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
                Visão de Mercado
              </span>
              <h2 className="section-title mt-3 text-ghanks-gray">
                Mais do que tráfego: presença na hora em que o cliente procura
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg">
                SEO orgânico é o conjunto de estratégias que ajuda sua empresa a ser encontrada naturalmente no Google. Quando o posicionamento é construído sobre intenção de busca, autoridade e relevância local, a visibilidade deixa de depender apenas de campanhas pagas.
              </p>
            </Reveal>

            <Reveal delay={150} className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
              <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-100">
                <span className="text-ghanks-blue font-bold text-sm block mb-1">01</span>
                <h3 className="font-bold text-ghanks-gray mb-1">Sem custo por clique</h3>
                <p className="text-xs text-gray-500">Tráfego contínuo sem inflação de leilão.</p>
              </div>
              <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-100">
                <span className="text-ghanks-green font-bold text-sm block mb-1">02</span>
                <h3 className="font-bold text-ghanks-gray mb-1">Construção de autoridade</h3>
                <p className="text-xs text-gray-500">O Google reconhece seu negócio como referência.</p>
              </div>
              <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-100">
                <span className="text-ghanks-yellow font-bold text-sm block mb-1">03</span>
                <h3 className="font-bold text-ghanks-gray mb-1">Demanda qualificada</h3>
                <p className="text-xs text-gray-500">Usuários que já estão buscando comprar.</p>
              </div>
            </Reveal>

            <Reveal delay={200} className="mt-10">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero descobrir meu potencial de posicionamento orgânico no Google.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ghanks-blue hover:text-blue-700 transition-colors"
              >
                Descobrir meu potencial de posicionamento &rarr;
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Índice do Guia (Grid de 8 cards)
          ================================================================== */}
      <section id="indice" className="py-20 bg-ghanks-light border-y border-gray-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Sumário do Guia
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Neste guia, você vai entender
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDICE_ITENS.map((item, i) => (
              <Reveal key={item.num} delay={i * 50}>
                <a
                  href={item.href}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:border-ghanks-blue hover:shadow-md transition-all block h-full flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-xs font-bold text-ghanks-blue uppercase tracking-widest block mb-2">
                      Capítulo {item.num}
                    </span>
                    <h3 className="font-bold text-ghanks-gray text-base group-hover:text-ghanks-blue transition-colors">
                      {item.titulo}
                    </h3>
                  </div>
                  <span className="mt-4 text-xs font-semibold text-gray-400 group-hover:translate-x-1 transition-transform inline-block">
                    Ler capítulo &rarr;
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================
          Conteúdo do Artigo / Guia (8 Seções Completas)
          ================================================================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Seção 1 */}
        <section id="o-que-e" className="mb-20 scroll-mt-28">
          <span className="text-xs font-bold uppercase tracking-widest text-ghanks-blue">Capítulo 01</span>
          <h2 className="text-3xl font-bold text-ghanks-gray mt-1 mb-6">
            1. O que é SEO orgânico
          </h2>
          <div className="bg-ghanks-ink text-white rounded-3xl p-8 mb-8 border border-white/10">
            <p className="font-display text-lg md:text-xl font-medium leading-snug">
              &ldquo;SEO orgânico é um ativo digital. Anúncio compra exposição; posicionamento constrói presença.&rdquo;
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">
            SEO orgânico (Search Engine Optimization) é o conjunto de técnicas usadas para posicionar um site nas primeiras posições do Google de forma natural — sem pagar por clique. Quando alguém pesquisa &ldquo;dentista em Ribeirão Preto&rdquo; ou &ldquo;loja de roupas em Joinville&rdquo;, o Google exibe dois tipos de resultado: os anúncios pagos (Google Ads) e os resultados orgânicos.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">
            O resultado orgânico é aquele que aparece abaixo dos anúncios e transmite mais confiança para o consumidor, porque o Google o considera relevante o suficiente para exibir sem que a empresa tenha pago por isso. Estar nessa posição significa que o seu negócio é visto como autoridade no assunto.
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            O trabalho de SEO orgânico envolve otimização técnica do site, criação de conteúdo estratégico, construção de autoridade de domínio e posicionamento no Google Meu Negócio. É um investimento de médio prazo que gera resultados duradouros.
          </p>
        </section>

        {/* Seção 2 */}
        <section id="diferenca" className="mb-20 scroll-mt-28">
          <span className="text-xs font-bold uppercase tracking-widest text-ghanks-blue">Capítulo 02</span>
          <h2 className="text-3xl font-bold text-ghanks-gray mt-1 mb-6">
            2. Diferença entre SEO orgânico e Google Ads
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
            A principal diferença é simples: no Google Ads, você paga por cada clique. Quando o orçamento acaba, o resultado desaparece. No SEO orgânico, o objetivo é construir uma posição sólida que se mantém ao longo do tempo.
          </p>

          {/* Tabela visual responsiva */}
          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm my-8">
            <div className="grid grid-cols-2 bg-ghanks-ink text-white font-bold p-5 text-sm md:text-base">
              <div>SEO Orgânico</div>
              <div>Google Ads</div>
            </div>
            <div className="divide-y divide-gray-100 text-sm md:text-base">
              <div className="grid grid-cols-2 p-5 text-gray-700">
                <div className="font-medium text-ghanks-green">Resultado construído ao longo do tempo</div>
                <div className="text-gray-500">Resultado imediato enquanto há orçamento</div>
              </div>
              <div className="grid grid-cols-2 p-5 text-gray-700">
                <div className="font-medium text-ghanks-green">Sem custo por clique</div>
                <div className="text-gray-500">Custo por clique contínuo</div>
              </div>
              <div className="grid grid-cols-2 p-5 text-gray-700">
                <div className="font-medium text-ghanks-green">Autoridade e relevância acumuladas</div>
                <div className="text-gray-500">Exposição vinculada à campanha</div>
              </div>
              <div className="grid grid-cols-2 p-5 text-gray-700">
                <div className="font-medium text-ghanks-green">Pode gerar demanda recorrente</div>
                <div className="text-gray-500">Útil para acelerar campanhas e ofertas</div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
            Isso não significa que Google Ads seja ruim — pode ser uma ferramenta complementar. Mas para quem busca resultado orgânico real e sustentável, o SEO nativo é o caminho mais inteligente e econômico a longo prazo.
          </p>

          <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-200 text-center">
            <p className="text-sm font-semibold text-ghanks-gray mb-3">Quer saber qual estratégia faz sentido para sua empresa?</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero saber qual estratégia (SEO ou Ads) faz sentido para o meu negócio.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition-colors"
            >
              Falar com um consultor
            </a>
          </div>
        </section>

        {/* Seção 3 */}
        <section id="growth-hacking" className="mb-20 scroll-mt-28">
          <span className="text-xs font-bold uppercase tracking-widest text-ghanks-blue">Capítulo 03</span>
          <h2 className="text-3xl font-bold text-ghanks-gray mt-1 mb-6">
            3. O que é growth hacking e como se aplica ao SEO
          </h2>
          
          <div className="grid lg:grid-cols-12 gap-8 items-center my-8">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-gray-600 leading-relaxed text-base">
                Growth hacking é uma abordagem de crescimento acelerado que combina marketing, tecnologia e análise de dados para encontrar os caminhos mais eficientes de gerar resultado. No contexto do SEO orgânico, significa usar técnicas avançadas para acelerar a chegada à primeira página do Google.
              </p>
              <div className="space-y-2 bg-ghanks-light p-5 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-2 font-bold text-ghanks-gray text-sm">
                  <span className="w-2 h-2 rounded-full bg-ghanks-blue" />
                  1. Identificar oportunidade
                </div>
                <div className="flex items-center gap-2 font-bold text-ghanks-gray text-sm">
                  <span className="w-2 h-2 rounded-full bg-ghanks-green" />
                  2. Testar hipótese
                </div>
                <div className="flex items-center gap-2 font-bold text-ghanks-gray text-sm">
                  <span className="w-2 h-2 rounded-full bg-ghanks-yellow" />
                  3. Medir e otimizar
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-[16/10]">
                <Image
                  src="/ghanks-seo-interna-1.png"
                  alt="Ambiente executivo com gráficos de crescimento e análise de oportunidades de SEO."
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
            Na G Hanks, aplicamos growth hacking ao SEO de forma estratégica: identificamos palavras-chave com alto potencial e baixa concorrência, criamos conteúdo otimizado que responde exatamente à intenção de busca do usuário e construímos autoridade de domínio de forma inteligente.
          </p>

          <div className="text-center mt-6">
            <Link
              href="/metodo"
              className="inline-flex items-center gap-2 text-sm font-bold text-ghanks-blue hover:underline"
            >
              Conhecer o Método H.A.N.K.S. completo &rarr;
            </Link>
          </div>
        </section>

        {/* Seção 4 */}
        <section id="como-funciona" className="mb-20 scroll-mt-28">
          <span className="text-xs font-bold uppercase tracking-widest text-ghanks-blue">Capítulo 04</span>
          <h2 className="text-3xl font-bold text-ghanks-gray mt-1 mb-6">
            4. Como funciona o posicionamento orgânico na prática
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
            O processo de SEO orgânico da G Hanks segue o método H.A.N.K.S., combinando cinco pilares estratégicos de posicionamento e sustentabilidade.
          </p>

          {/* Timeline de 4 etapas */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-200">
              <span className="font-display text-2xl font-bold text-ghanks-blue block mb-2">01</span>
              <h3 className="font-bold text-ghanks-gray mb-1 text-sm">Diagnóstico</h3>
              <p className="text-xs text-gray-500">Análise de palavra-chave e praça.</p>
            </div>
            <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-200">
              <span className="font-display text-2xl font-bold text-ghanks-green block mb-2">02</span>
              <h3 className="font-bold text-ghanks-gray mb-1 text-sm">Análise de Concorrência</h3>
              <p className="text-xs text-gray-500">Avaliação do potencial e lacunas.</p>
            </div>
            <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-200">
              <span className="font-display text-2xl font-bold text-ghanks-yellow block mb-2">03</span>
              <h3 className="font-bold text-ghanks-gray mb-1 text-sm">Setup de Posicionamento</h3>
              <p className="text-xs text-gray-500">Implementação técnica completa.</p>
            </div>
            <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-200">
              <span className="font-display text-2xl font-bold text-ghanks-red block mb-2">04</span>
              <h3 className="font-bold text-ghanks-gray mb-1 text-sm">Manutenção &amp; Relatórios</h3>
              <p className="text-xs text-gray-500">Consolidação e escala do ranking.</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
            Você acompanha tudo com relatórios mensais transparentes e tem suporte direto via WhatsApp. Sem complicação, sem jargão técnico desnecessário.
          </p>

          <div className="text-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero solicitar meu diagnóstico de SEO para entender como funciona na prática.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all shadow-md"
            >
              Solicitar meu diagnóstico
            </a>
          </div>
        </section>

        {/* Seção 5 */}
        <section id="quanto-custa" className="mb-20 scroll-mt-28">
          <span className="text-xs font-bold uppercase tracking-widest text-ghanks-blue">Capítulo 05</span>
          <h2 className="text-3xl font-bold text-ghanks-gray mt-1 mb-6">
            5. Quanto custa aparecer no Google organicamente
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">
            O investimento em SEO orgânico varia conforme a concorrência da palavra-chave e o tamanho da cidade. Trabalhamos com dois componentes: um setup único (investimento inicial para construir toda a estrutura) e uma mensalidade acessível de manutenção.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">
            Comparado ao Google Ads, onde um CPC médio pode gerar custos diários elevados, o SEO orgânico costuma ser muito mais econômico no médio e longo prazo. Você investe uma vez na construção da posição e mantém com uma fração do que gastaria em anúncios.
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Para saber o investimento exato para a sua palavra-chave e cidade, consulte nossos{" "}
            <Link href="/planos" className="text-ghanks-blue font-semibold hover:underline">
              planos disponíveis
            </Link>{" "}
            ou solicite um diagnóstico gratuito.
          </p>
        </section>

        {/* Seção 6 */}
        <section id="exclusividade" className="mb-20 scroll-mt-28">
          <span className="text-xs font-bold uppercase tracking-widest text-ghanks-blue">Capítulo 06</span>
          <h2 className="text-3xl font-bold text-ghanks-gray mt-1 mb-6">
            6. Exclusividade de palavra-chave por cidade
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">
            Um dos principais diferenciais da G Hanks é a exclusividade. Em cidades de até 300 mil habitantes, aceitamos apenas um cliente por palavra-chave. Isso significa que, se você contratar o serviço para &ldquo;dentista em [sua cidade]&rdquo;, nenhum outro dentista da mesma cidade poderá contratar o mesmo posicionamento conosco.
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Esse modelo protege o seu investimento e maximiza o resultado. A vaga é limitada — e quem chegar primeiro, conquista a posição.
          </p>
        </section>

        {/* Seção 7 */}
        <section id="tempo" className="mb-20 scroll-mt-28">
          <span className="text-xs font-bold uppercase tracking-widest text-ghanks-blue">Capítulo 07</span>
          <h2 className="text-3xl font-bold text-ghanks-gray mt-1 mb-6">
            7. Quanto tempo leva para aparecer na primeira página
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">
            O prazo médio de posicionamento fica entre 21 e 45 dias. Esse tempo depende de fatores como a concorrência da palavra-chave, o estado atual do site e o tamanho da cidade.
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Em nichos menos disputados e cidades menores, o resultado pode aparecer mais rápido. Em mercados mais concorridos, pode levar um pouco mais. O importante é que, uma vez conquistada a posição, ela tende a se manter com a manutenção adequada.
          </p>
        </section>

        {/* Seção 8 */}
        <section id="nichos" className="mb-20 scroll-mt-28">
          <span className="text-xs font-bold uppercase tracking-widest text-ghanks-blue">Capítulo 08</span>
          <h2 className="text-3xl font-bold text-ghanks-gray mt-1 mb-6">
            8. SEO orgânico para diferentes nichos e cidades
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
            O SEO orgânico funciona para praticamente todos os segmentos de negócio: lojas, clínicas, prestadores de serviço, e-commerces, escritórios de advocacia, contabilidade, restaurantes e muito mais.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-ghanks-light p-5 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-ghanks-gray mb-1">Lojas &amp; Comércio</h3>
              <p className="text-xs text-gray-500">Posicionar produtos e buscas locais de varejo.</p>
            </div>
            <div className="bg-ghanks-light p-5 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-ghanks-gray mb-1">Clínicas &amp; Saúde</h3>
              <p className="text-xs text-gray-500">Especialidades e atendimento na região.</p>
            </div>
            <div className="bg-ghanks-light p-5 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-ghanks-gray mb-1">Prestadores de Serviço</h3>
              <p className="text-xs text-gray-500">Captação direta de orçamentos e contratos.</p>
            </div>
            <div className="bg-ghanks-light p-5 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-ghanks-gray mb-1">E-commerce B2B / B2C</h3>
              <p className="text-xs text-gray-500">Tráfego orgânico de alta conversão para catálogo.</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            A G Hanks atende empresas de todo o Brasil. Se a sua cidade e palavra-chave ainda estiverem disponíveis, a vaga pode ser sua.
          </p>
        </section>
      </div>

      {/* ==================================================================
          Prova Social & Autoridade (Apontando para Portfólio)
          ================================================================== */}
      <section className="py-20 md:py-28 bg-ghanks-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-ghanks-blue rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                Resultados Reais
              </span>
              <h2 className="section-title text-ghanks-gray">
                SEO orgânico precisa ser explicado. Resultado precisa ser demonstrado.
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Veja aplicações do método em diferentes nichos, cidades e objetivos de negócio no Brasil. Conheça cases como Reluz Galvânica, Top Sacolas e Marcelo Clay.
              </p>
              <div className="pt-2">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 bg-ghanks-ink text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-md text-base"
                >
                  Ver cases de sucesso &rarr;
                </Link>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 aspect-[16/10]">
                <Image
                  src="/ghanks-seo-interna-2.png"
                  alt="Mapa do Brasil e dashboards interativos representando cobertura territorial e posicionamento orgânico nacional."
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
          CTA Final de Alta Conversão
          ================================================================== */}
      <section className="bg-ghanks-ink py-20 md:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-ghanks-blue/15 blur-[160px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Reveal>
            <h2 className="section-title mb-6 text-white">
              Quer descobrir se sua empresa tem espaço para crescer no Google?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed text-base md:text-lg">
              Solicite um diagnóstico gratuito e entenda quais oportunidades existem para o seu nicho, sua cidade e suas palavras-chave.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Li o guia de SEO orgânico e gostaria de solicitar o diagnóstico gratuito.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-9 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/25 text-base"
            >
              Solicitar Diagnóstico Gratuito
            </a>
          </Reveal>
        </div>
      </section>

      <Script
        id="json-ld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </PageShell>
  );
}
