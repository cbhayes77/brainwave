// src/components/sections/LogoTicker.jsx
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import { logos } from "../../data/logos.js";

export default function LogoTicker() {
  return (
    <Section aria-labelledby="logos-heading" className="py-10 sm:py-12">
      <Container>
        <h2 id="logos-heading" className="text-center text-sm font-medium text-white/60">
          Trusted by creators and teams
        </h2>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4" role="list">
          {logos.map((l) => (
            <li key={l.id} className="flex items-center gap-2 text-white/80" aria-label={l.label} title={l.label}>
              <span className="text-xl" aria-hidden>
                {l.glyph}
              </span>
              <span className="text-sm">{l.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
