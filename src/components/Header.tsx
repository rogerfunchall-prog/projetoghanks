"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const WHATSAPP_NUMBER = "5511950809873";

/* Páginas com hero escuro — o header começa transparente sobre elas */
const DARK_HERO_ROUTES = ["/", "/empresa"];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [metodoOpen, setMetodoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const overDarkHero = DARK_HERO_ROUTES.includes(pathname);
  /* Transparente apenas no topo de uma página de hero escuro e com o menu fechado */
  const transparent = overDarkHero && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = transparent
    ? "text-white/80 hover:text-white"
    : "text-gray-600 hover:text-ghanks-blue";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent border-b border-transparent"
          : "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16 md:h-20" : "h-18 md:h-24"
          }`}
        >
          {/* Logo — versão branca enquanto o header está sobre o hero escuro */}
          <Logo variant={transparent ? "light" : "dark"} />

          {/* Navegação desktop */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Menu principal">
            <Link href="/" className={`text-sm font-medium transition-colors ${linkClass}`}>
              Início
            </Link>
            <Link href="/empresa" className={`text-sm font-medium transition-colors ${linkClass}`}>
              Empresa
            </Link>

            {/* Dropdown Método */}
            <div className="relative group">
              <Link
                href="/metodo"
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${linkClass}`}
              >
                Método
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Submenu desktop — aparece no hover */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[170px]">
                  <Link
                    href="/planos"
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-ghanks-light hover:text-ghanks-blue transition-colors"
                  >
                    Planos
                  </Link>
                  <Link
                    href="/faq"
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-ghanks-light hover:text-ghanks-blue transition-colors"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/portfolio" className={`text-sm font-medium transition-colors ${linkClass}`}>
              Portfólio
            </Link>
            <Link href="/contato" className={`text-sm font-medium transition-colors ${linkClass}`}>
              Contato
            </Link>
            <Link
              href="/franquias"
              className={`text-sm font-bold px-4 py-2 rounded-full border transition-colors ${
                transparent
                  ? "text-white border-white/40 hover:bg-white hover:text-ghanks-gray"
                  : "text-ghanks-gray border-gray-200 hover:border-ghanks-yellow hover:bg-ghanks-yellow hover:text-ghanks-gray"
              }`}
            >
              Seja Franqueado
            </Link>
          </nav>

          {/* Redes sociais + CTA desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.instagram.com/ghanks.br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @ghanks.br"
              className={`transition-colors ${
                transparent ? "text-white/70 hover:text-white" : "text-gray-400 hover:text-ghanks-red"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um diagnóstico gratuito de SEO.`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                transparent
                  ? "bg-white text-ghanks-gray hover:bg-white/90"
                  : "bg-ghanks-blue text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20"
              }`}
            >
              Solicitar Diagnóstico Gratuito
            </a>
          </div>

          {/* Botão hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              transparent ? "text-white" : "text-gray-600"
            }`}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-gray-100 bg-white" aria-label="Menu mobile">
          <div className="px-4 py-4 space-y-1">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-ghanks-blue">
              Início
            </Link>
            <Link href="/empresa" onClick={() => setMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-ghanks-blue">
              Empresa
            </Link>

            {/* Accordion Método — mobile */}
            <div>
              <button
                onClick={() => setMetodoOpen(!metodoOpen)}
                className="flex items-center justify-between w-full py-2 text-base font-medium text-gray-700 hover:text-ghanks-blue"
                aria-expanded={metodoOpen}
              >
                <Link href="/metodo" onClick={(e) => { e.stopPropagation(); setMenuOpen(false); }}>
                  Método
                </Link>
                <svg
                  className={`w-4 h-4 transition-transform ${metodoOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {metodoOpen && (
                <div className="pl-4 space-y-1 pb-1">
                  <Link href="/planos" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-500 hover:text-ghanks-blue">
                    Planos
                  </Link>
                  <Link href="/faq" onClick={() => setMenuOpen(false)} className="block py-2 text-sm text-gray-500 hover:text-ghanks-blue">
                    FAQ
                  </Link>
                </div>
              )}
            </div>

            <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-ghanks-blue">
              Portfólio
            </Link>
            <Link href="/contato" onClick={() => setMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-ghanks-blue">
              Contato
            </Link>
            <Link
              href="/franquias"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-base font-bold text-ghanks-gray"
            >
              Seja Franqueado
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um diagnóstico gratuito de SEO.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-ghanks-blue text-white px-5 py-3 rounded-full text-sm font-semibold mt-3"
            >
              Solicitar Diagnóstico Gratuito
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
