import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/* Fonte Inter — corpo de texto */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* Plus Jakarta Sans — títulos e headlines modernas */
const displayFont = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

/* URL base do site */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projetoghanks.vercel.app";

/* Metadata global do site — SEO on-page */
export const metadata: Metadata = {
  title: {
    default: "G Hanks — Growth Hacking e SEO Orgânico | Primeira Página do Google",
    template: "%s | G Hanks",
  },
  description:
    "Agência de growth hacking e SEO orgânico. Colocamos sua empresa na primeira página do Google sem anúncios pagos. Atendimento para todo o Brasil, com exclusividade por cidade e palavra-chave.",
  keywords: [
    "seo orgânico",
    "growth hacking",
    "primeira página do google",
    "resultado orgânico no google",
    "growth hacking brasil",
    "agência de seo orgânico",
    "posicionamento no google sem anúncios",
    "seo sem google ads",
    "consultoria de seo orgânico",
    "growth hacking para pequenas empresas",
    "como aparecer na primeira página do google",
    "seo nativo para empresas",
    "marketing de busca orgânica",
    "crescimento orgânico digital",
    "exclusividade de palavra-chave seo",
    "seo local para negócios",
    "agência de growth hacking para todo o brasil",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
  },
  openGraph: {
    title: "G Hanks — Resultado Orgânico na Primeira Página do Google",
    description:
      "Growth hacking e SEO nativo para colocar sua empresa no topo do Google organicamente, sem gestor de tráfego pago.",
    type: "website",
    url: siteUrl,
    siteName: "G Hanks",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "G Hanks — Resultado Orgânico na Primeira Página do Google",
    description:
      "Growth hacking e SEO nativo para colocar sua empresa no topo do Google organicamente, sem gestor de tráfego pago.",
  },
  alternates: {
    canonical: siteUrl,
  },
  metadataBase: new URL(siteUrl),
};

/* JSON-LD Organization com as duas unidades (NAP) */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "G Hanks",
  alternateName: "G Hanks — Growth Hacking e SEO Orgânico",
  url: siteUrl,
  logo: `${siteUrl}/logo-ghanks.png`,
  description:
    "Agência de growth hacking e SEO orgânico. Colocamos sua empresa na primeira página do Google sem anúncios pagos.",
  telephone: "+5511950809873",
  sameAs: ["https://www.instagram.com/ghanks.br"],
  parentOrganization: {
    "@type": "Organization",
    name: "HAPP APPS Tecnologia",
  },
  location: [
    {
      "@type": "PostalAddress",
      name: "G Hanks — São Paulo (Matriz)",
      streetAddress: "Av. Brig. Faria Lima, 1811 - Conj. 1120 - Jardins",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "01452-001",
      addressCountry: "BR",
    },
    {
      "@type": "PostalAddress",
      name: "G Hanks — Limeira",
      streetAddress: "R. Sen. Vergueiro, 995 - Sl 51|B - Centro",
      addressLocality: "Limeira",
      addressRegion: "SP",
      postalCode: "13480-001",
      addressCountry: "BR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${displayFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
