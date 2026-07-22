/* OpenGraph image dinâmica 1200x630 para compartilhamento em redes sociais */

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "G Hanks — Growth Hacking e SEO Orgânico";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Barra superior com as 4 cores */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
          }}
        >
          <div style={{ flex: 1, backgroundColor: "#4285F4" }} />
          <div style={{ flex: 1, backgroundColor: "#34A853" }} />
          <div style={{ flex: 1, backgroundColor: "#FBBC05" }} />
          <div style={{ flex: 1, backgroundColor: "#EA4335" }} />
        </div>

        {/* Logo G */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              fontStyle: "italic",
              color: "#4285F4",
            }}
          >
            G
          </span>
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              fontStyle: "italic",
              color: "#3C4043",
            }}
          >
            Hanks
          </span>
        </div>

        {/* Título */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#3C4043",
              lineHeight: 1.3,
            }}
          >
            Growth Hacking e SEO Orgânico
          </span>
          <span
            style={{
              fontSize: 22,
              color: "#6B7280",
              marginTop: 16,
              lineHeight: 1.5,
            }}
          >
            Sua empresa na primeira página do Google, sem anúncios pagos.
          </span>
        </div>

        {/* Badge inferior */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 32,
            gap: 8,
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 16, color: "#9CA3AF" }}>
            ghanks.com.br
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
