import { hero } from "../data/siteContent";
import heroPhoto from "../assets/heroPhoto.jpg";

function Hero() {
  return (
    <section id="top" className="relative low-hidden bg-ink text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:py-28">
        <div className="z-10">
          <p className="animate-rise text-sm font-medium text-amber" style={{ animationDelay: "0ms" }}>
            {hero.kicker}
          </p>

          <h1
            className="animate-rise mt-4 font-display text-4xl font-medium leading-[1.1] sm:text-5xl md:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            {hero.headline}
          </h1>

          <p
            className="animate-rise mt-6 max-w-lg text-lg text-white/70"
            style={{ animationDelay: "160ms" }}
          >
            {hero.sub}
          </p>

          <div
            className="animate-rise mt-8 flex flex-wrap gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-amber px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-amber-light"
            >
              {hero.primaryCta.label}
            </a>

            <a
              href={hero.secondaryCta.href}
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/50"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div
          className="animate-rise mx-auto flex w-full justify-center align-items-start md:justify-end md:height-auto"
          style={{ animationDelay: "160ms" }}
        >
          <img
            src={heroPhoto}
            alt="Youth at Aspire! working on a project in the hub"
            className="relative w-full rounded-lg max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;