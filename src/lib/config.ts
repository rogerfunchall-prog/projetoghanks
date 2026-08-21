/**
 * Configuração central do site G Hanks
 * 
 * Todas as URLs canônicas, metadata, sitemap, robots e JSON-LD
 * devem usar esta configuração para garantir consistência.
 */

export const siteConfig = {
  url: "https://www.ghanks.com.br",
  name: "G Hanks",
  description: "Agência de SEO orgânico e growth hacking. Posicionamento sustentável no Google com exclusividade por cidade e palavra-chave.",
  locale: "pt_BR",
  timezone: "America/Sao_Paulo",
  contact: {
    whatsapp: "5511950809873",
    email: "analise@ghanks.com.br",
    phone: "+5511950809873",
  },
  social: {
    instagram: "https://www.instagram.com/ghanks.br",
  },
  addresses: [
    {
      name: "G Hanks — São Paulo (Matriz)",
      street: "Av. Brig. Faria Lima, 1811 - Conj. 1120 - Jardins",
      city: "São Paulo",
      region: "SP",
      postalCode: "01452-001",
      country: "BR",
    },
    {
      name: "G Hanks — Limeira",
      street: "R. Sen. Vergueiro, 995 - Sl 51|B - Centro",
      city: "Limeira",
      region: "SP",
      postalCode: "13480-001",
      country: "BR",
    },
  ],
  founder: {
    name: "Roger Funchal",
    role: "CEO e Founder",
  },
  parentCompany: "HAPP APPS Tecnologia",
} as const;

export type SiteConfig = typeof siteConfig;
