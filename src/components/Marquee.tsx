/* Marquee — faixas de palavras-chave em movimento contínuo, como no hero
   de referência. O conteúdo é duplicado para o loop não ter emenda visível. */

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  tone?: "light" | "dark";
}

export default function Marquee({ items, reverse = false, tone = "dark" }: MarqueeProps) {
  const chipClass =
    tone === "dark"
      ? "border-white/15 text-white/70"
      : "border-gray-200 text-gray-500";

  return (
    <div className="marquee-mask overflow-hidden" aria-hidden="true">
      <ul
        className={`flex w-max items-center gap-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...items, ...items].map((item, i) => (
          <li
            key={`${item}-${i}`}
            className={`whitespace-nowrap rounded-full border px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wide ${chipClass}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
