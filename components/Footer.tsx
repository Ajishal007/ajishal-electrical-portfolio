import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink/80">
      <div className="mx-auto max-w-6xl px-5 py-6 text-sm text-mute sm:px-8">
        {profile.name}, {profile.title}. {profile.location}.
      </div>
    </footer>
  );
}
