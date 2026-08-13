/* Logo G Hanks — usa a imagem oficial da logo.
   variant "light" carrega a versão de wordmark branco, para fundos escuros. */
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center ${className}`}
      aria-label="G Hanks — Página inicial"
    >
      <Image
        src={variant === "light" ? "/logo-footer.png" : "/logo-ghanks.png"}
        alt="G Hanks"
        width={349}
        height={100}
        className="h-12 md:h-14 w-auto"
        priority
      />
    </Link>
  );
}
