import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import ValueProposition from "@/components/sections/ValueProposition";
import Philosophy from "@/components/sections/Philosophy";
import Projects from "@/components/sections/Projects";
import Clients from "@/components/sections/Clients";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ValueProposition />
      <Philosophy />
      <Projects />
      <Clients />
      <ContactCTA />
    </>
  );
}
