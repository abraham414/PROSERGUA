import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ProjectsExplorer from "@/components/sections/ProjectsExplorer";
import Reveal from "@/components/motion/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Galería de proyectos destacados realizados por PROSERGUA.",
  alternates: {
    canonical: "/proyectos/",
  },
};

export default function ProyectosPage() {
  return (
    <>
      <section className="bg-secondary py-20 text-white sm:py-28">
        <Container className="flex flex-col gap-4">
          <Reveal>
            <span className="text-sm font-bold text-primary">Nuestro trabajo</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-2xl font-heading text-4xl font-extrabold sm:text-5xl">
              Proyectos destacados
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-2xl text-lg text-gray-200">
              Proyectos reales que hemos ejecutado para clientes institucionales en Guatemala:
              esto es exactamente lo que hicimos, con nuestras propias fotografías.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <ProjectsExplorer projects={projects} />
        </Container>
      </section>
    </>
  );
}
