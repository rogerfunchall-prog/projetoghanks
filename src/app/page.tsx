/* Página inicial — Hub da G Hanks com resumos e links para páginas dedicadas */

import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import MethodCards from "@/components/MethodCards";
import CaseCards from "@/components/CaseCards";
import StatsCounter from "@/components/StatsCounter";
import Depoimentos from "@/components/Depoimentos";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/* Link de "saiba mais" no padrão visual das seções */
function SaibaMais({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-semibold text-ghanks-gray border border-gray-200 rounded-full px-6 py-3 transition-all duration-300 hover:border-ghanks-blue hover:text-ghanks-blue hover:-translate-y-0.5"
    >
      {children}
      <svg
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Resumo do Método H.A.N.K.S. */}
        <section className="py-20 md:py-28 bg-ghanks-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              variant="split"
              eyebrow="Nosso método"
              title={
                <>
                  O Método <span className="text-ghanks-blue">H.A.N.K.S.</span>
                </>
              }
              description="Cinco pilares de growth hacking e SEO orgânico que colocam empresas na primeira página do Google de forma sustentável."
              className="mb-12 md:mb-16"
            />

            <MethodCards />

            <Reveal className="mt-10 text-center">
              <SaibaMais href="/metodo">Conheça o Método H.A.N.K.S. em detalhes</SaibaMais>
            </Reveal>
          </div>
        </section>

        {/* Resumo Planos */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Planos e exclusividade"
              title={
                <>
                  Planos e <span className="text-ghanks-red">exclusividade</span> por cidade
                </>
              }
              description="Setup único de posicionamento + mensalidade acessível de manutenção. Em cidades de até 300 mil habitantes, aceitamos apenas um cliente por palavra-chave — quem chegar primeiro, conquista a posição."
            />
            <Reveal delay={150} className="mt-10 text-center">
              <SaibaMais href="/planos">
                Ver planos e tabela comparativa SEO vs. Google Ads
              </SaibaMais>
            </Reveal>
          </div>
        </section>

        {/* Resumo Portfólio */}
        <section className="py-20 md:py-28 bg-ghanks-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              variant="split"
              eyebrow="Cases de sucesso"
              title={
                <>
                  Marcas que já estão na{" "}
                  <span className="text-ghanks-blue">primeira página do Google</span>
                </>
              }
              description="Projetos reais de SEO orgânico em diferentes nichos e regiões do Brasil."
              className="mb-12 md:mb-16"
            />

            <CaseCards />

            <Reveal className="mt-10 text-center">
              <SaibaMais href="/portfolio">Ver todos os cases de sucesso</SaibaMais>
            </Reveal>
          </div>
        </section>

        {/* Números de operação */}
        <StatsCounter />

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
