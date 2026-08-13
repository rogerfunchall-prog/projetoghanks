/* Seção CTA Final — chamada para diagnóstico gratuito */

import Reveal from "./Reveal";

const WHATSAPP_NUMBER = "5511950809873";

export default function CTAFinal() {
  return (
    <section id="contato" className="relative bg-ghanks-ink overflow-hidden">
      {/* Brilhos de fundo nas cores da marca */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 left-1/3 w-[34rem] h-[34rem] rounded-full bg-ghanks-blue/25 blur-[140px]" />
        <div className="absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-ghanks-green/15 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/15 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
            <span className="w-2 h-2 rounded-full bg-ghanks-green" aria-hidden="true" />
            Diagnóstico gratuito
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="section-title text-white mt-6">
            Pronto para aparecer na{" "}
            <span className="text-gradient-brand">primeira página do Google</span>?
          </h2>
          <p className="lead text-white/65 max-w-2xl mx-auto mt-5">
            Solicite seu diagnóstico gratuito agora. Um especialista da G Hanks
            vai analisar a sua palavra-chave e cidade, e apresentar o potencial
            de posicionamento orgânico — em uma videochamada de até 10 minutos,
            sem compromisso.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar meu diagnóstico gratuito de SEO orgânico.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-ghanks-gray px-8 py-4 rounded-full text-base md:text-lg font-bold hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 mt-9"
          >
            <svg className="w-6 h-6 text-ghanks-green" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.752-6.338-2.034l-.442-.332-3.238 1.085 1.085-3.238-.332-.442A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Solicitar Diagnóstico Gratuito
          </a>

          <p className="mt-4 text-white/45 text-sm">
            Atendimento rápido via WhatsApp • Sem compromisso
          </p>
        </Reveal>
      </div>
    </section>
  );
}
