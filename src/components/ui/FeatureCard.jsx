export default function FeatureCard({ icon, title, blurb }) {
  return (
    <article
      className="group rounded-xl border-white/10 bg-white/5 p-6 transition hover:bg-white/10 hover:shadow-lg hover:shadow-black/20 focus-within:bg-white/10 focus-within:ring-2 focus-within:ring-white/40"
      tabIndex={-1}
    >
      <div className="text-2xl" aria-hidden>
        {icon}
      </div>
      <h2 className="mt-3 text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-white/80">{blurb}</p>
      <div className="mt-4 text-sm text-white/70 opacity-0 transition group-hover:opacity-100">
        Learn more ➡
      </div>
    </article>
  );
}
