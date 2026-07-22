/* Logo G Hanks — "G" com gradiente 4 cores + wordmark "Hanks" */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-1 ${className}`} aria-label="G Hanks — Página inicial">
      {/* Ícone "G" com gradiente de 4 cores */}
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="g-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4285F4" />
            <stop offset="33%" stopColor="#34A853" />
            <stop offset="66%" stopColor="#FBBC05" />
            <stop offset="100%" stopColor="#EA4335" />
          </linearGradient>
        </defs>
        <text
          x="4"
          y="33"
          fontSize="36"
          fontWeight="800"
          fontFamily="Inter, sans-serif"
          fill="url(#g-gradient)"
          fontStyle="italic"
        >
          G
        </text>
      </svg>
      {/* Wordmark "Hanks" */}
      <span className="text-2xl font-bold italic text-ghanks-gray tracking-tight">
        Hanks
      </span>
    </a>
  );
}
