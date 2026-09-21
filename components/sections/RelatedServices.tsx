import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import type { Service } from "@/types";

interface RelatedServicesProps {
  services: Service[];
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <div className="flex flex-col gap-8">
      <Reveal>
        <SectionHeading title="Servicios que podrían interesarte" />
      </Reveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={index * 90}>
            <Link href={`/servicios/${service.slug}`} prefetch={false} className="group block h-full">
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
                  <h3 className="font-heading text-lg font-bold text-neutral-900 group-hover:text-secondary">
                    {service.name}
                  </h3>
                  <p className="text-base text-gray-600">{service.shortDescription}</p>
                  <span className="mt-auto pt-3 text-sm font-semibold text-secondary">Ver servicio</span>
                </div>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
