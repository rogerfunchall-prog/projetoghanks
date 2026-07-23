/* Breadcrumb visual + JSON-LD BreadcrumbList para SEO */
import Script from "next/script";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://projetoghanks.vercel.app";

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
      <nav className="text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
        {items.map((item, i) => (
          <span key={i}>
            {i > 0 && <span className="mx-2">/</span>}
            {item.href ? (
              <a href={item.href} className="hover:text-ghanks-blue transition-colors">
                {item.label}
              </a>
            ) : (
              <span className="text-ghanks-gray">{item.label}</span>
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
