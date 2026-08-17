"use client";

import { useState } from "react";

const SEGMENTOS_OPCOES = [
  "Indústria / Manufatura",
  "Saúde / Clínicas / Odontologia",
  "Imobiliário / Construtoras",
  "Serviços B2B / Consultoria",
  "E-commerce / Varejo Online",
  "Educação / Cursos",
  "Advocacia / Jurídico",
  "Tecnologia / Software",
  "Outro",
];

const OBJETIVOS_OPCOES = [
  "Aparecer melhor no Google",
  "Ser encontrado por clientes da minha cidade ou região",
  "Aumentar contatos e solicitações de orçamento",
  "Atrair clientes para uma unidade física",
  "Melhorar a autoridade e repetição digital da marca",
  "Ser mais bem compreendido em buscas e respostas com inteligência artificial",
  "Reduzir dependência de mídia paga",
  "Entrar em novas cidades ou regiões",
  "Estruturar uma estratégia de conteúdo e SEO",
  "Ainda não sei qual é o principal problema",
];

export default function DiagnosticoForm() {
  const [etapa, setEtapa] = useState(1);
  const totalEtapas = 5;
  const [enviando, setEnviando] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState("");

  const [formData, setFormData] = useState({
    // Honeypot
    hp_website: "",
    // Etapa 1
    nome: "",
    empresa: "",
    email: "",
    whatsapp: "",
    cargo: "Proprietário / Sócio",
    horario: "Comercial (Manhã ou Tarde)",
    // Etapa 2
    segmento: SEGMENTOS_OPCOES[0],
    descricao: "",
    site: "",
    instagram: "",
    cidadeEstado: "",
    regioesAtendidas: "",
    modeloAtuacao: "Regional",
    tempoOperacao: "Mais de 3 anos",
    // Etapa 3
    objetivos: [] as string[],
    resultadoDesejado: "",
    prazoInicio: "Próximos 30 dias",
    avaliacaoAtual: "Regular / Precisa melhorar",
    // Etapa 4
    investeSeo: "Não",
    investeAds: "Sim",
    equipeMarketing: "Parceiro externo / Agência",
    jaFezSeo: "Não",
    produtosPrioridade: "",
    concorrentes: "",
    termosBusca: "",
    conheceIa: "Não sei",
    // Etapa 5
    faixaInvestimento: "Ainda não definido",
    quemDecide: "",
    urgencia: "",
    comoConheceu: "Busca no Google",
    concordouPrivacidade: false,
  });

  const handleCheckboxObjetivo = (obj: string) => {
    setFormData((prev) => {
      const exists = prev.objetivos.includes(obj);
      if (exists) {
        return { ...prev, objetivos: prev.objetivos.filter((o) => o !== obj) };
      } else {
        if (prev.objetivos.length >= 3) {
          alert("Você pode selecionar no máximo 3 objetivos principais.");
          return prev;
        }
        return { ...prev, objetivos: [...prev.objetivos, obj] };
      }
    });
  };

  const validarEtapaAtual = () => {
    setErro("");
    if (etapa === 1) {
      if (!formData.nome.trim() || !formData.empresa.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
        setErro("Por favor, preencha todos os campos obrigatórios da Etapa 1.");
        return false;
      }
    }
    if (etapa === 2) {
      if (!formData.descricao.trim() || !formData.cidadeEstado.trim()) {
        setErro("Por favor, preencha a descrição do negócio e a cidade/estado da sede.");
        return false;
      }
    }
    if (etapa === 3) {
      if (formData.objetivos.length === 0) {
        setErro("Selecione pelo menos um objetivo principal de crescimento.");
        return false;
      }
      if (!formData.resultadoDesejado.trim()) {
        setErro("Por favor, descreva o principal resultado que gostaria de alcançar.");
        return false;
      }
    }
    if (etapa === 4) {
      if (!formData.produtosPrioridade.trim()) {
        setErro("Informe quais produtos ou serviços são prioridade.");
        return false;
      }
    }
    if (etapa === 5) {
      if (!formData.concordouPrivacidade) {
        setErro("Você deve concordar com o Aviso de Privacidade para enviar a solicitação.");
        return false;
      }
    }
    return true;
  };

  const avancar = () => {
    if (validarEtapaAtual()) {
      setEtapa((prev) => Math.min(prev + 1, totalEtapas));
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  const voltar = () => {
    setErro("");
    setEtapa((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validarEtapaAtual()) return;

    setEnviando(true);
    setErro("");

    try {
      const res = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSucesso(true);
      } else {
        setErro(data.error || "Não foi possível concluir o envio agora. Verifique os campos destacados e tente novamente.");
      }
    } catch (err) {
      console.error(err);
      setErro("Não foi possível concluir o envio agora. Verifique sua conexão e tente novamente.");
    } finally {
      setEnviando(false);
    }
  };

  if (sucesso) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-green-100 text-ghanks-green rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-ghanks-gray mb-4">Solicitação recebida com sucesso!</h3>
        <p className="text-gray-600 leading-relaxed text-base mb-6">
          Solicitação recebida. Obrigado pelas informações. Nossa equipe fará uma análise inicial do contexto informado e entrará em contato pelos canais selecionados para apresentar os próximos passos, caso haja aderência ao diagnóstico.
        </p>
        <p className="text-xs text-gray-400 bg-gray-50 p-4 rounded-xl border border-gray-200 mb-8 leading-relaxed">
          O diagnóstico gratuito é uma análise inicial e não substitui uma auditoria técnica completa. Para preservar a qualidade das análises, a G Hanks poderá entrar em contato antes de iniciar a avaliação.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center bg-ghanks-blue text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-600 transition-all text-sm"
        >
          Voltar para a página inicial
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm max-w-3xl mx-auto">
      {/* Indicador de progresso corrigido (sem concatenação) */}
      <div className="mb-8 pb-6 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs font-bold uppercase tracking-wider text-ghanks-blue mb-2 gap-1">
          <span>Etapa {etapa} de {totalEtapas}</span>
          <span className="text-gray-500">{Math.round((etapa / totalEtapas) * 100)}% concluído</span>
        </div>
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-ghanks-blue h-full transition-all duration-300 rounded-full"
            style={{ width: `${(etapa / totalEtapas) * 100}%` }}
          />
        </div>
      </div>

      {erro && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm font-medium">
          {erro}
        </div>
      )}

      <form onSubmit={handleSubmit} method="POST" action="/api/diagnostico" className="space-y-6">
        {/* Honeypot invisível */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="hp_website"
            value={formData.hp_website}
            onChange={(e) => setFormData({ ...formData, hp_website: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* ETAPA 1 */}
        {etapa === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ghanks-blue">Etapa 1 de 5</span>
              <h3 className="text-xl md:text-2xl font-bold text-ghanks-gray mt-1">Vamos começar pela sua empresa</h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Dados essenciais para que nossa equipe identifique seu negócio.</p>
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
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Empresa ou Marca *</label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  required
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  placeholder="Nome do seu negócio"
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
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
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
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label htmlFor="cargo" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Cargo ou Função *</label>
                <select
                  id="cargo"
                  name="cargo"
                  value={formData.cargo}
                  onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Proprietário / Sócio">Proprietário / Sócio</option>
                  <option value="Diretor">Diretor</option>
                  <option value="Gestor">Gestor</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Comercial / Vendas">Comercial / Vendas</option>
                  <option value="Profissional Autônomo">Profissional Autônomo</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="horario" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Melhor Horário para Contato</label>
                <select
                  id="horario"
                  name="horario"
                  value={formData.horario}
                  onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Comercial (Manhã ou Tarde)">Comercial (Manhã ou Tarde)</option>
                  <option value="Manhã (09h - 12h)">Manhã (09h - 12h)</option>
                  <option value="Tarde (13h - 18h)">Tarde (13h - 18h)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* ETAPA 2 */}
        {etapa === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ghanks-blue">Etapa 2 de 5</span>
              <h3 className="text-xl md:text-2xl font-bold text-ghanks-gray mt-1">Conheça o contexto do seu negócio</h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Informações sobre praça, atuação e operação.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="segmento" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Segmento Principal *</label>
                <select
                  id="segmento"
                  name="segmento"
                  value={formData.segmento}
                  onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  {SEGMENTOS_OPCOES.map((seg) => (
                    <option key={seg} value={seg}>{seg}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="cidadeEstado" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Cidade e Estado da Sede *</label>
                <input
                  type="text"
                  id="cidadeEstado"
                  name="cidadeEstado"
                  required
                  value={formData.cidadeEstado}
                  onChange={(e) => setFormData({ ...formData, cidadeEstado: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  placeholder="Ex: Limeira - SP"
                />
              </div>
              <div>
                <label htmlFor="site" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Site ou Domínio Principal *</label>
                <input
                  type="text"
                  id="site"
                  name="site"
                  required
                  value={formData.site}
                  onChange={(e) => setFormData({ ...formData, site: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  placeholder="Ex: seudominio.com.br ou 'Ainda não possuo site'"
                />
              </div>
              <div>
                <label htmlFor="instagram" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Perfil do Instagram (ou rede principal)</label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  placeholder="@suaempresa"
                />
              </div>
              <div>
                <label htmlFor="modeloAtuacao" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Modelo de Atuação</label>
                <select
                  id="modeloAtuacao"
                  name="modeloAtuacao"
                  value={formData.modeloAtuacao}
                  onChange={(e) => setFormData({ ...formData, modeloAtuacao: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Local">Local (foco na cidade)</option>
                  <option value="Regional">Regional (estado / microregião)</option>
                  <option value="Nacional">Nacional (todo o Brasil)</option>
                  <option value="E-commerce">E-commerce / Loja Virtual</option>
                  <option value="Atendimento Remoto">Atendimento Remoto / Online</option>
                  <option value="Múltiplas Unidades">Múltiplas Unidades</option>
                </select>
              </div>
              <div>
                <label htmlFor="tempoOperacao" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Tempo de Operação</label>
                <select
                  id="tempoOperacao"
                  name="tempoOperacao"
                  value={formData.tempoOperacao}
                  onChange={(e) => setFormData({ ...formData, tempoOperacao: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Menos de 1 ano">Menos de 1 ano (Início)</option>
                  <option value="1 a 3 anos">1 a 3 anos</option>
                  <option value="Mais de 3 anos">Mais de 3 anos (Consolidada)</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="descricao" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Descrição Breve da Empresa *</label>
                <textarea
                  id="descricao"
                  name="descricao"
                  rows={3}
                  required
                  value={formData.descricao}
                  onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue resize-none text-ghanks-gray"
                  placeholder="O que sua empresa vende, para quem e quais são os diferenciais..."
                />
              </div>
            </div>
          </div>
        )}

        {/* ETAPA 3 */}
        {etapa === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ghanks-blue">Etapa 3 de 5</span>
              <h3 className="text-xl md:text-2xl font-bold text-ghanks-gray mt-1">O que você deseja melhorar?</h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Selecione até 3 objetivos principais de crescimento.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {OBJETIVOS_OPCOES.map((obj) => {
                const selected = formData.objetivos.includes(obj);
                return (
                  <button
                    type="button"
                    key={obj}
                    onClick={() => handleCheckboxObjetivo(obj)}
                    className={`text-left p-4 rounded-2xl border text-sm font-medium transition-all flex items-start gap-3 ${
                      selected
                        ? "bg-blue-50 border-ghanks-blue text-ghanks-blue shadow-xs"
                        : "bg-ghanks-light border-gray-200 text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs shrink-0 mt-0.5 border ${selected ? "bg-ghanks-blue text-white border-ghanks-blue" : "bg-white border-gray-300"}`}>
                      {selected ? "✓" : ""}
                    </span>
                    <span>{obj}</span>
                  </button>
                );
              })}
            </div>

            {/* Hidden input to store objetivos in form submission */}
            <input type="hidden" name="objetivos" value={JSON.stringify(formData.objetivos)} />

            <div className="space-y-5 pt-4">
              <div>
                <label htmlFor="resultadoDesejado" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Qual é o principal resultado que você gostaria de alcançar? *</label>
                <textarea
                  id="resultadoDesejado"
                  name="resultadoDesejado"
                  rows={3}
                  required
                  value={formData.resultadoDesejado}
                  onChange={(e) => setFormData({ ...formData, resultadoDesejado: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue resize-none text-ghanks-gray"
                  placeholder="Ex: Dobrar orçamentos vindos do Google sem precisar aumentar o orçamento de anúncios..."
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="prazoInicio" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Em quanto tempo pretende começar?</label>
                  <select
                    id="prazoInicio"
                    name="prazoInicio"
                    value={formData.prazoInicio}
                    onChange={(e) => setFormData({ ...formData, prazoInicio: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  >
                    <option value="Imediatamente">Imediatamente</option>
                    <option value="Próximos 30 dias">Próximos 30 dias</option>
                    <option value="De 1 a 3 meses">De 1 a 3 meses</option>
                    <option value="De 3 a 6 meses">De 3 a 6 meses</option>
                    <option value="Ainda estou pesquisando">Ainda estou pesquisando</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="avaliacaoAtual" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Como avalia hoje a presença digital da empresa?</label>
                  <select
                    id="avaliacaoAtual"
                    name="avaliacaoAtual"
                    value={formData.avaliacaoAtual}
                    onChange={(e) => setFormData({ ...formData, avaliacaoAtual: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                  >
                    <option value="Inexistente / Muito fraca">Inexistente / Muito fraca</option>
                    <option value="Regular / Precisa melhorar">Regular / Precisa melhorar</option>
                    <option value="Boa, mas queremos acelerar">Boa, mas queremos acelerar</option>
                    <option value="Excelente">Excelente</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ETAPA 4 */}
        {etapa === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ghanks-blue">Etapa 4 de 5</span>
              <h3 className="text-xl md:text-2xl font-bold text-ghanks-gray mt-1">Entenda onde estão as oportunidades</h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Cenário atual de marketing, concorrentes e termos de busca.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="investeSeo" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Já investe em SEO?</label>
                <select
                  id="investeSeo"
                  name="investeSeo"
                  value={formData.investeSeo}
                  onChange={(e) => setFormData({ ...formData, investeSeo: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                  <option value="Não sei">Não sei</option>
                </select>
              </div>
              <div>
                <label htmlFor="investeAds" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Já investe em Google Ads / Tráfego Pago?</label>
                <select
                  id="investeAds"
                  name="investeAds"
                  value={formData.investeAds}
                  onChange={(e) => setFormData({ ...formData, investeAds: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
              <div>
                <label htmlFor="equipeMarketing" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Possui agência ou profissional de marketing?</label>
                <select
                  id="equipeMarketing"
                  name="equipeMarketing"
                  value={formData.equipeMarketing}
                  onChange={(e) => setFormData({ ...formData, equipeMarketing: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Parceiro externo / Agência">Sim, parceiro externo / agência</option>
                  <option value="Equipe interna">Sim, equipe interna</option>
                  <option value="Não possuo">Não possuo</option>
                </select>
              </div>
              <div>
                <label htmlFor="conheceIa" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Já verificou como sua empresa aparece em IAs?</label>
                <select
                  id="conheceIa"
                  name="conheceIa"
                  value={formData.conheceIa}
                  onChange={(e) => setFormData({ ...formData, conheceIa: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                  <option value="Não sei">Não sei</option>
                </select>
                <p className="mt-1 text-[11px] text-gray-400">Essa informação serve apenas para entendermos o ponto de partida. Não existe garantia de exibição ou recomendação em plataformas de inteligência artificial.</p>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="produtosPrioridade" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Quais produtos ou serviços são prioridade? *</label>
                <textarea
                  id="produtosPrioridade"
                  name="produtosPrioridade"
                  rows={2}
                  required
                  value={formData.produtosPrioridade}
                  onChange={(e) => setFormData({ ...formData, produtosPrioridade: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue resize-none text-ghanks-gray"
                  placeholder="Ex: Consultoria financeira, sacolas personalizadas, reformas residenciais..."
                />
              </div>

              <div>
                <label htmlFor="concorrentes" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Quais concorrentes aparecem com mais força nas buscas?</label>
                <textarea
                  id="concorrentes"
                  name="concorrentes"
                  rows={2}
                  value={formData.concorrentes}
                  onChange={(e) => setFormData({ ...formData, concorrentes: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue resize-none text-ghanks-gray"
                  placeholder="Nomes ou sites dos principais concorrentes..."
                />
              </div>
              <div>
                <label htmlFor="termosBusca" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Para quais termos ou perguntas gostaria de ser encontrado?</label>
                <textarea
                  id="termosBusca"
                  name="termosBusca"
                  rows={2}
                  value={formData.termosBusca}
                  onChange={(e) => setFormData({ ...formData, termosBusca: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue resize-none text-ghanks-gray"
                  placeholder="Ex: Melhor agência de SEO, fornecedor de embalagens..."
                />
              </div>
            </div>
          </div>
        )}

        {/* ETAPA 5 */}
        {etapa === 5 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ghanks-blue">Etapa 5 de 5</span>
              <h3 className="text-xl md:text-2xl font-bold text-ghanks-gray mt-1">Vamos definir o próximo passo</h3>
              <p className="text-xs md:text-sm text-gray-500 mt-1">Últimos detalhes e autorização de contato para estruturarmos o diagnóstico.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="faixaInvestimento" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Faixa de Investimento Mensal Pretendida</label>
                <select
                  id="faixaInvestimento"
                  name="faixaInvestimento"
                  value={formData.faixaInvestimento}
                  onChange={(e) => setFormData({ ...formData, faixaInvestimento: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Ainda não definido">Ainda não definido</option>
                  <option value="Estou pesquisando">Estou pesquisando</option>
                  <option value="Prefiro conversar sobre isso">Prefiro conversar sobre isso</option>
                  <option value="Compatível com planos profissionais">Compatível com planos profissionais</option>
                </select>
              </div>
              <div>
                <label htmlFor="comoConheceu" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Como conheceu a G Hanks?</label>
                <select
                  id="comoConheceu"
                  name="comoConheceu"
                  value={formData.comoConheceu}
                  onChange={(e) => setFormData({ ...formData, comoConheceu: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue text-ghanks-gray"
                >
                  <option value="Busca no Google">Busca no Google</option>
                  <option value="Indicação">Indicação</option>
                  <option value="Redes Sociais">Redes Sociais (Instagram / LinkedIn)</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="urgencia" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Existe alguma urgência ou contexto importante?</label>
                <textarea
                  id="urgencia"
                  name="urgencia"
                  rows={2}
                  value={formData.urgencia}
                  onChange={(e) => setFormData({ ...formData, urgencia: e.target.value })}
                  className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue resize-none text-ghanks-gray"
                  placeholder="Ex: Lançamento de novo site, mudança de posicionamento..."
                />
              </div>
            </div>

            {/* Consentimento de Privacidade obrigatório */}
            <div className="pt-4 border-t border-gray-100">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  id="concordouPrivacidade"
                  name="concordouPrivacidade"
                  required
                  checked={formData.concordouPrivacidade}
                  onChange={(e) => setFormData({ ...formData, concordouPrivacidade: e.target.checked })}
                  className="mt-1 w-4 h-4 text-ghanks-blue border-gray-300 rounded focus:ring-ghanks-blue"
                />
                <span className="text-xs text-gray-600 leading-relaxed">
                  Li e concordo com o Aviso de Privacidade e autorizo a G Hanks a utilizar os dados enviados para analisar minha solicitação de diagnóstico e entrar em contato sobre serviços, recomendações e próximos passos relacionados à presença digital da minha empresa. (* Obrigatório)
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Navegação entre etapas */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          {etapa > 1 ? (
            <button
              type="button"
              onClick={voltar}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors"
            >
              &larr; Voltar
            </button>
          ) : (
            <div />
          )}

          {etapa < totalEtapas ? (
            <button
              type="button"
              onClick={avancar}
              className="px-8 py-3.5 bg-ghanks-blue text-white rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-md shadow-blue-500/20"
            >
              Avançar &rarr;
            </button>
          ) : (
            <button
              type="submit"
              disabled={enviando}
              className="px-9 py-4 bg-ghanks-blue text-white rounded-full font-bold text-base hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50"
            >
              {enviando ? "Enviando solicitação..." : "Solicitar meu diagnóstico gratuito"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
