import SingleLineDiagram from "./SingleLineDiagram";
import { profile, titleBlock } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:px-8 sm:pb-20 sm:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-4 text-lg text-mute">{profile.title}</p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-snug sm:text-2xl">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="bg-accent px-5 py-3 font-medium text-paper transition-opacity hover:opacity-90"
            >
              Email me
            </a>
            <a
              href={profile.resume}
              className="border-2 border-ink px-5 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Download resume
            </a>
            <a
              href="#work"
              className="px-5 py-3 font-medium underline decoration-2 underline-offset-4 hover:text-accent"
            >
              See projects
            </a>
          </div>
        </div>

        <div className="border-2 border-ink bg-surface/60">
          <div className="border-b-2 border-ink p-5">
            <SingleLineDiagram />
          </div>
          <dl className="divide-y divide-ink/25 text-sm">
            {titleBlock.map((row) => (
              <div key={row.label} className="grid grid-cols-[6.5rem_1fr] gap-3 px-5 py-2.5">
                <dt className="text-mute">{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
