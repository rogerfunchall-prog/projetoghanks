"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "5511950809873";

export default function FranquiasForm() {
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
    capitalDisponivel: "Compatível com o modelo padrão",
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
    <div id="formulario" className="scroll-mt-28">
      {enviado ? (
        <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-green-800 mb-3">Manifestação enviada com sucesso!</h3>
          <p className="text-green-700 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            Recebemos suas informações. O WhatsApp foi aberto com os dados preenchidos. Nossa equipe fará uma análise inicial e entrará em contato caso seu perfil e sua região estejam aderentes ao próximo ciclo de expansão.
          </p>
          <button
            onClick={() => setEnviado(false)}
            className="mt-8 bg-ghanks-blue text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
          >
            Enviar nova manifestação
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm space-y-10">
          
          {/* Bloco A — Dados Pessoais */}
          <div>
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100 mb-6">
              <span className="w-7 h-7 rounded-full bg-blue-50 text-ghanks-blue text-xs flex items-center justify-center font-bold">A</span>
              <h3 className="text-lg font-bold text-ghanks-gray">Dados Pessoais</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Nome Completo *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">E-mail Profissional *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  placeholder="voce@empresa.com.br"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">WhatsApp com DDD *</label>
                <input
                  type="text"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label htmlFor="cidadeEstado" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Cidade e Estado de Atuação *</label>
                <input
                  type="text"
                  id="cidadeEstado"
                  name="cidadeEstado"
                  required
                  value={formData.cidadeEstado}
                  onChange={(e) => setFormData({ ...formData, cidadeEstado: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  placeholder="Ex: Campinas - SP"
                />
              </div>
              <div>
                <label htmlFor="linkedin" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">LinkedIn ou Perfil Profissional</label>
                <input
                  type="text"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  placeholder="linkedin.com/in/seu-perfil"
                />
              </div>
              <div>
                <label htmlFor="horario" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Melhor Horário para Contato</label>
                <select
                  id="horario"
                  name="horario"
                  value={formData.horario}
                  onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
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
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100 mb-6">
              <span className="w-7 h-7 rounded-full bg-blue-50 text-ghanks-blue text-xs flex items-center justify-center font-bold">B</span>
              <h3 className="text-lg font-bold text-ghanks-gray">Dados Profissionais e Trajetória</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cargo" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Cargo ou Ocupação Atual *</label>
                <input
                  type="text"
                  id="cargo"
                  name="cargo"
                  required
                  value={formData.cargo}
                  onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  placeholder="Ex: Diretor Comercial / Sócio"
                />
              </div>
              <div>
                <label htmlFor="segmentoExp" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Segmento de Experiência *</label>
                <input
                  type="text"
                  id="segmentoExp"
                  name="segmentoExp"
                  required
                  value={formData.segmentoExp}
                  onChange={(e) => setFormData({ ...formData, segmentoExp: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  placeholder="Ex: Tecnologia, Vendas B2B, Marketing"
                />
              </div>
              <div>
                <label htmlFor="tempoExp" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Tempo de Experiência Profissional</label>
                <select
                  id="tempoExp"
                  name="tempoExp"
                  value={formData.tempoExp}
                  onChange={(e) => setFormData({ ...formData, tempoExp: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Menos de 3 anos">Menos de 3 anos</option>
                  <option value="3 a 5 anos">3 a 5 anos</option>
                  <option value="5 a 10 anos">5 a 10 anos</option>
                  <option value="Mais de 10 anos">Mais de 10 anos</option>
                </select>
              </div>
              <div>
                <label htmlFor="foiSocio" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Já foi sócio ou gestor de uma empresa? *</label>
                <select
                  id="foiSocio"
                  name="foiSocio"
                  value={formData.foiSocio}
                  onChange={(e) => setFormData({ ...formData, foiSocio: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="trajetoria" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Descrição Breve da Trajetória Profissional *</label>
                <textarea
                  id="trajetoria"
                  name="trajetoria"
                  rows={3}
                  required
                  value={formData.trajetoria}
                  onChange={(e) => setFormData({ ...formData, trajetoria: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue resize-none text-ghanks-gray"
                  placeholder="Resuma suas principais realizações em gestão, vendas ou liderança..."
                />
              </div>
            </div>
          </div>

          {/* Bloco C — Interesse na G Hanks */}
          <div>
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100 mb-6">
              <span className="w-7 h-7 rounded-full bg-blue-50 text-ghanks-blue text-xs flex items-center justify-center font-bold">C</span>
              <h3 className="text-lg font-bold text-ghanks-gray">Interesse na Oportunidade</h3>
            </div>
            <div className="space-y-6">
              <div>
                <label htmlFor="porQueFranqueado" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Por que deseja ser franqueado G Hanks? *</label>
                <textarea
                  id="porQueFranqueado"
                  name="porQueFranqueado"
                  rows={3}
                  required
                  value={formData.porQueFranqueado}
                  onChange={(e) => setFormData({ ...formData, porQueFranqueado: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue resize-none text-ghanks-gray"
                  placeholder="O que atrai você no modelo de negócio da G Hanks?"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="atuaOperacao" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Atuação na Operação *</label>
                  <select
                    id="atuaOperacao"
                    name="atuaOperacao"
                    value={formData.atuaOperacao}
                    onChange={(e) => setFormData({ ...formData, atuaOperacao: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  >
                    <option value="Sim (integral)">Sim (atuação integral no dia a dia)</option>
                    <option value="Parcialmente">Parcialmente (gestão estratégica com equipe)</option>
                    <option value="Não (investidor cotista)">Não (apenas investidor)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="dedicacaoSemanal" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Dedicação Semanal Estimada</label>
                  <select
                    id="dedicacaoSemanal"
                    name="dedicacaoSemanal"
                    value={formData.dedicacaoSemanal}
                    onChange={(e) => setFormData({ ...formData, dedicacaoSemanal: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
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
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100 mb-6">
              <span className="w-7 h-7 rounded-full bg-blue-50 text-ghanks-blue text-xs flex items-center justify-center font-bold">D</span>
              <h3 className="text-lg font-bold text-ghanks-gray">Região e Mercado Local</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cidadePrincipal" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Cidade Principal de Atuação *</label>
                <input
                  type="text"
                  id="cidadePrincipal"
                  name="cidadePrincipal"
                  required
                  value={formData.cidadePrincipal}
                  onChange={(e) => setFormData({ ...formData, cidadePrincipal: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  placeholder="Ex: São José dos Campos - SP"
                />
              </div>
              <div>
                <label htmlFor="relacionamentoLocal" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Possui relacionamento com empresários locais? *</label>
                <textarea
                  id="relacionamentoLocal"
                  name="relacionamentoLocal"
                  rows={2}
                  required
                  value={formData.relacionamentoLocal}
                  onChange={(e) => setFormData({ ...formData, relacionamentoLocal: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue resize-none text-ghanks-gray"
                  placeholder="Descreva seu network na região..."
                />
              </div>
            </div>
          </div>

          {/* Bloco E — Capacidade de Investimento e Estrutura */}
          <div>
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100 mb-6">
              <span className="w-7 h-7 rounded-full bg-blue-50 text-ghanks-blue text-xs flex items-center justify-center font-bold">E</span>
              <h3 className="text-lg font-bold text-ghanks-gray">Capacidade de Investimento e Estrutura</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="capitalDisponivel" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Faixa de Capital Disponível para o Projeto</label>
                <select
                  id="capitalDisponivel"
                  name="capitalDisponivel"
                  value={formData.capitalDisponivel}
                  onChange={(e) => setFormData({ ...formData, capitalDisponivel: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Compatível com o modelo padrão">Compatível com o modelo padrão de franquia</option>
                  <option value="Possui capital próprio e reservas">Possui capital próprio e reservas estruturadas</option>
                </select>
              </div>
              <div>
                <label htmlFor="disponibilidadeTreinamento" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Disponibilidade para Treinamentos *</label>
                <select
                  id="disponibilidadeTreinamento"
                  name="disponibilidadeTreinamento"
                  value={formData.disponibilidadeTreinamento}
                  onChange={(e) => setFormData({ ...formData, disponibilidadeTreinamento: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Sim">Sim, total disponibilidade</option>
                  <option value="Parcial">Parcial (necessita planejamento)</option>
                </select>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200">
              Os dados financeiros são utilizados apenas para avaliar aderência ao modelo e não representam aprovação, oferta de crédito ou garantia de retorno.
            </p>
          </div>

          {/* Bloco F — Disponibilidade e Decisão */}
          <div>
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100 mb-6">
              <span className="w-7 h-7 rounded-full bg-blue-50 text-ghanks-blue text-xs flex items-center justify-center font-bold">F</span>
              <h3 className="text-lg font-bold text-ghanks-gray">Disponibilidade e Cronograma</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="prazoInicio" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Em quanto tempo gostaria de iniciar? *</label>
                <select
                  id="prazoInicio"
                  name="prazoInicio"
                  value={formData.prazoInicio}
                  onChange={(e) => setFormData({ ...formData, prazoInicio: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Próximos 30 dias">Próximos 30 dias</option>
                  <option value="De 31 a 90 dias">De 31 a 90 dias</option>
                  <option value="De 3 a 6 meses">De 3 a 6 meses</option>
                  <option value="Mais de 6 meses / Pesquisando">Mais de 6 meses / Pesquisando</option>
                </select>
              </div>
              <div>
                <label htmlFor="quemDecide" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Quem participa da decisão?</label>
                <input
                  type="text"
                  id="quemDecide"
                  name="quemDecide"
                  value={formData.quemDecide}
                  onChange={(e) => setFormData({ ...formData, quemDecide: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
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
  );
}
