import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/motion/Reveal";
import ProjectImageLightbox from "@/components/sections/ProjectImageLightbox";
import RelatedServices from "@/components/sections/RelatedServices";
import ContactCTA from "@/components/sections/ContactCTA";
import { projects, getProjectBySlug } from "@/data/projects";
import { getServiceForProject, getServicesForProject } from "@/lib/relations";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  const title = project.title === "Proyecto destacado" ? project.category : project.title;

  return {
    title,
    description: project.summary ?? `${project.category}: proyecto realizado por PROSERGUA.`,
    alternates: {
      canonical: `/proyectos/${project.id}/`,
    },
    openGraph: {
      images: [project.images[0].src],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const hasRealTitle = project.title !== "Proyecto destacado";
  const displayTitle = hasRealTitle ? project.title : project.category;
  const service = getServiceForProject(project);
  const relatedServices = getServicesForProject(project);

  const infoFields = [
    { label: "Cliente", value: project.client },
    { label: "Ubicación", value: project.location },
    { label: "Año", value: project.year },
    { label: "Servicio", value: service?.name },
  ].filter((field): field is { label: string; value: string } => Boolean(field.value));

  return (
    <>
      <section className="bg-secondary py-16 text-white sm:py-24">
        <Container className="flex flex-col gap-5">
          <Reveal>
            <Breadcrumb
              light
              items={[
                { label: "Inicio", href: "/" },
                { label: "Proyectos", href: "/proyectos" },
                { label: displayTitle },
              ]}
            />
          </Reveal>
          <Reveal delay={80}>
            <span className="text-sm font-bold text-primary">{project.category}</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-3xl font-heading text-3xl font-extrabold sm:text-5xl">{displayTitle}</h1>
          </Reveal>
          {project.summary && (
            <Reveal delay={160}>
              <p className="max-w-2xl text-lg text-gray-200">{project.summary}</p>
            </Reveal>
          )}
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col gap-16">
          {infoFields.length > 0 && (
            <Reveal>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-y border-gray-100 py-8 sm:grid-cols-4">
                {infoFields.map((field) => (
                  <div key={field.label} className="flex flex-col gap-1">
                    <dt className="text-sm font-semibold text-gray-500">{field.label}</dt>
                    <dd className="text-base font-semibold text-neutral-900">{field.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}

          {project.sections && project.sections.length > 0 && (
            <div className="grid gap-10 sm:grid-cols-2">
              {project.sections.map((section, index) => (
                <Reveal key={section.heading} delay={index * 90}>
                  <div className="flex flex-col gap-3">
                    <h2 className="font-heading text-xl font-bold text-neutral-900">{section.heading}</h2>
                    <p className="text-base leading-relaxed text-gray-600">{section.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-6">
            <Reveal>
              <SectionHeading title="Galería" />
            </Reveal>
            <Reveal delay={80}>
              <ProjectImageLightbox images={project.images} />
            </Reveal>
          </div>

          <RelatedServices services={relatedServices} />
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
