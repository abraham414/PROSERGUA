import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { company } from "@/data/company";
import { services } from "@/data/services";

export default function Philosophy() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <SectionHeading eyebrow="Filosofía empresarial" title="Misión, visión y valores" align="center" />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal delay={80}>
            <div className="h-full rounded-card border border-gray-100 bg-white p-8 shadow-card">
              <h3 className="font-heading text-xl font-bold text-secondary">Misión</h3>
              <p className="mt-3 text-gray-600">{company.mission}</p>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="h-full rounded-card border border-gray-100 bg-white p-8 shadow-card">
              <h3 className="font-heading text-xl font-bold text-secondary">Visión</h3>
              <p className="mt-3 text-gray-600">{company.vision}</p>
              <p className="mt-3 text-sm text-gray-500">
                En la práctica: seguir ampliando nuestras {services.length} áreas de servicio y la
                lista de instituciones que confían en nuestro trabajo.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {company.values.map((value, index) => (
            <Reveal key={value.name} delay={index * 90}>
              <div className="h-full rounded-card bg-gray-50 p-6">
                <h4 className="font-heading text-lg font-bold text-neutral-900">{value.name}</h4>
                <p className="mt-2 text-base text-gray-600">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
