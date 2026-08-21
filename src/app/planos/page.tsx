import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/config";

const WHATSAPP_NUMBER = siteConfig.contact.whatsapp;

export const metadata: Metadata = {
  title: "Planos de SEO Orgânico | G Hanks",
  description:
    "Conheça os planos de SEO orgânico, setup, manutenção, exclusividade por cidade e diferenças entre SEO e Google Ads.",
  keywords: [
    "planos de SEO orgânico",
    "quanto custa SEO orgânico",
    "SEO orgânico ou Google Ads",
    "exclusividade por cidade SEO",
    "contratar SEO orgânico",
  ],
  openGraph: {
    title: "Planos de SEO Orgânico | G Hanks",
    description:
      "Planos Open, Master e Authority com exclusividade por cidade e palavra-chave. Compare SEO orgânico e Google Ads.",
    type: "website",
    url: `${siteConfig.url}/planos`,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Planos de SEO — G Hanks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planos de SEO Orgânico | G Hanks",
    description: "Planos com exclusividade por cidade e palavra-chave. Compare SEO e Google Ads.",
  },
  alternates: {
    canonical: `${siteConfig.url}/planos`,
  },
};

/* Valor da manutenção mensal por palavra-chave posicionada (BRL) */
const MANUTENCAO_POR_PALAVRA_CHAVE = 270;

/* Formata um valor numérico no padrão brasileiro: 1350 -> "1.350,00" */
const formatBRL = (valor: number) =>
  valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/* Mensalidade de manutenção de um plano = valor unitário x qtd. de palavras-chave */
const manutencaoMensal = (keywords: number) => keywords * MANUTENCAO_POR_PALAVRA_CHAVE;

/* Dados dos 3 planos */
const plans = [
  {
    name: "Open",
    slug: "open",
    badge: null,
    highlight: false,
    tagline: "Para quem quer começar a aparecer no Google",
    keywords: 1,
    originalPrice: null,
    price: "730,00",
    hasDiscount: false,
    extras: [] as string[],
    features: [
      "1 palavra-chave com foco em primeira página do Google",
      "Site institucional completo com os dados do cliente",
      "Botão/integração conectado ao WhatsApp da empresa",
      "Seção de Produtos ou Serviços",
      "Seção Empresa (Missão e Visão)",
      "Seção de Clientes/Testemunhos",
      "Seção de Contato e Localização",
      "Configuração em servidores de alta performance",
    ],
  },
  {
    name: "Master",
    slug: "master",
    badge: "Mais Popular",
    highlight: true,
    tagline: "Para quem quer dominar mais de um termo de busca",
    keywords: 3,
    originalPrice: null,
    price: "1.390,00",
    hasDiscount: false,
    extras: [] as string[],
    features: [
      "3 palavras-chave com foco em primeira página do Google",
      "Site institucional completo com os dados do cliente",
      "Botão/integração conectado ao WhatsApp da empresa",
      "Seção de Produtos ou Serviços",
      "Seção Empresa (Missão e Visão)",
      "Seção de Clientes/Testemunhos",
      "Seção de Contato e Localização",
      "Configuração em servidores de alta performance",
    ],
  },
  {
    name: "Authority",
    slug: "authority",
    badge: "Mais Completo",
    highlight: false,
    tagline: "Presença completa: SEO + atendimento automatizado + conteúdo",
    keywords: 5,
    originalPrice: null,
    price: "2.390,00",
    hasDiscount: false,
    extras: ["IA de atendimento (assistente conversacional no site)", "Blog de notícias"],
    features: [
      "5 palavras-chave com foco em primeira página do Google",
      "Site institucional completo com os dados do cliente",
      "Botão/integração conectado ao WhatsApp da empresa",
      "Seção de Produtos ou Serviços",
      "Seção Empresa (Missão e Visão)",
      "Seção de Clientes/Testemunhos",
      "Seção de Contato e Localização",
      "Configuração em servidores de alta performance",
      "IA de atendimento (assistente conversacional no site)",
      "Blog de notícias",
    ],
  },
];

/* JSON-LD OfferCatalog */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Planos de SEO Orgânico — G Hanks",
  description:
    "Planos de posicionamento orgânico no Google com exclusividade por cidade e palavra-chave.",
  url: `${siteConfig.url}/planos`,
  itemListElement: plans.map((p, i) => ({
    "@type": "Offer",
    position: i + 1,
    name: `Plano ${p.name}`,
    description: p.tagline,
    price: p.price.replace(".", "").replace(",", "."),
    priceCurrency: "BRL",
    url: `${siteConfig.url}/planos`,
    seller: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  })),
};

export default function PlanosPage() {
  return (
    <PageShell>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Planos" }]} />

        <div className="text-center mb-12">
          <h1 className="page-title text-ghanks-gray mb-6">
            Planos de <span className="text-ghanks-blue">SEO orgânico</span> e exclusividade por cidade
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
            Posicionamento na primeira página do Google sem anúncios pagos, sem gestor de tráfego
            e sem custo por clique. Escolha o plano ideal para o momento do seu negócio.
          </p>
        </div>

        {/* Grid de 3 planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.slug}
              className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "border-2 border-ghanks-blue shadow-lg scale-[1.02] md:scale-105 z-10"
                  : "border border-gray-100 shadow-sm"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                    plan.highlight
                      ? "bg-ghanks-blue text-white"
                      : "bg-ghanks-green text-white"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              {/* Nome do plano */}
              <h2 className="text-xl font-bold text-ghanks-gray mt-2 mb-1">
                Plano {plan.name}
              </h2>

              {/* Tagline */}
              <p className="text-sm text-gray-400 mb-6">{plan.tagline}</p>

              {/* Preço */}
              <div className="mb-6">
                {plan.hasDiscount && plan.originalPrice && (
                  <p className="text-sm text-gray-400 line-through mb-0.5">
                    R$ {plan.originalPrice}
                  </p>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-gray-500 font-medium">R$</span>
                  <span
                    className={`text-4xl font-extrabold ${
                      plan.highlight ? "text-ghanks-blue" : "text-ghanks-gray"
                    }`}
                  >
                    {plan.price.split(",")[0]}
                  </span>
                  <span className="text-lg font-bold text-gray-400">
                    ,{plan.price.split(",")[1]}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">setup único</p>

                {plan.hasDiscount && (
                  <span className="inline-block mt-2 bg-ghanks-red/10 text-ghanks-red text-xs font-bold px-2.5 py-1 rounded-full">
                    50% OFF
                  </span>
                )}

                {/* Mensalidade de manutenção */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-base font-bold text-ghanks-gray">
                    + R$ {formatBRL(manutencaoMensal(plan.keywords))}
                    <span className="text-sm font-semibold text-gray-500">/mês</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    manutenção — {plan.keywords} palavra{plan.keywords > 1 ? "s" : ""}-chave
                    {" "}(R$ {formatBRL(MANUTENCAO_POR_PALAVRA_CHAVE)} cada)
                  </p>
                </div>
              </div>

              {/* Lista de recursos */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feat) => {
                  const isExtra = plan.extras.includes(feat);
                  return (
                    <li key={feat} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          isExtra ? "text-ghanks-blue" : "text-ghanks-green"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className={isExtra ? "font-semibold text-ghanks-gray" : ""}>
                        {feat}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Olá! Tenho interesse no plano ${plan.name} da G Hanks.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block w-full text-center py-3.5 rounded-full font-bold transition-colors ${
                  plan.highlight
                    ? "bg-ghanks-blue text-white hover:bg-blue-600"
                    : "bg-ghanks-light text-ghanks-gray hover:bg-gray-200"
                }`}
              >
                Quero este plano
              </a>
            </div>
          ))}
        </div>

        {/* Bloco exclusividade */}
        <div className="mb-16 bg-ghanks-light rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-ghanks-gray mb-4">
            Exclusividade de palavra-chave por cidade
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Em cidades de até 300 mil habitantes, aceitamos{" "}
            <strong className="text-ghanks-gray">apenas um cliente por palavra-chave</strong>.
            Isso significa que o seu concorrente direto não poderá contratar o
            mesmo serviço na sua região. A vaga é sua — e só sua.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Esse modelo protege o seu investimento e maximiza o resultado.
            Quem chegar primeiro, conquista a posição.
          </p>
        </div>

        {/* Tabela comparativa SEO Orgânico vs Google Ads */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-ghanks-gray mb-6 text-center">
            SEO Orgânico vs. Google Ads
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-gray-50 rounded-tl-xl text-sm font-semibold text-gray-500">Critério</th>
                  <th className="p-4 bg-green-50 text-sm font-semibold text-ghanks-green text-center">SEO Orgânico</th>
                  <th className="p-4 bg-red-50 rounded-tr-xl text-sm font-semibold text-ghanks-red text-center">Google Ads</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                {[
                  ["Custo recorrente", `A partir de R$ ${formatBRL(MANUTENCAO_POR_PALAVRA_CHAVE)}/mês por palavra-chave`, "Paga por cada clique (CPC)"],
                  ["Permanência do resultado", "Tende a se manter com manutenção", "Desaparece ao pausar o investimento"],
                  ["Dependência de investimento contínuo", "Baixa — resultado acumula", "Total — sem verba, sem resultado"],
                  ["Propriedade do resultado", "O posicionamento é do seu site", "O espaço é alugado do Google"],
                  ["Confiança do consumidor", "Alta — resultado orgânico transmite credibilidade", "Moderada — muitos usuários ignoram anúncios"],
                  ["Velocidade do resultado", "Em média, 21 a 45 dias", "Imediato, mas temporário"],
                  ["Necessidade de gestor de tráfego", "Não", "Sim"],
                ].map(([criterio, seo, ads]) => (
                  <tr key={criterio} className="border-t border-gray-100">
                    <td className="p-4 font-medium text-ghanks-gray">{criterio}</td>
                    <td className="p-4 text-center text-ghanks-green">{seo}</td>
                    <td className="p-4 text-center text-gray-500">{ads}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bloco de objeções */}
        <div className="mb-16 space-y-8">
          <h2 className="text-2xl font-bold text-ghanks-gray mb-2">
            Perguntas sobre o investimento
          </h2>

          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-ghanks-gray mb-2">Por que não simplesmente usar Google Ads?</h3>
            <p className="text-gray-600 leading-relaxed">
              Google Ads funciona enquanto você paga. No momento em que o orçamento acaba, o resultado desaparece.
              Com SEO orgânico, o objetivo é construir um posicionamento sólido que se mantém ao longo do tempo.
              Muitos dos nossos clientes investiam mais de R$ 2.000/mês em Ads e hoje mantêm resultado orgânico
              com uma fração desse valor. Para entender melhor as diferenças,
              leia nosso <a href="/seo-organico" className="text-ghanks-blue font-semibold hover:underline">guia completo de SEO orgânico</a>.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-ghanks-gray mb-2">O resultado é permanente?</h3>
            <p className="text-gray-600 leading-relaxed">
              O posicionamento orgânico tende a se manter com a manutenção adequada, mas não é estático.
              O Google atualiza seu algoritmo constantemente, e novos concorrentes podem surgir. Por isso,
              a manutenção mensal é importante: trabalhamos continuamente para consolidar e melhorar a posição
              conquistada. O objetivo é que o resultado seja sustentável no longo prazo.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-ghanks-gray mb-2">Quanto custa a manutenção mensal?</h3>
            <p className="text-gray-600 leading-relaxed">
              A manutenção mensal é de R$ {formatBRL(MANUTENCAO_POR_PALAVRA_CHAVE)} por palavra-chave
              posicionada. Isso equivale a:{" "}
              {plans
                .map(
                  (p) =>
                    `plano ${p.name} (${p.keywords} palavra${
                      p.keywords > 1 ? "s" : ""
                    }-chave), R$ ${formatBRL(manutencaoMensal(p.keywords))}/mês`
                )
                .join("; ")}
              . Esse valor cobre o trabalho contínuo de consolidação de posição, ajustes de
              algoritmo e defesa contra concorrentes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-ghanks-gray mb-2">E se eu cancelar a mensalidade?</h3>
            <p className="text-gray-600 leading-relaxed">
              O trabalho feito no setup permanece — a otimização técnica, o conteúdo e a autoridade construída
              continuam no seu site. Porém, sem a manutenção mensal, o posicionamento pode ser gradualmente
              ultrapassado por concorrentes que continuam investindo em SEO. A manutenção é o que protege
              o resultado a longo prazo. E a exclusividade da sua palavra-chave é liberada para outro cliente.
            </p>
          </div>
        </div>

        {/* Links internos */}
        <div className="bg-ghanks-light rounded-2xl p-8 mb-12 border border-gray-100">
          <h3 className="text-xl font-bold text-ghanks-gray mb-4">Saiba mais</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="/metodo" className="text-ghanks-blue font-semibold hover:underline">Conheça o Método H.A.N.K.S. em detalhes</a>
              {" "}— os 5 pilares do growth hacking aplicado
            </li>
            <li>
              <a href="/portfolio" className="text-ghanks-blue font-semibold hover:underline">Veja cases de sucesso reais</a>
              {" "}— resultados de SEO orgânico em diferentes nichos
            </li>
            <li>
              <a href="/empresa" className="text-ghanks-blue font-semibold hover:underline">Conheça a equipe por trás da G Hanks</a>
              {" "}— quem faz o trabalho acontecer
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-ghanks-blue to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="block-title mb-4">
            Pronto para investir em resultado orgânico?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Solicite um diagnóstico gratuito e descubra qual plano é ideal
            para posicionar sua empresa na primeira página do Google.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Olá! Gostaria de saber mais sobre os planos de SEO orgânico da G Hanks."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-ghanks-blue px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </PageShell>
  );
}
