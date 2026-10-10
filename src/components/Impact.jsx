import { impact } from "../data/siteContent";

function Impact() {
  return (
    <section id="impact" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
          {impact.headline}
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {impact.stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-amber pl-5">
              <p className="font-display text-4xl font-medium text-ink sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-slate-soft">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
