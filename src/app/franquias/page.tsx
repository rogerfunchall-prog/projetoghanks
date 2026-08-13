import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://projetoghanks.vercel.app";
const WHATSAPP_NUMBER = "5511950809873";
const WA_FRANQUIA = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Tenho interesse em me tornar franqueado da G Hanks."
)}`;
const WA_CIDADE = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Gostaria de verificar se minha cidade ainda está disponível para franquia da G Hanks."
)}`;

/* Montserrat — fonte única da página de franquias */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title:
    "Franquia G Hanks — Seja Franqueado Exclusivo de Growth Hacking e SEO",
  description:
    "Torne-se franqueado exclusivo da G Hanks na sua cidade. Método H.A.N.K.S. comprovado, treinamento completo, suporte contínuo e materiais de divulgação prontos.",
  keywords: [
    "franquia de marketing digital",
    "franquia de seo",
    "franquia growth hacking",
    "franquia lucrativa exclusiva",
    "como abrir uma franquia digital",
    "franquia de tecnologia barata",
    "melhores franquias digitais do brasil",
  ],
  openGraph: {
    title:
      "Franquia G Hanks — Seja Franqueado Exclusivo na Sua Cidade",
    description:
      "Método H.A.N.K.S. comprovado, exclusividade territorial e suporte completo. Franquia de growth hacking e SEO orgânico.",
    type: "website",
    url: `${siteUrl}/franquias`,
  },
  alternates: {
    canonical: `${siteUrl}/franquias`,
  },
};

/* JSON-LD Organization com makesOffer (sem valores) */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "G Hanks",
  url: siteUrl,
  makesOffer: {
    "@type": "Offer",
    name: "Franquia G Hanks — Exclusividade Territorial de Growth Hacking e SEO Orgânico",
    description:
      "Programa de franquia com exclusividade por cidade, método H.A.N.K.S. comprovado, treinamento completo e suporte contínuo da matriz.",
    url: `${siteUrl}/franquias`,
    seller: {
      "@type": "Organization",
      name: "G Hanks",
    },
  },
};

/* O que o franqueado recebe */
const BENEFICIOS = [
  {
    titulo: "Exclusividade territorial",
    desc: "Um único franqueado por cidade — nenhum concorrente da rede disputa o seu mercado.",
    icone: "shield",
    cor: "text-ghanks-blue",
    bg: "bg-blue-50",
    bgHover: "group-hover:bg-blue-100",
    border: "border-ghanks-blue/15 hover:border-ghanks-blue/40",
  },
  {
    titulo: "Treinamento completo",
    desc: "Onboarding estruturado no método H.A.N.K.S., do primeiro diagnóstico ao fechamento de contrato.",
    icone: "academic",
    cor: "text-ghanks-green",
    bg: "bg-green-50",
    bgHover: "group-hover:bg-green-100",
    border: "border-ghanks-green/15 hover:border-ghanks-green/40",
  },
  {
    titulo: "Suporte contínuo",
    desc: "Acompanhamento direto da equipe da matriz, sem deixar você sozinho na operação.",
    icone: "support",
    cor: "text-ghanks-red",
    bg: "bg-red-50",
    bgHover: "group-hover:bg-red-100",
    border: "border-ghanks-red/15 hover:border-ghanks-red/40",
  },
  {
    titulo: "Materiais de divulgação prontos",
    desc: "Identidade visual, peças para redes sociais, argumentos de venda e scripts de abordagem.",
    icone: "document",
    cor: "text-ghanks-yellow",
    bg: "bg-yellow-50",
    bgHover: "group-hover:bg-yellow-100",
    border: "border-ghanks-yellow/15 hover:border-ghanks-yellow/40",
  },
  {
    titulo: "Tecnologia e método proprietário",
    desc: "Acesso ao processo H.A.N.K.S. já testado, sem precisar reinventar a operação.",
    icone: "cog",
    cor: "text-ghanks-blue",
    bg: "bg-blue-50",
    bgHover: "group-hover:bg-blue-100",
    border: "border-ghanks-blue/15 hover:border-ghanks-blue/40",
  },
  {
    titulo: "Backoffice e relatórios",
    desc: "Ferramentas para acompanhar clientes, ranking e resultado de cada operação sob sua franquia.",
    icone: "chart",
    cor: "text-ghanks-green",
    bg: "bg-green-50",
    bgHover: "group-hover:bg-green-100",
    border: "border-ghanks-green/15 hover:border-ghanks-green/40",
  },
];

/* Passos do processo */
const PASSOS = [
  {
    num: "01",
    titulo: "Aplicação",
    desc: "Você preenche o formulário de interesse e conta um pouco do seu perfil.",
    cor: "text-ghanks-blue",
  },
  {
    num: "02",
    titulo: "Análise de território",
    desc: "Confirmamos a disponibilidade da sua cidade e alinhamos o modelo de investimento.",
    cor: "text-ghanks-green",
  },
  {
    num: "03",
    titulo: "Treinamento",
    desc: "Onboarding completo no método H.A.N.K.S. e nas ferramentas da franquia.",
    cor: "text-ghanks-yellow",
  },
  {
    num: "04",
    titulo: "Lançamento",
    desc: "Sua operação vai ao ar com suporte direto da matriz nos primeiros meses.",
    cor: "text-ghanks-red",
  },
];

/* FAQ da franquia */
const FAQ = [
  {
    q: "O que está incluso no investimento inicial da franquia?",
    a: "O investimento cobre o treinamento completo no método H.A.N.K.S., acesso à tecnologia proprietária, materiais de divulgação, identidade visual e o setup inicial da sua operação na cidade escolhida. Valores detalhados são apresentados na Circular de Oferta de Franquia (COF) oficial, conforme exige a legislação brasileira.",
  },
  {
    q: "Preciso ter experiência em marketing digital para ser franqueado?",
    a: "Não. O treinamento foi desenhado para capacitar profissionais de diferentes áreas. O que buscamos é perfil empreendedor, capacidade de relacionamento com clientes e vontade de aprender o método.",
  },
  {
    q: "Como funciona a exclusividade territorial entre franquias?",
    a: "Cada cidade aceita apenas um franqueado. Isso significa que dentro da sua região você é o único representante da G Hanks — sem concorrência interna da rede. A exclusividade segue a mesma lógica do nosso método de posicionamento: uma vaga, um território.",
  },
  {
    q: "Quanto tempo leva entre a aplicação e o lançamento da minha operação?",
    a: "O processo completo — da aplicação ao lançamento — costuma levar de 30 a 60 dias, dependendo da análise territorial e do ritmo do seu onboarding. Durante todo o período, a equipe da matriz acompanha cada etapa.",
  },
  {
    q: "Existe algum tipo de royalty ou taxa recorrente?",
    a: "Sim, como em qualquer modelo de franquia. Os detalhes sobre royalties e taxas recorrentes são apresentados de forma transparente na Circular de Oferta de Franquia (COF), entregue após o primeiro contato qualificado, conforme determina a Lei de Franquias (Lei 13.966/2019).",
  },
  {
    q: "Como é o suporte da matriz depois do lançamento?",
    a: "Você recebe acompanhamento contínuo: reuniões periódicas com a equipe da matriz, canal direto de suporte, atualizações do método e das ferramentas, e apoio em vendas e operação sempre que precisar.",
  },
];

/* Ícones SVG simples para os benefícios */
function BeneficioIcon({ tipo }: { tipo: string }) {
  const cls = "w-7 h-7";
  switch (tipo) {
    case "shield":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "academic":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      );
    case "support":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case "document":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case "cog":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function FranquiasPage() {
  return (
    <PageShell>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={montserrat.variable} style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        {/* ══════════════════════════════════════════════════════
            HERO — banner de fundo com texto no terço esquerdo
        ══════════════════════════════════════════════════════ */}
        <section className="relative -mt-24 min-h-[480px] md:min-h-[560px] lg:min-h-[600px] overflow-hidden flex items-center">
          {/* Imagem de fundo */}
          <Image
            src="/banner-franquias.png"
            alt="Mapa estilizado do Brasil com pontos de localização coloridos conectados por uma rede, com um ponto em destaque marcado por um selo de exclusividade"
            fill
            priority
            quality={85}
            className="object-cover object-[70%_center] md:object-[right_center]"
            sizes="100vw"
          />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-16 w-full">
            <div className="max-w-2xl">
              <Breadcrumb
                items={[{ label: "Início", href: "/" }, { label: "Franquias" }]}
              />

              {/* Badge */}
              <span className="inline-flex items-center gap-2 border border-ghanks-blue/30 text-ghanks-blue bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Franquia Exclusiva por Cidade — Vagas Limitadas
              </span>

              <h1 className="page-title text-ghanks-gray mb-6">
                Seja o Franqueado{" "}
                <span className="text-ghanks-blue">Exclusivo</span> da G Hanks
                na Sua Cidade
              </h1>

              <p className="text-base md:text-lg text-gray-500 max-w-xl leading-relaxed mb-8">
                Uma franquia de growth hacking e SEO orgânico liderada por quem já
                foi contratado pelo próprio Google e soma mais de 25 anos de
                tecnologia. Território exclusivo, método comprovado, suporte
                completo do primeiro dia.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href={WA_FRANQUIA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-8 py-4 rounded-full font-bold text-base hover:bg-blue-600 transition-colors shadow-lg shadow-ghanks-blue/20"
                >
                  Quero Ser Franqueado
                </a>
                <a
                  href="#exclusividade"
                  className="inline-flex items-center gap-2 border border-gray-300 bg-white/70 backdrop-blur-sm text-ghanks-gray px-8 py-4 rounded-full font-semibold text-base hover:border-ghanks-blue hover:text-ghanks-blue transition-colors"
                >
                  Ver Cidades Disponíveis
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            POR QUE A G HANKS
        ══════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-ghanks-gray mb-6 text-center">
              Uma franquia construída sobre{" "}
              <span className="text-ghanks-green">experiência real</span>, não
              promessa
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              A G Hanks nasce da trajetória de Roger Funchal — mais de 25 anos
              dedicados à tecnologia, especialista em Inteligência Artificial e
              um dos profissionais contratados pelo próprio Google para o
              lançamento do Street View no Brasil. Essa bagagem virou um método
              replicável: o H.A.N.K.S., já validado em clientes reais de nichos
              diferentes por todo o país. Agora, essa mesma estrutura pode ser
              sua, com exclusividade territorial.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/empresa"
                className="text-ghanks-blue font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                Conheça os fundadores da G Hanks
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            O QUE VOCÊ RECEBE COMO FRANQUEADO
        ══════════════════════════════════════════════════════ */}
        <section className="bg-ghanks-light py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-ghanks-gray mb-4 text-center">
              O que você recebe como franqueado
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              Tudo o que você precisa para operar, vender e entregar resultado —
              sem começar do zero.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BENEFICIOS.map((b) => (
                <div
                  key={b.titulo}
                  className={`bg-white rounded-2xl p-6 border ${b.border} transition-colors group shadow-sm`}
                >
                  <div className={`w-12 h-12 rounded-xl ${b.bg} ${b.cor} flex items-center justify-center mb-4 ${b.bgHover} transition-colors`}>
                    <BeneficioIcon tipo={b.icone} />
                  </div>
                  <h3 className="text-lg font-bold text-ghanks-gray mb-2">
                    {b.titulo}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            O MOMENTO DO MERCADO
        ══════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block text-ghanks-green text-xs font-semibold tracking-wider uppercase mb-4">
              Cenário de mercado
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-ghanks-gray mb-6">
              Growth hacking e SEO orgânico: a virada que as empresas
              brasileiras estão buscando
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
              Cada vez mais negócios em todo o Brasil estão cansados de depender
              de Google Ads para aparecer — e procurando alternativas de
              posicionamento orgânico sustentável. A G Hanks nasceu para atender
              essa demanda crescente, e agora abre a estrutura da marca para
              quem quer empreender em um modelo com método comprovado, sem
              começar do zero.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            EXCLUSIVIDADE TERRITORIAL
        ══════════════════════════════════════════════════════ */}
        <section id="exclusividade" className="bg-ghanks-light py-20 md:py-28 scroll-mt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6">
              <svg className="w-8 h-8 text-ghanks-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-ghanks-gray mb-6">
              Sua cidade pode já ter{" "}
              <span className="text-ghanks-blue">dono</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Trabalhamos com um franqueado por cidade, seguindo a mesma lógica
              de exclusividade do nosso método de posicionamento: uma vaga, um
              território, sem concorrência interna. Verifique agora se a sua
              cidade ainda está disponível.
            </p>
            <a
              href={WA_CIDADE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ghanks-green text-white px-8 py-4 rounded-full font-bold text-base hover:bg-green-600 transition-colors shadow-lg shadow-ghanks-green/20"
            >
              Verificar Disponibilidade da Minha Cidade
            </a>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            COMO FUNCIONA O PROCESSO
        ══════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-ghanks-gray mb-12 text-center">
              Como funciona o processo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PASSOS.map((p, i) => (
                <div key={p.num} className="relative">
                  {/* Linha conectora (só entre cards) */}
                  {i < PASSOS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(100%+0.25rem)] w-[calc(100%-2rem)] h-px bg-gray-200" aria-hidden="true" />
                  )}
                  <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-100 h-full shadow-sm">
                    <span className={`text-3xl font-black ${p.cor} opacity-30 block mb-3`}>
                      {p.num}
                    </span>
                    <h3 className="text-lg font-bold text-ghanks-gray mb-2">
                      {p.titulo}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            FAQ DA FRANQUIA
        ══════════════════════════════════════════════════════ */}
        <section className="bg-ghanks-light py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-ghanks-gray mb-12 text-center">
              Perguntas frequentes
            </h2>

            <div className="space-y-4">
              {FAQ.map((item) => (
                <details
                  key={item.q}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 text-ghanks-gray font-semibold text-sm md:text-base list-none [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <svg
                      className="w-5 h-5 text-ghanks-blue shrink-0 ml-4 transition-transform group-open:rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            CTA FINAL
        ══════════════════════════════════════════════════════ */}
        <section className="bg-gradient-to-br from-ghanks-blue to-blue-600 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Selo decorativo */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-white/30 mb-8">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              Vagas de território limitadas —{" "}
              <span className="text-blue-100">
                e diminuindo a cada cidade fechada
              </span>
            </h2>

            <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Você pode entrar para o time que ajuda empresas a saírem do
              anonimato no Google todos os dias — com uma marca séria por trás,
              método comprovado e a cidade só sua. Fale agora com nossa equipe de
              expansão.
            </p>

            <a
              href={WA_FRANQUIA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-ghanks-blue px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Quero Ser Franqueado da G Hanks
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
