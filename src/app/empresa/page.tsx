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
  title: "Empresa — Quem é a G Hanks, Fundadores e Missão",
  description:
    "Conheça a G Hanks, marca da HAPP APPS Tecnologia especializada em growth hacking e SEO orgânico. Saiba quem são os fundadores, a missão e a visão da empresa.",
  openGraph: {
    title: "Empresa G Hanks — Growth Hacking e SEO Orgânico",
    description:
      "Conheça a equipe e os fundadores que trabalham para colocar sua empresa na primeira página do Google.",
    type: "website",
    url: `${siteUrl}/empresa`,
  },
  alternates: {
    canonical: `${siteUrl}/empresa`,
  },
};

/* Faixa em movimento na base do hero */
const KEYWORDS = [
  "GROWTH HACKING",
  "SEO ORGÂNICO",
  "MÉTODO H.A.N.K.S.",
  "EXCLUSIVIDADE POR CIDADE",
  "PRIMEIRA PÁGINA DO GOOGLE",
  "AUTORIDADE DE DOMÍNIO",
  "SEO LOCAL",
];

const NUMEROS = [
  { value: 1200, suffix: "+", label: "Palavras-chave\nposicionadas", cor: "text-ghanks-blue" },
  { value: 350, suffix: "+", label: "Cidades\natendidas", cor: "text-ghanks-green" },
  { value: 25, suffix: "+", label: "Anos de tecnologia\ndo fundador", cor: "text-ghanks-yellow" },
  { value: 2, suffix: "", label: "Escritórios:\nSão Paulo e Limeira", cor: "text-ghanks-red" },
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

const LINKS_INTERNOS = [
  {
    href: "/metodo",
    titulo: "Conheça o Método H.A.N.K.S.",
    descricao: "Como aplicamos growth hacking ao SEO orgânico",
  },
  {
    href: "/portfolio",
    titulo: "Veja nossos cases de sucesso",
    descricao: "Resultados reais em diferentes nichos",
  },
  {
    href: "/seo-organico",
    titulo: "Leia o guia completo de SEO orgânico",
    descricao: "Tudo sobre posicionamento no Google",
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
    description: "Agência de growth hacking e SEO orgânico. Colocamos sua empresa na primeira página do Google sem anúncios pagos.",
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
        description: "Especialista em IA com 25+ anos de tecnologia, contratado pelo Google para o lançamento do Street View no Brasil. CEO da AgroBusca.",
      },
      {
        "@type": "Person",
        name: "Matheus Rangel",
        jobTitle: "Head de Desenvolvimento e Founder",
        description: "Especialista em Inteligência Artificial e liderança de times de desenvolvimento.",
      },
    ],
    location: [
      {
        "@type": "PostalAddress",
        name: "G Hanks — São Paulo (Matriz)",
        streetAddress: "Av. Brig. Faria Lima, 1811 - Conj. 1120 - Jardins",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        postalCode: "01452-001",
        addressCountry: "BR",
      },
      {
        "@type": "PostalAddress",
        name: "G Hanks — Limeira",
        streetAddress: "R. Sen. Vergueiro, 995 - Sl 51|B - Centro",
        addressLocality: "Limeira",
        addressRegion: "SP",
        postalCode: "13480-001",
        addressCountry: "BR",
      },
    ],
  },
};

function ArrowIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H9m8 0v8" />
    </svg>
  );
}

export default function EmpresaPage() {
  return (
    <PageShell>
      {/* ==================================================================
          Hero com o mesmo padrão estrutural da página Treinamentos Presenciais
          ================================================================== */}
      <section className="relative bg-ghanks-ink overflow-hidden -mt-24 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/ghanks-empresa-banner-sem-pessoas.png"
            alt="Ambiente real do escritório da G Hanks, sem pessoas, com logo da marca, estações de trabalho e iluminação colorida."
            fill
            priority
            quality={85}
            className="object-cover object-center"
          />
          {/* Gradiente escuro para garantir legibilidade à esquerda */}
          <div className="absolute inset-0 bg-gradient-to-r from-ghanks-ink via-ghanks-ink/90 to-ghanks-ink/40 md:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Empresa" }]} tone="dark" />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <Reveal className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/90 mb-6">
                <span className="w-2 h-2 rounded-full bg-ghanks-green" aria-hidden="true" />
                QUEM SOMOS
              </span>
              <h1 className="page-title text-white">
                A G Hanks nasceu para tirar empresas do <span className="text-ghanks-blue">anonimato</span> no <span className="text-ghanks-yellow">Google</span>
              </h1>
              <p className="mt-6 lead text-white/80 max-w-2xl">
                A G Hanks é uma marca da HAPP APPS Tecnologia, nascida da percepção de que a maioria das pequenas e médias empresas brasileiras vive na invisibilidade digital. Elas dependem de anúncios pagos porque não sabem — ou não têm acesso a quem saiba — como aparecer organicamente no Google.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/diagnostico-gratuito"
                  className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25"
                >
                  Solicitar Diagnóstico Gratuito
                  <ArrowIcon className="w-4 h-4" />
                </Link>
                <a
                  href="/metodo"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm"
                >
                  Conhecer o Método H.A.N.K.S.
                </a>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-4 hidden lg:block">
              <div className="bg-ghanks-ink/80 backdrop-blur-md rounded-3xl p-8 border border-white/15 text-white shadow-xl">
                <h3 className="text-lg font-bold mb-3">Tecnologia aplicada ao crescimento</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Estratégia, IA e SEO orgânico combinados para transformar visibilidade em oportunidades reais de negócio.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Faixa de palavras-chave em movimento na base do hero */}
        <div className="relative z-10 mt-16 md:mt-24 border-t border-white/10 py-5">
          <Marquee items={KEYWORDS} tone="dark" />
        </div>
      </section>

      {/* ==================================================================
          Nossa história — foto do time à esquerda e blocos de conteúdo
          em mosaico à direita
          ================================================================== */}
      <section className="bg-ghanks-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            variant="split"
            eyebrow="Nossa história"
            title="Um modelo onde cada cliente é o único no seu nicho e na sua região"
            className="mb-12 md:mb-16"
          />

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Foto do time + legenda */}
            <Reveal className="lg:col-span-5">
              <div className="h-full flex flex-col gap-4">
                <div className="relative rounded-3xl overflow-hidden shadow-lg flex-1">
                  <Image
                    src="/equipe-ghanks.jpg"
                    alt="Equipe G Hanks trabalhando no escritório com a identidade visual da marca na parede"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="bg-white rounded-2xl px-6 py-5 border border-gray-100">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Nosso time em São Paulo, trabalhando todos os dias para colocar seu negócio no topo do Google
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Mosaico de conteúdo */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 lg:gap-8">
              <Reveal delay={100} className="sm:col-span-2">
                <div className="h-full bg-white rounded-3xl p-7 md:p-9 border border-gray-100 shadow-sm">
                  <span className="font-display text-5xl leading-none text-ghanks-blue/30" aria-hidden="true">
                    &ldquo;
                  </span>
                  <p className="mt-2 text-lg md:text-xl text-ghanks-gray leading-relaxed">
                    O Método H.A.N.K.S. foi criado para resolver esse problema com uma abordagem diferente: growth hacking aplicado ao SEO orgânico, com exclusividade real por cidade e palavra-chave. Em vez de competir no modelo de agência tradicional, criamos um modelo onde cada cliente é o único no seu nicho e região.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="h-full bg-ghanks-blue rounded-3xl p-7 md:p-8 text-white">
                  <h3 className="block-title mb-3">Visão</h3>
                  <p className="text-white/85 leading-relaxed">
                    Ser reconhecida como a principal referência em growth hacking e SEO orgânico do Brasil, levando resultado real e acessível para negócios de todos os portes, em todas as cidades do país.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="h-full bg-ghanks-ink rounded-3xl p-7 md:p-8 text-white flex flex-col justify-between gap-6">
                  <p className="text-white/75 leading-relaxed">
                    Hoje atendemos empresas de diversos nichos em todo o Brasil, com escritórios em São Paulo e Limeira, e uma equipe que combina décadas de experiência em tecnologia, IA e marketing digital.
                  </p>
                  <a
                    href="/metodo"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-ghanks-yellow transition-colors"
                  >
                    Método H.A.N.K.S.
                    <ArrowIcon className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Números da operação — contadores grandes
          ================================================================== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12 md:mb-16">
            <span className="text-sm md:text-base font-semibold uppercase tracking-[0.14em] text-ghanks-gray">
              Operação real — números da G Hanks
            </span>
          </Reveal>

          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {NUMEROS.map((item, i) => (
              <Reveal as="li" key={item.label} delay={i * 100} className="text-center">
                <p className={`font-display font-bold leading-none text-[clamp(2.75rem,1.5rem+5vw,5rem)] ${item.cor}`}>
                  <Counter value={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-4 text-base md:text-lg text-ghanks-gray leading-snug whitespace-pre-line">
                  {item.label}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ==================================================================
          Fundadores — painéis largos com texto à esquerda e foto à direita
          ================================================================== */}
      <section className="bg-ghanks-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
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
        </div>
      </section>

      {/* ==================================================================
          Faixa de destaque — missão da empresa
          ================================================================== */}
      <section className="relative bg-ghanks-ink overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -bottom-40 left-1/3 w-[34rem] h-[34rem] rounded-full bg-ghanks-green/15 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
              Missão
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-7 font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug tracking-tight">
              Tirar empresas brasileiras da invisibilidade digital, colocando-as na primeira página do Google de forma orgânica e sustentável — sem depender de anúncios pagos, com exclusividade por cidade e palavra-chave.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================================================================
          Escritórios — lista de linhas largas
          ================================================================== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            variant="split"
            eyebrow="Escritórios"
            title="Onde a G Hanks está"
            className="mb-10 md:mb-14"
          />

          <ul className="border-t border-gray-200">
            {ESCRITORIOS.map((esc, i) => (
              <Reveal as="li" key={esc.cidade} delay={i * 100}>
                <div className="group border-b border-gray-200 py-7 md:py-9 flex items-center justify-between gap-6 transition-colors hover:bg-ghanks-light">
                  <div className="flex items-start gap-5">
                    <span className="inline-flex items-center justify-center w-12 h-12 shrink-0 bg-blue-50 rounded-2xl">
                      <svg className="w-6 h-6 text-ghanks-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="block-title text-ghanks-gray">{esc.cidade}</h3>
                      <p className="mt-1 text-sm md:text-base text-gray-500">{esc.endereco}</p>
                      <p className="text-sm md:text-base text-gray-400">{esc.cep}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ==================================================================
          Continue explorando — links internos em linhas
          ================================================================== */}
      <section className="bg-ghanks-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            variant="split"
            eyebrow="Continue explorando"
            title="Próximos passos dentro do site"
            className="mb-10 md:mb-14"
          />

          <ul className="grid gap-4 md:gap-5">
            {LINKS_INTERNOS.map((link, i) => (
              <Reveal as="li" key={link.href} delay={i * 100}>
                <a
                  href={link.href}
                  className="group flex items-center justify-between gap-6 bg-white rounded-3xl border border-gray-100 px-6 md:px-8 py-6 md:py-7 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div>
                    <h3 className="block-title text-ghanks-gray group-hover:text-ghanks-blue transition-colors">
                      {link.titulo}
                    </h3>
                    <p className="mt-1 text-sm md:text-base text-gray-500">{link.descricao}</p>
                  </div>
                  <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-ghanks-light text-ghanks-gray group-hover:bg-ghanks-blue group-hover:text-white transition-colors">
                    <ArrowIcon className="w-5 h-5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
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
