interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-brand-bg/30">
      <div className="text-center px-6 py-16">
        <h1 className="font-philosopher text-3xl md:text-4xl font-bold text-brand-dark mb-3">
          {title}
        </h1>
        <p className="font-philosopher text-base text-black/60 max-w-sm mx-auto">
          This page is coming soon. Continue prompting to fill in this section.
        </p>
      </div>
    </main>
  );
}
