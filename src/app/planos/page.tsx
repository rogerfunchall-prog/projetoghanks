import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projetoghanks.vercel.app";
const WHATSAPP_NUMBER = "5511950809873";

export const metadata: Metadata = {
  title: "Planos de SEO Orgânico e Exclusividade por Cidade",
  description:
    "Conheça os planos de SEO orgânico da G Hanks: setup único de posicionamento + mensalidade acessível, com exclusividade de palavra-chave por cidade. Sem Google Ads.",
  openGraph: {
    title: "Planos de SEO Orgânico — G Hanks",
    description:
      "Quanto custa aparecer no Google organicamente? Conheça o modelo de setup + mensalidade com exclusividade por cidade.",
    type: "website",
    url: `${siteUrl}/planos`,
  },
  alternates: {
    canonical: `${siteUrl}/planos`,
  },
};

export default function PlanosPage() {
  return (
    <PageShell>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Planos" }]} />

        <h1 className="text-3xl md:text-5xl font-bold text-ghanks-gray leading-tight mb-6">
          Planos de <span className="text-ghanks-blue">SEO orgânico</span> e exclusividade por cidade
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-12">
          Posicionamento no Google sem anúncios pagos, sem gestor de tráfego e sem custo por clique.
          O modelo da G Hanks é simples: um setup único para construir a base, mais uma mensalidade
          acessível para manter e escalar o resultado — com exclusividade de palavra-chave na sua cidade.
        </p>

        {/* Cards de planos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card Setup */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-ghanks-blue px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Setup Inicial
            </div>
            <h2 className="text-xl font-bold text-ghanks-gray mb-3">
              Setup único de posicionamento
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Investimento único para configurar toda a estrutura de SEO do seu
              negócio: otimização técnica, conteúdo estratégico, Google Meu
              Negócio e autoridade de domínio. Tudo pronto para competir na
              primeira página.
            </p>
            <ul className="space-y-3">
              {[
                "Auditoria completa do site e concorrência",
                "Otimização on-page e técnica",
                "Conteúdo estratégico para a keyword principal",
                "Configuração do Google Meu Negócio",
                "Relatório inicial de posicionamento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-ghanks-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card Mensalidade */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-ghanks-blue relative">
            <div className="absolute -top-3 right-6 bg-ghanks-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
              Mais popular
            </div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-ghanks-green px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Manutenção Mensal
            </div>
            <h2 className="text-xl font-bold text-ghanks-gray mb-3">
              Manutenção de ranking acessível
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Mensalidade para manter e escalar a posição orgânica — muito mais
              acessível do que qualquer investimento em Google Ads. Sem
              surpresas, sem taxa de clique.
            </p>
            <ul className="space-y-3">
              {[
                "Monitoramento contínuo do ranking",
                "Ajustes técnicos e de conteúdo mensais",
                "Relatório mensal de evolução",
                "Suporte via WhatsApp",
                "Exclusividade mantida na sua cidade",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-ghanks-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero saber mais sobre os planos de SEO orgânico.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full text-center bg-ghanks-blue text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Falar com Especialista
            </a>
          </div>
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
                  ["Custo recorrente", "Mensalidade fixa acessível", "Paga por cada clique (CPC)"],
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para investir em resultado orgânico?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Solicite um diagnóstico gratuito e descubra quanto custa posicionar
            sua empresa na primeira página do Google.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os planos de SEO orgânico da G Hanks.`}
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
