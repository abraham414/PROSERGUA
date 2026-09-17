import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import ServicesInteractive from "@/components/sections/ServicesInteractive";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Clients from "@/components/sections/Clients";
import ClosingStatement from "@/components/sections/ClosingStatement";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesInteractive />
      <Stats />
      <Projects />
      <Clients />
      <ClosingStatement />
      <ContactCTA />
    </>
  );
}
