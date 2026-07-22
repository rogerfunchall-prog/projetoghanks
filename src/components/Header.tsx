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

/* Número de WhatsApp para CTAs — alterar conforme necessário */
const WHATSAPP_NUMBER = "5511999999999";

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

          {/* CTA desktop */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um diagnóstico gratuito de SEO.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-ghanks-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
          >
            Solicitar Diagnóstico Gratuito
          </a>

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
