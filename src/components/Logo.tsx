/* Logo G Hanks — usa a imagem oficial da logo */
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center ${className}`} aria-label="G Hanks — Página inicial">
      <Image
        src="/logo-ghanks.png"
        alt="G Hanks"
        width={120}
        height={48}
        className="h-10 w-auto"
        priority
      />
    </a>
  );
}
