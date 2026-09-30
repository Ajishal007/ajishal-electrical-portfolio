import Section from "./Section";
import { education, certifications } from "@/data/content";

export default function Education() {
  return (
    <Section id="education" title="Education and certifications">
      <div className="grid gap-12 md:grid-cols-2">
        <ul className="space-y-8">
          {education.map((e) => (
            <li key={e.degree}>
              <p className="text-sm text-mute">{e.period}</p>
              <h3 className="mt-1 text-lg font-semibold leading-snug">{e.degree}</h3>
              <p>{e.school}</p>
              <p className="text-mute">{e.note}</p>
            </li>
          ))}
        </ul>
        <div>
          <h3 className="mb-3 text-lg font-semibold">Certifications</h3>
          <ul className="list-disc space-y-2 pl-5 marker:text-accent">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
