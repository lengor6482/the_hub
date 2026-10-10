import { about } from "../data/siteContent";

function About() {
  return (
    <section id="about" className="bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
          <h2 className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            {about.headline}
          </h2>
          <p className="max-w-md text-slate-soft">{about.body}</p>
        </div>

        <div className="mt-16 grid gap-0 divide-y divide-ink/10 border-y border-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {about.pillars.map((pillar) => (
            <div key={pillar.title} className="py-8 sm:px-8 sm:py-10">
              <h3 className="font-display text-xl font-medium text-ink">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-soft">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
