import Section from "./Section";
import { about, facts } from "@/data/content";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div className="max-w-prose space-y-5 text-lg leading-relaxed">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="space-y-6">
          {facts.map((f) => (
            <div key={f.value} className="border-l-4 border-accent pl-5">
              <dt className="text-4xl font-semibold tracking-tight">{f.value}</dt>
              <dd className="mt-1 text-mute">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
