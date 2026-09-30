import Section from "./Section";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative ml-2 border-l-2 border-ink/70">
        {experience.map((job, i) => (
          <li key={job.org + job.period} className="relative pb-12 pl-8 last:pb-0">
            <span
              aria-hidden
              className={`absolute -left-[9px] top-2 h-4 w-4 border-2 border-ink ${
                i === 0 ? "bg-accent" : "bg-paper"
              }`}
            />
            <p className="text-sm text-mute">{job.period}</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">
              {job.role}, {job.org}
            </h3>
            <p className="text-mute">{job.place}</p>
            <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed marker:text-accent">
              {job.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
