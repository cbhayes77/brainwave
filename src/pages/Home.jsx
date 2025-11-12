import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import TechStack from "../components/sections/TechStack.jsx";
import Projects from "../components/sections/Projects.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import FinalCTA from "../components/sections/FinalCTA.jsx";

export default function Home() {
  return (
    <div>
      <Section
        as="section"
        className="min-h-[80vh] grid place-items-center text-center bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1d]"
      >
        <Container>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Hi, my name is CB Hayes</h1>
          <p className="mt-4 max-w-prose mx-auto text-white/80 text-lg">
            I'm a full-stack web developer and this is my portfolio
          </p>
          <div className="flex mt-8 flex-wrap justify-center gap-4">
            <Button as="a" href="/portfolio">
              Check Out My Work
            </Button>
            <Button as="a" href="/resume" variant="secondary">
              Download My Resume
            </Button>
          </div>
        </Container>
      </Section>
      <TechStack />
      <Projects limit={3} />
      <Testimonials limit={3} />
      <FinalCTA />
    </div>
  );
}
