/* Seção Hero da home — bloco escuro com headline display, CTAs e o banner
   de resultado no Google apresentado como card flutuante. */
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

/* Logos de clientes exibidas na prova social sobre o banner */
const CLIENTES = [
  { src: "/clientes/reluz.png", alt: "Reluz Galvânica" },
  { src: "/clientes/top-sacolas.png", alt: "Top Sacolas" },
  { src: "/clientes/vittoria-vitt.png", alt: "Vittoria Vitt" },
];

export default function Hero() {
  return (
    <section className="relative bg-ghanks-ink overflow-hidden">
      {/* Brilhos de fundo nas cores da marca */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-full bg-ghanks-blue/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full bg-ghanks-green/15 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-14 md:pb-16">
        {/* Etiqueta */}
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-ghanks-green" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-medium text-white/80 tracking-wide">
            Growth Hacking • SEO Orgânico • Resultado Real
          </span>
        </div>

        {/* Headline principal */}
        <h1 className="mt-7 max-w-5xl">
          <span className="block font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 tracking-tight">
            Coloque sua empresa na
          </span>
          <span className="display-title block text-gradient-brand mt-1">
            Primeira página do Google
          </span>
          <span className="block font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 tracking-tight mt-2">
            sem pagar por anúncio
          </span>
        </h1>

        {/* Coluna de texto + CTAs à esquerda, banner à direita */}
        <div className="mt-10 md:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="lead text-white/70 max-w-xl">
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
                className="inline-flex items-center justify-center gap-2 text-white border border-white/25 px-7 py-4 rounded-full text-base font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Ver Como Funciona
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Banner de resultado no Google, em card flutuante com nova imagem */}
          <div className="lg:col-span-7 relative">
            <div className="animate-float-soft">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-ghanks-ink-soft">
                <Image
                  src="/ghanks-home-hero.png"
                  alt="Ilustração abstrata de SEO orgânico com resultados de busca, trajetória de crescimento e conexões digitais."
                  width={1920}
                  height={1080}
                  priority
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="w-full h-auto object-cover object-right"
                />
              </div>
            </div>

            {/* Prova social sobreposta ao card */}
            <div className="absolute -bottom-6 left-4 sm:left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="flex -space-x-2">
                {CLIENTES.map((cliente) => (
                  <Image
                    key={cliente.src}
                    src={cliente.src}
                    alt={cliente.alt}
                    width={80}
                    height={80}
                    className="w-9 h-9 rounded-full object-contain bg-white ring-2 ring-white"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-ghanks-gray leading-tight">
                Marcas que já estão
                <br />
                na primeira página
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa de palavras-chave em movimento */}
      <div className="relative z-10 border-t border-white/10 py-5">
        <Marquee items={KEYWORDS} tone="dark" />
      </div>
    </section>
  );
}
