import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projetoghanks.vercel.app";
const WHATSAPP_NUMBER = "5511950809873";

export const metadata: Metadata = {
  title: "Tráfego Pago — Gestão de Campanhas em Google Ads e Meta Ads | G Hanks",
  description:
    "Transforme investimento em mídia em oportunidades reais. Planejamento, criação, gestão e otimização de campanhas com foco em dados, negócio e geração de demanda.",
  openGraph: {
    title: "Tráfego Pago G Hanks — Google Ads e Meta Ads",
    description: "Gestão profissional de tráfego pago orientada a performance e resultados de negócio.",
    type: "website",
    url: `${siteUrl}/trafego-pago`,
  },
  alternates: {
    canonical: `${siteUrl}/trafego-pago`,
  },
};

const O_QUE_ENTREGA = [
  {
    titulo: "Diagnóstico de Canais",
    descricao: "Avaliação do histórico de contas, pixels, tagueamento e estrutura de conversão atual.",
  },
  {
    titulo: "Planejamento de Mídia",
    descricao: "Definição de públicos, segmentações, canais (Google Ads / Meta Ads) e distribuição de verba.",
  },
  {
    titulo: "Estruturação de Campanhas",
    descricao: "Criação de campanhas organizadas por objetivos, conjuntos de anúncios e segmentações refinadas.",
  },
  {
    titulo: "Orientações de Criativos",
    descricao: "Briefings e orientações direcionadas para peças visuais, vídeos e copies focadas em conversão.",
  },
  {
    titulo: "Mensuração e Tagueamento",
    descricao: "Configuração rigorosa de eventos, conversões e parâmetros UTM para rastrear cada oportunidade.",
  },
  {
    titulo: "Otimização Contínua",
    descricao: "Análise diária/semanal de métricas, testes A/B, ajustes de lances e poda de públicos de baixo desempenho.",
  },
];

const PROCESSO = [
  {
    passo: "01",
    titulo: "Diagnosticar",
    descricao: "Entendemos seu produto, oferta, histórico de mídia e capacidade de atendimento de leads.",
  },
  {
    passo: "02",
    titulo: "Planejar",
    descricao: "Definimos canais, estrutura de campanhas, verba sugerida e metas de indicadores.",
  },
  {
    passo: "03",
    titulo: "Executar",
    descricao: "Configuramos contas, criamos campanhas, validamos pixels e colocamos os anúncios no ar.",
  },
  {
    passo: "04",
    titulo: "Otimizar",
    descricao: "Monitoramos o desempenho em tempo real, refinamos públicos e melhoramos o custo por lead.",
  },
];

const INDICADORES = [
  "Investimento em mídia",
  "Alcance e impressões",
  "Cliques e CTR (Taxa de Clique)",
  "CPC (Custo por Clique)",
  "Leads e contatos gerados",
  "CPL (Custo por Lead)",
  "Taxa de conversão da página",
  "Qualidade das oportunidades",
];

const FAQ_ITENS = [
  {
    pergunta: "A verba de mídia está inclusa no valor da gestão?",
    resposta: "Não. A verba de mídia (o valor pago diretamente ao Google e à Meta) é separada da taxa de gestão da G Hanks e é paga diretamente pelo cliente com cartão de crédito nas respectivas plataformas.",
  },
  {
    pergunta: "Qual é o investimento mínimo recomendado em anúncios?",
    resposta: "O investimento em mídia varia conforme o mercado e a praça, mas sugerimos uma verba inicial que permita testes consistentes e geração de volume de dados para otimização.",
  },
  {
    pergunta: "Quanto tempo leva para as campanhas gerarem resultados?",
    resposta: "As campanhas começam a veicular logo após a aprovação da estrutura. Os primeiros dias são de aprendizado dos algoritmos, com otimizações contínuas para estabilizar o custo por lead nas primeiras semanas.",
  },
  {
    pergunta: "Quem produz os criativos (imagens e vídeos)?",
    resposta: "Fornecemos diretrizes, briefings e roteiros detalhados de criativos focados em conversão. A produção final do material visual pode ser feita pela equipe do cliente ou alinhada conforme o escopo contratado.",
  },
  {
    pergunta: "Existe garantia de faturamento ou de número de leads?",
    resposta: "Não fazemos promessas absolutas de faturamento ou quantidade exata de leads. O sucesso de campanhas de tráfego depende de múltiplos fatores externos, como a atratividade da oferta, qualidade da página de destino, concorrência e atendimento comercial.",
  },
];

export default function TrafegoPagoPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative bg-ghanks-ink overflow-hidden -mt-24 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 -right-20 w-[34rem] h-[34rem] rounded-full bg-ghanks-green/15 blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Início", href: "/" }, { label: "Soluções", href: "/servicos" }, { label: "Tráfego Pago" }]}
            tone="dark"
          />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <Reveal className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/80 mb-6">
                <span className="w-2 h-2 rounded-full bg-ghanks-green" aria-hidden="true" />
                Google Ads &amp; Meta Ads
              </span>
              <h1 className="display-title text-white">
                Transforme investimento em mídia em <span className="text-gradient-brand">oportunidades reais</span>
              </h1>
              <p className="mt-6 lead text-white/70 max-w-2xl">
                Planejamento, criação, gestão e otimização de campanhas com foco em dados, negócio e geração de demanda para o seu negócio.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero solicitar uma análise de tráfego pago para minha empresa.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25"
                >
                  Solicitar Análise de Tráfego Pago
                </a>
                <a
                  href="#processo"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  Conhecer nosso processo
                </a>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-4">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-white">
                <h3 className="text-lg font-bold mb-4">Nota importante sobre mídia</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  A verba de investimento em anúncios é paga diretamente às plataformas (Google/Meta). O serviço da G Hanks compreende a estratégia, configuração, acompanhamento e otimização profissional das campanhas.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-ghanks-ink-soft border-t border-white/10 py-5">
        <Marquee
          items={[
            "Google Ads",
            "Meta Ads (Facebook & Instagram)",
            "Geração de Demanda",
            "Otimização de CPL",
            "Campanhas de Conversão",
            "Análise de Dados",
          ]}
          tone="dark"
        />
      </div>

      {/* Problema / Introdução */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-red">
                O desafio do tráfego sem estratégia
              </span>
              <h2 className="section-title mt-3 text-ghanks-gray">
                Anúncios sem direção geram cliques, mas não vendas
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Muitas empresas investem em anúncios em redes sociais e buscadores sem uma estrutura adequada de rastreamento, segmentação ou alinhamento com a oferta. O resultado é desperdício de orçamento com cliques desqualificados e falta de previsibilidade comercial.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Na G Hanks, tratamos tráfego pago como engenharia de aquisição: cada centavo investido precisa ser medido, testado e otimizado para gerar leads e oportunidades comerciais reais.
              </p>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6">
              <div className="bg-ghanks-light rounded-3xl p-8 md:p-10 border border-gray-100 space-y-6">
                <h3 className="block-title text-ghanks-gray">Para quem é este serviço?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-ghanks-blue flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm md:text-base">Empresas que querem acelerar a captação de clientes com previsibilidade.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-ghanks-blue flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm md:text-base">Negócios que já anunciam mas sofrem com custo por lead alto e pouca qualificação.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-ghanks-blue flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm md:text-base">Gestores que precisam de relatórios claros, baseados em métricas de negócio (CPL, ROI, conversões).</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* O que a G Hanks entrega */}
      <section className="py-20 md:py-28 bg-ghanks-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Escopo completo
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              O que entregamos na gestão de tráfego pago
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {O_QUE_ENTREGA.map((item, i) => (
              <Reveal key={item.titulo} delay={i * 80}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-ghanks-blue flex items-center justify-center font-bold text-sm mb-4">
                    {i + 1}
                  </div>
                  <h3 className="block-title text-ghanks-gray mb-2">{item.titulo}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.descricao}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processo (4 etapas) */}
      <section id="processo" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-gray">
              Método passo a passo
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Nosso processo em quatro etapas
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESSO.map((proc, i) => (
              <Reveal key={proc.passo} delay={i * 100}>
                <div className="bg-ghanks-light rounded-2xl p-7 border border-gray-100 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-display text-4xl font-extrabold text-ghanks-green/40 block mb-4">
                      {proc.passo}
                    </span>
                    <h3 className="text-lg font-bold text-ghanks-gray mb-2">{proc.titulo}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{proc.descricao}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Indicadores Acompanhados */}
      <section className="py-20 md:py-28 bg-ghanks-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-yellow">
                Transparência em dados
              </span>
              <h2 className="section-title mt-3 text-white">
                Indicadores que acompanhamos de perto
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Monitoramos métricas vitais para garantir que o seu investimento esteja gerando retorno financeiro e eficiência operacional.
              </p>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {INDICADORES.map((ind, i) => (
                  <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-ghanks-yellow shrink-0" />
                    <span className="text-sm md:text-base font-medium text-white/90">{ind}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-ghanks-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Dúvidas frequentes
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Tudo o que você precisa saber sobre tráfego pago
            </h2>
          </Reveal>

          <div className="space-y-6">
            {FAQ_ITENS.map((faq, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                  <h3 className="block-title text-ghanks-gray mb-3">{faq.pergunta}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.resposta}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-ghanks-blue to-blue-700 py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Reveal>
            <h2 className="section-title mb-6">Pronto para estruturar suas campanhas com foco em resultados?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Fale com nossa equipe e solicite uma análise de tráfego pago para o seu negócio.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar uma análise de tráfego pago para minha empresa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-ghanks-blue px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl"
            >
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
