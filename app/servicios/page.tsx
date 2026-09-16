import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Herrería, tubería hidráulica, construcción, remodelaciones, electricidad, auditorías eléctricas y comercialización de suministros.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-secondary py-20 text-white sm:py-28">
        <Container className="flex flex-col gap-4">
          <span className="text-sm font-bold text-primary">Áreas principales</span>
          <h1 className="max-w-2xl font-heading text-4xl font-extrabold sm:text-5xl">
            Servicios
          </h1>
          <p className="max-w-2xl text-lg text-gray-200">
            Soluciones integrales en remodelación, construcción, servicios eléctricos,
            auditorías eléctricas y comercialización de suministros.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/servicios/${service.slug}`} className="group block">
                <Card className="flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <h2 className="font-heading text-lg font-bold text-neutral-900 group-hover:text-secondary">
                      {service.name}
                    </h2>
                    <p className="text-sm text-gray-600">{service.shortDescription}</p>
                    <span className="mt-auto pt-3 text-sm font-semibold text-secondary">
                      Ver detalle
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
