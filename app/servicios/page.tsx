import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Herrería, tubería hidráulica, construcción, remodelaciones, electricidad, auditorías eléctricas y comercialización de suministros.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-secondary py-20 text-white sm:py-28">
        <Container className="flex flex-col gap-4">
          <Reveal>
            <span className="text-sm font-bold text-primary">Áreas principales</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-2xl font-heading text-4xl font-extrabold sm:text-5xl">
              Servicios
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-2xl text-lg text-gray-200">
              Soluciones integrales en remodelación, construcción, servicios eléctricos,
              auditorías eléctricas y comercialización de suministros.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <ServicesGrid ctaLabel="Contáctanos" />
        </Container>
      </section>
    </>
  );
}
