import Section from "./Section";
import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.name}>
            <h3 className="mb-3 border-b border-ink/40 pb-2 text-lg font-semibold">{g.name}</h3>
            <ul className="space-y-1.5">
              {g.items.map((item) => (
                <li key={item} className="leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
