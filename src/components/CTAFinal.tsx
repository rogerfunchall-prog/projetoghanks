/* Seção CTA Final — chamada para diagnóstico gratuito */

import Link from "next/link";
import Reveal from "./Reveal";

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
            vai analisar o seu posicionamento orgânico e apresentar as oportunidades
            de crescimento para o seu negócio.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <Link
            href="/diagnostico-gratuito"
            className="inline-flex items-center gap-3 bg-white text-ghanks-gray px-8 py-4 rounded-full text-base md:text-lg font-bold hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 mt-9"
          >
            Solicitar Diagnóstico Gratuito
          </Link>

          <p className="mt-4 text-white/45 text-sm">
            Análise estratégica inicial • Sem compromisso
          </p>
        </Reveal>
      </div>
    </section>
  );
}
