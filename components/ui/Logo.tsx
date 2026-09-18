import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-neutral-900";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/images/logo/prosergua-isotype-nav.webp"
        alt="PROSERGUA"
        width={40}
        height={40}
        className="h-9 w-9 shrink-0"
        priority
      />
      <span className={`font-heading text-xl font-extrabold tracking-tight ${textColor}`}>
        PROSERGUA
      </span>
    </span>
  );
}
