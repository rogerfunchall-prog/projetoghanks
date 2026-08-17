/* Seção Hero da home — bloco escuro com imagem de fundo, headline display e CTAs. */
import Image from "next/image";
import Link from "next/link";
import Marquee from "./Marquee";

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
            <Link
              href="/diagnostico-gratuito"
              className="inline-flex items-center justify-center gap-2 bg-ghanks-blue text-white px-7 py-4 rounded-full text-base font-semibold hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              Solicitar Diagnóstico Gratuito
            </Link>
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
