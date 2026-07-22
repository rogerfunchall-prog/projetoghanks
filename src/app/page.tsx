/* Página inicial — Landing page G Hanks */

import Script from "next/script";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MetodoHanks from "@/components/MetodoHanks";
import ComoFunciona from "@/components/ComoFunciona";
import Planos from "@/components/Planos";
import Portfolio from "@/components/Portfolio";
import Depoimentos from "@/components/Depoimentos";
import QuemSomos from "@/components/QuemSomos";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/* JSON-LD ItemList com os 5 cases do portfólio */
const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Portfólio G Hanks — Cases de SEO Orgânico",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Top Sacolas Personalizadas",
      url: "https://topsacolas.com.br",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Marcelo Clay | O Palestrante Financeiro",
      url: "https://palestrantefinanceiro.com.br",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Condomínios Sorocaba (TG Consultora de Imóveis)",
      url: "https://condominiossorocaba.com.br",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Reluz Galvânica",
      url: "https://reluzgalvanica.com.br",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Vittoria Vitt",
      url: "https://vittoriavitt.com.br",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MetodoHanks />
        <ComoFunciona />
        <Planos />
        <Portfolio />
        <Depoimentos />
        <QuemSomos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
      <Script
        id="json-ld-portfolio"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
    </>
  );
}
