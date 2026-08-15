"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projetoghanks.vercel.app";
const WHATSAPP_NUMBER = "5511950809873";

const KEYWORDS_MARQUEE = [
  "EXPANSÃO NACIONAL",
  "MÉTODO H.A.N.K.S.",
  "SEO ORGÂNICO",
  "MARKETING DIGITAL B2B",
  "EXCLUSIVIDADE TERRITORIAL",
  "CRESCIMENTO ORIENTADO A DADOS",
];

const PILARES_MODELO = [
  {
    num: "01",
    titulo: "Marca e Posicionamento",
    desc: "Uma operação orientada a crescimento, presença digital e alta conversão para empresas de todos os portes.",
  },
  {
    num: "02",
    titulo: "Método Proprietário",
    desc: "Aplicação estruturada do Método H.A.N.K.S. para diagnóstico, posicionamento e sustentabilidade de ranking.",
  },
  {
    num: "03",
    titulo: "Mercado em Expansão",
    desc: "Empresas de todos os setores buscam alternativas sustentáveis aos anúncios pagos para gerar demanda.",
  },
  {
    num: "04",
    titulo: "Operação Orientada por Dados",
    desc: "Decisões estratégicas baseadas em indicadores claros de desempenho, intenção de busca e relevância local.",
  },
];

const PERFIS = [
  "Empresários que desejam atuar no mercado de marketing e crescimento digital.",
  "Profissionais comerciais com forte relacionamento com o empresariado local.",
  "Gestores de marketing, vendas, tecnologia ou negócios.",
  "Consultores e operadores com sólido perfil de liderança e execução.",
  "Investidores que aceitem participar ativamente da construção e gestão da operação.",
];

const ETAPAS_PROCESSO = [
  {
    passo: "01",
    titulo: "Manifestação de interesse",
    desc: "Preenchimento do formulário detalhado com perfil profissional e mercado de atuação.",
  },
  {
    passo: "02",
    titulo: "Análise de perfil e região",
    desc: "Avaliação criteriosa de objetivos, experiência, disponibilidade e praça pretendida.",
  },
  {
    passo: "03",
    titulo: "Conversa estratégica",
    desc: "Reunião executiva para alinhamento de premissas, responsabilidades e modelo.",
  },
  {
    passo: "04",
    titulo: "Apresentação da oportunidade",
    desc: "Envio de diretrizes comerciais e operacionais aprovadas para o ciclo atual.",
  },
  {
    passo: "05",
    titulo: "Decisão e onboarding",
    desc: "Formalização, documentação aplicable e início do programa de integração.",
  },
];

const DIFERENCIAIS = [
  "Marca com posicionamento executivo e premium no mercado B2B.",
  "Método H.A.N.K.S. como estrutura validada de diagnóstico e execução.",
  "Portfólio integrado de soluções (SEO, Tráfego, Redes Sociais, Treinamentos).",
  "Possibilidade de atuação regional com suporte contínuo da matriz.",
  "Processos comerciais e de marketing padronizáveis para rápida tração.",
  "Conteúdo, treinamento e acompanhamento contínuo da operação.",
];

const MERCADO_BLOCOS = [
  {
    titulo: "Demanda local",
    desc: "Empresas de todas as cidades precisam competir por atenção e clientes na própria praça, onde o SEO local define quem é escolhido.",
  },
  {
    titulo: "Demanda recorrente",
    desc: "Marketing digital e posicionamento orgânico exigem acompanhamento contínuo, otimização técnica e evolução de conteúdo.",
  },
  {
    titulo: "Demanda consultiva",
    desc: "Muitos negócios na sua região precisam de diagnóstico claro e orientação executiva, e não apenas de pacotes genéricos.",
  },
];

export default function FranquiasPage() {
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    cidadeEstado: "",
    linkedin: "",
    horario: "Comercial (Manhã ou Tarde)",
    cargo: "",
    empresa: "",
    segmentoExp: "",
    tempoExp: "5 a 10 anos",
    experienciaPratica: "",
    trajetoria: "",
    foiSocio: "Sim",
    operouFranquia: "Não",
    detalhesFranquia: "",
    porQueFranqueado: "",
    areaInteresse: "SEO Orgânico & Growth Hacking",
    atuaOperacao: "Sim (integral)",
    dedicacaoSemanal: "Mais de 40 horas",
    estruturaEquipe: "Começar com sócio/equipe inicial",
    objetivos3Anos: "",
    comoConheceu: "Site oficial da G Hanks",
    cidadePrincipal: "",
    outrasCidades: "",
    relacionamentoLocal: "",
    segmentosConhecidos: "",
    espacoFisico: "Em avaliação",
    conflitos: "Nenhum",
    capitalDisponivel: "[A DEFINIR — Faixa inicial aprovada]",
    reservaGiro: "Sim",
    origemRecursos: "Recursos próprios e estruturação de sócios",
    investimentoEstrutura: "Sim",
    disponibilidadeTreinamento: "Sim",
    prazoInicio: "De 31 a 90 dias",
    quemDecide: "Decisão individual / com sócio principal",
    melhorCanal: "WhatsApp",
    observacoes: "",
    concordouPrivacidade: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.concordouPrivacidade) {
      alert("Por favor, concorde com o Aviso de Privacidade para prosseguir.");
      return;
    }
    const texto = `*MANIFESTAÇÃO DE INTERESSE — FRANQUIA G HANKS*\n\n*1. Dados Pessoais:*\nNome: ${formData.nome}\nE-mail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nLocal: ${formData.cidadeEstado}\n\n*2. Perfil Profissional:*\nCargo: ${formData.cargo}\nExperiência: ${formData.tempoExp} em ${formData.segmentoExp}\n\n*3. Região de Interesse:*\nCidade Principal: ${formData.cidadePrincipal}\n\n*4. Disponibilidade:*\nInício: ${formData.prazoInicio}\nDedicação: ${formData.dedicacaoSemanal}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    setEnviado(true);
    window.open(url, "_blank");
  };

  return (
    <PageShell>
      {/* ==================================================================
          Hero Principal — banner de fundo corporativo
          ================================================================== */}
      <section className="relative bg-ghanks-ink overflow-hidden -mt-24 pt-32 md:pt-42 pb-20 md:pb-28">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/banner-franquias.png"
            alt="Mapa estilizado do Brasil com pontos de localização coloridos conectados por uma rede de expansão nacional."
            fill
            priority
            quality={85}
            className="object-cover object-[70%_center] md:object-[right_center]"
          />
          {/* Gradiente escuro lateral para garantir legibilidade à esquerda */}
          <div className="absolute inset-0 bg-gradient-to-r from-ghanks-ink via-ghanks-ink/90 to-ghanks-ink/40 md:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Início", href: "/" }, { label: "Seja um Franqueado" }]}
            tone="dark"
          />

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-white/90 mb-6">
              <span className="w-2 h-2 rounded-full bg-ghanks-blue" aria-hidden="true" />
              EXPANSÃO NACIONAL G HANKS
            </span>

            <h1 className="display-title text-white">
              Leve o Método <span className="text-gradient-brand">H.A.N.K.S.</span> para o seu mercado
            </h1>
            <p className="mt-4 font-display text-xl sm:text-2xl font-medium text-white/90">
              Construa um negócio de crescimento digital na sua região
            </p>

            <p className="mt-6 lead text-white/80 max-w-2xl">
              A G Hanks está ampliando sua presença no Brasil e busca empresários, gestores e operadores com perfil estratégico para participar do processo de seleção de novos franqueados.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#formulario"
                className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 text-base"
              >
                Tenho interesse em ser franqueado
              </a>
              <a
                href="#modelo"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm text-base"
              >
                Conhecer o modelo G Hanks
              </a>
            </div>

            <p className="mt-6 text-xs text-white/60 tracking-wider uppercase font-medium">
              O envio do formulário representa uma manifestação de interesse e não garante aprovação, reserva territorial ou concessão de franquia.
            </p>
          </div>
        </div>

        {/* Faixa de termos na base */}
        <div className="relative z-10 mt-16 md:mt-24 border-t border-white/10 py-5">
          <Marquee items={KEYWORDS_MARQUEE} tone="dark" />
        </div>
      </section>

      {/* ==================================================================
          Bloco de Posicionamento (O Modelo)
          ================================================================== */}
      <section id="modelo" className="py-20 md:py-28 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Fundamentos da Oportunidade
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Não é apenas uma franquia. É um sistema de crescimento.
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-base">
              O franqueado fará parte de uma operação baseada em marketing digital, SEO orgânico, gestão de tráfego, inteligência comercial e Método H.A.N.K.S., conforme o modelo final aprovado pela empresa.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILARES_MODELO.map((p, i) => (
              <Reveal key={p.num} delay={i * 80}>
                <div className="bg-ghanks-light rounded-3xl p-7 border border-gray-200 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="font-display text-3xl font-bold text-ghanks-blue block mb-4">
                      {p.num}
                    </span>
                    <h3 className="block-title text-ghanks-gray text-lg mb-2">{p.titulo}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================
          Para Quem é Esta Oportunidade
          ================================================================== */}
      <section className="py-20 md:py-28 bg-ghanks-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5 space-y-6">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
                Perfil Executivo
              </span>
              <h2 className="section-title text-ghanks-gray">
                Estamos procurando operadores, não apenas investidores.
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                O processo seletivo é adequado para pessoas com visão empresarial, capacidade de relacionamento, disciplina comercial e interesse em construir uma operação local ou regional sólida.
              </p>
              <p className="text-xs text-gray-500 italic">
                Experiência prévia em marketing pode ser um diferencial, mas não substitui capacidade de gestão, compromisso e aderência ao método.
              </p>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-7 space-y-3">
              {PERFIS.map((perfil, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs flex items-center gap-4">
                  <span className="w-8 h-8 rounded-xl bg-blue-50 text-ghanks-blue font-bold text-sm flex items-center justify-center shrink-0">
                    0{i + 1}
                  </span>
                  <span className="text-sm md:text-base font-medium text-ghanks-gray">{perfil}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Como Funciona o Processo de Seleção (Timeline)
          ================================================================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Etapas Rigorosas
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Como funciona o processo de seleção
            </h2>
            <p className="mt-4 text-gray-600">
              Cada candidatura é analisada individualmente com total critério e transparência.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {ETAPAS_PROCESSO.map((etp, i) => (
              <Reveal key={etp.passo} delay={i * 80}>
                <div className="bg-ghanks-light rounded-3xl p-6 border border-gray-200 h-full flex flex-col justify-between shadow-xs">
                  <div>
                    <span className="font-display text-3xl font-bold text-ghanks-blue block mb-3">
                      {etp.passo}
                    </span>
                    <h3 className="font-bold text-ghanks-gray text-base mb-2">{etp.titulo}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{etp.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm text-gray-500 font-medium bg-blue-50 inline-block px-6 py-3 rounded-full border border-blue-100">
              Cada candidatura será analisada individualmente. O envio do formulário não representa aprovação automática.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Diferenciais do Sistema G Hanks
          ================================================================== */}
      <section className="py-20 md:py-28 bg-ghanks-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Vantagens Competitivas
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Diferenciais do sistema G Hanks
            </h2>
            <p className="mt-4 text-gray-600">
              Estrutura corporativa e metodológica pronta para impulsionar sua unidade regional.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFERENCIAIS.map((dif, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm h-full flex items-start gap-4">
                  <span className="w-8 h-8 rounded-xl bg-green-50 text-ghanks-green font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm md:text-base font-medium text-ghanks-gray">{dif}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest">
              Detalhes do modelo: informações apresentadas após a análise inicial de perfil e região. [A DEFINIR]
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Potencial de Mercado
          ================================================================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Oportunidade de Mercado
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Toda empresa precisa ser encontrada, escolhida e lembrada
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-base">
              Empresas de diferentes setores buscam presença orgânica, geração de demanda, gestão de campanhas, autoridade digital e aquisição consistente de clientes.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {MERCADO_BLOCOS.map((m, i) => (
              <Reveal key={m.titulo} delay={i * 80}>
                <div className="bg-ghanks-light rounded-3xl p-8 border border-gray-200 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-ghanks-blue font-bold text-sm flex items-center justify-center mb-5">
                      0{i + 1}
                    </span>
                    <h3 className="block-title text-ghanks-gray mb-3">{m.titulo}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================
          Onde Queremos Chegar (Expansão Nacional & Campos Editáveis)
          ================================================================== */}
      <section className="py-20 md:py-28 bg-ghanks-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-yellow">
                Crescimento Consistente
              </span>
              <h2 className="section-title text-white">
                Onde queremos chegar no Brasil
              </h2>
              <p className="text-white/80 leading-relaxed text-base md:text-lg">
                Estamos avaliando novos mercados, regiões e perfis de operadores para ampliar a presença da G Hanks no Brasil com consistência, critério e qualidade de entrega.
              </p>
              <div className="space-y-3 pt-4 border-t border-white/10 text-sm">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-white/65">Regiões prioritárias:</span>
                  <span className="font-semibold text-ghanks-yellow">[A DEFINIR]</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-white/65">Modelo territorial:</span>
                  <span className="font-semibold text-ghanks-yellow">[A DEFINIR]</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-white/65">Cidades abertas para análise:</span>
                  <span className="font-semibold text-ghanks-yellow">[A DEFINIR]</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6">
              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/10 text-white space-y-4">
                <h3 className="block-title text-white">Critérios de Avaliação</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Nossa expansão não segue metas vazias de volume. Priorizamos praças com forte tecido empresarial, demanda B2B ativa e operadores com capacidade de construir autoridade de longo prazo.
                </p>
                <div className="pt-4">
                  <a
                    href="#formulario"
                    className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-7 py-3.5 rounded-full font-semibold hover:bg-blue-600 transition-all text-sm shadow-md"
                  >
                    Manifestar interesse na minha praça
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================================
          Formulário de Interesse e Pré-Qualificação (Blocos A a F)
          ================================================================== */}
      <section id="formulario" className="py-20 md:py-28 bg-ghanks-light scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-ghanks-blue">
              Processo Seletivo
            </span>
            <h2 className="section-title mt-3 text-ghanks-gray">
              Participe do nosso processo de escolha de novos franqueados
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Queremos conhecer sua experiência, sua região e sua visão de negócio. Preencha o formulário abaixo com informações verdadeiras.
            </p>
          </Reveal>

          {enviado ? (
            <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center shadow-sm">
              <h3 className="text-2xl font-bold text-green-800 mb-3">Manifestação enviada com sucesso!</h3>
              <p className="text-green-700 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
                Recebemos suas informações. O WhatsApp foi aberto com os dados preenchidos. Nossa equipe fará uma análise inicial e entrará em contato caso seu perfil e sua região estejam aderentes ao próximo ciclo de expansão.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="mt-8 bg-ghanks-blue text-white px-7 py-3 rounded-full text-sm font-semibold"
              >
                Enviar nova manifestação
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm space-y-10">
              
              {/* Bloco A — Dados Pessoais */}
              <div>
                <h3 className="text-lg font-bold text-ghanks-gray pb-3 border-b border-gray-100 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-ghanks-blue text-xs flex items-center justify-center font-bold">A</span>
                  Dados Pessoais
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">E-mail Profissional *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                      placeholder="voce@empresa.com.br"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">WhatsApp com DDD *</label>
                    <input
                      type="text"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Cidade e Estado de Atuação *</label>
                    <input
                      type="text"
                      required
                      value={formData.cidadeEstado}
                      onChange={(e) => setFormData({ ...formData, cidadeEstado: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                      placeholder="Ex: Campinas - SP"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">LinkedIn ou Perfil Profissional</label>
                    <input
                      type="text"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                      placeholder="linkedin.com/in/seu-perfil"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Melhor Horário para Contato</label>
                    <select
                      value={formData.horario}
                      onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                    >
                      <option value="Manhã (09h - 12h)">Manhã (09h - 12h)</option>
                      <option value="Tarde (13h - 18h)">Tarde (13h - 18h)</option>
                      <option value="Comercial (Manhã ou Tarde)">Comercial (Manhã ou Tarde)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Bloco B — Dados Profissionais */}
              <div>
                <h3 className="text-lg font-bold text-ghanks-gray pb-3 border-b border-gray-100 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-ghanks-blue text-xs flex items-center justify-center font-bold">B</span>
                  Dados Profissionais e Trajetória
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Cargo ou Ocupação Atual *</label>
                    <input
                      type="text"
                      required
                      value={formData.cargo}
                      onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                      placeholder="Ex: Diretor Comercial / Sócio"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Segmento de Experiência *</label>
                    <input
                      type="text"
                      required
                      value={formData.segmentoExp}
                      onChange={(e) => setFormData({ ...formData, segmentoExp: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                      placeholder="Ex: Tecnologia, Vendas B2B, Marketing"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Tempo de Experiência Profissional</label>
                    <select
                      value={formData.tempoExp}
                      onChange={(e) => setFormData({ ...formData, tempoExp: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                    >
                      <option value="Menos de 3 anos">Menos de 3 anos</option>
                      <option value="3 a 5 anos">3 a 5 anos</option>
                      <option value="5 a 10 anos">5 a 10 anos</option>
                      <option value="Mais de 10 anos">Mais de 10 anos</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Já foi sócio ou gestor de uma empresa? *</label>
                    <select
                      value={formData.foiSocio}
                      onChange={(e) => setFormData({ ...formData, foiSocio: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                    >
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Descrição Breve da Trajetória Profissional *</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.trajetoria}
                      onChange={(e) => setFormData({ ...formData, trajetoria: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue resize-none"
                      placeholder="Resuma suas principais realizações em gestão, vendas ou liderança..."
                    />
                  </div>
                </div>
              </div>

              {/* Bloco C — Interesse na G Hanks */}
              <div>
                <h3 className="text-lg font-bold text-ghanks-gray pb-3 border-b border-gray-100 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-ghanks-blue text-xs flex items-center justify-center font-bold">C</span>
                  Interesse na Oportunidade
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Por que deseja ser franqueado G Hanks? *</label>
                    <textarea
                      rows={3}
                      required
                      value={formData.porQueFranqueado}
                      onChange={(e) => setFormData({ ...formData, porQueFranqueado: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue resize-none"
                      placeholder="O que atrai você no modelo de negócio da G Hanks?"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Atuação na Operação *</label>
                      <select
                        value={formData.atuaOperacao}
                        onChange={(e) => setFormData({ ...formData, atuaOperacao: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                      >
                        <option value="Sim (integral)">Sim (atuação integral no dia a dia)</option>
                        <option value="Parcialmente">Parcialmente (gestão estratégica com equipe)</option>
                        <option value="Não (investidor cotista)">Não (apenas investidor)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Dedicação Semanal Estimada</label>
                      <select
                        value={formData.dedicacaoSemanal}
                        onChange={(e) => setFormData({ ...formData, dedicacaoSemanal: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                      >
                        <option value="Mais de 40 horas">Mais de 40 horas (Dedicada)</option>
                        <option value="20 a 40 horas">20 a 40 horas</option>
                        <option value="Menos de 20 horas">Menos de 20 horas</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bloco D — Região e Mercado */}
              <div>
                <h3 className="text-lg font-bold text-ghanks-gray pb-3 border-b border-gray-100 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-ghanks-blue text-xs flex items-center justify-center font-bold">D</span>
                  Região e Mercado Local
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Cidade Principal de Atuação *</label>
                    <input
                      type="text"
                      required
                      value={formData.cidadePrincipal}
                      onChange={(e) => setFormData({ ...formData, cidadePrincipal: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                      placeholder="Ex: São José dos Campos - SP"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Possui relacionamento com empresários locais? *</label>
                    <textarea
                      rows={2}
                      required
                      value={formData.relacionamentoLocal}
                      onChange={(e) => setFormData({ ...formData, relacionamentoLocal: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue resize-none"
                      placeholder="Descreva seu network na região..."
                    />
                  </div>
                </div>
              </div>

              {/* Bloco E — Capacidade de Investimento e Estrutura */}
              <div>
                <h3 className="text-lg font-bold text-ghanks-gray pb-3 border-b border-gray-100 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-ghanks-blue text-xs flex items-center justify-center font-bold">E</span>
                  Capacidade de Investimento e Estrutura
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Faixa de Capital Disponível para o Projeto</label>
                    <select
                      value={formData.capitalDisponivel}
                      onChange={(e) => setFormData({ ...formData, capitalDisponivel: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                    >
                      <option value="[A DEFINIR — Faixa inicial aprovada]">[A DEFINIR — Faixa inicial aprovada]</option>
                      <option value="Compatível com o modelo padrão">Compatível com o modelo padrão de franquia</option>
                      <option value="Possui capital próprio e reservas">Possui capital próprio e reservas estruturadas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Disponibilidade para Treinamentos *</label>
                    <select
                      value={formData.disponibilidadeTreinamento}
                      onChange={(e) => setFormData({ ...formData, disponibilidadeTreinamento: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                    >
                      <option value="Sim">Sim, total disponibilidade</option>
                      <option value="Parcial">Parcial (necessita planejamento)</option>
                    </select>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-400 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200">
                  Os dados financeiros são utilizados apenas para avaliar aderência ao modelo e não representam aprovação, oferta de crédito ou garantia de retorno.
                </p>
              </div>

              {/* Bloco F — Disponibilidade e Decisão */}
              <div>
                <h3 className="text-lg font-bold text-ghanks-gray pb-3 border-b border-gray-100 mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-ghanks-blue text-xs flex items-center justify-center font-bold">F</span>
                  Disponibilidade e Cronograma
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Em quanto tempo gostaria de iniciar? *</label>
                    <select
                      value={formData.prazoInicio}
                      onChange={(e) => setFormData({ ...formData, prazoInicio: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                    >
                      <option value="Próximos 30 dias">Próximos 30 dias</option>
                      <option value="De 31 a 90 dias">De 31 a 90 dias</option>
                      <option value="De 3 a 6 meses">De 3 a 6 meses</option>
                      <option value="Mais de 6 meses / Pesquisando">Mais de 6 meses / Pesquisando</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Quem participa da decisão?</label>
                    <input
                      type="text"
                      value={formData.quemDecide}
                      onChange={(e) => setFormData({ ...formData, quemDecide: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue"
                      placeholder="Ex: Decisão individual ou com sócios"
                    />
                  </div>
                </div>
              </div>

              {/* Consentimento e Privacidade */}
              <div className="pt-4 border-t border-gray-100">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.concordouPrivacidade}
                    onChange={(e) => setFormData({ ...formData, concordouPrivacidade: e.target.checked })}
                    className="mt-1 w-4 h-4 text-ghanks-blue border-gray-300 rounded focus:ring-ghanks-blue"
                  />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    Li e concordo com o Aviso de Privacidade e autorizo a G Hanks a utilizar os dados enviados para analisar minha manifestação de interesse e entrar em contato sobre o processo de seleção de franqueados. (* Obrigatório)
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-ghanks-blue text-white py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 text-base"
              >
                Enviar minha manifestação de interesse
              </button>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}
