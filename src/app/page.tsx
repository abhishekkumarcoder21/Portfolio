import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Engineering from "@/components/Engineering";
import Skills from "@/components/Skills";
import ProofOfWork from "@/components/ProofOfWork";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-ink min-h-screen selection:bg-accent selection:text-ink">
      <Navigation />
      <Hero />
      <Projects />
      <Engineering />
      <Skills />
      <ProofOfWork />
      <Journey />
      <Contact />
    </main>
  );
}
