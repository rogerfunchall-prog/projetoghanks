/* Página inicial — Hub da G Hanks com resumos e links para páginas dedicadas */

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Depoimentos from "@/components/Depoimentos";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/* Pilares do método para resumo */
const PILARES = [
  { letra: "H", cor: "bg-ghanks-blue", titulo: "Hacking de Crescimento" },
  { letra: "A", cor: "bg-ghanks-green", titulo: "Autoridade Orgânica" },
  { letra: "N", cor: "bg-ghanks-yellow", titulo: "Nichos e Cidades Exclusivas" },
  { letra: "K", cor: "bg-ghanks-red", titulo: "Keywords Estratégicas" },
  { letra: "S", cor: "bg-ghanks-blue", titulo: "Sustentabilidade de Resultado" },
];

/* Cases em destaque */
const CASES_DESTAQUE = [
  {
    nome: "Reluz Galvânica",
    destaque: "1º lugar no Google Brasil para 'galvânica Limeira'",
    imagem: "/case-reluz-galvanica.png",
    badge: true,
  },
  {
    nome: "Top Sacolas Personalizadas",
    destaque: "Topo das buscas em Taubaté e Vale do Paraíba",
    imagem: "/case-top-sacolas.png",
    badge: false,
  },
  {
    nome: "Marcelo Clay",
    destaque: "Posicionamento orgânico nacional como palestrante financeiro",
    imagem: "/case-marcelo-clay.png",
    badge: false,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Resumo do Método H.A.N.K.S. */}
        <section className="py-16 md:py-24 bg-ghanks-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ghanks-gray">
                O Método <span className="text-ghanks-blue">H.A.N.K.S.</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                Cinco pilares de growth hacking e SEO orgânico que colocam
                empresas na primeira página do Google de forma sustentável.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {PILARES.map((pilar) => (
                <div
                  key={pilar.letra}
                  className="bg-white rounded-2xl p-5 shadow-sm text-center"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${pilar.cor} text-white text-xl font-bold mb-3`}
                  >
                    {pilar.letra}
                  </div>
                  <p className="text-sm font-semibold text-ghanks-gray">
                    {pilar.titulo}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/metodo"
                className="inline-flex items-center gap-2 text-ghanks-blue font-semibold hover:underline"
              >
                Conheça o Método H.A.N.K.S. em detalhes
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Resumo Planos */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-ghanks-gray mb-4">
              Planos e <span className="text-ghanks-red">exclusividade</span> por cidade
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-6">
              Setup único de posicionamento + mensalidade acessível de manutenção.
              Em cidades de até 300 mil habitantes, aceitamos apenas um cliente
              por palavra-chave — quem chegar primeiro, conquista a posição.
            </p>
            <Link
              href="/planos"
              className="inline-flex items-center gap-2 text-ghanks-blue font-semibold hover:underline"
            >
              Ver planos e tabela comparativa SEO vs. Google Ads
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Resumo Portfólio */}
        <section className="py-16 md:py-24 bg-ghanks-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ghanks-gray">
                Marcas que já estão na{" "}
                <span className="text-ghanks-blue">primeira página do Google</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg">
                Projetos reais de SEO orgânico em diferentes nichos e regiões do Brasil.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CASES_DESTAQUE.map((c) => (
                <div
                  key={c.nome}
                  className={`relative bg-white rounded-2xl overflow-hidden shadow-sm border transition-all hover:shadow-lg hover:-translate-y-1 ${
                    c.badge ? "border-ghanks-green border-2" : "border-gray-100"
                  }`}
                >
                  <div className="relative h-44">
                    <Image
                      src={c.imagem}
                      alt={`Case ${c.nome}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {c.badge && (
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1 bg-ghanks-green text-white px-3 py-1 rounded-full text-xs font-bold">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        1º no Google Brasil
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-ghanks-gray mb-1">{c.nome}</h3>
                    <p className="text-sm text-gray-500">{c.destaque}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-ghanks-blue font-semibold hover:underline"
              >
                Ver todos os cases de sucesso
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <Depoimentos />

        {/* CTA Final */}
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
