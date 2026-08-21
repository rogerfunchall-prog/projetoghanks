import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import DiagnosticoForm from "@/components/DiagnosticoForm";

import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Diagnóstico Gratuito de SEO | G Hanks",
  description:
    "Descubra oportunidades de crescimento orgânico para sua empresa, nicho e cidade com uma análise estratégica inicial.",
  keywords: [
    "diagnóstico gratuito SEO",
    "análise de SEO",
    "consultoria de SEO orgânico",
    "como gerar clientes pelo Google organicamente",
  ],
  openGraph: {
    title: "Diagnóstico Gratuito de SEO | G Hanks",
    description:
      "Análise estratégica inicial do posicionamento orgânico, presença local e oportunidades de crescimento.",
    type: "website",
    url: `${siteConfig.url}/diagnostico-gratuito`,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Diagnóstico Gratuito — G Hanks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnóstico Gratuito de SEO | G Hanks",
    description: "Descubra oportunidades de crescimento orgânico para sua empresa.",
  },
  alternates: {
    canonical: `${siteConfig.url}/diagnostico-gratuito`,
  },
};

const KEYWORDS_MARQUEE = [
  "DIAGNÓSTICO ESTRATÉGICO",
  "SEO ORGÂNICO",
  "PRESENÇA LOCAL",
  "INTELIGÊNCIA ARTIFICIAL",
  "AUTORIDADE DIGITAL",
  "CRESCIMENTO ORGÂNICO",
];

const CARDS_AUTORIDADE = [
  {
    num: "01",
    titulo: "Presença no Google",
    desc: "Identificação inicial de como sua empresa aparece para pesquisas relacionadas aos seus produtos, serviços e região.",
  },
  {
    num: "02",
    titulo: "SEO local",
    desc: "Avaliação preliminar de presença regional, informações públicas e oportunidades de relevância para as cidades atendidas.",
  },
  {
    num: "03",
    titulo: "Cenário competitivo",
    desc: "Compreensão dos concorrentes e das marcas que disputam a mesma atenção nas buscas do seu mercado.",
  },
  {
    num: "04",
    titulo: "Visibilidade em IAs",
    desc: "Investigação inicial sobre autoridade, clareza de marca, conteúdo e sinais que podem influenciar a descoberta em experiências de busca com IA.",
  },
];

const INDICADORES = [
  "Análise inicial baseada nas informações da sua empresa.",
  "Avaliação de presença orgânica, local e competitiva.",
  "Recomendação de próximos passos conforme o cenário identificado.",
];

export default function DiagnosticoGratuitoPage() {
  return (
    <PageShell>
      {/* ==================================================================
          Hero Principal — ghanks-contato-hero.png com padrão B2B premium
          ================================================================== */}
      <section className="relative bg-ghanks-ink overflow-hidden -mt-24 pt-32 md:pt-42 pb-20 md:pb-28">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/ghanks-contato-hero.png"
            alt="Composição tecnológica e abstrata representando dados de busca, mapeamento regional e autoridade digital."
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
            items={[{ label: "Início", href: "/" }, { label: "Diagnóstico Gratuito" }]}
            tone="dark"
          />

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/90 mb-6">
              <span className="w-2 h-2 rounded-full bg-ghanks-blue" aria-hidden="true" />
              DIAGNÓSTICO ESTRATÉGICO G HANKS
            </span>

            <h1 className="display-title text-white">
              Sua empresa está sendo encontrada pelas <span className="text-gradient-brand">pessoas certas</span>?
            </h1>

            <p className="mt-6 lead text-white/80 max-w-2xl">
              Solicite uma análise inicial do seu posicionamento orgânico no Google, da sua presença local e da forma como sua marca pode aparecer nas novas jornadas de busca e respostas geradas por inteligência artificial.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {INDICADORES.map((ind, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-white flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-ghanks-green shrink-0 mt-1.5" />
                  <span className="text-xs text-white/85 leading-relaxed">{ind}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-white/60 tracking-wider uppercase font-medium">
              O diagnóstico gratuito é uma análise inicial de oportunidade. Ele não representa uma auditoria técnica completa, garantia de posicionamento ou promessa de resultado.
            </p>
          </div>
        </div>

        {/* Faixa de termos na base */}
        <div className="relative z-10 mt-16 md:mt-24 border-t border-white/10 py-5">
          <Marquee items={KEYWORDS_MARQUEE} tone="dark" />
        </div>
      </section>

      {/* ==================================================================
          Bloco de Autoridade e Clareza (4 Cards)
          ================================================================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Análise Profunda
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Não entregamos uma resposta genérica. Primeiro entendemos o seu mercado.
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-base">
              A análise considera o contexto do negócio, região atendida, serviços prioritários, concorrência, presença digital, intenção de busca e oportunidades de melhoria.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CARDS_AUTORIDADE.map((card, i) => (
              <Reveal key={card.num} delay={i * 80}>
                <div className="bg-ghanks-light rounded-3xl p-7 border border-gray-200 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="font-display text-3xl font-bold text-ghanks-blue block mb-4">
                      {card.num}
                    </span>
                    <h3 className="block-title text-ghanks-gray text-lg mb-2">{card.titulo}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================
          Seção do Formulário Multi-Etapas
          ================================================================== */}
      <section className="py-20 md:py-28 bg-ghanks-light border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Formulário Consultivo
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Inicie sua solicitação de diagnóstico
            </h2>
            <p className="mt-2 text-gray-600 max-w-xl mx-auto text-sm">
              Preencha as etapas abaixo. Os dados são enviados com segurança para nossa equipe em analise@ghanks.com.br.
            </p>
          </Reveal>

          <DiagnosticoForm />
        </div>
      </section>
    </PageShell>
  );
}
