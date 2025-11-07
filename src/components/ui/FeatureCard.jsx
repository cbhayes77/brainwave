export default function FeatureCard({ icon, title, blurb, href }) {
  return (
    <article
      className="h-[460px] group rounded-xl border-white/10 bg-white/5 p-6 transition hover:bg-white/10 hover:shadow-lg hover:shadow-black/20 focus-within:bg-white/10 focus-within:ring-2 focus-within:ring-white/40"
      tabIndex={-1}
    >
      <div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10" aria-hidden>
        <img src={icon} />
      </div>
      <div className="flex h-[calc(460px- (460px*0.75))] flex-col p-4">
        <h2 className="mt-3 text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-white/80">{blurb}</p>
        <div className="mt-4 text-sm text-white/70 opacity-0 transition group-hover:opacity-100">
          <a
            href={{ href }}
            className="mt-4 inline-block text-sm text-white/70 underline-offset-4 hover:underline
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
          >
            Learn more →
          </a>
        </div>
      </div>
    </article>
  );
}
