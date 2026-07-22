/* Seção CTA Final — chamada para diagnóstico gratuito */

const WHATSAPP_NUMBER = "5511950809873";

export default function CTAFinal() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Gradiente de fundo sutil */}
        <div className="relative bg-gradient-to-br from-ghanks-blue via-blue-600 to-blue-700 rounded-3xl p-10 md:p-16 overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para aparecer na primeira página do Google?
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Solicite seu diagnóstico gratuito agora. Um especialista da G
              Hanks vai analisar a sua palavra-chave e cidade, e apresentar o
              potencial de posicionamento orgânico — em uma videochamada de até
              10 minutos, sem compromisso.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar meu diagnóstico gratuito de SEO orgânico.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-ghanks-blue px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.752-6.338-2.034l-.442-.332-3.238 1.085 1.085-3.238-.332-.442A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Solicitar Diagnóstico Gratuito
            </a>

            <p className="mt-4 text-blue-200 text-sm">
              Atendimento rápido via WhatsApp • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
