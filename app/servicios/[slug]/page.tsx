import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { getServiceBySlug, services } from "@/data/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

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
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section className="relative overflow-hidden bg-secondary py-20 text-white sm:py-28">
        <div className="absolute inset-0">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <Container className="relative flex flex-col gap-4">
          <Reveal>
            <Link href="/servicios" className="text-sm font-semibold text-primary hover:underline">
              ← Volver a servicios
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-2xl font-heading text-4xl font-extrabold sm:text-5xl">
              {service.name}
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <p className="text-lg text-gray-600">{service.description}</p>
            </Reveal>
            {service.bullets && (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.bullets.map((bullet, index) => (
                  <Reveal
                    key={bullet}
                    as="li"
                    delay={index * 70}
                    className="flex items-start gap-3 rounded-card bg-gray-50 p-4 text-sm font-medium text-neutral-900"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {bullet}
                  </Reveal>
                ))}
              </ul>
            )}
            <Reveal delay={120}>
              <div className="mt-10">
                <LinkButton href="/contacto" variant="secondary">
                  Solicitar información
                </LinkButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <aside className="flex flex-col gap-4">
              <h2 className="font-heading text-lg font-bold text-neutral-900">Otros servicios</h2>
              <ul className="flex flex-col gap-3">
                {otherServices.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/servicios/${item.slug}`}
                      className="block rounded-button border border-gray-100 px-4 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-secondary hover:text-secondary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
