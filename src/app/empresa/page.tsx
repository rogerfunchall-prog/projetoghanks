import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import Counter from "@/components/Counter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projetoghanks.vercel.app";
const WHATSAPP_NUMBER = "5511950809873";

export const metadata: Metadata = {
  title: "Empresa G Hanks | Consultoria de Crescimento Digital",
  description:
    "Conheça a G Hanks, consultoria de crescimento digital especializada em SEO orgânico, posicionamento, presença local e marketing B2B.",
  openGraph: {
    title: "G Hanks — Estratégia, Presença e Crescimento Digital",
    description:
      "Conheça o método e a visão da G Hanks para construir presença digital com clareza, relevância e consistência.",
    type: "website",
    url: `${siteUrl}/empresa`,
  },
  alternates: {
    canonical: `${siteUrl}/empresa`,
  },
};

const KEYWORDS_MARQUEE = [
  "SEO ORGÂNICO",
  "MARKETING DIGITAL B2B",
  "POSICIONAMENTO LOCAL",
  "MÉTODO H.A.N.K.S.",
  "INTELIGÊNCIA DE MERCADO",
  "CRESCIMENTO SUSTENTÁVEL",
];

const METODO_ETAPAS = [
  {
    num: "01",
    titulo: "Leitura do cenário",
    desc: "Entendemos o negócio, o mercado, a região e os objetivos comerciais antes de propor qualquer ação.",
  },
  {
    num: "02",
    titulo: "Definição de posicionamento",
    desc: "Identificamos oportunidades de relevância, intenção de busca, autoridade e diferenciação.",
  },
  {
    num: "03",
    titulo: "Execução orientada",
    desc: "Transformamos a estratégia em conteúdo, otimização, campanhas, presença local e ativos digitais.",
  },
  {
    num: "04",
    titulo: "Evolução contínua",
    desc: "Acompanhamos sinais, aprendizados e oportunidades para ajustar o caminho com consistência.",
  },
];

const CAPACIDADES = [
  {
    area: "SEO Orgânico",
    desc: "Estratégia de posicionamento, conteúdo e relevância para buscas orgânicas.",
    href: "/seo-organico",
  },
  {
    area: "Presença Local",
    desc: "Estruturação de sinais digitais para empresas que atuam em cidades e regiões específicas.",
    href: "/servicos",
  },
  {
    area: "Tráfego e Performance",
    desc: "Campanhas e otimização orientadas a objetivos, com dados e contexto comercial.",
    href: "/trafego-pago",
  },
  {
    area: "Marketing Digital B2B",
    desc: "Estratégias para empresas que precisam gerar autoridade, demanda e oportunidades.",
    href: "/servicos",
  },
  {
    area: "Gestão de Redes Sociais",
    desc: "Conteúdo e presença social alinhados ao posicionamento da marca.",
    href: "/gestao-redes-sociais",
  },
  {
    area: "Treinamentos",
    desc: "Desenvolvimento de visão, processos e capacidade interna quando aplicável.",
    href: "/treinamentos-presenciais",
  },
];

const DIFERENCIAIS = [
  "Visão estratégica antes da execução",
  "Integração entre SEO, conteúdo, mídia e posicionamento",
  "Compreensão de contexto local e regional",
  "Linguagem de negócio, não apenas de ferramenta",
  "Acompanhamento e evolução conforme o cenário",
  "Foco em presença digital sustentável",
];

const PRINCIPIOS = [
  {
    titulo: "Clareza",
    desc: "Decisões mais bem orientadas pelo contexto real de cada negócio.",
  },
  {
    titulo: "Relevância",
    desc: "Presença alinhada à intenção de busca e às necessidades do público.",
  },
  {
    titulo: "Consistência",
    desc: "Evolução construída ao longo do tempo, gerando ativos perenes.",
  },
  {
    titulo: "Autoridade",
    desc: "Fortalecimento da percepção digital e da preferência pela marca.",
  },
];

const FUNDADORES = [
  {
    nome: "Roger Funchal",
    cargo: "CEO e Founder",
    foto: "/roger-funchal.jpg",
    headline: "O cara que ajudou o Google a colocar o Brasil no mapa",
    bio: "Enquanto a maioria das agências de marketing ainda está aprendendo a usar IA, Roger Funchal já foi contratado pelo próprio Google para o lançamento do Street View no Brasil. Com mais de 25 anos de tecnologia e especialização em Inteligência Artificial, ele decidiu virar essa bagagem contra o próprio jogo: tirar empresas invisíveis do Google e colocá-las na frente de quem já está procurando por elas. Também é CEO da AgroBusca e carrega uma obsessão que vai além do simples resultado comercial: ensinar de verdade e transformar quem cruza o seu caminho hoje.",
  },
  {
    nome: "Matheus Rangel",
    cargo: "Head de Desenvolvimento e Founder",
    foto: "/matheus-rangel.jpg",
    headline: "Quem transforma promessa em código que funciona",
    bio: "Matheus Rangel é quem garante que cada resultado prometido pela G Hanks vire estrutura técnica sólida por trás da tela. Especialista em Inteligência Artificial e em liderança de times de desenvolvimento, ele comandou squads inteiros antes de cofundar a G Hanks ao lado de Roger Funchal. Hoje aplica Inteligência Artificial não como modismo passageiro, mas como o motor real de posicionamento orgânico para os clientes da empresa. Enquanto Roger enxerga a estratégia, Matheus constrói o código que sustenta cada resultado no ar, todos os dias, sem nunca falhar.",
  },
];

const ESCRITORIOS = [
  {
    cidade: "São Paulo (Matriz)",
    endereco: "Av. Brig. Faria Lima, 1811 - Conj. 1120 - Jardins",
    cep: "São Paulo - SP, 01452-001",
  },
  {
    cidade: "Limeira",
    endereco: "R. Sen. Vergueiro, 995 - Sl 51|B - Centro",
    cep: "Limeira - SP, 13480-001",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "G Hanks",
    url: siteUrl,
    logo: `${siteUrl}/logo-ghanks.png`,
    description: "Consultoria de crescimento digital especializada em SEO orgânico, posicionamento e marketing B2B.",
    foundingDate: "2024",
    parentOrganization: {
      "@type": "Organization",
      name: "HAPP APPS Tecnologia",
    },
    employee: [
      {
        "@type": "Person",
        name: "Roger Funchal",
        jobTitle: "CEO e Founder",
      },
      {
        "@type": "Person",
        name: "Matheus Rangel",
        jobTitle: "Head de Desenvolvimento e Founder",
      },
    ],
  },
};

export default function EmpresaPage() {
  return (
    <PageShell>
      {/* ==================================================================
          Hero Institucional — inspirado no editorial Mexoq about.html
          ================================================================== */}
      <section className="relative bg-ghanks-ink overflow-hidden -mt-24 pt-32 md:pt-42 pb-20 md:pb-28">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/ghanks-empresa-banner-sem-pessoas.png"
            alt="Escritório corporativo da G Hanks com estações de trabalho e iluminação sofisticada."
            fill
            priority
            quality={85}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ghanks-ink via-ghanks-ink/90 to-ghanks-ink/40 md:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Empresa" }]} tone="dark" />

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/90 mb-6">
              <span className="w-2 h-2 rounded-full bg-ghanks-blue" aria-hidden="true" />
              SOBRE A G HANKS
            </span>

            <h1 className="display-title text-white">
              Estratégia digital para empresas que querem ser <span className="text-gradient-brand">encontradas, escolhidas e lembradas</span>.
            </h1>

            <p className="mt-6 lead text-white/85 max-w-2xl">
              A G Hanks combina SEO orgânico, inteligência de mercado, conteúdo, mídia e visão comercial para construir presença digital com clareza, método e consistência.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/metodo"
                className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 text-base"
              >
                Conhecer o Método H.A.N.K.S.
              </Link>
              <Link
                href="/diagnostico-gratuito"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm text-base"
              >
                Solicitar Diagnóstico Gratuito
              </Link>
            </div>
          </div>
        </div>

        {/* Faixa editorial de posicionamento */}
        <div className="relative z-10 mt-16 md:mt-24 border-t border-white/10 py-5">
          <Marquee items={KEYWORDS_MARQUEE} tone="dark" />
        </div>
      </section>

      {/* ==================================================================
          Seção “Quem somos” (Composição assimétrica)
          ================================================================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
                QUEM SOMOS
              </span>
              <h2 className="section-title text-ghanks-gray">
                Construímos clareza para transformar presença digital em crescimento.
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                A G Hanks é uma consultoria de crescimento digital que atua na interseção entre estratégia, tecnologia, conteúdo e performance. Nosso trabalho começa entendendo o negócio, o mercado e a intenção de busca do público para construir caminhos de posicionamento mais consistentes.
              </p>
              <p className="text-gray-600 leading-relaxed text-base">
                Não trabalhamos com fórmulas genéricas. Desenvolvemos diagnósticos, planos e execuções orientados ao contexto de cada empresa, com foco em relevância, autoridade e evolução mensurável.
              </p>
              <div className="pt-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 bg-ghanks-ink text-white px-7 py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-all text-sm shadow-md"
                >
                  Falar com a G Hanks &rarr;
                </Link>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 aspect-[16/10]">
                <Image
                  src="/equipe-ghanks.jpg"
                  alt="Equipe G Hanks trabalhando no escritório com foco em estratégia e SEO orgânico."
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
          Seção “Como trabalhamos” (Nosso Método em 4 etapas)
          ================================================================== */}
      <section className="py-20 md:py-28 bg-ghanks-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              NOSSO MÉTODO
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Diagnóstico antes da execução. Clareza antes da escala.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METODO_ETAPAS.map((etp, i) => (
              <Reveal key={etp.num} delay={i * 80}>
                <div className="bg-white rounded-3xl p-7 border border-gray-200 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="font-display text-3xl font-bold text-ghanks-blue block mb-4">
                      {etp.num}
                    </span>
                    <h3 className="block-title text-ghanks-gray text-lg mb-2">{etp.titulo}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{etp.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================
          Seção de Capacidades e Soluções
          ================================================================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Áreas de Atuação
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              O que a G Hanks coloca em movimento
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPACIDADES.map((cap, i) => (
              <Reveal key={cap.area} delay={i * 60}>
                <div className="bg-ghanks-light rounded-3xl p-7 border border-gray-200 shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-ghanks-blue uppercase tracking-widest block mb-2">
                      0{i + 1}
                    </span>
                    <h3 className="block-title text-ghanks-gray text-lg mb-2">{cap.area}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">{cap.desc}</p>
                  </div>
                  <div>
                    <Link
                      href={cap.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-ghanks-blue hover:underline"
                    >
                      Explorar frente &rarr;
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================
          Seção de Diferenciais
          ================================================================== */}
      <section className="py-20 md:py-28 bg-ghanks-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5 space-y-6">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
                Diferenciais
              </span>
              <h2 className="section-title text-ghanks-gray">
                Uma visão mais ampla do crescimento digital.
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Nossa atuação é construída sobre premissas sólidas de governança, estratégia e entrega B2B de alto padrão.
              </p>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {DIFERENCIAIS.map((dif, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-ghanks-green shrink-0" />
                  <span className="text-sm font-medium text-ghanks-gray">{dif}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Prova de Método (Visual Section)
          ================================================================== */}
      <section className="py-20 md:py-28 bg-ghanks-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-yellow">
                Inteligência Comercial
              </span>
              <h2 className="section-title text-white">
                O crescimento começa quando a empresa entende como está sendo encontrada.
              </h2>
              <p className="text-white/80 leading-relaxed text-base md:text-lg">
                Por isso, conectamos análise, posicionamento e execução em uma jornada que permite tomar decisões com mais clareza e menos improviso.
              </p>
              <div className="pt-4">
                <Link
                  href="/diagnostico-gratuito"
                  className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 text-base"
                >
                  Solicitar Diagnóstico Gratuito
                </Link>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10]">
                <Image
                  src="/banner-empresa.png"
                  alt="Escritório executivo e ambiente de reuniões estratégicas da G Hanks."
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
          Princípios Institucionais (Indicadores)
          ================================================================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Pilares de Atuação
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Nossos princípios fundamentais
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPIOS.map((prin, i) => (
              <Reveal key={prin.titulo} delay={i * 80}>
                <div className="bg-ghanks-light rounded-3xl p-7 border border-gray-200 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="font-display text-3xl font-bold text-ghanks-blue block mb-4">
                      0{i + 1}
                    </span>
                    <h3 className="block-title text-ghanks-gray text-lg mb-2">{prin.titulo}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{prin.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================
          Fundadores & Escritórios
          ================================================================== */}
      <section className="bg-ghanks-light py-20 md:py-28 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-20">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <span className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-gray">
                    <span className="flex items-center gap-1" aria-hidden="true">
                      <span className="w-1.5 h-1.5 rounded-full bg-ghanks-blue" />
                      <span className="w-1.5 h-1.5 rounded-full bg-ghanks-red" />
                      <span className="w-1.5 h-1.5 rounded-full bg-ghanks-yellow" />
                      <span className="w-1.5 h-1.5 rounded-full bg-ghanks-green" />
                    </span>
                    Fundadores
                  </span>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="section-title mt-4 text-ghanks-gray">
                    Quem está por trás da G Hanks
                  </h2>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6 lg:space-y-8">
              {FUNDADORES.map((f, i) => (
                <Reveal key={f.nome} delay={i * 120}>
                  <article className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row">
                    <div className="flex-1 p-7 md:p-9 flex flex-col justify-between gap-6">
                      <div>
                        <h3 className="block-title text-ghanks-gray">{f.nome}</h3>
                        <p className="mt-1 text-base text-ghanks-blue font-semibold">{f.cargo}</p>
                        <p className="mt-3 text-base md:text-lg font-semibold text-ghanks-gray italic">
                          &ldquo;{f.headline}&rdquo;
                        </p>
                      </div>
                      <p className="text-sm md:text-base text-gray-500 leading-relaxed">{f.bio}</p>
                    </div>

                    <div className="relative sm:w-56 lg:w-64 shrink-0 overflow-hidden">
                      <Image
                        src={f.foto}
                        alt={`${f.nome}, ${f.cargo} da G Hanks`}
                        width={640}
                        height={800}
                        className="w-full h-56 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 256px"
                      />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Escritórios */}
          <div className="pt-12 border-t border-gray-200">
            <SectionHeading
              variant="split"
              eyebrow="Presença Física"
              title="Onde a G Hanks está"
              className="mb-10 md:mb-14"
            />

            <ul className="grid sm:grid-cols-2 gap-6">
              {ESCRITORIOS.map((esc, i) => (
                <Reveal as="li" key={esc.cidade} delay={i * 100}>
                  <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm h-full flex items-start gap-5">
                    <span className="w-12 h-12 shrink-0 bg-blue-50 text-ghanks-blue rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="block-title text-ghanks-gray">{esc.cidade}</h3>
                      <p className="mt-1 text-sm text-gray-600">{esc.endereco}</p>
                      <p className="text-sm text-gray-400">{esc.cep}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Faixa Final de Posicionamento & CTA Final
          ================================================================== */}
      <section className="bg-ghanks-ink py-20 md:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-ghanks-blue/15 blur-[160px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Reveal>
            <h2 className="section-title mb-6 text-white">
              A próxima fase da sua presença digital começa com uma leitura mais inteligente do cenário.
            </h2>
            <p className="text-white/75 max-w-2xl mx-auto mb-8 leading-relaxed text-base md:text-lg">
              Se a sua empresa precisa ser encontrada com mais clareza, fale com a G Hanks e descubra quais oportunidades podem existir no seu mercado.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/diagnostico-gratuito"
                className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-9 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/25 text-base"
              >
                Solicitar Diagnóstico Gratuito
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-9 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/25 backdrop-blur-sm text-base"
              >
                Conhecer nossas soluções
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Script
        id="json-ld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
    </PageShell>
  );
}
