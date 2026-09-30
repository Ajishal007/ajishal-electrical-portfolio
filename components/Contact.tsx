import Section from "./Section";
import { profile } from "@/data/content";

export default function Contact() {
  const rows = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
    { label: "LinkedIn", value: "linkedin.com/in/ajishalr05101999", href: profile.linkedin },
    { label: "Resume", value: "Download PDF", href: profile.resume },
  ];
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-xl leading-snug">
        I am looking for Graduate Electrical Design Engineer roles, and I am open to relocation.
        Send me the job description and I will reply.
      </p>
      <dl className="mt-8 max-w-xl divide-y divide-ink/25 border-y-2 border-ink/80">
        {rows.map((r) => (
          <div key={r.label} className="grid grid-cols-[6rem_1fr] gap-3 py-3">
            <dt className="text-mute">{r.label}</dt>
            <dd>
              <a href={r.href} className="break-all underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
                {r.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
