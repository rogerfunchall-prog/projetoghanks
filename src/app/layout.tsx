import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/config";

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

/* Metadata global do site — SEO on-page */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "G Hanks | SEO Orgânico e Growth Hacking no Google",
    template: "%s | G Hanks",
  },
  description:
    "Estratégias de SEO orgânico, growth hacking e SEO local para aumentar a presença da sua empresa no Google. Solicite um diagnóstico gratuito.",
  keywords: [
    "Ghanks",
    "G Hanks",
    "G Hanks SEO",
    "Ghanks SEO orgânico",
    "agência G Hanks",
    "SEO orgânico",
    "agência de SEO orgânico",
    "empresa de SEO orgânico",
    "contratar SEO orgânico",
    "serviço de SEO orgânico",
    "consultoria de SEO orgânico",
    "especialista em SEO orgânico",
    "posicionamento orgânico no Google",
    "posicionamento no Google",
    "como aparecer no Google sem pagar anúncio",
    "resultado orgânico no Google",
    "SEO local",
    "agência de SEO local",
    "SEO para negócio local",
    "como aparecer no Google Maps",
    "otimização Google Meu Negócio",
    "SEO em São Paulo",
    "agência SEO São Paulo",
    "SEO em Limeira",
    "growth hacking",
    "growth hacking para empresas",
    "growth hacking e SEO",
    "autoridade de domínio",
    "como aumentar autoridade do site",
    "estratégia de palavras-chave",
    "conteúdo estratégico para SEO",
    "SEO para empresas",
    "empresa na primeira página do Google",
    "SEO para lojas",
    "SEO para clínicas",
    "SEO para prestadores de serviço",
    "SEO para e-commerce",
    "agência de SEO para pequenas empresas",
    "SEO orgânico ou Google Ads",
  ],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "G Hanks | SEO Orgânico e Growth Hacking no Google",
    description:
      "Estratégias de SEO orgânico, growth hacking e SEO local para posicionar sua empresa no Google de forma sustentável. Diagnóstico gratuito.",
    type: "website",
    url: siteConfig.url,
    siteName: "G Hanks",
    locale: "pt_BR",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "G Hanks — SEO Orgânico e Growth Hacking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "G Hanks | SEO Orgânico e Growth Hacking no Google",
    description:
      "Estratégias de SEO orgânico, growth hacking e SEO local para posicionar sua empresa no Google de forma sustentável.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

/* JSON-LD Organization com as duas unidades (NAP) */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  alternateName: ["G Hanks — Growth Hacking e SEO Orgânico", "Ghanks", "G Hanks SEO"],
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo-ghanks.png`,
  image: `${siteConfig.url}/opengraph-image.png`,
  description:
    "Agência de SEO orgânico e growth hacking. Estratégias de posicionamento sustentável no Google com exclusividade por cidade e palavra-chave.",
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  serviceType: [
    "SEO Orgânico",
    "SEO Local",
    "Growth Hacking",
    "Posicionamento no Google",
    "Consultoria de SEO",
  ],
  sameAs: [siteConfig.social.instagram],
  parentOrganization: {
    "@type": "Organization",
    name: siteConfig.parentCompany,
  },
  founder: {
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.role,
  },
  address: siteConfig.addresses.map((addr) => ({
    "@type": "PostalAddress",
    name: addr.name,
    streetAddress: addr.street,
    addressLocality: addr.city,
    addressRegion: addr.region,
    postalCode: addr.postalCode,
    addressCountry: addr.country,
  })),
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
