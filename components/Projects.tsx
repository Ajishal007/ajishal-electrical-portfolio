import Section from "./Section";
import { featuredProjects, otherProjects } from "@/data/content";

export default function Projects() {
  return (
    <Section id="work" title="Projects">
      <ol className="divide-y-2 divide-ink/80 border-y-2 border-ink/80">
        {featuredProjects.map((p) => (
          <li key={p.name} className="grid gap-6 py-8 md:grid-cols-[13rem_1fr] md:gap-10">
            <div>
              <p className="text-3xl font-semibold text-accent">{p.lod ?? p.scope}</p>
              <p className="mt-2 text-mute">{p.sector}</p>
              <p className="text-mute">{p.location}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{p.name}</h3>
              <ul className="mt-3 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed marker:text-accent">
                {p.contribution.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <li key={t} className="border border-ink/40 px-2.5 py-1 text-sm">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mb-4 mt-12 text-xl font-semibold">Also delivered</h3>
      <ul className="grid gap-6 md:grid-cols-2">
        {otherProjects.map((p) => (
          <li key={p.name} className="border-l-4 border-line pl-5">
            <p className="font-semibold">{p.name}</p>
            <p className="mt-1 text-mute">{p.detail}</p>
            <p className="mt-1 text-sm">{p.tools}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
