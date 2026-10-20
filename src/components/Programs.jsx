import { programs } from "../data/siteContent";


function Programs() {
  return (
    <section id="programs" className="bg-ink py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-display text-3xl font-medium sm:text-4xl">Programs</h2>
          <p className="max-w-sm text-sm text-white/60">
            {programs.length} programs, one hub. Pick the one that matches what you want to build next.
          </p>
        </div>

        <div className="mt-14 divide-y divide-white/10 border-t border-white/10">
          {programs.map((program) => (
            <div
              key={program.id}
              id={program.id}
              className="grid gap-4 py-10 md:grid-cols-[1.4fr_2fr] md:gap-12 scroll-mt-24"
            >
              {/* 1. Image and name */}
              <div>
                <img src={program.image} alt={program.name} className="aspect-video w-full mx-w-sm rounded-lg object-cover" />
                <h3 className="mt-4 font-display text-2xl font-medium leading-snug">
                  {program.name}{" "}
                  {/*<span className="text-amber text-sm font-normal text-white/60">{program.short}</span>*/}
                </h3>
              </div>

              {/* 2. Description and focus areas */}
              <div>
                <p className="max-w-xl text-white/70">{program.description}</p>
                <ul className="mt-6 grid sm:grid-cols-3 gap-2">
                  {program.focusAreas.map((area) => (
                    <li
                      key={area.title}
                      className="rounded-xl border border-white/15 px-2 py-1 text-xs text-white/60"
                    >
                      <h4 className="text-sm font-medium text-white">{area.title}</h4>
                      {/*<p className="text-xs leading-relaxed text-white/60">{area.text}</p>*/}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-white/60">
                  <span className="font-medium text-white">SDGs:</span>{" "}
                  {program.sdgs.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
