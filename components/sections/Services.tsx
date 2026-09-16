import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServicesGrid from "@/components/sections/ServicesGrid";

export default function Services() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Áreas principales"
          title="Soluciones integrales para cada proyecto"
          align="center"
        />
        <ServicesGrid ctaLabel="Contáctanos" />
      </Container>
    </section>
  );
}
