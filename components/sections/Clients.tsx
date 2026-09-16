import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { clients } from "@/data/clients";
import type { Client } from "@/types";

function ClientGrid({ items }: { items: Client[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((client) => (
        <div
          key={client.name}
          className="flex flex-col items-center gap-3 rounded-card border border-gray-200 bg-white p-4"
        >
          <div className="relative h-20 w-full overflow-hidden rounded-button">
            <Image
              src={client.image.src}
              alt={client.image.alt}
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
          <span className="text-center text-xs font-semibold text-gray-600">{client.name}</span>
        </div>
      ))}
    </div>
  );
}

export default function Clients() {
  const governmentClients = clients.filter((client) => client.type === "government");
  const brandClients = clients.filter((client) => client.type === "brand");

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Confianza"
          title="Clientes que han confiado en nosotros"
          align="center"
        />

        <div className="flex flex-col gap-4">
          <h3 className="text-center text-sm font-bold text-secondary">
            Instituciones de gobierno
          </h3>
          <ClientGrid items={governmentClients} />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-center text-sm font-bold text-secondary">
            Clientes y aliados comerciales
          </h3>
          <ClientGrid items={brandClients} />
        </div>
      </Container>
    </section>
  );
}
