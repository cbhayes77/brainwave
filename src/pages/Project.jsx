import { useParams, useNavigate } from "react-router-dom";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import SEO from "../components/ui/SEO.jsx";
import { projects } from "../data/projects.js";
import { FaArrowLeft } from "react-icons/fa";

export default function Project() {
  const { slug } = useParams(); // expects id like "p1", "p2"...
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <Section>
        <Container>
          <h1 className="heading-section">Project not found</h1>
          <p className="mt-2 body-default">We couldn't find a project at /portfolio/{slug}</p>
          <div className="mt-6">
            <Button onClick={() => navigate(-1)} variant="secondary" size="sm">
              Go Back
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <SEO
        title={project.title}
        description={
          project.blurb || `${project.title} - A project by CB Hayes showcasing UX design and development skills.`
        }
        url={`/portfolio/${project.id}`}
        image={project.image}
      />
      <Container>
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Portfolio", href: "/portfolio" }, { label: project.title }]}
        />

        <nav className="body-small subheading-muted">
          <Button onClick={() => navigate(-1)} variant="link" leftIcon={<FaArrowLeft className="w-4 h-4" />}>
            Go Back
          </Button>
        </nav>

        <header className="mt-4 max-w-3xl">
          <h1 className="heading-page">{project.title}</h1>
          <p className="mt-2 body-default">{project.blurb}</p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card-base rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} hero`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="subheading-primary">Overview</h2>
            <p className="mt-2 body-default">
              Replace this with a short case study: problem, your role, tools, constraints, outcome.
            </p>

            <h3 className="mt-6 font-semibold">Highlights</h3>
            <ul className="mt-2 list-disc pl-5 body-default space-y-1">
              <li>Goal / KPI impact</li>
              <li>Key UX or dev contribution</li>
              <li>Notable constraint or insight</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
