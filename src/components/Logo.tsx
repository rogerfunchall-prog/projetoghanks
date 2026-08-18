/* Logo G Hanks — usa a imagem oficial da logo branca. */
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center ${className}`}
      aria-label="G Hanks — Growth Hacking e SEO Orgânico"
    >
      <Image
        src="/logo-ghanks-branco.png"
        alt="G Hanks — Growth Hacking e SEO Orgânico"
        width={349}
        height={100}
        className="h-10 md:h-12 w-auto"
        priority
      />
    </Link>
  );
}
