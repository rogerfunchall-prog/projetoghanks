/* Logo G Hanks — usa a imagem oficial da logo com largura dobrada */
import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`} aria-label="G Hanks — Página inicial">
      <Image
        src="/logo-ghanks.png"
        alt="G Hanks"
        width={349}
        height={100}
        className="h-12 md:h-14 w-auto"
        priority
      />
    </Link>
  );
}
