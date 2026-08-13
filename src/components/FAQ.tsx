"use client";

import { useState } from "react";

/* Seção FAQ — perguntas e respostas para SEO e objeções */

const FAQ_ITEMS = [
  {
    pergunta: "Como funciona o SEO orgânico da G Hanks?",
    resposta:
      "Trabalhamos com técnicas avançadas de growth hacking e SEO nativo para posicionar o seu site na primeira página do Google de forma orgânica — ou seja, sem pagar por cliques ou anúncios. Fazemos uma auditoria completa, otimizamos o seu site tecnicamente, criamos conteúdo estratégico e construímos autoridade de domínio.",
  },
  {
    pergunta: "Preciso pagar Google Ads também?",
    resposta:
      "Não. O nosso trabalho é 100% focado em resultado orgânico. Você não precisa de gestor de tráfego pago nem de créditos em Google Ads. O objetivo é que sua empresa apareça nas posições orgânicas do Google, que são gratuitas e geram confiança no consumidor.",
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
      "Google Ads é publicidade paga: você paga por cada clique e o resultado desaparece quando o orçamento acaba. SEO orgânico é posicionamento natural: uma vez que seu site conquista uma boa posição, ele tende a se manter lá com manutenção adequada — sem custo por clique. O retorno sobre o investimento no longo prazo é muito maior.",
  },
  {
    pergunta: "Quanto custa aparecer no Google organicamente?",
    resposta:
      "O investimento varia conforme a concorrência da palavra-chave e a cidade. Trabalhamos com setup único (investimento inicial) mais uma mensalidade acessível de manutenção. Entre em contato para receber um diagnóstico gratuito e uma proposta personalizada.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-ghanks-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title text-ghanks-gray">
            Perguntas frequentes sobre{" "}
            <span className="text-ghanks-yellow">SEO orgânico</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Tire suas dúvidas sobre como aparecer na primeira página do Google
            sem anúncios pagos.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-semibold text-ghanks-gray pr-4">
                  {item.pergunta}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.resposta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
