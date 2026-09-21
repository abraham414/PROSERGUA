import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import ProjectCard from "@/components/sections/ProjectCard";
import type { Project } from "@/types";

interface RelatedProjectsProps {
  title: string;
  projects: Project[];
}

export default function RelatedProjects({ title, projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <div className="flex flex-col gap-8">
      <Reveal>
        <SectionHeading title={title} />
      </Reveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
