import { story, mission, values, team } from "../data/siteContent";

// A small reusable component: every section shares the same frame
function Section({ id, title, dark = false, children }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 ${dark ? "bg-ink text-white" : "bg-paper text-slate"}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl font-medium sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <>
      {/* Page header */}
      <header className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-widest text-amber">About us</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium sm:text-5xl">
            {story.headline}
          </h1>
          <p className="mt-6 text-lg text-white/60">{story.motto}</p>
        </div>
      </header>

      {/* Our story */}
      <Section id="story" title="Our story">
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-slate-soft">
          {story.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </Section>

      {/* Mission & vision */}
      <Section id="mission" title="Mission & vision" dark>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-sm uppercase tracking-widest text-amber">Mission</h3>
            <p className="mt-4 text-white/80">{mission.mission}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-sm uppercase tracking-widest text-amber">Vision</h3>
            <p className="mt-4 text-white/80">{mission.vision}</p>
          </div>
        </div>
      </Section>

      {/* Core values */}
      <Section id="values" title="Core values">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div key={value.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="font-display text-2xl text-coral">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-medium text-ink">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-soft">{value.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section id="team" title="Our team" dark>
        <div className="mx-auto max-w-sm text-center">
          <div className="rounded-xl border border-white/10 bg-white/5 py-3 text-sm text-white/60">
            {team.board}
          </div>
          <div className="mx-auto h-6 w-px bg-white/20" />
          <div className="rounded-xl bg-amber px-6 py-4 text-ink">
            <p className="font-medium">{team.lead.name}</p>
            <p className="text-sm">{team.lead.role}</p>
          </div>
          <div className="mx-auto h-8 w-px bg-white/20" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.units.map((unit) => (
            <div key={unit.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-xl">{unit.title}</h3>
              <p className="mt-1 text-sm font-medium text-amber">{unit.lead}</p>
              {unit.roles.length > 0 && (
                <ul className="mt-4 space-y-1 text-sm text-white/60">
                  {unit.roles.map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

export default About;