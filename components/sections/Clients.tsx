import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { clients } from "@/data/clients";
import type { Client } from "@/types";

function ClientGrid({ items, fit }: { items: Client[]; fit: "cover" | "contain" }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
      {items.map((client) => (
        <div key={client.name} className="group flex w-28 flex-none flex-col items-center gap-2 sm:w-32">
          <div
            className={`relative h-16 w-full overflow-hidden rounded-button grayscale transition-all duration-300 group-hover:grayscale-0 ${
              fit === "contain" ? "bg-gray-50 p-2" : ""
            }`}
          >
            <Image
              src={client.image.src}
              alt={client.image.alt}
              fill
              sizes="160px"
              className={fit === "contain" ? "object-contain" : "object-cover"}
            />
          </div>
          <span className="text-center text-xs font-medium text-gray-500">{client.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function Clients() {
  const governmentClients = clients.filter((client) => client.type === "government");
  const brandClients = clients.filter((client) => client.type === "brand");

  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeading eyebrow="Confianza" title="Han confiado en PROSERGUA" align="center" />
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col gap-4">
            <h3 className="text-center text-sm font-bold text-secondary">
              Instituciones de gobierno
            </h3>
            <ClientGrid items={governmentClients} fit="cover" />
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="flex flex-col gap-4">
            <h3 className="text-center text-sm font-bold text-secondary">
              Clientes y aliados comerciales
            </h3>
            <ClientGrid items={brandClients} fit="contain" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
