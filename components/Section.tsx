export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <h2 className="mb-10 border-b-2 border-ink pb-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
