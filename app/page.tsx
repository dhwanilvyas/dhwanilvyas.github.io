import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Particles from "@/components/Particles";
import FadeInObserver from "@/components/FadeInObserver";

export default function Page() {
  return (
    <>
      <div className="animated-bg" aria-hidden />
      <Particles />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <FadeInObserver />
    </>
  );
}
