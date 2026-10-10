import { cta } from "../data/siteContent";

function CTA() {
  return (
    <section id="contact" className="bg-amber py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-lg">
          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
            {cta.headline}
          </h2>
          <p className="mt-3 text-ink/70">{cta.sub}</p>
        </div>

        <div className="flex flex-shrink-0 flex-wrap gap-4">
          <a
            href={cta.primaryCta.href}
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {cta.primaryCta.label}
          </a>
          <a
            href={cta.secondaryCta.href}
            className="rounded-full border border-ink/30 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/60"
          >
            {cta.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
