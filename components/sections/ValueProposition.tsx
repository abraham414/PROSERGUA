import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { company } from "@/data/company";

export default function ValueProposition() {
  return (
    <section className="bg-secondary py-20 text-white sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Por qué elegirnos" title="Propuesta de valor" light align="center" />
        <div className="grid gap-8 sm:grid-cols-2">
          {company.valueProposition.map((item, index) => {
            const isLastOdd =
              index === company.valueProposition.length - 1 && company.valueProposition.length % 2 === 1;
            return (
              <div
                key={item.title}
                className={`flex flex-col gap-2 border-l-2 border-primary pl-5 ${
                  isLastOdd ? "sm:col-span-2 sm:max-w-md sm:mx-auto sm:text-center sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-4" : ""
                }`}
              >
                <h3 className="font-heading text-lg font-bold text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-200">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
