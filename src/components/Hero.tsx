/* Seção Hero — banner de fundo com texto no terço esquerdo */
import Image from "next/image";

const WHATSAPP_NUMBER = "5511950809873";

export default function Hero() {
  return (
    <section className="relative min-h-[480px] md:min-h-[560px] lg:min-h-[600px] overflow-hidden">
      {/* Imagem de fundo — LCP, priority obrigatório */}
      <Image
        src="/banner-home.png"
        alt="Ilustração representando um resultado de busca em primeiro lugar no Google, com mapa do Brasil e gráfico de crescimento orgânico ascendente"
        fill
        priority
        className="object-cover object-[65%_center] md:object-[right_center]"
        sizes="100vw"
        quality={85}
      />

      {/* Overlay gradiente — reforço de contraste no lado esquerdo */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"
        aria-hidden="true"
      />

      {/* Conteúdo — posicionado no terço esquerdo, centralizado verticalmente */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[inherit] flex flex-col justify-center items-start py-28 md:py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-ghanks-green" aria-hidden="true" />
          <span className="text-sm font-medium text-white/90">
            Growth Hacking • SEO Orgânico • Resultado Real
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
          Coloque sua empresa na{" "}
          <span className="text-ghanks-blue">primeira página do Google</span>
          , sem pagar por anúncio
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
          SEO orgânico com exclusividade por cidade e palavra-chave.
          Trabalhamos para posicionar o seu negócio no topo do Google de forma
          sustentável — sem Google Ads, sem gestor de tráfego pago.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um diagnóstico gratuito de SEO.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.752-6.338-2.034l-.442-.332-3.238 1.085 1.085-3.238-.332-.442A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Solicitar Diagnóstico Gratuito
          </a>
          <a
            href="/metodo"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 hover:border-white/50 transition-colors"
          >
            Ver Como Funciona
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
