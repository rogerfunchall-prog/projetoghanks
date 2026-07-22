/* Página inicial — Landing page G Hanks */

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MetodoHanks from "@/components/MetodoHanks";
import ComoFunciona from "@/components/ComoFunciona";
import Planos from "@/components/Planos";
import Depoimentos from "@/components/Depoimentos";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MetodoHanks />
        <ComoFunciona />
        <Planos />
        <Depoimentos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
