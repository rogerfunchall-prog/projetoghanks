/* Footer — logo, navegação multi-página, segmentos, endereços, Instagram e assinatura HAPP APPS */

import Link from "next/link";
import Image from "next/image";

const WHATSAPP_NUMBER = "5511950809873";

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
  { label: "Início", href: "/" },
  { label: "Método H.A.N.K.S.", href: "/metodo" },
  { label: "Planos", href: "/planos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Empresa", href: "/empresa" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
  { label: "Guia de SEO Orgânico", href: "/seo-organico" },
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

export default function Footer() {
  return (
    <footer className="relative bg-ghanks-ink text-white overflow-hidden">
      {/* Brilho sutil no topo, alinhado ao restante das faixas escuras */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[46rem] h-[26rem] rounded-full bg-ghanks-blue/10 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Coluna 1 — Logo e descrição */}
          <div className="lg:col-span-2">
            <Image
              src="/logo-footer.png"
              alt="G Hanks"
              width={349}
              height={100}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Growth hacking e SEO orgânico para colocar sua empresa na
              primeira página do Google, sem anúncios pagos.
            </p>
            {/* Redes sociais e WhatsApp */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ghanks-green hover:text-green-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
                (11) 95080-9873
              </a>
              <a
                href="https://www.instagram.com/ghanks.br"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @ghanks.br"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white mb-5">
              Navegação
            </h3>
            <ul className="space-y-2">
              {NAV_FOOTER.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Segmentos */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white mb-5">
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

          {/* Coluna 4 — Escritórios */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white mb-5">
              Escritórios
            </h3>
            {ESCRITORIOS.map((esc) => (
              <div key={esc.cidade} className="mb-4">
                <p className="text-sm font-semibold text-gray-300">{esc.cidade}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{esc.endereco}</p>
                <p className="text-sm text-gray-400">{esc.cep}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider e assinatura */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
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
