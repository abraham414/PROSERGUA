import Image from "next/image";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Reveal from "@/components/motion/Reveal";
import { services } from "@/data/services";
import type { Service } from "@/types";

const categoryOrder = ["Construcción y estructuras", "Eléctrico", "Suministros"];

function groupByCategory(items: Service[]): { category: string; items: Service[] }[] {
  return categoryOrder
    .map((category) => ({ category, items: items.filter((item) => item.category === category) }))
    .filter((group) => group.items.length > 0);
}

interface ServicesGridProps {
  ctaLabel: string;
}

export default function ServicesGrid({ ctaLabel }: ServicesGridProps) {
  const groups = groupByCategory(services);

  return (
    <div className="flex flex-col gap-12">
      {groups.map((group, groupIndex) => (
        <div key={group.category} className="flex flex-col gap-6">
          <Reveal>
            <h2 className="text-sm font-bold text-secondary">{group.category}</h2>
          </Reveal>
          <div className="flex flex-wrap gap-6">
            {group.items.map((service, itemIndex) => (
              <Reveal
                key={service.slug}
                delay={((groupIndex * 4 + itemIndex) % 4) * 80}
                className="w-full flex-none sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <Link href={`/servicios/${service.slug}`} prefetch={false} className="group block h-full">
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
                      <p className="text-base text-gray-600">{service.shortDescription}</p>
                      <span className="mt-auto pt-3 text-sm font-semibold text-secondary">
                        Ver más
                      </span>
                    </div>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      ))}

      <Reveal>
        <Link href="/contacto" prefetch={false} className="group block">
          <Card className="flex flex-col items-start gap-2 border-2 border-dashed border-secondary/30 bg-transparent p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-heading text-lg font-bold text-secondary">
                ¿Necesitas algo más?
              </h3>
              <p className="text-base text-gray-600">
                Cuéntanos qué necesitas y te ayudamos a resolverlo.
              </p>
            </div>
            <span className="text-sm font-semibold text-secondary group-hover:underline">
              {ctaLabel}
            </span>
          </Card>
        </Link>
      </Reveal>
    </div>
  );
}
