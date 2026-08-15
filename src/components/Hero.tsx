/* Seção Hero da home — bloco escuro com imagem de fundo, headline display e CTAs. */
import Image from "next/image";
import Marquee from "./Marquee";

const WHATSAPP_NUMBER = "5511950809873";

/* Termos que a G Hanks trabalha — faixa em movimento no rodapé do hero */
const KEYWORDS = [
  "SEO Orgânico",
  "Growth Hacking",
  "Primeira Página do Google",
  "Exclusividade por Cidade",
  "SEO Local",
  "Autoridade de Domínio",
  "Método H.A.N.K.S.",
  "Busca Orgânica",
];

export default function Hero() {
  return (
    <section className="relative bg-ghanks-ink overflow-hidden pt-32 md:pt-40 pb-16 md:pb-20">
      {/* Imagem de fundo com Next.js Image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/ghanks-home-hero.png"
          alt="Ilustração abstrata de SEO orgânico com resultados de busca, trajetória de crescimento e conexões digitais."
          fill
          priority
          quality={85}
          className="object-cover object-right md:object-[center_right]"
        />
        {/* Gradiente escuro para garantir legibilidade à esquerda */}
        <div className="absolute inset-0 bg-gradient-to-r from-ghanks-ink via-ghanks-ink/90 to-ghanks-ink/40 md:to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Etiqueta / Selo */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-ghanks-green" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide">
            Growth Hacking • SEO Orgânico • Resultado Real
          </span>
        </div>

        {/* Conteúdo principal à esquerda */}
        <div className="mt-8 md:mt-12 max-w-3xl">
          <h1 className="max-w-2xl">
            <span className="block font-display text-xl sm:text-2xl md:text-3xl font-semibold text-white/95 tracking-tight">
              Coloque sua empresa na
            </span>
            <span className="display-title block text-gradient-brand mt-1">
              Primeira página do Google
            </span>
            <span className="block font-display text-xl sm:text-2xl md:text-3xl font-semibold text-white/95 tracking-tight mt-2">
              sem pagar por anúncio
            </span>
          </h1>

          <p className="mt-6 lead text-white/85 max-w-xl">
            SEO orgânico com exclusividade por cidade e palavra-chave.
            Trabalhamos para posicionar o seu negócio no topo do Google de
            forma sustentável — sem Google Ads, sem gestor de tráfego pago.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um diagnóstico gratuito de SEO.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ghanks-blue text-white px-7 py-4 rounded-full text-base font-semibold hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.752-6.338-2.034l-.442-.332-3.238 1.085 1.085-3.238-.332-.442A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Solicitar Diagnóstico Gratuito
            </a>
            <a
              href="/metodo"
              className="inline-flex items-center justify-center gap-2 text-white border border-white/25 px-7 py-4 rounded-full text-base font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Ver Como Funciona
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Faixa de palavras-chave em movimento */}
      <div className="relative z-10 mt-16 md:mt-24 border-t border-white/10 py-5">
        <Marquee items={KEYWORDS} tone="dark" />
      </div>
    </section>
  );
}
