import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { projects } from "@/data/projects";

export default function Projects() {
  const preview = projects.slice(0, 6);

  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Nuestro trabajo" title="Proyectos destacados" />
          <LinkButton href="/proyectos" variant="secondary">
            Ver galería completa
          </LinkButton>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {preview.map((project) => (
            <div key={project.id} className="relative aspect-square overflow-hidden rounded-card">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
