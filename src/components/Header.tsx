"use client";

import { useState } from "react";
import Logo from "./Logo";

/* Links de navegação do menu principal */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Método", href: "#metodo" },
  { label: "Planos", href: "#planos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_NUMBER = "5511950809873";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo />

          {/* Navegação desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Menu principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-ghanks-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Redes sociais + CTA desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/ghanks.br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @ghanks.br"
              className="text-gray-400 hover:text-ghanks-red transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um diagnóstico gratuito de SEO.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ghanks-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              Solicitar Diagnóstico Gratuito
            </a>
          </div>

          {/* Botão hamburger mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-600"
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
        <nav className="md:hidden border-t border-gray-100 bg-white" aria-label="Menu mobile">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-ghanks-blue"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um diagnóstico gratuito de SEO.`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-ghanks-blue text-white px-5 py-3 rounded-full text-sm font-semibold mt-2"
            >
              Solicitar Diagnóstico Gratuito
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
