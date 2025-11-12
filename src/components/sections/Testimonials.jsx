import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import TestimonialCard from "../ui/TestimonialCard.jsx";
import { testimonials } from "../../data/testimonials.js";

export default function Testimonials({ headingLevel = "h2", mode = "grid", limit }) {
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;
  const HeadingComponent = headingLevel;

  return (
    <Section aria-labelledby="testimonials-heading">
      <Container>
        <header className="text-center">
          <HeadingComponent id="testimonials-heading" className="heading-section">
            Testimonials
          </HeadingComponent>
          <p className="mt-2 text-white/80">A few quotes from people I've worked with or worked for.</p>
        </header>

        {/* Cards */}
        {mode === "grid" ? (
          <ul className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {displayedTestimonials.map((t) => (
              <li key={t.id}>
                <TestimonialCard quote={t.quote} author={t.author} role={t.role} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 overflow-x-auto" aria-label="Testimonials List">
            <ul calssName="flex snap-x snap-mandatory gap-4 pr-4" role="list">
              {displayedTestimonials.map((t) => (
                <li key={t.id} className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] mb-4">
                  <TestimonialCard quote={t.quote} author={t.author} role={t.role} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </Section>
  );
}
