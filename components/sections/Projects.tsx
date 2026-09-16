import Image from "next/image";
import Link from "next/link";
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
            <Link
              key={project.id}
              href={`/proyectos#${project.id}`}
              className="group relative aspect-square overflow-hidden rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              aria-label={`Ver en la galería: ${project.category}`}
            >
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900/80 to-transparent px-3 pb-2 pt-6">
                <span className="text-xs font-semibold text-white">{project.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
