export default function TestimonialCard({ quote, author, role }) {
  return (
    <figure className="card-testimonial">
      <blockquote className="text-white/90">"{quote}"</blockquote>
      <figcaption className="mt-3 text-sm text-white/70">
        <span className="font-medium text-white/90">{author}</span> - {role}
      </figcaption>
    </figure>
  );
}
