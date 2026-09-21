import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Reveal from "@/components/motion/Reveal";
import ProjectImageLightbox from "@/components/sections/ProjectImageLightbox";
import RelatedProjects from "@/components/sections/RelatedProjects";
import ContactCTA from "@/components/sections/ContactCTA";
import { getServiceBySlug, services } from "@/data/services";
import { company } from "@/data/company";
import { getProjectsForService, getServiceGalleryImages } from "@/lib/relations";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const highlightedValues = ["Calidad", "Seguridad", "Personal calificado"];
const highlights = company.valueProposition.filter((item) => highlightedValues.includes(item.title));

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Servicio no encontrado" };
  }

  return {
    title: service.name,
    description: service.shortDescription,
    alternates: {
      canonical: `/servicios/${service.slug}/`,
    },
    openGraph: {
      images: [service.image.src],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = getProjectsForService(service);
  const galleryImages = getServiceGalleryImages(service);

  return (
    <>
      <section className="relative overflow-hidden bg-secondary py-16 text-white sm:py-24">
        <div className="absolute inset-0">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/85" />
        </div>
        <Container className="relative flex flex-col gap-5">
          <Reveal>
            <Breadcrumb
              light
              items={[
                { label: "Inicio", href: "/" },
                { label: "Servicios", href: "/servicios" },
                { label: service.name },
              ]}
            />
          </Reveal>
          <Reveal delay={80}>
            <span className="text-sm font-bold text-primary">{service.category}</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="max-w-2xl font-heading text-4xl font-extrabold sm:text-5xl">
              {service.name}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-2xl text-lg text-gray-200">{service.shortDescription}</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col gap-16">
          <Reveal>
            <p className="max-w-3xl text-lg leading-relaxed text-gray-600">{service.description}</p>
          </Reveal>

          {service.bullets && service.bullets.length > 0 && (
            <div className="flex flex-col gap-8">
              <Reveal>
                <SectionHeading title="Qué incluye este servicio" />
              </Reveal>
              <div className="grid gap-6 sm:grid-cols-2">
                {service.bullets.map((bullet, index) => (
                  <Reveal
                    key={bullet}
                    delay={index * 80}
                    className="flex items-start gap-4 border-l-2 border-primary pl-5"
                  >
                    <span className="font-heading text-2xl font-extrabold text-gray-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1 text-base font-semibold text-neutral-900">{bullet}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {galleryImages.length > 0 && (
            <div className="flex flex-col gap-6">
              <Reveal>
                <SectionHeading title="Trabajos realizados" />
              </Reveal>
              <Reveal delay={80}>
                <ProjectImageLightbox images={galleryImages} />
              </Reveal>
            </div>
          )}

          {relatedProjects.length > 0 && (
            <RelatedProjects title="Proyectos relacionados" projects={relatedProjects} />
          )}

          {highlights.length > 0 && (
            <Reveal>
              <div className="grid gap-8 border-t border-gray-100 pt-12 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <h3 className="font-heading text-lg font-bold text-neutral-900">{item.title}</h3>
                    <p className="text-base leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
