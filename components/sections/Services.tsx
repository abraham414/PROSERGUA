import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Áreas principales"
          title="Soluciones integrales para cada proyecto"
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link key={service.slug} href={`/servicios/${service.slug}`} className="group block">
              <Card className="flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="font-heading text-lg font-bold text-neutral-900 group-hover:text-secondary">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600">{service.shortDescription}</p>
                  <span className="mt-auto pt-3 text-sm font-semibold text-secondary">
                    Ver más
                  </span>
                </div>
              </Card>
            </Link>
          ))}
          <Link href="/contacto" className="group block">
            <Card className="flex h-full min-h-[220px] flex-col items-start justify-center gap-2 border-2 border-dashed border-secondary/30 bg-transparent p-6">
              <h3 className="font-heading text-lg font-bold text-secondary">
                ¿Necesitas algo más?
              </h3>
              <p className="text-sm text-gray-600">
                Cuéntanos qué necesitas y te ayudamos a resolverlo.
              </p>
              <span className="mt-auto pt-3 text-sm font-semibold text-secondary group-hover:underline">
                Contáctanos
              </span>
            </Card>
          </Link>
        </div>
      </Container>
    </section>
  );
}
