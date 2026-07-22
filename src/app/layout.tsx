import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* Fonte Inter — geométrica, clean, carregada via next/font para performance */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
    url: "https://www.ghanks.com.br",
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
    canonical: "https://www.ghanks.com.br",
  },
  metadataBase: new URL("https://www.ghanks.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
