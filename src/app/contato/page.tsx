import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projetoghanks.vercel.app";
const WHATSAPP_NUMBER = "5511950809873";

export const metadata: Metadata = {
  title: "Contato — Fale com a G Hanks",
  description:
    "Entre em contato com a G Hanks via WhatsApp ou formulário. Solicite seu diagnóstico gratuito de SEO orgânico.",
  openGraph: {
    title: "Contato — G Hanks",
    description:
      "Fale com um especialista em SEO orgânico e growth hacking.",
    type: "website",
    url: `${siteUrl}/contato`,
  },
  alternates: {
    canonical: `${siteUrl}/contato`,
  },
};

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

export default function ContatoPage() {
  return (
    <PageShell>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Contato" }]} />

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-ghanks-gray leading-tight mb-6">
            Fale com a <span className="text-ghanks-blue">G Hanks</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Solicite seu diagnóstico gratuito de SEO orgânico ou tire suas dúvidas.
            Nosso time está pronto para ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* WhatsApp + Redes */}
          <div className="space-y-6">
            <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-ghanks-gray mb-4">WhatsApp</h2>
              <p className="text-gray-500 mb-4">
                A forma mais rápida de falar com a nossa equipe. Atendimento
                consultivo, sem compromisso.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um diagnóstico gratuito de SEO orgânico.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ghanks-green text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                (11) 95080-9873
              </a>
            </div>

            <div className="bg-ghanks-light rounded-2xl p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-ghanks-gray mb-4">Instagram</h2>
              <a
                href="https://www.instagram.com/ghanks.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ghanks-blue font-semibold hover:underline"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @ghanks.br
              </a>
            </div>

            {/* Escritórios */}
            {ESCRITORIOS.map((esc) => (
              <div key={esc.cidade} className="bg-ghanks-light rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full shrink-0">
                    <svg className="w-5 h-5 text-ghanks-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-ghanks-gray">{esc.cidade}</p>
                    <p className="text-sm text-gray-500 mt-1">{esc.endereco}</p>
                    <p className="text-sm text-gray-400">{esc.cep}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-ghanks-gray mb-6">Envie uma mensagem</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">
                  Cidade e nicho
                </label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue focus:border-transparent"
                  placeholder="Ex: Loja de roupas em Ribeirão Preto"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-ghanks-blue focus:border-transparent resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ghanks-blue text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
              >
                Enviar mensagem
              </button>
              <p className="text-xs text-gray-400 text-center">
                Ou se preferir, fale diretamente pelo{" "}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ghanks-blue hover:underline"
                >
                  WhatsApp
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
