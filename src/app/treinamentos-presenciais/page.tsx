"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

const WHATSAPP_NUMBER = "5511950809873";

const TEMAS = [
  "Marketing Digital para Empresários",
  "SEO Orgânico: Como Aparecer no Google",
  "Tráfego Pago (Google Ads & Meta Ads)",
  "Gestão de Redes Sociais com Foco em Vendas",
  "Inteligência Artificial aplicada aos Negócios",
  "Automação e Processos Comerciais",
  "Indicadores e Métricas de Desempenho",
  "Presença Local e Google Meu Negócio",
];

const FORMATOS = [
  "Palestra Prática (1 a 2 horas)",
  "Workshop Intensivo (Meio período ou Dia inteiro)",
  "Treinamento de Capacitação de Equipe",
  "Trilha de Imersão Personalizada",
];

const PROCESSO = [
  {
    passo: "01",
    titulo: "Conversa Inicial",
    descricao: "Alinhamos os principais gargalos e objetivos que sua equipe precisa resolver.",
  },
  {
    passo: "02",
    titulo: "Diagnóstico e Desenho",
    descricao: "Estruturamos a trilha de conteúdo sob medida para o nível e momento do time.",
  },
  {
    passo: "03",
    titulo: "Validação",
    descricao: "Apresentamos o programa detalhado, carga horária e materiais de apoio.",
  },
  {
    passo: "04",
    titulo: "Treinamento Presencial",
    descricao: "Ministramos a capacitação na base da G Hanks ou na sua empresa, com foco em prática.",
  },
];

const FAQ_ITENS = [
  {
    pergunta: "Onde os treinamentos são realizados?",
    resposta: "Podem ser realizados presencialmente na base da G Hanks (São Paulo ou Limeira) ou in company, diretamente nas instalações da empresa contratante em qualquer cidade do Brasil.",
  },
  {
    pergunta: "Qual é o número recomendado de participantes?",
    resposta: "O formato é adaptável: desde sessões exclusivas para a diretoria até workshops interativos para equipes inteiras de vendas, atendimento ou marketing.",
  },
  {
    pergunta: "Os treinamentos incluem material de apoio?",
    resposta: "Sim. Todos os participantes recebem apostilas, checklists práticos, templates de planejamento e ferramentas de aplicação imediata.",
  },
  {
    pergunta: "É possível personalizar o conteúdo com dados da nossa empresa?",
    resposta: "Sim. Essa é a principal característica dos nossos treinamentos sob demanda: utilizamos exemplos reais do seu segmento, concorrentes e cenários da sua operação.",
  },
];

export default function TreinamentosPresenciaisPage() {
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    whatsapp: "",
    email: "",
    tema: TEMAS[0],
    publico: "",
    participantes: "10 a 20 pessoas",
    cidade: "",
    local: "Na empresa contratante",
    formato: FORMATOS[1],
    dataAprox: "",
    objetivo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Olá! Tenho interesse em um treinamento presencial:\n\n*Nome:* ${formData.nome}\n*Empresa:* ${formData.empresa}\n*WhatsApp:* ${formData.whatsapp}\n*Tema:* ${formData.tema}\n*Público:* ${formData.publico}\n*Participantes:* ${formData.participantes}\n*Cidade:* ${formData.cidade}\n*Local:* ${formData.local}\n*Formato:* ${formData.formato}\n*Data:* ${formData.dataAprox}\n*Objetivo:* ${formData.objetivo}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    setEnviado(true);
    window.open(url, "_blank");
  };

  return (
    <PageShell>
      {/* Hero com background image (ghanks-presencial-hero-v2.png) */}
      <section className="relative bg-ghanks-ink overflow-hidden -mt-24 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/ghanks-presencial-hero-v2.png"
            alt="Equipe participando de treinamento corporativo presencial com facilitador, quadro estratégico e dinâmica colaborativa."
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
            items={[{ label: "Início", href: "/" }, { label: "Soluções", href: "/servicos" }, { label: "Treinamentos Presenciais" }]}
            tone="dark"
          />

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <Reveal className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/90 mb-6">
                <span className="w-2 h-2 rounded-full bg-ghanks-red" aria-hidden="true" />
                Capacitação Sob Demanda
              </span>
              <h1 className="display-title text-white">
                Treinamentos presenciais <span className="text-gradient-brand">sob demanda</span> para empresas
              </h1>
              <p className="mt-6 lead text-white/80 max-w-2xl">
                Conteúdo adaptado ao seu momento, ao seu time e aos desafios reais do seu negócio, ministrado na base da G Hanks ou na sua empresa.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#formulario"
                  className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25"
                >
                  Montar meu treinamento
                </a>
                <a
                  href="#temas"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm"
                >
                  Conhecer os temas
                </a>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-4">
              <div className="bg-ghanks-ink/80 backdrop-blur-md rounded-3xl p-8 border border-white/15 text-white shadow-xl">
                <h3 className="text-lg font-bold mb-3">Flexibilidade Total</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Você escolhe o tema, a profundidade, a carga horária e o local. Nós levamos o conhecimento prático direto para o seu time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-ghanks-ink-soft border-t border-white/10 py-5">
        <Marquee
          items={[
            "Treinamento In Company",
            "Workshops Práticos",
            "Capacitação Comercial",
            "Imersão em IA & SEO",
            "Trilhas Personalizadas",
          ]}
          tone="dark"
        />
      </div>

      {/* Para quem é & Formatos */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-6">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-red">
                Público-alvo
              </span>
              <h2 className="section-title mt-3 text-ghanks-gray">
                Para quem são os treinamentos
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Desenvolvemos capacitações voltadas para empresários, diretores, equipes de marketing, atendimento, vendas e gestores que precisam transformar conhecimento teórico em execução prática imediata.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Empresários e sócios buscando visão estratégica",
                  "Equipes comerciais querendo dominar geração de leads",
                  "Profissionais de marketing focados em SEO e performance",
                  "Gestores implementando IA e automação na rotina",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-ghanks-light rounded-xl p-4 border border-gray-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-ghanks-red shrink-0" />
                    <span className="text-sm md:text-base font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
                Formatos flexíveis
              </span>
              <h2 className="section-title mt-3 text-ghanks-gray">
                Como o treinamento é entregue
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Cada empresa possui uma disponibilidade de tempo e um objetivo específico. Por isso, oferecemos formatos variados:
              </p>
              <div className="mt-8 space-y-4">
                {FORMATOS.map((fmt, i) => (
                  <div key={i} className="bg-ghanks-light rounded-2xl p-5 border border-gray-200 shadow-xs flex items-center gap-4">
                    <span className="w-8 h-8 rounded-xl bg-blue-50 text-ghanks-blue font-bold text-sm flex items-center justify-center shrink-0">
                      0{i + 1}
                    </span>
                    <span className="font-semibold text-ghanks-gray">{fmt}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Seção Complementar com ghanks-presencial-interna-v2.png */}
      <section className="py-20 md:py-28 bg-ghanks-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 aspect-[16/10]">
                <Image
                  src="/ghanks-presencial-interna-v2.png"
                  alt="Profissionais colaborando em workshop presencial com cartões coloridos, planejamento e orientação prática."
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 bg-blue-50 text-ghanks-blue rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                Experiência Prática
              </span>
              <h2 className="section-title text-ghanks-gray">
                Conhecimento que vira execução
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Cada treinamento é construído para transformar conhecimento em ação. A equipe participa, testa, debate cenários reais e sai com ferramentas práticas para aplicar no dia a dia.
              </p>
              <div className="pt-2">
                <span className="inline-block bg-white text-ghanks-gray border border-gray-200 rounded-2xl px-5 py-3 text-xs md:text-sm font-bold shadow-xs">
                  Workshops práticos • Conteúdo sob medida • Aplicação imediata
                </span>
              </div>
              <div className="pt-4">
                <a
                  href="#formulario"
                  className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-3.5 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-md shadow-blue-500/20 text-sm"
                >
                  Montar meu treinamento
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Temas Possíveis */}
      <section id="temas" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Conteúdo sob medida
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Temas mais solicitados
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEMAS.map((tema, i) => (
              <Reveal key={tema} delay={i * 60}>
                <div className="bg-ghanks-light rounded-2xl p-7 border border-gray-100 h-full shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-ghanks-red flex items-center justify-center font-bold text-sm mb-4">
                      {i + 1}
                    </div>
                    <h3 className="block-title text-ghanks-gray text-base md:text-lg">{tema}</h3>
                  </div>
                  <p className="mt-6 text-xs text-blue-600 font-semibold uppercase tracking-wider">
                    Personalizável ao seu negócio
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processo (4 etapas) */}
      <section className="py-20 md:py-28 bg-ghanks-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-gray">
              Como construímos
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Processo de criação do treinamento
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESSO.map((proc, i) => (
              <Reveal key={proc.passo} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="font-display text-4xl font-extrabold text-ghanks-red/40 block mb-4">
                      {proc.passo}
                    </span>
                    <h3 className="text-lg font-bold text-ghanks-gray mb-2">{proc.titulo}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{proc.descricao}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Solicitação de Treinamento */}
      <section id="formulario" className="py-20 md:py-28 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Orçamento e desenho da trilha
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Monte seu treinamento sob demanda
            </h2>
            <p className="mt-2 text-gray-600">
              Preencha os dados abaixo para receber uma proposta personalizada.
            </p>
          </Reveal>

          {enviado ? (
            <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-2">Solicitação enviada com sucesso!</h3>
              <p className="text-green-700">
                O WhatsApp foi aberto com os dados do seu treinamento. Nossa equipe entrará em contato em breve.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="mt-6 bg-ghanks-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold"
              >
                Enviar nova solicitação
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-ghanks-light rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Seu Nome *</label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                    placeholder="Ex: Carlos Silva"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Empresa *</label>
                  <input
                    type="text"
                    required
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                    placeholder="Ex: Empresa Ltda"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp / Telefone *</label>
                  <input
                    type="text"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail Profissional *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                    placeholder="voce@empresa.com.br"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tema de Interesse *</label>
                  <select
                    value={formData.tema}
                    onChange={(e) => setFormData({ ...formData, tema: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                  >
                    {TEMAS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Formato Desejado *</label>
                  <select
                    value={formData.formato}
                    onChange={(e) => setFormData({ ...formData, formato: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                  >
                    {FORMATOS.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Público do Treinamento</label>
                  <input
                    type="text"
                    value={formData.publico}
                    onChange={(e) => setFormData({ ...formData, publico: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                    placeholder="Ex: Equipe de vendas"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nº Participantes</label>
                  <input
                    type="text"
                    value={formData.participantes}
                    onChange={(e) => setFormData({ ...formData, participantes: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                    placeholder="Ex: 15 pessoas"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Cidade / Estado</label>
                  <input
                    type="text"
                    value={formData.cidade}
                    onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                    placeholder="Ex: Campinas - SP"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Local Preferido</label>
                  <select
                    value={formData.local}
                    onChange={(e) => setFormData({ ...formData, local: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                  >
                    <option value="Na empresa contratante (In company)">Na empresa contratante (In company)</option>
                    <option value="Na base da G Hanks (SP ou Limeira)">Na base da G Hanks (SP ou Limeira)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Data Aproximada</label>
                  <input
                    type="text"
                    value={formData.dataAprox}
                    onChange={(e) => setFormData({ ...formData, dataAprox: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                    placeholder="Ex: Próximo mês"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Objetivo Principal do Treinamento</label>
                <textarea
                  rows={3}
                  value={formData.objetivo}
                  onChange={(e) => setFormData({ ...formData, objetivo: e.target.value })}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                  placeholder="Descreva o que espera alcançar com esta capacitação..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ghanks-blue text-white py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25"
              >
                Solicitar Proposta via WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-ghanks-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Dúvidas frequentes
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Sobre os treinamentos presenciais
            </h2>
          </Reveal>

          <div className="space-y-6">
            {FAQ_ITENS.map((faq, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                  <h3 className="block-title text-ghanks-gray mb-3">{faq.pergunta}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{faq.resposta}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
