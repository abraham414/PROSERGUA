import Image from "next/image";
import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { company } from "@/data/company";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-24 text-white sm:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/tecnico-tablero.jpg"
          alt="Técnico de PROSERGUA trabajando en un tablero eléctrico"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/80" />
      </div>

      <Container className="relative flex flex-col items-center gap-8 text-center">
        <p className="max-w-2xl font-heading text-2xl font-bold leading-snug sm:text-3xl">
          &ldquo;{company.closingStatement}&rdquo;
        </p>
        <LinkButton href="/contacto" variant="primary">
          Hablemos de tu proyecto
        </LinkButton>
      </Container>
    </section>
  );
}
