import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import FeatureCards from "../components/sections/FeatureCards.jsx";

export default function Home() {
  return (
    <main id="main-content">
      <Section
        as="section"
        className="min-h-[80vh] grid place-items-center text-center bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1d]"
      >
        <Container>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Build smarter with modern AI
          </h1>
          <p className="mt-4 max-w-prose mx-auto text-white/80 text-lg">
            Ask questions, analyze content, and create faster-all in a simple,
            elegant UI.
          </p>
          <div className="flex mt-8 flex-wrap justify-center gap-4">
            <a
              href="/sign-up"
              className="rounded-lg bg-white text-black px-6 py-3 font-medium
                hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 hover:scale-[1.05]"
            >
              Get started
            </a>
            <a
              href="/how-to-use"
              className="rounded-lg bg-white text-black px-6 py-3 font-medium
                hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 hover:scale-[1.05]"
            >
              How it works
            </a>
          </div>
        </Container>
      </Section>
      <FeatureCards />
    </main>
  );
}
