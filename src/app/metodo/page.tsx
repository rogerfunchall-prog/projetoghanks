import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projetoghanks.vercel.app";
const WHATSAPP_NUMBER = "5511950809873";

export const metadata: Metadata = {
  title: "Método H.A.N.K.S. — Growth Hacking e SEO Orgânico para Pequenas Empresas",
  description:
    "Conheça o Método H.A.N.K.S. da G Hanks: 5 pilares de growth hacking e SEO orgânico que colocam empresas na primeira página do Google sem anúncios pagos.",
  openGraph: {
    title: "Método H.A.N.K.S. — Growth Hacking Real para seu Negócio",
    description:
      "Hacking de Crescimento, Autoridade Orgânica, Nichos Exclusivos, Keywords Estratégicas e Sustentabilidade de Resultado.",
    type: "website",
    url: `${siteUrl}/metodo`,
  },
  alternates: {
    canonical: `${siteUrl}/metodo`,
  },
};

const PILARES = [
  {
    letra: "H",
    cor: "bg-ghanks-blue",
    titulo: "Hacking de Crescimento",
    resumo: "Técnicas avançadas de growth hacking para acelerar o posicionamento orgânico.",
    paragrafos: [
      "Growth hacking não é mágica — é método. Na G Hanks, usamos uma combinação de análise de dados, engenharia reversa de algoritmos e experimentação contínua para encontrar os atalhos legítimos que aceleram o posicionamento orgânico da sua empresa no Google.",
      "Na prática, isso significa que não seguimos um roteiro genérico de SEO. Cada projeto recebe uma estratégia sob medida, baseada no comportamento real de busca dos consumidores na sua cidade e nicho. Testamos hipóteses, medimos resultados e ajustamos a rota rapidamente.",
      "Exemplo: para um cliente do setor imobiliário em Sorocaba, identificamos que a combinação de termos \"condomínios + bairro\" tinha volume alto e concorrência baixa. Em vez de disputar a keyword genérica, posicionamos o cliente para dezenas de buscas locais específicas — gerando mais tráfego qualificado com menos esforço.",
    ],
  },
  {
    letra: "A",
    cor: "bg-ghanks-green",
    titulo: "Autoridade Orgânica",
    resumo: "Construímos autoridade real para o seu domínio com conteúdo e SEO técnico.",
    paragrafos: [
      "O Google não posiciona sites aleatoriamente. Ele prioriza quem demonstra expertise, experiência, autoridade e confiabilidade (os critérios E-E-A-T). Nosso trabalho é construir esses sinais de forma consistente para o seu domínio.",
      "Isso envolve desde a otimização técnica do site (velocidade, estrutura de dados, mobile-first) até a criação de conteúdo estratégico que responde exatamente ao que o seu público está buscando. Cada peça de conteúdo é pensada para resolver uma dúvida real e posicionar sua marca como referência no assunto.",
      "Exemplo: para a Reluz Galvânica em Limeira, criamos uma estrutura de conteúdo técnico sobre galvanização de semijoias que o Google reconheceu como a fonte mais autoritativa do Brasil para aquele nicho — resultado: 1º lugar para \"galvânica Limeira\".",
    ],
  },
  {
    letra: "N",
    cor: "bg-ghanks-yellow",
    titulo: "Nichos e Cidades Exclusivas",
    resumo: "Exclusividade total: uma palavra-chave por cidade.",
    paragrafos: [
      "Este é o diferencial que mais protege o seu investimento. Em cidades de até 300 mil habitantes, aceitamos apenas um cliente por palavra-chave. Se você contratar \"dentista em [sua cidade]\", nenhum outro dentista da mesma cidade poderá ser atendido por nós com essa mesma keyword.",
      "Esse modelo funciona porque o posicionamento orgânico local tem um número limitado de vagas na primeira página. Se trabalhássemos com dois concorrentes diretos na mesma cidade, estaríamos competindo contra nós mesmos — e nenhum dos dois teria o melhor resultado possível.",
      "Exemplo: na Top Sacolas em Taubaté, garantimos a exclusividade para \"sacolas personalizadas Taubaté\" e variações. Nenhum fabricante concorrente de sacolas naquela cidade pode contratar o mesmo posicionamento, o que consolida a dominância orgânica do cliente.",
    ],
  },
  {
    letra: "K",
    cor: "bg-ghanks-red",
    titulo: "Keywords Estratégicas",
    resumo: "Pesquisa profunda de palavras-chave que realmente trazem clientes.",
    paragrafos: [
      "Nem toda palavra-chave vale o esforço. Muitas agências focam em termos genéricos com alta concorrência e baixa conversão. Na G Hanks, fazemos uma pesquisa profunda para identificar as keywords que realmente trazem clientes — não apenas visitantes.",
      "Trabalhamos com três camadas de palavras-chave: a keyword principal (alta intenção de compra), o cluster secundário (variações e termos relacionados) e a cauda longa (perguntas específicas que indicam intenção de contratar). Essa arquitetura de conteúdo cria uma rede de posicionamento que domina o nicho no Google.",
      "Exemplo: em vez de disputar apenas \"palestrante financeiro\" (genérico), posicionamos o Marcelo Clay para termos como \"palestrante de finanças corporativas\", \"palestra sobre planejamento financeiro empresarial\" e variações que atraem exatamente o público que contrata palestras.",
    ],
  },
  {
    letra: "S",
    cor: "bg-ghanks-blue",
    titulo: "Sustentabilidade de Resultado",
    resumo: "Resultado que dura, sem depender de investimento contínuo em Ads.",
    paragrafos: [
      "O maior problema do Google Ads é que o resultado desaparece no instante em que o orçamento acaba. Com SEO orgânico, o posicionamento é construído sobre uma base sólida que tende a se manter — e até melhorar — ao longo do tempo.",
      "Nossa manutenção mensal não é apenas \"monitorar o ranking\". É um trabalho contínuo de otimização, atualização de conteúdo e adaptação às mudanças do algoritmo do Google. Isso faz com que o resultado conquistado se torne cada vez mais difícil de ser ultrapassado pela concorrência.",
      "Exemplo: clientes que estão conosco há mais de 12 meses não apenas mantiveram suas posições — eles expandiram o número de keywords posicionadas, criando uma barreira orgânica que dificulta a entrada de novos concorrentes no mesmo espaço.",
    ],
  },
];

export default function MetodoPage() {
  return (
    <PageShell>
      {/* Hero com banner de fundo */}
      <section className="relative min-h-[420px] md:min-h-[480px] lg:min-h-[520px] overflow-hidden -mt-24">
        <Image
          src="/banner-metodo.png"
          alt="Cinco blocos de vidro iluminados com ícones representando busca, segurança, localização, palavra-chave e crescimento, conectados por uma linha luminosa"
          fill
          priority
          className="object-cover object-[75%_center] md:object-[right_center]"
          sizes="100vw"
          quality={85}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 md:pt-44 md:pb-20 flex flex-col items-start">
          <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Método H.A.N.K.S." }]} />

          <h1 className="text-3xl md:text-5xl font-bold text-ghanks-gray leading-tight mb-6 max-w-2xl">
            Método <span className="text-ghanks-blue">H.A.N.K.S.</span> — growth hacking aplicado ao SEO orgânico
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
            Cinco pilares de growth hacking e SEO orgânico que colocam empresas
            na primeira página do Google — sem depender de anúncios pagos.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <p className="text-lg text-gray-500 leading-relaxed mb-12">
          Cada letra do acróstico representa uma etapa essencial do processo.
          Entenda como funciona na prática e por que o método tem entregado
          resultados reais para negócios de nichos variados. Se quiser entender
          mais sobre o que é SEO orgânico antes de continuar, leia nosso{" "}
          <a href="/seo-organico" className="text-ghanks-blue font-semibold hover:underline">guia completo de SEO orgânico</a>.
        </p>

        {PILARES.map((pilar, i) => (
          <section key={pilar.letra} className={`mb-16 ${i < PILARES.length - 1 ? 'pb-16 border-b border-gray-100' : ''}`}>
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${pilar.cor} text-white text-3xl font-bold`}
              >
                {pilar.letra}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ghanks-gray">
                  {pilar.titulo}
                </h2>
                <p className="text-gray-400 text-sm mt-1">{pilar.resumo}</p>
              </div>
            </div>
            {pilar.paragrafos.map((p, j) => (
              <p key={j} className="text-gray-600 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </section>
        ))}

        {/* Links internos */}
        <div className="bg-ghanks-light rounded-2xl p-8 mb-12 border border-gray-100">
          <h3 className="text-xl font-bold text-ghanks-gray mb-4">Continue explorando</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="/planos" className="text-ghanks-blue font-semibold hover:underline">Conheça os planos e a exclusividade por cidade</a>
              {" "}— como funciona o investimento em SEO orgânico
            </li>
            <li>
              <a href="/portfolio" className="text-ghanks-blue font-semibold hover:underline">Veja os cases de sucesso reais</a>
              {" "}— projetos de SEO orgânico em diferentes nichos
            </li>
            <li>
              <a href="/seo-organico" className="text-ghanks-blue font-semibold hover:underline">Leia o guia completo de SEO orgânico</a>
              {" "}— tudo sobre posicionamento orgânico no Google
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-ghanks-blue to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Quer aplicar o Método H.A.N.K.S. no seu negócio?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Solicite um diagnóstico gratuito e descubra o potencial de
            crescimento orgânico da sua empresa no Google.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Conheci o Método H.A.N.K.S. e gostaria de fazer o diagnóstico gratuito.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-ghanks-blue px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
          >
            Solicitar Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </PageShell>
  );
}
