"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

const WHATSAPP_NUMBER = "5511950809873";

const KEYWORDS_MARQUEE = [
  "SEO ORGÂNICO",
  "DIAGNÓSTICO ESTRATÉGICO",
  "GROWTH HACKING",
  "SEO LOCAL",
  "ATENDIMENTO CONSULTIVO",
  "AUTORIDADE DIGITAL",
];

const ESCRITORIOS = [
  {
    cidade: "São Paulo (Matriz)",
    endereco: "Av. Brig. Faria Lima, 1811 - Conj. 1120 - Jardins",
    cep: "São Paulo - SP, 01452-001",
  },
  {
    cidade: "Limeira",
    endereco: "R. Sen. Vergueiro, 995 - Sl 51|B - Centro",
    cep: "Limeira - SP, 13480-001",
  },
];

const CONFIANCA_ATRIBUTOS = [
  {
    titulo: "Atendimento consultivo",
    descricao: "Conversa orientada ao contexto real do negócio, sem scripts prontos ou promessas vazias.",
  },
  {
    titulo: "Diagnóstico gratuito",
    descricao: "Primeiro passo sem compromisso para identificar oportunidades de posicionamento na sua praça.",
  },
  {
    titulo: "Estratégia por cidade e nicho",
    descricao: "Posicionamento construído de acordo com a concorrência local e a intenção de compra.",
  },
];

export default function ContatoPage() {
  const [formEnviado, setFormEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cidade: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Olá! Gostaria de enviar uma mensagem pelo site:\n\n*Nome:* ${formData.nome}\n*E-mail:* ${formData.email}\n*Cidade/Nicho:* ${formData.cidade}\n*Mensagem:* ${formData.mensagem}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    setFormEnviado(true);
    window.open(url, "_blank");
  };

  return (
    <PageShell>
      {/* ==================================================================
          Hero Principal — ghanks-contato-hero.png com padrão B2B premium
          ================================================================== */}
      <section className="relative bg-ghanks-ink overflow-hidden -mt-24 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/ghanks-contato-hero.png"
            alt="Ambiente executivo de inteligência e estratégia com mapa conectado e dados de crescimento."
            fill
            priority
            quality={85}
            className="object-cover object-[center_right]"
          />
          {/* Gradiente escuro para garantir legibilidade à esquerda */}
          <div className="absolute inset-0 bg-gradient-to-r from-ghanks-ink via-ghanks-ink/90 to-ghanks-ink/40 md:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Início", href: "/" }, { label: "Contato" }]}
            tone="dark"
          />

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/90 mb-6">
              <span className="w-2 h-2 rounded-full bg-ghanks-blue" aria-hidden="true" />
              Conversa consultiva e diagnóstico estratégico
            </span>

            <h1 className="display-title text-white">
              O próximo passo do seu <span className="text-gradient-brand">crescimento</span> começa com uma conversa
            </h1>

            <p className="mt-6 lead text-white/80 max-w-2xl">
              Conte onde sua empresa está hoje. A G Hanks identifica oportunidades de posicionamento, autoridade e crescimento digital para o seu negócio.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um diagnóstico gratuito para minha empresa.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 text-base"
              >
                Solicitar diagnóstico gratuito
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de falar diretamente com a equipe da G Hanks.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm text-base"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Faixa de termos na base */}
        <div className="relative z-10 mt-16 md:mt-24 border-t border-white/10 py-5">
          <Marquee items={KEYWORDS_MARQUEE} tone="dark" />
        </div>
      </section>

      {/* ==================================================================
          Área Principal de Conversão (Duas Colunas: Canais à esquerda, Formulário à direita)
          ================================================================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Coluna Esquerda — Canais de Contato e Endereços */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
                  Canais de atendimento
                </span>
                <h2 className="section-title mt-2 text-ghanks-gray">
                  Fale diretamente com nossa equipe
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  Escolha o canal de sua preferência ou visite um dos nossos escritórios em São Paulo e Limeira.
                </p>
              </Reveal>

              {/* WhatsApp Card */}
              <Reveal delay={100}>
                <div className="bg-ghanks-light rounded-3xl p-7 border border-gray-200 shadow-xs hover:border-ghanks-blue transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-green-50 text-ghanks-green flex items-center justify-center font-bold">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="block-title text-ghanks-gray text-lg">WhatsApp</h3>
                      <p className="text-xs text-gray-500">Atendimento consultivo, sem compromisso</p>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de falar pelo WhatsApp da G Hanks.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-ghanks-green text-white py-3 rounded-full font-bold hover:bg-green-600 transition-colors text-sm shadow-sm"
                  >
                    Falar pelo WhatsApp (11) 95080-9873
                  </a>
                </div>
              </Reveal>

              {/* Instagram Card */}
              <Reveal delay={150}>
                <div className="bg-ghanks-light rounded-3xl p-7 border border-gray-200 shadow-xs flex items-center justify-between">
                  <div>
                    <h3 className="block-title text-ghanks-gray text-base">Instagram</h3>
                    <p className="text-xs text-gray-500 mt-0.5">Acompanhe bastidores e conteúdos</p>
                  </div>
                  <a
                    href="https://www.instagram.com/ghanks.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-ghanks-blue hover:underline bg-white px-4 py-2 rounded-xl border border-gray-200"
                  >
                    @ghanks.br
                  </a>
                </div>
              </Reveal>

              {/* Escritórios */}
              <div className="space-y-4">
                {ESCRITORIOS.map((esc, idx) => (
                  <Reveal key={esc.cidade} delay={200 + idx * 50}>
                    <div className="bg-ghanks-light rounded-3xl p-6 border border-gray-200 flex items-start gap-4">
                      <span className="w-10 h-10 rounded-xl bg-blue-50 text-ghanks-blue flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <div>
                        <h4 className="font-bold text-ghanks-gray text-base">{esc.cidade}</h4>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">{esc.endereco}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{esc.cep}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Coluna Direita — Formulário de Mensagem */}
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="bg-ghanks-light rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm">
                  <h3 className="block-title text-ghanks-gray mb-2">Conte sobre o seu negócio</h3>
                  <p className="text-xs md:text-sm text-gray-500 mb-8 leading-relaxed">
                    Quanto mais contexto você compartilhar, mais estratégica será nossa primeira conversa.
                  </p>

                  {formEnviado ? (
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                      <h4 className="text-lg font-bold text-green-800 mb-1">Mensagem encaminhada!</h4>
                      <p className="text-xs md:text-sm text-green-700">
                        O WhatsApp foi aberto com os dados preenchidos. Nossa equipe responderá em breve.
                      </p>
                      <button
                        onClick={() => setFormEnviado(false)}
                        className="mt-4 bg-ghanks-blue text-white px-5 py-2 rounded-full text-xs font-semibold"
                      >
                        Enviar nova mensagem
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="nome" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                          Seu Nome *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          required
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                          placeholder="Ex: Carlos Silva"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                          E-mail Profissional *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                          placeholder="voce@empresa.com.br"
                        />
                      </div>

                      <div>
                        <label htmlFor="cidade" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                          Cidade e Nicho *
                        </label>
                        <input
                          type="text"
                          id="cidade"
                          required
                          value={formData.cidade}
                          onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                          className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                          placeholder="Ex: Loja de roupas em Ribeirão Preto - SP"
                        />
                      </div>

                      <div>
                        <label htmlFor="mensagem" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                          Mensagem ou Desafio *
                        </label>
                        <textarea
                          id="mensagem"
                          required
                          rows={4}
                          value={formData.mensagem}
                          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                          className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue resize-none"
                          placeholder="Conte quais são os objetivos da sua empresa..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-ghanks-blue text-white py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 text-sm"
                      >
                        Enviar mensagem
                      </button>

                      <p className="text-xs text-gray-400 text-center pt-2">
                        Ou se preferir, fale diretamente pelo{" "}
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de falar diretamente pelo WhatsApp.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ghanks-blue font-semibold hover:underline"
                        >
                          WhatsApp
                        </a>
                      </p>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Imagem Interna de Apoio — ghanks-contato-briefing.png
          ================================================================== */}
      <section className="py-20 md:py-28 bg-ghanks-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-ghanks-blue rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                Abordagem Consultiva
              </span>
              <h2 className="section-title text-ghanks-gray">
                Uma conversa. Um diagnóstico. Um plano de crescimento.
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Antes de indicar qualquer solução, entendemos o momento da empresa, o mercado, a cidade, o nicho e as oportunidades reais de posicionamento. O objetivo é transformar uma conversa inicial em uma direção clara para o próximo passo.
              </p>
              <div className="pt-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Quero conversar com um especialista da G Hanks.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-3.5 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-md text-sm"
                >
                  Quero conversar com um especialista
                </a>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 aspect-[16/10]">
                <Image
                  src="/ghanks-contato-briefing.png"
                  alt="Mesa de reunião executiva com mapa tátil interativo, tablet com gráficos e vista panorâmica noturna da cidade."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Bloco de Confiança (3 atributos)
          ================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Pilares de Relacionamento
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Por que iniciar uma conversa com a G Hanks
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {CONFIANCA_ATRIBUTOS.map((item, i) => (
              <Reveal key={item.titulo} delay={i * 80}>
                <div className="bg-ghanks-light rounded-3xl p-8 border border-gray-200 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-ghanks-blue font-bold text-sm flex items-center justify-center mb-5">
                      0{i + 1}
                    </span>
                    <h3 className="block-title text-ghanks-gray mb-3">{item.titulo}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.descricao}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================
          CTA Final de Alta Conversão
          ================================================================== */}
      <section className="bg-ghanks-ink py-20 md:py-28 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-ghanks-blue/15 blur-[160px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Reveal>
            <h2 className="section-title mb-6 text-white">
              Pronto para colocar sua empresa na primeira página do Google?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed text-base md:text-lg">
              Solicite um diagnóstico gratuito e descubra quais oportunidades de posicionamento orgânico existem para o seu negócio.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um diagnóstico gratuito para minha empresa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-9 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/25 text-base"
            >
              Solicitar diagnóstico gratuito
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
