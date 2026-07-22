/* Footer — logo, navegação, segmentos e assinatura HAPP APPS */

import Logo from "./Logo";

const WHATSAPP_NUMBER = "5511999999999";

/* Segmentos atendidos para SEO de cauda longa */
const SEGMENTOS = [
  "SEO para Lojas",
  "SEO para Clínicas",
  "SEO para Prestadores de Serviço",
  "SEO para E-commerce",
  "SEO para Escritórios",
  "SEO para Restaurantes",
];

const NAV_FOOTER = [
  { label: "Home", href: "/" },
  { label: "Método", href: "#metodo" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Guia de SEO Orgânico", href: "/seo-organico" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="bg-ghanks-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1 — Logo e descrição */}
          <div className="md:col-span-1">
            <Logo className="[&_span]:text-white" />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Growth hacking e SEO orgânico para colocar sua empresa na
              primeira página do Google, sem anúncios pagos.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-ghanks-green hover:text-green-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              WhatsApp: (11) 99999-9999
            </a>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {NAV_FOOTER.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Segmentos */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Segmentos
            </h3>
            <ul className="space-y-2">
              {SEGMENTOS.map((seg) => (
                <li key={seg}>
                  <span className="text-sm text-gray-400">{seg}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 — Sobre */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Sobre
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              G Hanks é uma marca da HAPP APPS Tecnologia, especializada em
              crescimento orgânico digital para empresas de todo o Brasil.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Atendimento para todo o Brasil, com exclusividade por cidade.
            </p>
          </div>
        </div>

        {/* Divider e assinatura */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} G Hanks. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">
            SEO • IA • Automação por{" "}
            <span className="font-semibold text-gray-400">HAPP APPS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
