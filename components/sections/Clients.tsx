import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { clients } from "@/data/clients";

export default function Clients() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Confianza"
          title="Clientes que han confiado en nosotros"
          align="center"
        />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
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
              <span className="text-center text-xs font-semibold text-gray-600">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
