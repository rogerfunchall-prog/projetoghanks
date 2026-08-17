import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot anti-spam check
    if (body.hp_website || body.website) {
      return NextResponse.json({ success: true, message: "Recebido com sucesso." });
    }

    const {
      nome,
      empresa,
      email,
      whatsapp,
      cargo,
      horario,
      segmento,
      descricao,
      site,
      instagram,
      cidadeEstado,
      regioesAtendidas,
      modeloAtuacao,
      tempoOperacao,
      objetivos,
      resultadoDesejado,
      prazoInicio,
      avaliacaoAtual,
      investeSeo,
      investeAds,
      equipeMarketing,
      jaFezSeo,
      produtosPrioridade,
      concorrentes,
      termosBusca,
      conheceIa,
      faixaInvestimento,
      quemDecide,
      urgencia,
      comoConheceu,
      concordouPrivacidade,
    } = body;

    // Basic validation
    if (!nome || !empresa || !email || !whatsapp || !cidadeEstado || !concordouPrivacidade) {
      return NextResponse.json(
        { success: false, error: "Por favor, preencha todos os campos obrigatórios e aceite o Aviso de Privacidade." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "E-mail profissional inválido." },
        { status: 400 }
      );
    }

    const assunto = `Novo diagnóstico gratuito G Hanks — ${empresa} — ${cidadeEstado}`;

    const corpoEmail = `
NOVO DIAGNÓSTICO GRATUITO SOLICITADO — G HANKS

1. DADOS DE CONTATO
- Nome: ${nome}
- Empresa / Marca: ${empresa}
- E-mail: ${email}
- WhatsApp: ${whatsapp}
- Cargo / Função: ${cargo || "Não informado"}
- Melhor horário: ${horario || "Não informado"}

2. PERFIL DO NEGÓCIO
- Segmento: ${segmento || "Não informado"}
- Descrição: ${descricao || "Não informado"}
- Site / Domínio: ${site || "Não informado"}
- Instagram: ${instagram || "Não informado"}
- Sede: ${cidadeEstado}
- Regiões atendidas: ${regioesAtendidas || "Não informado"}
- Modelo de atuação: ${modeloAtuacao || "Não informado"}
- Tempo de operação: ${tempoOperacao || "Não informado"}

3. OBJETIVOS DE CRESCIMENTO
- Objetivos selecionados: ${Array.isArray(objetivos) ? objetivos.join(", ") : objetivos || "Não informado"}
- Resultado desejado: ${resultadoDesejado || "Não informado"}
- Prazo para início: ${prazoInicio || "Não informado"}
- Avaliação atual: ${avaliacaoAtual || "Não informado"}

4. CENÁRIO ATUAL DE MARKETING E BUSCA
- Já investe em SEO?: ${investeSeo || "Não informado"}
- Já investe em Tráfego Pago?: ${investeAds || "Não informado"}
- Possui equipe/agência de marketing?: ${equipeMarketing || "Não informado"}
- Já realizou SEO antes?: ${jaFezSeo || "Não informado"}
- Produtos / serviços prioridade: ${produtosPrioridade || "Não informado"}
- Concorrentes fortes: ${concorrentes || "Não informado"}
- Termos de busca desejados: ${termosBusca || "Não informado"}
- Conhece presença em IAs?: ${conheceIa || "Não informado"}

5. QUALIFICAÇÃO E AUTORIZAÇÃO
- Faixa de investimento mensal: ${faixaInvestimento || "Não informado"}
- Quem decide: ${quemDecide || "Não informado"}
- Urgência / contexto: ${urgencia || "Não informado"}
- Como conheceu: ${comoConheceu || "Not informed"}
- Consentimento de Privacidade: Aceito em ${new Date().toISOString()}

---
Enviado através do site oficial G Hanks (/diagnostico-gratuito)
Destinatário principal: analise@ghanks.com.br
    `.trim();

    // Send via Resend if RESEND_API_KEY is available
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "G Hanks Site <no-reply@ghanks.com.br>",
          to: ["analise@ghanks.com.br"],
          reply_to: email,
          subject: assunto,
          text: corpoEmail,
        }),
      });

      if (!res.ok) {
        const errData = await res.text();
        console.error("Resend API error:", errData);
      }
    } else {
      // Log server-side when API key is not configured yet
      console.log("=== NOVO DIAGNÓSTICO SOLICITADO (SIMULAÇÃO DE ENVIO PARA analise@ghanks.com.br) ===");
      console.log(`Assunto: ${assunto}`);
      console.log(corpoEmail);
    }

    return NextResponse.json({
      success: true,
      message: "Solicitação recebida com sucesso. Nossa equipe analisará as informações.",
    });
  } catch (error) {
    console.error("Erro ao processar diagnóstico:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno ao processar a solicitação. Tente novamente." },
      { status: 500 }
    );
  }
}
