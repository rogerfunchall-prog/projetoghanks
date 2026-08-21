import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

import { siteConfig } from "@/lib/config";

const WHATSAPP_NUMBER = siteConfig.contact.whatsapp;

export const metadata: Metadata = {
  title: "Gestão de Redes Sociais para Empresas | Estratégia e Conteúdo — G Hanks",
  description:
    "Estratégia, conteúdo e gestão de redes sociais para empresas que querem deixar de postar sem direção. Posicionamento e autoridade.",
  keywords: [
    "gestão de redes sociais",
    "redes sociais para empresas",
    "Instagram corporativo",
    "LinkedIn estratégico",
    "conteúdo estratégico para SEO",
  ],
  openGraph: {
    title: "Gestão de Redes Sociais para Empresas | G Hanks",
    description: "Estratégia e conteúdo orientados a negócio para sua presença digital.",
    type: "website",
    url: `${siteConfig.url}/gestao-redes-sociais`,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Gestão de Redes Sociais — G Hanks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestão de Redes Sociais para Empresas | G Hanks",
    description: "Estratégia e conteúdo orientados a negócio.",
  },
  alternates: {
    canonical: `${siteConfig.url}/gestao-redes-sociais`,
  },
};

const FORMATOS_CONTEUDO = [
  {
    titulo: "Conteúdo Educativo",
    descricao: "Artigos, carrosséis e posts que explicam seu produto, resolvem dúvidas do cliente e geram valor.",
  },
  {
    titulo: "Prova Social",
    descricao: "Cases de sucesso, depoimentos de clientes satisfeitos e validação da autoridade da empresa.",
  },
  {
    titulo: "Bastidores",
    descricao: "O dia a dia da operação, equipe, processos e o cuidado por trás de cada entrega.",
  },
  {
    titulo: "Oferta e Conversão",
    descricao: "Chamadas diretas para produtos, serviços, orçamentos e conversões comerciais.",
  },
  {
    titulo: "Posicionamento",
    descricao: "Visão de mercado, opiniões fortes sobre o setor e diferenciais competitivos claros.",
  },
  {
    titulo: "Relacionamento",
    descricao: "Interação genuína, enquetes, caixas de perguntas e conexão contínua com a audiência.",
  },
];

const PROCESSO = [
  {
    passo: "01",
    titulo: "Entender",
    descricao: "Mergulhamos na sua marca, público-alvo, diferenciais e tom de voz desejado.",
  },
  {
    passo: "02",
    titulo: "Planejar",
    descricao: "Definimos pilares editoriais, grade de frequência e cronograma mensal de temas.",
  },
  {
    passo: "03",
    titulo: "Produzir",
    descricao: "Criamos roteiros, copys, artes e orientações de vídeo com rigor de design e clareza.",
  },
  {
    passo: "04",
    titulo: "Aprender",
    descricao: "Analisamos engajamento, alcance e interações para refinar a estratégia mês a mês.",
  },
];

const OBJETIVOS = [
  "Autoridade de mercado",
  "Relacionamento com clientes",
  "Educação do mercado",
  "Geração de demanda",
  "Apoio à decisão de compra",
];

const FAQ_ITENS = [
  {
    pergunta: "Quantas postagens por semana estão inclusas?",
    resposta: "A quantidade de posts é dimensionada conforme o plano escolhido e a capacidade de produção e gravação da empresa, sempre priorizando qualidade e consistência em vez de volume vazio.",
  },
  {
    pergunta: "Quais redes sociais são atendidas?",
    resposta: "Focamos principalmente em Instagram, LinkedIn e Facebook, onde o público empresarial e decisores estão mais ativos.",
  },
  {
    pergunta: "Como funciona o fluxo de aprovação?",
    resposta: "Apresentamos o calendário e os copys/artes com antecedência em lote mensal. Após a sua aprovação, o conteúdo é agendado e publicado nos dias combinados.",
  },
  {
    pergunta: "Quem grava os vídeos e produz as fotos?",
    resposta: "A G Hanks fornece os roteiros detalhados, ideias de enquadramento e orientações de gravação. A captação de imagens pode ser feita pela equipe do cliente ou alinhada conforme visita presencial/parceiros.",
  },
  {
    pergunta: "Gestão de redes sociais substitui anúncios ou SEO?",
    resposta: "Não. Redes sociais são ótimas para relacionamento e autoridade com quem já te segue, mas funcionam em conjunto com SEO orgânico e tráfego pago para atrair novos públicos que ainda não conhecem sua marca.",
  },
];

export default function GestaoRedesSociaisPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative bg-ghanks-ink overflow-hidden -mt-24 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/4 w-[36rem] h-[36rem] rounded-full bg-ghanks-yellow/10 blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Início", href: "/" }, { label: "Soluções", href: "/servicos" }, { label: "Gestão de Redes Sociais" }]}
            tone="dark"
          />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <Reveal className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/80 mb-6">
                <span className="w-2 h-2 rounded-full bg-ghanks-yellow" aria-hidden="true" />
                Posicionamento &amp; Conteúdo
              </span>
              <h1 className="display-title text-white">
                Presença digital que comunica, <span className="text-gradient-brand">posiciona e gera relacionamento</span>
              </h1>
              <p className="mt-6 lead text-white/70 max-w-2xl">
                Estratégia, conteúdo e gestão de redes sociais para empresas que querem deixar de postar sem direção e construir autoridade real.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero planejar a presença nas redes sociais da minha empresa.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25"
                >
                  Planejar minha presença nas redes
                </a>
                <a
                  href="#processo"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  Ver como funciona
                </a>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-4">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-white">
                <h3 className="text-lg font-bold mb-3">Foco em Negócio</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Não criamos conteúdo por criar. Cada legenda, carrossel ou vídeo tem um objetivo claro dentro do ecossistema comercial da sua empresa.
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
            "Instagram Corporativo",
            "LinkedIn Estratégico",
            "Calendário Editorial",
            "Roteiros e Copys",
            "Posicionamento de Marca",
            "Autoridade Digital",
          ]}
          tone="dark"
        />
      </div>

      {/* Problema / Introdução */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-yellow">
                Além de postar por postar
              </span>
              <h2 className="section-title mt-3 text-ghanks-gray">
                Redes sociais exigem método, constância e clareza
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Muitas empresas entram nas redes sociais sem saber exatamente o que dizer, para quem falar ou qual objetivo atingir. Publicam esporadicamente, sem identidade visual coerente e sem gerar conexão com potenciais clientes.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A gestão profissional da G Hanks organiza a sua vitrine digital. Definimos pilares editoriais claros, criamos conteúdos que educam e convencem, e mantemos sua marca presente na mente de quem decide a compra.
              </p>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6">
              <div className="bg-ghanks-light rounded-3xl p-8 md:p-10 border border-gray-100 space-y-6">
                <h3 className="block-title text-ghanks-gray">Principais objetivos que buscamos</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {OBJETIVOS.map((obj, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-3 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-ghanks-yellow shrink-0" />
                      <span className="text-sm font-medium text-gray-700">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Formatos de Conteúdo */}
      <section className="py-20 md:py-28 bg-ghanks-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Linha editorial diversificada
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Formatos de conteúdo que estruturamos
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FORMATOS_CONTEUDO.map((item, i) => (
              <Reveal key={item.titulo} delay={i * 80}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full shadow-sm hover:shadow-md transition-all">
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
              Método de trabalho
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
                    <span className="font-display text-4xl font-extrabold text-ghanks-yellow/60 block mb-4">
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

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-ghanks-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Dúvidas frequentes
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Tudo sobre a gestão de redes sociais
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
      <section className="bg-ghanks-ink py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Reveal>
            <h2 className="section-title mb-6">Pronto para organizar e profissionalizar suas redes sociais?</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Fale com nossa equipe e planeje a presença digital da sua empresa com quem entende de negócio.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero planejar a presença nas redes sociais da minha empresa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25"
            >
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
