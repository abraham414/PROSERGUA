import Image from "next/image";
import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { company } from "@/data/company";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Mobile: full-bleed background photo with overlay. */}
      <div className="absolute inset-0 sm:hidden">
        <Image
          src="/images/team/equipo-rooftop.jpg"
          alt="Equipo técnico de PROSERGUA en obra"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-secondary/60" />
      </div>

      {/* sm and up: diagonal split with photo on the right. */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute inset-0 [clip-path:polygon(0_0,62%_0,45%_100%,0_100%)] bg-secondary" />
        <div className="absolute inset-y-0 left-[45%] right-0">
          <Image
            src="/images/team/equipo-rooftop.jpg"
            alt="Equipo técnico de PROSERGUA en obra"
            fill
            priority
            sizes="100vw"
            className="object-cover [clip-path:polygon(8%_0,100%_0,100%_100%,0%_100%)]"
          />
          <div className="absolute inset-0 bg-secondary/55 [clip-path:polygon(8%_0,100%_0,100%_100%,0%_100%)]" />
        </div>
      </div>

      <Container className="relative py-20 sm:py-32 lg:py-40">
        <div className="max-w-xl">
          <span className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-neutral-900">
            {company.tagline}
          </span>
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight tracking-tight text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.35)] sm:text-5xl sm:[text-shadow:none] lg:text-6xl">
            {company.brandName}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-100 [text-shadow:0_1px_3px_rgba(0,0,0,0.35)] sm:[text-shadow:none]">
            Empresa guatemalteca dedicada a brindar soluciones integrales en remodelación,
            construcción, servicios eléctricos, auditorías eléctricas y comercialización de
            suministros para construcción y electricidad.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <LinkButton href="/servicios" variant="primary">
              Ver servicios
            </LinkButton>
            <LinkButton href="/contacto" variant="outline">
              Contáctanos
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
