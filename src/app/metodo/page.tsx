import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projetoghanks.vercel.app";
const WHATSAPP_NUMBER = "5511950809873";

export const metadata: Metadata = {
  title: "Método H.A.N.K.S. — Sistema Proprietário de Crescimento Orgânico",
  description:
    "Conheça o Método H.A.N.K.S. da G Hanks: 5 pilares conectados para posicionar empresas na primeira página do Google, atrair demanda qualificada e construir um ativo digital duradouro.",
  openGraph: {
    title: "Método H.A.N.K.S. — Sistema Proprietário de Crescimento | G Hanks",
    description:
      "Hacking de Crescimento, Autoridade Orgânica, Nichos Exclusivos, Keywords Estratégicas e Sustentabilidade de Resultado.",
    type: "website",
    url: `${siteUrl}/metodo`,
  },
  alternates: {
    canonical: `${siteUrl}/metodo`,
  },
};

const PILARES = [
  {
    letra: "H",
    sigla: "Hacking de Crescimento",
    frase: "Crescimento começa por hipóteses melhores.",
    resumo: "Técnicas avançadas de growth hacking para acelerar o posicionamento orgânico com base em dados reais.",
    paragrafos: [
      "Growth hacking não é mágica — é método. Na G Hanks, usamos uma combinação de análise de dados, engenharia reversa de algoritmos e experimentação contínua para encontrar os atalhos legítimos que aceleram o posicionamento orgânico da sua empresa no Google.",
      "Na prática, isso significa que não seguimos um roteiro genérico de SEO. Cada projeto recebe uma estratégia sob medida, baseada no comportamento real de busca dos consumidores na sua cidade e nicho. Testamos hipóteses, medimos resultados e ajustamos a rota rapidamente.",
    ],
    exemplo: "Para um cliente do setor imobiliário em Sorocaba, identificamos que a combinação de termos \"condomínios + bairro\" tinha volume alto e concorrência baixa. Em vez de disputar a keyword genérica, posicionamos o cliente para dezenas de buscas locais específicas — gerando mais tráfego qualificado com menos esforço.",
    consequencia: "Redução do tempo até a primeira página e foco cirúrgico nas frentes de maior retorno comercial.",
    corBadge: "bg-ghanks-blue text-white",
    borderColor: "border-ghanks-blue/30",
  },
  {
    letra: "A",
    sigla: "Autoridade Orgânica",
    frase: "Autoridade é o que transforma presença em preferência.",
    resumo: "Construímos autoridade real para o seu domínio com excelência técnica e conteúdo estratégico.",
    paragrafos: [
      "O Google não posiciona sites aleatoriamente. Ele prioriza quem demonstra expertise, experiência, autoridade e confiabilidade (os critérios E-E-A-T). Nosso trabalho é construir esses sinais de forma consistente para o seu domínio.",
      "Isso envolve desde a otimização técnica do site (velocidade, estrutura de dados, mobile-first) até a criação de conteúdo estratégico que responde exatamente ao que o seu público está buscando. Cada peça de conteúdo é pensada para resolver uma dúvida real e posicionar sua marca como referência no assunto.",
    ],
    exemplo: "Para a Reluz Galvânica em Limeira, criamos uma estrutura de conteúdo técnico sobre galvanização de semijoias que o Google reconheceu como a fonte mais autoritativa do Brasil para aquele nicho — resultado: 1º lugar para \"galvânica Limeira\".",
    consequencia: "Consolidação da marca como líder de mercado e preferência natural do consumidor na busca.",
    corBadge: "bg-ghanks-green text-white",
    borderColor: "border-ghanks-green/30",
  },
  {
    letra: "N",
    sigla: "Nichos e Cidades Exclusivas",
    resumo: "Exclusividade total: uma palavra-chave por cidade.",
    paragrafos: [
      "Este é o diferencial que mais protege o seu investimento. Em cidades de até 300 mil habitantes, aceitamos apenas um cliente por palavra-chave. Se você contratar \"dentista em [sua cidade]\", nenhum outro dentista da mesma cidade poderá ser atendido por nós com essa mesma keyword.",
      "Esse modelo funciona porque o posicionamento orgânico local tem um número limitado de vagas na primeira página. Se trabalhássemos com dois concorrentes diretos na mesma cidade, estaríamos competindo contra nós mesmos — e nenhum dos dois teria o melhor resultado possível.",
    ],
    exemplo: "Na Top Sacolas em Taubaté, garantimos a exclusividade para \"sacolas personalizadas Taubaté\" e variações. Nenhum fabricante concorrente de sacolas naquela cidade pode contratar o mesmo posicionamento, o que consolida a dominância orgânica do cliente.",
    consequencia: "Proteção territorial absoluta e captura integral da demanda gerada na sua praça.",
    corBadge: "bg-ghanks-yellow text-ghanks-ink",
    borderColor: "border-ghanks-yellow/40",
  },
  {
    letra: "K",
    sigla: "Keywords Estratégicas",
    frase: "A palavra certa vale mais do que milhares de visitas.",
    resumo: "Pesquisa profunda de palavras-chave focada em intenção de compra e conversão.",
    paragrafos: [
      "Nem toda palavra-chave vale o esforço. Muitas agências focam em termos genéricos com alta concorrência e baixa conversão. Na G Hanks, fazemos uma pesquisa profunda para identificar as keywords que realmente trazem clientes — não apenas visitantes.",
      "Trabalhamos com três camadas de palavras-chave: a keyword principal (alta intenção de compra), o cluster secundário (variações e termos relacionados) e a cauda longa (perguntas específicas que indicam intenção de contratar).",
    ],
    exemplo: "Em vez de disputar apenas \"palestrante financeiro\" (genérico), posicionamos o Marcelo Clay para termos como \"palestrante de finanças corporativas\", \"palestra sobre planejamento financeiro empresarial\" e variações que atraem exatamente o público corporativo.",
    consequencia: "Tráfego altamente qualificado e com taxa de conversão comercial muito superior.",
    corBadge: "bg-ghanks-red text-white",
    borderColor: "border-ghanks-red/30",
  },
  {
    letra: "S",
    sigla: "Sustentabilidade de Resultado",
    resumo: "Resultado que dura, criando um ativo digital independente de anúncios.",
    paragrafos: [
      "O maior problema do Google Ads é que o resultado desaparece no instante em que o orçamento acaba. Com SEO orgânico, o posicionamento é construído sobre uma base sólida que tende a se manter — e até melhorar — ao longo do tempo.",
      "Nossa manutenção mensal é um trabalho contínuo de otimização, atualização de conteúdo e adaptação às mudanças do algoritmo do Google, construindo um ativo perene.",
    ],
    exemplo: "Clientes que estão conosco há mais de 12 meses não apenas mantiveram suas posições — eles expandiram o número de keywords posicionadas, criando uma barreira orgânica intransponível para novos concorrentes.",
    consequencia: "Redução da dependência de mídia paga e previsibilidade de captação a longo prazo.",
    corBadge: "bg-ghanks-blue text-white",
    borderColor: "border-ghanks-blue/30",
  },
];

const KEYWORDS_MARQUEE = [
  "Método H.A.N.K.S.",
  "Hacking de Crescimento",
  "Autoridade Orgânica",
  "Cidades Exclusivas",
  "Keywords Estratégicas",
  "Sustentabilidade de Resultado",
];

export default function MetodoPage() {
  return (
    <PageShell>
      {/* ==================================================================
          Hero Principal — ghanks-metodo-hero-v2.png como background escuro
          ================================================================== */}
      <section className="relative bg-ghanks-ink overflow-hidden -mt-24 pt-32 md:pt-42 pb-20 md:pb-28">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/ghanks-metodo-hero-v2.png"
            alt="Cinco módulos luminosos conectados representando os pilares do Método H.A.N.K.S. em um cenário estratégico de crescimento orgânico."
            fill
            priority
            quality={85}
            className="object-cover object-[center_right]"
          />
          {/* Gradiente sutil para garantir legibilidade perfeita à esquerda */}
          <div className="absolute inset-0 bg-gradient-to-r from-ghanks-ink via-ghanks-ink/90 to-ghanks-ink/40 md:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Início", href: "/" }, { label: "Método H.A.N.K.S." }]}
            tone="dark"
          />

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/90 mb-6">
              <span className="w-2 h-2 rounded-full bg-ghanks-blue" aria-hidden="true" />
              Um Sistema Proprietário de Crescimento
            </span>

            <h1 className="display-title text-white">
              Método <span className="text-gradient-brand">H.A.N.K.S.</span>
            </h1>
            <p className="mt-4 font-display text-xl sm:text-2xl font-medium text-white/90">
              Crescimento orgânico com estratégia, exclusividade e previsibilidade
            </p>

            <p className="mt-6 lead text-white/80 max-w-2xl">
              Cinco pilares conectados para posicionar empresas na primeira página do Google, atrair demanda qualificada e construir um ativo digital que continua trabalhando depois da campanha.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um diagnóstico estratégico do Método H.A.N.K.S.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 text-base"
              >
                Solicitar diagnóstico estratégico
              </a>
              <a
                href="#pilares"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm text-base"
              >
                Conhecer os 5 pilares
              </a>
            </div>

            <p className="mt-6 text-xs text-white/60 tracking-wider uppercase font-medium">
              Exclusividade por cidade e palavra-chave · SEO orgânico · Estratégia sob medida
            </p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-ghanks-ink-soft border-t border-white/10 py-5">
        <Marquee items={KEYWORDS_MARQUEE} tone="dark" />
      </div>

      {/* ==================================================================
          Seção de Abertura / Enquadramento Estratégico
          ================================================================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
                Visão Executiva
              </span>
              <h2 className="section-title mt-3 text-ghanks-gray">
                Não é uma coleção de técnicas. É um sistema de crescimento.
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg">
                O Método H.A.N.K.S. conecta inteligência de mercado, autoridade, exclusividade local, arquitetura de palavras-chave e melhoria contínua. Cada pilar resolve uma parte do problema; juntos, eles constroem uma posição orgânica difícil de copiar.
              </p>
            </Reveal>

            <Reveal delay={150} className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
              <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-100">
                <span className="text-ghanks-blue font-bold text-sm block mb-1">01</span>
                <h3 className="font-bold text-ghanks-gray mb-1">Estratégia sob medida</h3>
                <p className="text-xs text-gray-500">Alinhada aos objetivos comerciais da empresa.</p>
              </div>
              <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-100">
                <span className="text-ghanks-green font-bold text-sm block mb-1">02</span>
                <h3 className="font-bold text-ghanks-gray mb-1">Exclusividade por cidade</h3>
                <p className="text-xs text-gray-500">Proteção total contra concorrentes locais.</p>
              </div>
              <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-100">
                <span className="text-ghanks-yellow font-bold text-sm block mb-1">03</span>
                <h3 className="font-bold text-ghanks-gray mb-1">Ativo digital de longo prazo</h3>
                <p className="text-xs text-gray-500">Valor contínuo independente de anúncios.</p>
              </div>
            </Reveal>

            <Reveal delay={200} className="mt-10">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero entender se existe espaço para minha empresa no Método H.A.N.K.S.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ghanks-blue hover:text-blue-700 transition-colors"
              >
                Quero entender se existe espaço para minha empresa &rarr;
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Imagem Interna 1 — Diagnóstico e Inteligência Estratégica
          ================================================================== */}
      <section className="py-20 md:py-28 bg-ghanks-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 aspect-[16/10]">
                <Image
                  src="/ghanks-metodo-interna-diagnostico-v2.png"
                  alt="Ambiente executivo com mapas de demanda, dados estratégicos e cinco pilares de crescimento orgânico."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-ghanks-blue rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                Inteligência Estratégica
              </span>
              <h2 className="section-title text-ghanks-gray">
                Antes de executar, encontramos a oportunidade certa
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                O método começa com leitura de mercado, comportamento de busca, concorrência, cidade e intenção comercial. A estratégia não parte de uma lista genérica de tarefas; parte de uma oportunidade concreta de posicionamento.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <span className="bg-white text-ghanks-gray border border-gray-200 rounded-xl px-4 py-2.5 text-xs md:text-sm font-semibold shadow-xs">
                  Mapa de demanda
                </span>
                <span className="bg-white text-ghanks-gray border border-gray-200 rounded-xl px-4 py-2.5 text-xs md:text-sm font-semibold shadow-xs">
                  Intenção de busca
                </span>
                <span className="bg-white text-ghanks-gray border border-gray-200 rounded-xl px-4 py-2.5 text-xs md:text-sm font-semibold shadow-xs">
                  Espaço competitivo
                </span>
              </div>
              <div className="pt-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar meu diagnóstico estratégico do Método H.A.N.K.S.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-3.5 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-md shadow-blue-500/20 text-sm"
                >
                  Solicitar meu diagnóstico
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Seção dos 5 Pilares H.A.N.K.S.
          ================================================================== */}
      <section id="pilares" className="py-20 md:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Os 5 Pilares
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Conheça a engenharia do Método H.A.N.K.S.
            </h2>
            <p className="mt-4 text-gray-600">
              Navegue pelos pilares que sustentam nossa metodologia de posicionamento orgânico.
            </p>

            {/* Índice visual */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {PILARES.map((p) => (
                <a
                  key={p.letra}
                  href={`#pilar-${p.letra.toLowerCase()}`}
                  className="inline-flex items-center gap-2 bg-ghanks-light hover:bg-ghanks-blue hover:text-white transition-all px-4 py-2 rounded-xl text-xs font-bold text-ghanks-gray border border-gray-200 shadow-xs"
                >
                  <span className="w-5 h-5 rounded-md bg-ghanks-blue text-white flex items-center justify-center text-[10px]">
                    {p.letra}
                  </span>
                  {p.sigla}
                </a>
              ))}
            </div>
          </Reveal>

          <div className="space-y-16">
            {PILARES.map((pilar, idx) => (
              <Reveal key={pilar.letra} delay={idx * 60}>
                <article
                  id={`pilar-${pilar.letra.toLowerCase()}`}
                  className={`bg-ghanks-light rounded-3xl p-8 md:p-12 border ${pilar.borderColor} shadow-sm scroll-mt-28`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-5">
                      <div className={`w-16 h-16 rounded-2xl ${pilar.corBadge} flex items-center justify-center font-display text-3xl font-extrabold shadow-md`}>
                        {pilar.letra}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-ghanks-blue">Pilar {pilar.letra}</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-ghanks-gray mt-0.5">{pilar.sigla}</h3>
                      </div>
                    </div>
                    <blockquote className="max-w-md italic font-semibold text-ghanks-gray text-base md:text-lg bg-white px-6 py-4 rounded-2xl border border-gray-200 shadow-xs">
                      &ldquo;{pilar.frase}&rdquo;
                    </blockquote>
                  </div>

                  <p className="text-lg font-medium text-gray-700 mb-6">{pilar.resumo}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      {pilar.paragrafos.map((p, j) => (
                        <p key={j} className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {p}
                        </p>
                      ))}
                    </div>

                    <div className="space-y-6 flex flex-col justify-between bg-white rounded-2xl p-6 border border-gray-200 shadow-xs">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1 rounded-full">
                          Exemplo Prático
                        </span>
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">{pilar.exemplo}</p>
                      </div>
                      <div className="pt-4 border-t border-gray-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
                          Consequência para a Empresa
                        </span>
                        <p className="mt-2 text-sm font-medium text-ghanks-gray">{pilar.consequencia}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================
          Imagem Interna 2 — Execução Contínua e Sustentabilidade
          ================================================================== */}
      <section className="py-20 md:py-28 bg-ghanks-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 bg-green-50 text-ghanks-green rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                Evolução Contínua
              </span>
              <h2 className="section-title text-ghanks-gray">
                Posicionamento não termina quando a primeira página chega
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                O Método H.A.N.K.S. combina execução, análise e otimização contínua. A cada novo dado, a estratégia evolui para proteger a posição conquistada, ampliar a cobertura de buscas e transformar visibilidade em demanda qualificada.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <span className="bg-white text-ghanks-gray border border-gray-200 rounded-xl px-4 py-2.5 text-xs md:text-sm font-semibold shadow-xs">
                  Monitoramento contínuo
                </span>
                <span className="bg-white text-ghanks-gray border border-gray-200 rounded-xl px-4 py-2.5 text-xs md:text-sm font-semibold shadow-xs">
                  Otimização baseada em dados
                </span>
                <span className="bg-white text-ghanks-gray border border-gray-200 rounded-xl px-4 py-2.5 text-xs md:text-sm font-semibold shadow-xs">
                  Construção de ativo digital
                </span>
              </div>
              <div className="pt-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero construir uma posição sustentável para minha empresa com o Método H.A.N.K.S.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-3.5 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-md shadow-blue-500/20 text-sm"
                >
                  Construir uma posição sustentável
                </a>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 aspect-[16/10]">
                <Image
                  src="/ghanks-metodo-interna-execucao-v2.png"
                  alt="Painel estratégico com trajetória de crescimento, otimização contínua e arquitetura de conteúdo em ambiente executivo."
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
          Transição para Cases / Prova Social
          ================================================================== */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Evidência Real
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Estratégia é importante. Evidência é indispensável.
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Veja como os pilares do Método H.A.N.K.S. foram aplicados em diferentes nichos e cidades do Brasil, gerando resultados sólidos e duradouros.
            </p>
            <div className="mt-8">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-ghanks-ink text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-md"
              >
                Ver cases de sucesso &rarr;
              </Link>
            </div>
          </Reveal>
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
              Existe espaço para sua empresa crescer organicamente?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed text-base md:text-lg">
              Descubra quais oportunidades existem para o seu negócio, sua cidade e seu mercado antes de investir em mais uma ação isolada de marketing.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um diagnóstico estratégico para minha empresa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-9 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/25 text-base"
            >
              Solicitar diagnóstico estratégico
            </a>
            <p className="mt-4 text-xs text-white/50 tracking-wide">
              Conversa inicial, análise de contexto e próximos passos claros.
            </p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
