import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/content";

const links = [
  { href: "#work", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink/20 bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-mute transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile menu without JavaScript */}
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded border border-ink/40 px-3 py-1.5 text-sm">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-48 border border-ink/30 bg-surface p-3 shadow-lg">
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="block text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="border-t border-ink/20 pt-3">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </details>
      </nav>
    </header>
  );
}
