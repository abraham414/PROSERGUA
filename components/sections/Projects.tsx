import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  const preview = projects.slice(0, 6);
  const total = String(preview.length).padStart(2, "0");

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Nuestro trabajo" title="Proyectos destacados" />
            <LinkButton href="/proyectos" variant="secondary">
              Ver galería completa
            </LinkButton>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 90}>
              <Link
                href={`/proyectos#${project.id}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                aria-label={`Ver en la galería: ${project.category}`}
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-900/85 to-transparent p-5">
                  <span className="text-xs font-bold text-primary">
                    {String(index + 1).padStart(2, "0")} / {total}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-white">{project.category}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
