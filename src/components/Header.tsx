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
  const [solucoesOpen, setSolucoesOpen] = useState(false);
  const [metodoOpen, setMetodoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const overDarkHero = DARK_HERO_ROUTES.includes(pathname);
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
          {/* Logo */}
          <Logo variant={transparent ? "light" : "dark"} />

          {/* Navegação desktop */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Menu principal">
            <Link href="/" className={`text-sm font-medium transition-colors ${linkClass}`}>
              Início
            </Link>

            {/* Dropdown Soluções */}
            <div className="relative group">
              <Link
                href="/servicos"
                className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${linkClass}`}
              >
                Soluções
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-3 min-w-[220px]">
                  <Link
                    href="/servicos"
                    className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ghanks-blue hover:bg-ghanks-light transition-colors"
                  >
                    Visão Geral (Hub)
                  </Link>
                  <div className="my-1 border-t border-gray-100" />
                  <Link
                    href="/seo-organico"
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-ghanks-light hover:text-ghanks-blue transition-colors"
                  >
                    1. SEO Orgânico
                  </Link>
                  <Link
                    href="/trafego-pago"
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-ghanks-light hover:text-ghanks-blue transition-colors"
                  >
                    2. Tráfego Pago
                  </Link>
                  <Link
                    href="/gestao-redes-sociais"
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-ghanks-light hover:text-ghanks-blue transition-colors"
                  >
                    3. Gestão de Redes Sociais
                  </Link>
                  <Link
                    href="/treinamentos-presenciais"
                    className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-ghanks-light hover:text-ghanks-blue transition-colors"
                  >
                    4. Treinamentos Presenciais
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/metodo" className={`text-sm font-medium transition-colors ${linkClass}`}>
              Método H.A.N.K.S.
            </Link>
            <Link href="/portfolio" className={`text-sm font-medium transition-colors ${linkClass}`}>
              Portfólio
            </Link>
            <Link href="/empresa" className={`text-sm font-medium transition-colors ${linkClass}`}>
              Empresa
            </Link>
            <Link href="/treinamentos-presenciais" className={`text-sm font-medium transition-colors ${linkClass}`}>
              Treinamentos
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

          {/* CTA desktop */}
          <div className="hidden lg:flex items-center gap-4">
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
        <nav className="lg:hidden border-t border-gray-100 bg-white max-h-[85vh] overflow-y-auto" aria-label="Menu mobile">
          <div className="px-4 py-4 space-y-1">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-ghanks-blue">
              Início
            </Link>

            {/* Soluções accordion mobile */}
            <div>
              <button
                onClick={() => setSolucoesOpen(!solucoesOpen)}
                className="flex items-center justify-between w-full py-2 text-base font-medium text-gray-700 hover:text-ghanks-blue"
                aria-expanded={solucoesOpen}
              >
                <Link href="/servicos" onClick={(e) => { e.stopPropagation(); setMenuOpen(false); }}>
                  Soluções
                </Link>
                <svg
                  className={`w-4 h-4 transition-transform ${solucoesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solucoesOpen && (
                <div className="pl-4 space-y-1 pb-2 border-l-2 border-ghanks-blue ml-2 my-1">
                  <Link href="/servicos" onClick={() => setMenuOpen(false)} className="block py-1.5 text-sm font-semibold text-ghanks-blue">
                    Visão Geral (Hub)
                  </Link>
                  <Link href="/seo-organico" onClick={() => setMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-ghanks-blue">
                    1. SEO Orgânico
                  </Link>
                  <Link href="/trafego-pago" onClick={() => setMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-ghanks-blue">
                    2. Tráfego Pago
                  </Link>
                  <Link href="/gestao-redes-sociais" onClick={() => setMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-ghanks-blue">
                    3. Gestão de Redes Sociais
                  </Link>
                  <Link href="/treinamentos-presenciais" onClick={() => setMenuOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-ghanks-blue">
                    4. Treinamentos Presenciais
                  </Link>
                </div>
              )}
            </div>

            <Link href="/metodo" onClick={() => setMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-ghanks-blue">
              Método H.A.N.K.S.
            </Link>
            <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-ghanks-blue">
              Portfólio
            </Link>
            <Link href="/empresa" onClick={() => setMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-ghanks-blue">
              Empresa
            </Link>
            <Link href="/treinamentos-presenciais" onClick={() => setMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-ghanks-blue">
              Treinamentos
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
