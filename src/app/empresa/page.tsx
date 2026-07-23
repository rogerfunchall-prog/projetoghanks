import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projetoghanks.vercel.app";

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

const FUNDADORES = [
  {
    nome: "Roger Funchal",
    cargo: "CEO e Founder",
    foto: "/roger-funchal.jpg",
    headline: "O cara que ajudou o Google a colocar o Brasil no mapa",
    bio: "Enquanto a maioria das agências de marketing ainda está aprendendo a usar IA, Roger Funchal já foi contratado pelo próprio Google para o lançamento do Street View no Brasil. Com mais de 25 anos de tecnologia e especialização em Inteligência Artificial, ele decidiu virar essa bagagem contra o próprio jogo: tirar empresas invisíveis do Google e colocá-las na frente de quem já está procurando por elas. Também é CEO da AgroBusca e carrega uma obsessão que vai além do resultado comercial — ensinar e transformar quem cruza o caminho dele.",
  },
  {
    nome: "Matheus Rangel",
    cargo: "Head de Desenvolvimento e Founder",
    foto: "/matheus-rangel.jpg",
    headline: "Quem transforma promessa em código que funciona",
    bio: "Matheus Rangel é quem faz com que cada resultado prometido pela G Hanks vire estrutura técnica sólida por trás da tela. Especialista em Inteligência Artificial e em liderança de times de desenvolvimento, ele já comandou squads inteiros antes de cofundar a G Hanks — hoje aplica IA não como modismo, mas como motor de posicionamento orgânico real para os clientes.",
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

export default function EmpresaPage() {
  return (
    <PageShell>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Empresa" }]} />

        {/* Hero */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-ghanks-light border border-gray-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-ghanks-gray">Quem Somos</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-ghanks-gray leading-tight mb-6">
            A G Hanks nasceu para tirar empresas do <span className="text-ghanks-blue">anonimato no Google</span>
          </h1>
        </div>

        {/* Nossa história */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ghanks-gray mb-4">Nossa história</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A G Hanks é uma marca da HAPP APPS Tecnologia, nascida da percepção de que a maioria das pequenas e médias empresas brasileiras vive na invisibilidade digital. Elas dependem de anúncios pagos porque não sabem — ou não têm acesso a quem saiba — como aparecer organicamente no Google.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            O Método H.A.N.K.S. foi criado para resolver esse problema com uma abordagem diferente: growth hacking aplicado ao SEO orgânico, com exclusividade real por cidade e palavra-chave. Em vez de competir no modelo de agência tradicional, criamos um modelo onde cada cliente é o único no seu nicho e região.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Hoje atendemos empresas de diversos nichos em todo o Brasil, com escritórios em São Paulo e Limeira, e uma equipe que combina décadas de experiência em tecnologia, IA e marketing digital. Para entender nosso método em detalhes, visite a página do <a href="/metodo" className="text-ghanks-blue font-semibold hover:underline">Método H.A.N.K.S.</a>
          </p>
        </section>

        {/* Missão e Visão */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-ghanks-gray mb-3">Missão</h2>
            <p className="text-gray-600 leading-relaxed">
              Tirar empresas brasileiras da invisibilidade digital, colocando-as na primeira página do Google de forma orgânica e sustentável — sem depender de anúncios pagos, com exclusividade por cidade e palavra-chave.
            </p>
          </div>
          <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-ghanks-gray mb-3">Visão</h2>
            <p className="text-gray-600 leading-relaxed">
              Ser reconhecida como a principal referência em growth hacking e SEO orgânico do Brasil, levando resultado real e acessível para negócios de todos os portes, em todas as cidades do país.
            </p>
          </div>
        </section>

        {/* Foto do time */}
        <section className="mb-16">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/equipe-ghanks.jpg"
              alt="Equipe G Hanks trabalhando no escritório com a identidade visual da marca na parede"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
          <p className="text-sm text-gray-400 text-center mt-3 italic">
            Nosso time em São Paulo, trabalhando todos os dias para colocar seu negócio no topo do Google
          </p>
        </section>

        {/* Fundadores */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ghanks-gray mb-8 text-center">Fundadores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FUNDADORES.map((f) => (
              <div key={f.nome} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-5 mb-4">
                  <Image
                    src={f.foto}
                    alt={`${f.nome}, ${f.cargo} da G Hanks`}
                    width={96}
                    height={96}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-ghanks-gray">{f.nome}</h3>
                    <p className="text-sm text-ghanks-blue font-medium">{f.cargo}</p>
                    <p className="mt-1 text-sm font-semibold text-gray-600 italic">
                      &ldquo;{f.headline}&rdquo;
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Escritórios */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ghanks-gray text-center mb-6">Nossos escritórios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ESCRITORIOS.map((esc) => (
              <div key={esc.cidade} className="bg-ghanks-light rounded-xl p-5 border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full mb-3">
                  <svg className="w-5 h-5 text-ghanks-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-ghanks-gray">{esc.cidade}</p>
                <p className="text-sm text-gray-500 mt-1">{esc.endereco}</p>
                <p className="text-sm text-gray-400">{esc.cep}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Links internos */}
        <div className="bg-ghanks-light rounded-2xl p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-ghanks-gray mb-4">Continue explorando</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="/metodo" className="text-ghanks-blue font-semibold hover:underline">Conheça o Método H.A.N.K.S.</a>
              {" "}— como aplicamos growth hacking ao SEO orgânico
            </li>
            <li>
              <a href="/portfolio" className="text-ghanks-blue font-semibold hover:underline">Veja nossos cases de sucesso</a>
              {" "}— resultados reais em diferentes nichos
            </li>
            <li>
              <a href="/seo-organico" className="text-ghanks-blue font-semibold hover:underline">Leia o guia completo de SEO orgânico</a>
              {" "}— tudo sobre posicionamento no Google
            </li>
          </ul>
        </div>
      </div>

      <Script
        id="json-ld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
    </PageShell>
  );
}
