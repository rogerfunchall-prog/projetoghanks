/* Seção Planos e Exclusividade — explica o modelo de negócio */

const WHATSAPP_NUMBER = "5511999999999";

export default function Planos() {
  return (
    <section id="planos" className="py-16 md:py-24 bg-ghanks-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ghanks-gray">
            Planos e{" "}
            <span className="text-ghanks-red">exclusividade</span> por cidade
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Posicionamento no Google sem anúncios, com exclusividade de
            palavra-chave na sua cidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card Setup */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-ghanks-blue px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Setup Inicial
            </div>
            <h3 className="text-xl font-bold text-ghanks-gray mb-3">
              Setup único de posicionamento
            </h3>
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
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Manutenção Mensal
            </div>
            <h3 className="text-xl font-bold text-ghanks-gray mb-3">
              Manutenção de ranking acessível
            </h3>
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
        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
          <h3 className="text-xl font-bold text-ghanks-gray mb-3">
            Exclusividade de palavra-chave por cidade
          </h3>
          <p className="text-gray-500 leading-relaxed">
            Em cidades de até 300 mil habitantes, trabalhamos com{" "}
            <strong className="text-ghanks-gray">apenas um cliente por palavra-chave</strong>.
            Isso significa que o seu concorrente direto não poderá contratar o
            mesmo serviço na sua região. A vaga é sua — e só sua.
          </p>
        </div>
      </div>
    </section>
  );
}
