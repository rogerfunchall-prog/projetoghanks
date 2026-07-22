/* Página "Guia Completo de SEO Orgânico" — conteúdo denso para ranquear keyword-mãe */

import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const WHATSAPP_NUMBER = "5511999999999";

export const metadata: Metadata = {
  title: "Guia Completo de SEO Orgânico — Como Aparecer na Primeira Página do Google",
  description:
    "Aprenda tudo sobre SEO orgânico: o que é, como funciona, quanto custa e como colocar sua empresa na primeira página do Google sem pagar por anúncios. Guia completo da G Hanks.",
  keywords: [
    "seo orgânico",
    "guia de seo orgânico",
    "como aparecer na primeira página do google",
    "seo sem google ads",
    "growth hacking",
    "resultado orgânico no google",
    "quanto custa seo orgânico",
    "diferença entre seo orgânico e google ads",
  ],
  openGraph: {
    title: "Guia Completo de SEO Orgânico — G Hanks",
    description:
      "Tudo o que você precisa saber sobre SEO orgânico para posicionar sua empresa no topo do Google, sem anúncios pagos.",
    type: "article",
    url: "https://www.ghanks.com.br/seo-organico",
  },
  alternates: {
    canonical: "https://www.ghanks.com.br/seo-organico",
  },
};

export default function GuiaSeoOrganico() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-ghanks-blue">Home</a>
            <span className="mx-2">/</span>
            <span className="text-ghanks-gray">Guia de SEO Orgânico</span>
          </nav>

          {/* H1 com keyword principal */}
          <h1 className="text-3xl md:text-5xl font-bold text-ghanks-gray leading-tight mb-6">
            Guia Completo de SEO Orgânico: como colocar sua empresa na primeira página do Google
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            Se você é dono de uma pequena ou média empresa e quer aparecer na
            primeira página do Google sem gastar com anúncios, este guia é para
            você. Vamos explicar, de forma simples e direta, o que é SEO
            orgânico, como funciona o growth hacking aplicado ao
            posicionamento digital e por que essa é a forma mais sustentável de
            atrair clientes pela internet.
          </p>

          {/* Índice do conteúdo */}
          <div className="bg-ghanks-light rounded-2xl p-6 mb-12 border border-gray-100">
            <h2 className="text-lg font-semibold text-ghanks-gray mb-3">Neste guia você vai aprender:</h2>
            <ol className="space-y-2 text-sm text-gray-500">
              <li><a href="#o-que-e" className="text-ghanks-blue hover:underline">1. O que é SEO orgânico</a></li>
              <li><a href="#diferenca" className="text-ghanks-blue hover:underline">2. Diferença entre SEO orgânico e Google Ads</a></li>
              <li><a href="#growth-hacking" className="text-ghanks-blue hover:underline">3. O que é growth hacking e como se aplica ao SEO</a></li>
              <li><a href="#como-funciona" className="text-ghanks-blue hover:underline">4. Como funciona o posicionamento orgânico na prática</a></li>
              <li><a href="#quanto-custa" className="text-ghanks-blue hover:underline">5. Quanto custa aparecer no Google organicamente</a></li>
              <li><a href="#exclusividade" className="text-ghanks-blue hover:underline">6. Exclusividade de palavra-chave por cidade</a></li>
              <li><a href="#tempo" className="text-ghanks-blue hover:underline">7. Quanto tempo leva para aparecer na primeira página</a></li>
              <li><a href="#nichos" className="text-ghanks-blue hover:underline">8. SEO orgânico para diferentes nichos e cidades</a></li>
            </ol>
          </div>

          {/* Seção 1 */}
          <section id="o-que-e" className="mb-12">
            <h2 className="text-2xl font-bold text-ghanks-gray mb-4">
              1. O que é SEO orgânico
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SEO orgânico (Search Engine Optimization) é o conjunto de
              técnicas usadas para posicionar um site nas primeiras posições
              do Google de forma natural — sem pagar por anúncios. Quando
              alguém pesquisa &ldquo;dentista em Ribeirão Preto&rdquo; ou
              &ldquo;loja de roupas em Joinville&rdquo;, o Google exibe dois
              tipos de resultado: os anúncios pagos (Google Ads) e os
              resultados orgânicos.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              O resultado orgânico é aquele que aparece abaixo dos anúncios
              e transmite mais confiança para o consumidor, porque o Google o
              considera relevante o suficiente para exibir sem que a empresa
              tenha pago por isso. Estar nessa posição significa que o seu
              negócio é visto como autoridade no assunto.
            </p>
            <p className="text-gray-600 leading-relaxed">
              O trabalho de SEO orgânico envolve otimização técnica do site,
              criação de conteúdo estratégico, construção de autoridade de
              domínio e posicionamento no Google Meu Negócio. É um
              investimento de médio prazo que gera resultados duradouros.
            </p>
          </section>

          {/* Seção 2 */}
          <section id="diferenca" className="mb-12">
            <h2 className="text-2xl font-bold text-ghanks-gray mb-4">
              2. Diferença entre SEO orgânico e Google Ads
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A principal diferença é simples: no Google Ads, você paga por
              cada clique. Quando o orçamento acaba, o resultado desaparece.
              No SEO orgânico, o objetivo é construir uma posição sólida que
              se mantém ao longo do tempo, com um custo de manutenção muito
              inferior ao que se gastaria em anúncios.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                <h3 className="font-semibold text-ghanks-red mb-2">Google Ads</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Resultado imediato, mas temporário</li>
                  <li>• Custo por clique (CPC) contínuo</li>
                  <li>• Resultado desaparece ao pausar</li>
                  <li>• Precisa de gestor de tráfego</li>
                  <li>• Concorrência inflaciona o custo</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                <h3 className="font-semibold text-ghanks-green mb-2">SEO Orgânico</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Resultado sustentável no tempo</li>
                  <li>• Sem custo por clique</li>
                  <li>• Posição tende a se manter</li>
                  <li>• Não precisa de gestor de tráfego</li>
                  <li>• Maior credibilidade com o consumidor</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Isso não significa que Google Ads seja ruim — pode ser uma
              ferramenta complementar. Mas para quem busca resultado
              orgânico real e sustentável, o SEO nativo é o caminho mais
              inteligente e econômico a longo prazo.
            </p>
          </section>

          {/* Seção 3 */}
          <section id="growth-hacking" className="mb-12">
            <h2 className="text-2xl font-bold text-ghanks-gray mb-4">
              3. O que é growth hacking e como se aplica ao SEO
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Growth hacking é uma abordagem de crescimento acelerado que
              combina marketing, tecnologia e análise de dados para
              encontrar os caminhos mais eficientes de gerar resultado. No
              contexto do SEO orgânico, growth hacking significa usar
              técnicas avançadas de posicionamento para acelerar a chegada à
              primeira página do Google.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Na G Hanks, aplicamos growth hacking ao SEO de forma
              estratégica: identificamos palavras-chave com alto potencial e
              baixa concorrência, criamos conteúdo otimizado que responde
              exatamente à intenção de busca do usuário e construímos
              autoridade de domínio de forma inteligente.
            </p>
            <p className="text-gray-600 leading-relaxed">
              O resultado é um posicionamento mais rápido e mais sólido do
              que o SEO tradicional, especialmente em cidades de pequeno e
              médio porte onde a concorrência digital ainda é baixa.
            </p>
          </section>

          {/* Seção 4 */}
          <section id="como-funciona" className="mb-12">
            <h2 className="text-2xl font-bold text-ghanks-gray mb-4">
              4. Como funciona o posicionamento orgânico na prática
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              O processo de SEO orgânico da G Hanks segue o método
              H.A.N.K.S., que combina cinco pilares: Hacking de
              Crescimento, Autoridade Orgânica, Nichos e Cidades
              Exclusivas, Keywords Estratégicas e Sustentabilidade de
              Resultado.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Na prática, o trabalho começa com um diagnóstico gratuito da
              sua palavra-chave e cidade. Analisamos a concorrência,
              avaliamos o potencial e apresentamos uma proposta clara. Se
              fizer sentido, seguimos com o setup de posicionamento — a
              implementação técnica completa — e depois com a manutenção
              mensal para consolidar e escalar o resultado.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Você acompanha tudo com relatórios mensais transparentes e tem
              suporte direto via WhatsApp. Sem complicação, sem jargão
              técnico desnecessário.
            </p>
          </section>

          {/* Seção 5 */}
          <section id="quanto-custa" className="mb-12">
            <h2 className="text-2xl font-bold text-ghanks-gray mb-4">
              5. Quanto custa aparecer no Google organicamente
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              O investimento em SEO orgânico varia conforme a concorrência
              da palavra-chave e o tamanho da cidade. Trabalhamos com dois
              componentes: um setup único (investimento inicial para
              construir toda a estrutura) e uma mensalidade acessível de
              manutenção.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Comparado ao Google Ads, onde um CPC médio pode chegar a R$
              5,00 ou mais por clique (e centenas de cliques por mês são
              necessários), o SEO orgânico costuma ser muito mais econômico
              no médio e longo prazo. Você investe uma vez na construção da
              posição e mantém com uma fração do que gastaria em anúncios.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Para saber o investimento exato para a sua palavra-chave e
              cidade, solicite um{" "}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber quanto custa o SEO orgânico para o meu negócio.`}
                className="text-ghanks-blue font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                diagnóstico gratuito
              </a>.
            </p>
          </section>

          {/* Seção 6 */}
          <section id="exclusividade" className="mb-12">
            <h2 className="text-2xl font-bold text-ghanks-gray mb-4">
              6. Exclusividade de palavra-chave por cidade
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Um dos principais diferenciais da G Hanks é a exclusividade.
              Em cidades de até 300 mil habitantes, aceitamos apenas um
              cliente por palavra-chave. Isso significa que, se você
              contratar o serviço para &ldquo;dentista em [sua
              cidade]&rdquo;, nenhum outro dentista da mesma cidade poderá
              contratar o mesmo posicionamento conosco.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Esse modelo protege o seu investimento e maximiza o resultado.
              A vaga é limitada — e quem chegar primeiro, garante. Se o seu
              concorrente já estiver conosco, você não poderá contratar a
              mesma keyword naquela cidade.
            </p>
          </section>

          {/* Seção 7 */}
          <section id="tempo" className="mb-12">
            <h2 className="text-2xl font-bold text-ghanks-gray mb-4">
              7. Quanto tempo leva para aparecer na primeira página do Google
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              O tempo médio para alcançar a primeira página do Google com
              SEO orgânico é de 60 a 120 dias. Esse prazo depende de
              fatores como a concorrência da palavra-chave, o estado atual
              do site e o tamanho da cidade.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Em nichos menos disputados e cidades menores, o resultado pode
              aparecer mais rápido. Em mercados mais concorridos, pode levar
              um pouco mais. O importante é que, uma vez conquistada a
              posição, ela tende a se manter com a manutenção adequada —
              diferente do Google Ads, onde o resultado desaparece assim que
              o orçamento acaba.
            </p>
          </section>

          {/* Seção 8 */}
          <section id="nichos" className="mb-12">
            <h2 className="text-2xl font-bold text-ghanks-gray mb-4">
              8. SEO orgânico para diferentes nichos e cidades
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              O SEO orgânico funciona para praticamente todos os segmentos
              de negócio: lojas, clínicas, prestadores de serviço,
              e-commerces, escritórios de advocacia, contabilidade,
              restaurantes e muito mais. O que muda é a estratégia de
              palavras-chave e o nível de concorrência em cada nicho.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Exemplos de como o SEO orgânico se aplica a diferentes segmentos:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-ghanks-blue font-bold">•</span>
                <span><strong>Growth hacking para lojas</strong> — posicionar &ldquo;loja de roupas em [cidade]&rdquo; na primeira página</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ghanks-green font-bold">•</span>
                <span><strong>SEO orgânico para clínicas</strong> — aparecer em &ldquo;dentista em [cidade]&rdquo; ou &ldquo;clínica de estética em [cidade]&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ghanks-yellow font-bold">•</span>
                <span><strong>SEO para prestadores de serviço</strong> — ranquear para &ldquo;encanador em [cidade]&rdquo;, &ldquo;eletricista em [cidade]&rdquo;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-ghanks-red font-bold">•</span>
                <span><strong>SEO para e-commerce</strong> — posicionar produtos e categorias para buscas de compra</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              A G Hanks atende empresas de todo o Brasil. Se a sua cidade e
              palavra-chave ainda estiverem disponíveis, a vaga pode ser sua.
            </p>
          </section>

          {/* CTA final do guia */}
          <div className="bg-gradient-to-br from-ghanks-blue to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Quer saber se a sua cidade e palavra-chave estão disponíveis?
            </h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Solicite um diagnóstico gratuito e descubra o potencial de
              posicionamento orgânico do seu negócio no Google.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Li o guia de SEO orgânico e gostaria de fazer o diagnóstico gratuito.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-ghanks-blue px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors"
            >
              Solicitar Diagnóstico Gratuito
            </a>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
