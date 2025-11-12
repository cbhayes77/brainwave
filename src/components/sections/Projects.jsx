// src/components/sections/Projects.jsx
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import Button from "../ui/Button.jsx";
import { projects } from "../../data/projects.js";

export default function Projects({
  limit,
  showViewMore = true,
  title = "My Portfolio",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada",
  headingLevel = "h2",
  headingId = "projects-heading",
}) {
  // Apply limit if specified, otherwise show all projects
  const displayedProjects = limit ? projects.slice(0, limit) : projects;
  const HeadingComponent = headingLevel;

  return (
    <Section aria-labelledby={headingId}>
      <Container>
        {/* Header */}
        <header className="text-center">
          <HeadingComponent id={headingId} className="heading-section">
            {title}
          </HeadingComponent>
          <p className="mt-2 text-white/80">{description}</p>
        </header>

        {/* Grid layout */}
        <ul className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {displayedProjects.map((p) => (
            <li key={p.id}>
              <ProjectCard image={p.image} title={p.title} blurb={p.blurb} href={p.href} />
            </li>
          ))}
        </ul>

        {/* Bottom CTA - only show if there are more projects and showViewMore is true */}
        {showViewMore && limit && projects.length > limit && (
          <div className="mt-10 flex justify-center">
            <Button as="a" href="/portfolio" variant="secondary">
              View More of My Work
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
