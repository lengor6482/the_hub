import { programs } from "../data/siteContent";

const accents = ["var(--color-amber)", "var(--color-coral)"];

function Programs() {
  return (
    <section id="programs" className="bg-ink py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">Programs</h2>
          <p className="max-w-sm text-sm text-white/60">
            Five tracks, one hub. Pick the one that matches what you want to build next.
          </p>
        </div>

        <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
          {programs.map((program, i) => (
            <div
              key={program.name}
              className="grid gap-4 py-10 md:grid-cols-[1.4fr_2fr] md:gap-12 "
            >
              <div>
                
                <img src={program.image} alt={program.name} className="mt-4 h-50 w-80 rounded-lg object-cover" />
                <h3 className="mt-4 font-display text-2xl font-medium leading-snug">
                  {program.name}
                </h3>
                <p className="mt-2 text-sm text-white/50">{program.length}</p>
              </div>

              <div>
                <p className="max-w-xl text-white/70">{program.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {program.focus.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
