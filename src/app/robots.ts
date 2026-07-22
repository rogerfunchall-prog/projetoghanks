/* robots.txt gerado via Next.js Metadata API */

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.ghanks.com.br/sitemap.xml",
  };
}
