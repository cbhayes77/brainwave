import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import SEO from "../components/ui/SEO.jsx";
import TechStack from "../components/sections/TechStack.jsx";
import Projects from "../components/sections/Projects.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import FinalCTA from "../components/sections/FinalCTA.jsx";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <SEO
        title="Home"
        description="YOUR NAME HERE - UX Designer & Frontend Developer. Crafting digital experiences that combine beautiful design with seamless functionality."
        url="/"
      />
      <Section
        as="section"
        aria-labelledby="intro-heading"
        className="min-h-[80vh] grid place-items-center bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1d]"
      >
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Text Content - 2/3 */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h1 id="intro-heading" className="heading-hero">
                Hi, my name is Joe Anonymous. I create things for the web
              </h1>

              <h2 className="mt-4 max-w-prose lg:mx-0 mx-auto body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget
                finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere
                malesuada
              </h2>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap lg:justify-start justify-center gap-4">
                <Button as="a" href="/portfolio" aria-label="Check out my work" variant="primary">
                  Check Out My Work
                </Button>
                <Button as="a" href="/resume" aria-label="Download my resume" variant="secondary">
                  View My Resume
                </Button>
              </div>

              {/* Social links with SVG icons */}
              <nav aria-label="Social links" className="mt-6">
                <ul className="flex items-center lg:justify-start justify-center gap-6 text-caption">
                  <li>
                    <Button
                      as="a"
                      href="https://www.linkedin.com/in/placeholder"
                      target="_blank"
                      rel="noreferrer"
                      variant="link"
                      leftIcon={<FaLinkedin className="w-5 h-5" />}
                      aria-label="LinkedIn (opens in a new tab)"
                    >
                      LinkedIn
                    </Button>
                  </li>

                  <li>
                    <Button
                      as="a"
                      href="https://github.com/placeholder"
                      target="_blank"
                      rel="noreferrer"
                      variant="link"
                      leftIcon={<FaGithub className="w-5 h-5" />}
                      aria-label="GitHub (opens in a new tab)"
                    >
                      GitHub
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Circular Image - 1/3 */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="w-64 h-64 lg:w-80 lg:h-80 card-avatar">
                <img
                  src="https://picsum.photos/320?random=100"
                  alt="Joe Anonymous"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <TechStack />
      <Projects limit={6} />
      <Testimonials limit={3} />
      <FinalCTA />
    </div>
  );
}
