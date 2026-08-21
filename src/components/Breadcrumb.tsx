/* Breadcrumb visual + JSON-LD BreadcrumbList para SEO */
import Script from "next/script";
import { siteConfig } from "@/lib/config";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  /* dark: cores claras, para uso sobre fundo escuro */
  tone?: "light" | "dark";
}

export default function Breadcrumb({ items, tone = "light" }: BreadcrumbProps) {
  const siteUrl = siteConfig.url;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <nav
        className={`text-sm mb-8 ${tone === "dark" ? "text-white/50" : "text-gray-400"}`}
        aria-label="Breadcrumb"
      >
        {items.map((item, i) => (
          <span key={i}>
            {i > 0 && <span className="mx-2">/</span>}
            {item.href ? (
              <a
                href={item.href}
                className={`transition-colors ${
                  tone === "dark" ? "hover:text-white" : "hover:text-ghanks-blue"
                }`}
              >
                {item.label}
              </a>
            ) : (
              <span className={tone === "dark" ? "text-white/80" : "text-ghanks-gray"}>
                {item.label}
              </span>
            )}
          </span>
        ))}
      </nav>
      <Script
        id={`breadcrumb-${items.length}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
