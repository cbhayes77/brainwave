import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import { techstack } from "../../data/techstack.js";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

const iconMap = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: FaJs,
  react: FaReact,
  figma: FaFigma,
};

export default function TechStack() {
  return (
    <Section aria-labelledby="techstack-heading" className="py-12 sm:py-16">
      <Container>
        <header className="text-center">
          <h2 id="techstack-heading" className="heading-section">
            My Tech Stack
          </h2>
          <h3 className="mt-2 subheading-muted">Tools I've been using lately</h3>
        </header>
        {/* Grid of Tech Icons */}
        <ul
          className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center"
          role="list of technologies"
        >
          {techstack.map((tech) => {
            const IconComponent = iconMap[tech.iconId];
            return (
              <li key={tech.id} className="text-center">
                <a
                  href={tech.href}
                  title={tech.label}
                  aria-label={tech.label}
                  className="group block"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    {IconComponent && (
                      <IconComponent
                        className="h-12 w-12 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: tech.color }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <span className="mt-2 text-label group-hover:text-white/80 transition-colors">{tech.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
