import { testimonials } from "../data/siteContent";

function QuoteMark() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <path
        d="M0 24V14.4C0 6.4 4.8 1.6 12.8 0L14.4 3.2C9.6 4.8 7.2 8 7.2 12.8H12.8V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 30.4 0L32 3.2C27.2 4.8 24.8 8 24.8 12.8H30.4V24H17.6Z"
        fill="var(--color-amber)"
      />
    </svg>
  );
}

function Testimonials() {
  return (
    <section id="stories" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
          In their own words
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col">
              <QuoteMark />
              <blockquote className="mt-4 flex-1 font-display text-lg leading-snug text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium text-ink">{t.name}</span>
                <span className="block text-slate-soft">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
