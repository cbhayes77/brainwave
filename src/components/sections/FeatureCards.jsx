import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import FeatureCard from "../ui/FeatureCard.jsx";
import { features } from "../../data/features.js";

export default function FeatureCards() {
  return (
    <Section aria-labelledby="features-heading">
      <Container>
        <header className="text-center">
          <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold">
            Powerful features, simple UI
          </h2>
          <p className="mt-2 text-white/80">
            Everything you need to understand, create, and collaborate — without complexity.
          </p>
        </header>
        {/* Cards grid */}
        <ul className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4" role="list">
          {features.map((f) => (
            <li key={f.id}>
              <FeatureCard icon={f.icon} title={f.title} blurb={f.blurb} href={f.href} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
