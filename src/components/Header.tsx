"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const WHATSAPP_NUMBER = "5511950809873";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [solucoesOpen, setSolucoesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = "text-white/90 hover:text-white font-sans text-sm font-medium transition-colors";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black border-b border-white/10 shadow-[0_1px_20px_rgba(0,0,0,0.4)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16 md:h-20" : "h-18 md:h-24"
          }`}
        >
          {/* Logo */}
          <Logo variant="light" />

          {/* Navegação desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Menu principal">
            <Link href="/" className={linkClass}>
              Home
            </Link>

            <Link href="/empresa" className={linkClass}>
              Empresa
            </Link>

            {/* Dropdown Soluções (com Método H.A.N.K.S. dentro) */}
            <div className="relative group">
              <Link
                href="/servicos"
                className={`inline-flex items-center gap-1 ${linkClass}`}
              >
                Soluções
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-ghanks-ink rounded-2xl shadow-2xl border border-white/10 py-3 min-w-[240px]">
                  <Link
                    href="/servicos"
                    className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ghanks-blue hover:bg-white/5 transition-colors font-sans"
                  >
                    Visão Geral (Hub)
                  </Link>
                  <div className="my-1 border-t border-white/10" />
                  <Link
                    href="/seo-organico"
                    className="block px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors font-sans"
                  >
                    1. SEO Orgânico
                  </Link>
                  <Link
                    href="/trafego-pago"
                    className="block px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors font-sans"
                  >
                    2. Tráfego Pago
                  </Link>
                  <Link
                    href="/gestao-redes-sociais"
                    className="block px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors font-sans"
                  >
                    3. Gestão de Redes Sociais
                  </Link>
                  <Link
                    href="/treinamentos-presenciais"
                    className="block px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors font-sans"
                  >
                    4. Treinamentos Presenciais
                  </Link>
                  <div className="my-1 border-t border-white/10" />
                  <Link
                    href="/metodo"
                    className="block px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/5 hover:text-ghanks-blue transition-colors font-sans"
                  >
                    Método H.A.N.K.S.
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/portfolio" className={linkClass}>
              Portfólio
            </Link>
            <Link href="/treinamentos-presenciais" className={linkClass}>
              Treinamentos
            </Link>
            <Link href="/contato" className={linkClass}>
              Contato
            </Link>
            <Link
              href="/franquias"
              className="text-sm font-bold font-sans px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-colors"
            >
              Seja um Franqueado
            </Link>
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/diagnostico-gratuito"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold font-sans bg-ghanks-blue text-white hover:bg-blue-600 shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5"
            >
              Solicitar Diagnóstico Gratuito
            </Link>
          </div>

          {/* Botão hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-white transition-colors"
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
        <nav className="lg:hidden border-t border-white/10 bg-black text-white max-h-[85vh] overflow-y-auto" aria-label="Menu mobile">
          <div className="px-4 py-6 space-y-3 font-sans">
            <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2 text-base font-medium text-white/90 hover:text-white">
              Home
            </Link>
            <Link href="/empresa" onClick={() => setMenuOpen(false)} className="block py-2 text-base font-medium text-white/90 hover:text-white">
              Empresa
            </Link>

            {/* Soluções accordion mobile (com Método H.A.N.K.S. dentro) */}
            <div>
              <button
                onClick={() => setSolucoesOpen(!solucoesOpen)}
                className="flex items-center justify-between w-full py-2 text-base font-medium text-white/90 hover:text-white"
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
                <div className="pl-4 space-y-2 pb-2 border-l-2 border-ghanks-blue ml-2 my-2">
                  <Link href="/servicos" onClick={() => setMenuOpen(false)} className="block py-1.5 text-sm font-semibold text-ghanks-blue font-sans">
                    Visão Geral (Hub)
                  </Link>
                  <Link href="/seo-organico" onClick={() => setMenuOpen(false)} className="block py-1.5 text-sm text-white/80 hover:text-white font-sans">
                    1. SEO Orgânico
                  </Link>
                  <Link href="/trafego-pago" onClick={() => setMenuOpen(false)} className="block py-1.5 text-sm text-white/80 hover:text-white font-sans">
                    2. Tráfego Pago
                  </Link>
                  <Link href="/gestao-redes-sociais" onClick={() => setMenuOpen(false)} className="block py-1.5 text-sm text-white/80 hover:text-white font-sans">
                    3. Gestão de Redes Sociais
                  </Link>
                  <Link href="/treinamentos-presenciais" onClick={() => setMenuOpen(false)} className="block py-1.5 text-sm text-white/80 hover:text-white font-sans">
                    4. Treinamentos Presenciais
                  </Link>
                  <Link href="/metodo" onClick={() => setMenuOpen(false)} className="block py-1.5 text-sm font-semibold text-white hover:text-ghanks-blue font-sans">
                    Método H.A.N.K.S.
                  </Link>
                </div>
              )}
            </div>

            <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="block py-2 text-base font-medium text-white/90 hover:text-white">
              Portfólio
            </Link>
            <Link href="/treinamentos-presenciais" onClick={() => setMenuOpen(false)} className="block py-2 text-base font-medium text-white/90 hover:text-white">
              Treinamentos
            </Link>
            <Link href="/contato" onClick={() => setMenuOpen(false)} className="block py-2 text-base font-medium text-white/90 hover:text-white">
              Contato
            </Link>
            <Link
              href="/franquias"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-base font-bold text-white border-b border-white/10 pb-4"
            >
              Seja um Franqueado
            </Link>

            <Link
              href="/diagnostico-gratuito"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-ghanks-blue text-white px-5 py-3.5 rounded-full text-sm font-semibold font-sans shadow-md mt-4"
            >
              Solicitar Diagnóstico Gratuito
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
