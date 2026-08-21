import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Treinamentos Presenciais | Capacitação Sob Demanda — G Hanks",
  description:
    "Treinamentos presenciais sob demanda para empresas: SEO, marketing digital, IA e gestão. Palestras, workshops e imersões personalizadas.",
  keywords: [
    "treinamentos presenciais",
    "treinamento in company",
    "workshop SEO",
    "capacitação marketing digital",
    "palestras empresariais",
  ],
  openGraph: {
    title: "Treinamentos Presenciais | Capacitação Sob Demanda — G Hanks",
    description: "Treinamentos personalizados para sua equipe: SEO, marketing digital, IA e gestão.",
    type: "website",
    url: `${siteConfig.url}/treinamentos-presenciais`,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Treinamentos — G Hanks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Treinamentos Presenciais | Capacitação Sob Demanda — G Hanks",
    description: "Treinamentos personalizados para sua equipe.",
  },
  alternates: {
    canonical: `${siteConfig.url}/treinamentos-presenciais`,
  },
};

export default function TreinamentosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
