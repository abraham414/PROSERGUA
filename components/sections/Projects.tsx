import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import ProjectCard from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const preview = projects.slice(0, 6);

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
              <ProjectCard project={project} priority={index === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
