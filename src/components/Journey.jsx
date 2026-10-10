import { journey } from "../data/siteContent";

function Journey() {
  return (
    <section className="bg-ink-light py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-medium sm:text-4xl">{journey.headline}</h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {journey.steps.map((step, i) => (
            <li key={step.title} className="border-t border-white/15 pt-5">
              <span className="font-display text-sm text-amber">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-xl font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Journey;
