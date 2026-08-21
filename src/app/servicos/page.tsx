import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

import { siteConfig } from "@/lib/config";

const WHATSAPP_NUMBER = siteConfig.contact.whatsapp;

export const metadata: Metadata = {
  title: "Soluções de Crescimento Digital | SEO, Tráfego e Redes Sociais — G Hanks",
  description:
    "Conheça as soluções da G Hanks: SEO orgânico, tráfego pago orientado a dados, gestão de redes sociais e treinamentos presenciais.",
  keywords: [
    "soluções de marketing digital",
    "SEO e tráfego pago",
    "gestão de redes sociais",
    "treinamentos presenciais",
    "plataforma de crescimento",
  ],
  openGraph: {
    title: "Soluções de Crescimento Digital | G Hanks",
    description: "SEO orgânico, tráfego pago, redes sociais e treinamentos para sua empresa.",
    type: "website",
    url: `${siteConfig.url}/servicos`,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Soluções G Hanks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluções de Crescimento Digital | G Hanks",
    description: "SEO orgânico, tráfego pago, redes sociais e treinamentos.",
  },
  alternates: {
    canonical: `${siteConfig.url}/servicos`,
  },
};

const SOLUCOES = [
  {
    titulo: "1. SEO Orgânico",
    sub: "Presença sustentável no Google",
    descricao: "Posicione sua empresa na primeira página do Google de forma orgânica e duradoura, com exclusividade por cidade e palavra-chave.",
    href: "/seo-organico",
    beneficios: ["Sem custo por clique", "Exclusividade territorial", "Tráfego qualificado contínuo"],
    cor: "border-ghanks-blue/30 hover:border-ghanks-blue",
    badgeBg: "bg-blue-50 text-ghanks-blue",
  },
  {
    titulo: "2. Tráfego Pago",
    sub: "Geração de demanda orientada a dados",
    descricao: "Campanhas estruturadas em Google Ads e Meta Ads com foco total em eficiência, conversão e retorno sobre o investimento.",
    href: "/trafego-pago",
    beneficios: ["Estratégia sob medida", "Otimização contínua de CPL", "Relatórios transparentes"],
    cor: "border-ghanks-green/30 hover:border-ghanks-green",
    badgeBg: "bg-green-50 text-ghanks-green",
  },
  {
    titulo: "3. Gestão de Redes Sociais",
    sub: "Posicionamento e relacionamento",
    descricao: "Estratégia de conteúdo, calendário editorial e produção direcionada para empresas que querem deixar de postar sem direção.",
    href: "/gestao-redes-sociais",
    beneficios: ["Linha editorial clara", "Consistência de marca", "Foco em conversão e autoridade"],
    cor: "border-ghanks-yellow/40 hover:border-ghanks-yellow",
    badgeBg: "bg-yellow-50 text-yellow-700",
  },
  {
    titulo: "4. Treinamentos Presenciais",
    sub: "Capacitação sob demanda",
    descricao: "Conteúdo prático adaptado ao seu time e aos desafios reais do seu negócio, ministrado na base da G Hanks ou na sua empresa.",
    href: "/treinamentos-presenciais",
    beneficios: ["Formato sob medida", "Linguagem prática", "Aplicação imediata"],
    cor: "border-ghanks-red/30 hover:border-ghanks-red",
    badgeBg: "bg-red-50 text-ghanks-red",
  },
];

const PROCESSO = [
  {
    passo: "01",
    titulo: "Diagnóstico Inicial",
    descricao: "Analisamos o momento atual da sua empresa, canais ativos, concorrentes e objetivos comerciais.",
  },
  {
    passo: "02",
    titulo: "Planejamento Estratégico",
    descricao: "Desenhamos o plano de ação combinando as frentes necessárias para gerar demanda e autoridade.",
  },
  {
    passo: "03",
    titulo: "Execução Técnica",
    descricao: "Implementamos campanhas, otimizações orgânicas, fluxos de conteúdo ou treinamentos com rigor técnico.",
  },
  {
    passo: "04",
    titulo: "Otimização Contínua",
    descricao: "Monitoramos indicadores, ajustamos rotas e refinamos a operação para maximizar resultados.",
  },
];

export default function ServicosHubPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative bg-ghanks-ink overflow-hidden -mt-24 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 left-1/4 w-[36rem] h-[36rem] rounded-full bg-ghanks-blue/15 blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Soluções" }]} tone="dark" />

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <Reveal className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/80 mb-6">
                <span className="w-2 h-2 rounded-full bg-ghanks-blue" aria-hidden="true" />
                Plataforma de Crescimento
              </span>
              <h1 className="display-title text-white">
                Soluções completas para <span className="text-gradient-brand">escalar seu negócio</span>
              </h1>
              <p className="mt-6 lead text-white/70 max-w-2xl">
                Unimos SEO orgânico, tráfego pago, gestão de redes sociais e treinamentos presenciais sob demanda para transformar a presença digital da sua empresa em resultados reais.
              </p>
            </Reveal>
            <Reveal delay={150} className="lg:col-span-4 flex lg:justify-end">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de conhecer melhor as soluções da G Hanks para minha empresa.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25"
              >
                Falar com Especialista
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-ghanks-ink-soft border-t border-white/10 py-5">
        <Marquee
          items={[
            "SEO Orgânico",
            "Tráfego Pago",
            "Gestão de Redes Sociais",
            "Treinamentos Presenciais",
            "Método H.A.N.K.S.",
            "Growth Hacking",
            "Exclusividade por Cidade",
          ]}
          tone="dark"
        />
      </div>

      {/* Cards de Soluções */}
      <section className="py-20 md:py-28 bg-ghanks-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Nossas 4 Frentes
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Escolha a solução ideal para o momento da sua empresa
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {SOLUCOES.map((item, idx) => (
              <Reveal key={item.titulo} delay={idx * 100}>
                <div className={`h-full bg-white rounded-3xl p-8 border ${item.cor} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${item.badgeBg} mb-4`}>
                      {item.sub}
                    </span>
                    <h3 className="block-title text-ghanks-gray mb-3">{item.titulo}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{item.descricao}</p>
                    <ul className="space-y-2 mb-8">
                      {item.beneficios.map((ben, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 text-ghanks-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-ghanks-blue hover:text-blue-700 transition-colors"
                    >
                      Conhecer solução completa &rarr;
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Como Trabalhamos (Processo em 4 etapas) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-gray">
              Metodologia estruturada
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Como transformamos estratégia em resultado
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESSO.map((proc, i) => (
              <Reveal key={proc.passo} delay={i * 100}>
                <div className="bg-ghanks-light rounded-2xl p-7 border border-gray-100 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-display text-4xl font-extrabold text-ghanks-blue/30 block mb-4">
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

      {/* CTA Final */}
      <section className="bg-ghanks-ink py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Reveal>
            <h2 className="section-title mb-6">Pronto para colocar sua empresa no próximo nível?</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Fale com nossa equipe e descubra qual combinação de soluções faz sentido para os objetivos do seu negócio.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar uma consultoria para escolher as melhores soluções para minha empresa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25"
            >
              Falar pelo WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
