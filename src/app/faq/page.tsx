import type { Metadata } from "next";
import Script from "next/script";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "FAQ de SEO Orgânico | Dúvidas sobre Posicionamento",
  description:
    "Tire dúvidas sobre SEO orgânico, Google Ads, prazo, investimento, exclusividade, manutenção e acompanhamento de resultados.",
  keywords: [
    "FAQ SEO orgânico",
    "dúvidas SEO",
    "quanto custa SEO",
    "tempo para aparecer no Google",
    "SEO ou Google Ads",
  ],
  openGraph: {
    title: "FAQ de SEO Orgânico | Dúvidas sobre Posicionamento",
    description: "Perguntas frequentes sobre SEO orgânico, prazos, investimento e exclusividade.",
    type: "website",
    url: `${siteConfig.url}/faq`,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "FAQ SEO — G Hanks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ de SEO Orgânico | Dúvidas sobre Posicionamento",
    description: "Tire dúvidas sobre SEO orgânico, Google Ads, prazo e investimento.",
  },
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
};

const FAQ_ITEMS = [
  {
    pergunta: "Como funciona o SEO orgânico da G Hanks?",
    resposta:
      "Trabalhamos com técnicas avançadas de growth hacking e SEO nativo para posicionar o seu site na primeira página do Google de forma orgânica — sem pagar por cliques ou anúncios. Fazemos uma auditoria completa, otimizamos o seu site tecnicamente, criamos conteúdo estratégico e construímos autoridade de domínio.",
  },
  {
    pergunta: "Preciso pagar Google Ads também?",
    resposta:
      "Não. O nosso trabalho é focado em resultado orgânico. Você não precisa de gestor de tráfego pago nem de créditos em Google Ads. O objetivo é que sua empresa apareça nas posições orgânicas do Google, que são gratuitas e geram confiança no consumidor.",
  },
  {
    pergunta: "Como funciona a exclusividade por cidade e palavra-chave?",
    resposta:
      "Em cidades de até 300 mil habitantes, aceitamos apenas um cliente por palavra-chave. Isso significa que o seu concorrente direto na mesma cidade não poderá contratar o mesmo serviço. A exclusividade protege o seu investimento e potencializa o resultado.",
  },
  {
    pergunta: "Quanto tempo leva para aparecer na primeira página do Google?",
    resposta:
      "Em média, entre 21 e 45 dias, dependendo da concorrência da palavra-chave e do estado atual do seu site. Em cidades menores e nichos menos disputados, o resultado costuma aparecer ainda mais rápido. Enviamos relatórios para que você acompanhe a evolução desde o primeiro dia.",
  },
  {
    pergunta: "Vocês atendem minha cidade e meu nicho?",
    resposta:
      "Atendemos empresas de todo o Brasil, em praticamente todos os segmentos: lojas, clínicas, prestadores de serviço, e-commerces, escritórios e muito mais. A única restrição é a exclusividade: se já atendemos um cliente com a mesma palavra-chave na sua cidade, a vaga está ocupada.",
  },
  {
    pergunta: "O que está incluso no setup e na mensalidade?",
    resposta:
      "O setup inclui auditoria completa, otimização técnica do site, criação de conteúdo estratégico, configuração do Google Meu Negócio e relatório inicial. A mensalidade cobre monitoramento de ranking, ajustes técnicos mensais, atualizações de conteúdo, suporte via WhatsApp e manutenção da exclusividade.",
  },
  {
    pergunta: "Qual a diferença entre SEO orgânico e Google Ads?",
    resposta:
      "Google Ads é publicidade paga: você paga por cada clique e o resultado desaparece quando o orçamento acaba. SEO orgânico é posicionamento natural: uma vez que seu site conquista uma boa posição, ele tende a se manter com manutenção adequada — sem custo por clique. O retorno sobre o investimento no longo prazo é muito maior.",
  },
  {
    pergunta: "Quanto custa aparecer no Google organicamente?",
    resposta:
      "O investimento varia conforme a concorrência da palavra-chave e a cidade. Trabalhamos com setup único (investimento inicial) mais uma mensalidade acessível de manutenção. Entre em contato para receber um diagnóstico gratuito e uma proposta personalizada.",
  },
  {
    pergunta: "SEO orgânico funciona para qualquer nicho?",
    resposta:
      "Funciona para praticamente todos os nichos: comércio, saúde, serviços, indústria, educação, e-commerce e mais. O que muda é a estratégia de palavras-chave e o nível de concorrência. Em nichos mais específicos e cidades menores, o resultado costuma vir mais rápido e com menos investimento.",
  },
  {
    pergunta: "Preciso ter site pronto para contratar?",
    resposta:
      "Não necessariamente. Se você já tem um site, otimizamos a estrutura existente. Se não tem, podemos incluir a criação de um site otimizado para SEO como parte do setup. O importante é que a base técnica esteja sólida para o posicionamento funcionar.",
  },
  {
    pergunta: "Como sei se minha cidade e palavra-chave já foram vendidas?",
    resposta:
      "Basta entrar em contato conosco via WhatsApp ou pelo formulário de contato. Fazemos uma verificação imediata e informamos se a vaga está disponível. Se estiver, você pode reservá-la antes de um concorrente.",
  },
  {
    pergunta: "O que acontece se meu concorrente tentar contratar depois de mim?",
    resposta:
      "A exclusividade é por ordem de contratação. Se você já estiver conosco para uma determinada palavra-chave na sua cidade, o concorrente não poderá contratar o mesmo posicionamento. A vaga está protegida enquanto o contrato estiver ativo.",
  },
  {
    pergunta: "Quanto tempo dura o contrato?",
    resposta:
      "O setup é um investimento único, feito uma vez. A mensalidade de manutenção é contínua, mas sem fidelidade forçada — trabalhamos para que o resultado fale por si. A maioria dos clientes permanece porque vê o posicionamento evoluir mês a mês.",
  },
  {
    pergunta: "Posso acompanhar o progresso do meu posicionamento?",
    resposta:
      "Sim. Enviamos relatórios mensais com a evolução das suas palavras-chave no Google. Você acompanha exatamente onde está, como está progredindo e quais ajustes estamos fazendo. Total transparência.",
  },
  {
    pergunta: "A G Hanks trabalha com redes sociais ou tráfego pago?",
    resposta:
      "Não. Nosso foco é exclusivamente SEO orgânico e growth hacking para posicionamento no Google. Não gerenciamos redes sociais nem campanhas de tráfego pago. Somos especialistas naquilo que fazemos de melhor: resultado orgânico real.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.pergunta,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.resposta,
    },
  })),
};

export default function FAQPage() {
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "FAQ" }]} />

        <div className="text-center mb-12">
          <h1 className="page-title text-ghanks-gray mb-6">
            Perguntas frequentes sobre{" "}
            <span className="text-ghanks-yellow">SEO orgânico</span>
          </h1>
          <p className="text-lg text-gray-500">
            Tire suas dúvidas sobre como aparecer na primeira página do Google
            sem anúncios pagos.
          </p>
        </div>

        <div className="space-y-6">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 p-6"
            >
              <h2 className="text-base font-semibold text-ghanks-gray mb-3">
                {item.pergunta}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.resposta}
              </p>
            </div>
          ))}
        </div>

        {/* Links internos */}
        <div className="mt-12 bg-ghanks-light rounded-2xl p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-ghanks-gray mb-4">Ainda tem dúvidas?</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="/seo-organico" className="text-ghanks-blue font-semibold hover:underline">Leia o guia completo de SEO orgânico</a>
              {" "}— tudo sobre posicionamento no Google
            </li>
            <li>
              <a href="/metodo" className="text-ghanks-blue font-semibold hover:underline">Conheça o Método H.A.N.K.S.</a>
              {" "}— como aplicamos growth hacking ao SEO
            </li>
            <li>
              <a href="/contato" className="text-ghanks-blue font-semibold hover:underline">Entre em contato</a>
              {" "}— fale com um especialista pelo WhatsApp
            </li>
          </ul>
        </div>
      </div>

      <Script
        id="json-ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </PageShell>
  );
}
