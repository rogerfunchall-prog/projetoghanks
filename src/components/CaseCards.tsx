/* CaseCards — cases em destaque na home, com zoom sutil da imagem no hover
   e selo de destaque no resultado mais forte do portfólio. */

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const CASES_DESTAQUE = [
  {
    nome: "Reluz Galvânica",
    destaque: "1º lugar no Google Brasil para 'galvânica Limeira'",
    imagem: "/case-reluz-galvanica.png",
    badge: true,
  },
  {
    nome: "Top Sacolas Personalizadas",
    destaque: "Topo das buscas em Taubaté e Vale do Paraíba",
    imagem: "/case-top-sacolas.png",
    badge: false,
  },
  {
    nome: "Marcelo Clay",
    destaque: "Posicionamento orgânico nacional como palestrante financeiro",
    imagem: "/case-marcelo-clay.png",
    badge: false,
  },
];

export default function CaseCards() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {CASES_DESTAQUE.map((c, i) => (
        <Reveal as="li" key={c.nome} delay={i * 110}>
          <Link
            href="/portfolio"
            className={`group block h-full bg-white rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 ${
              c.badge ? "border-ghanks-green/60" : "border-gray-100"
            }`}
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={c.imagem}
                alt={`Case ${c.nome}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Overlay para o selo respirar sobre a imagem */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                aria-hidden="true"
              />
              {c.badge && (
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-ghanks-green text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-green-900/30">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  1º no Google Brasil
                </span>
              )}
            </div>

            <div className="p-6">
              <h3 className="font-display text-lg font-bold text-ghanks-gray">{c.nome}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{c.destaque}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ghanks-blue">
                Ver o case
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
