import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Button from "../ui/Button.jsx";

export default function FinalCTA() {
  return (
    <Section aria-labelledby="cta-heading" className="bg-gradient-to-b from-[#0a0a0b] to-[#1a1a1d] text-center py-20">
      <Container>
        <h2 id="cta-heading" className="heading-cta">
          Like what you see?
        </h2>
        <p className="mt-3 body-default max-w-prose mx-auto">Contact me and let's chat.</p>
        <div className="mt-8 flex-wrap justify-center gap-4">
          <Button as="a" href="/contact" variant="primary">
            Contact Me
          </Button>
        </div>
      </Container>
    </Section>
  );
}
