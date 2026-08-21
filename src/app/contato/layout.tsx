import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contato | Fale com a G Hanks",
  description:
    "Entre em contato com a G Hanks para conversar sobre SEO orgânico, posicionamento no Google e oportunidades de crescimento para sua empresa.",
  keywords: [
    "contato G Hanks",
    "falar com G Hanks",
    "WhatsApp G Hanks",
    "consultoria de SEO orgânico",
  ],
  openGraph: {
    title: "Contato | Fale com a G Hanks",
    description: "Converse com a equipe G Hanks sobre SEO orgânico e crescimento digital.",
    type: "website",
    url: `${siteConfig.url}/contato`,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Contato — G Hanks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato | Fale com a G Hanks",
    description: "Converse com a equipe G Hanks sobre SEO orgânico e crescimento digital.",
  },
  alternates: {
    canonical: `${siteConfig.url}/contato`,
  },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
