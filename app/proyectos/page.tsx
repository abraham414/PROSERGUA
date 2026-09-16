import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ProjectGallery from "@/components/sections/ProjectGallery";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Galería de proyectos destacados realizados por PROSERGUA.",
};

export default function ProyectosPage() {
  return (
    <>
      <section className="bg-secondary py-20 text-white sm:py-28">
        <Container className="flex flex-col gap-4">
          <span className="text-sm font-bold text-primary">Nuestro trabajo</span>
          <h1 className="max-w-2xl font-heading text-4xl font-extrabold sm:text-5xl">
            Proyectos destacados
          </h1>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <ProjectGallery projects={projects} />
        </Container>
      </section>
    </>
  );
}
