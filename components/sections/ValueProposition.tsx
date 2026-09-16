import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

export default function ValueProposition() {
  return (
    <section className="bg-secondary py-20 text-white sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Por qué elegirnos" title="Propuesta de valor" light align="center" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {company.valueProposition.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 border-l-2 border-primary pl-5">
              <h3 className="font-heading text-lg font-bold text-primary">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
