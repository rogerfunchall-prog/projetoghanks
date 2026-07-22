/* Seção Hero — acima da dobra, com H1 contendo keyword principal */
const WHATSAPP_NUMBER = "5511999999999";

/* Números de prova social */
const STATS = [
  { value: "1.200+", label: "Palavras-chave posicionadas" },
  { value: "350+", label: "Cidades atendidas" },
  { value: "100%", label: "Exclusividade garantida" },
  { value: "~90 dias", label: "Tempo médio de resultado" },
];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden">
      {/* Detalhe decorativo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ghanks-blue/5 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-ghanks-green/5 rounded-full translate-y-1/2 -translate-x-1/2" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 bg-ghanks-light border border-gray-200 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-ghanks-green" aria-hidden="true" />
          <span className="text-sm font-medium text-ghanks-gray">
            Growth Hacking • SEO Orgânico • Resultado Real
          </span>
        </div>

        {/* H1 com keyword principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ghanks-gray leading-tight max-w-4xl mx-auto">
          Coloque sua empresa na{" "}
          <span className="text-ghanks-blue">primeira página do Google</span>
          , sem pagar por anúncio
        </h1>

        {/* Subtítulo com modelo de exclusividade */}
        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          SEO orgânico com exclusividade por cidade e palavra-chave.
          Trabalhamos para posicionar o seu negócio no topo do Google de forma
          sustentável — sem Google Ads, sem gestor de tráfego pago.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
            href="#metodo"
            className="inline-flex items-center gap-2 bg-white text-ghanks-gray border-2 border-gray-200 px-8 py-4 rounded-full text-base font-semibold hover:border-ghanks-blue hover:text-ghanks-blue transition-colors"
          >
            Ver Como Funciona
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Prova social em números */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-ghanks-gray">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
