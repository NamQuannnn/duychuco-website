import Container from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f2]">
      {/* Decorative glow */}
      <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-[#dff000]/20 blur-3xl" />

      <Container>
        <div className="relative py-14 md:py-16">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#159447]">
            {eyebrow}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#172014] md:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5c6756] md:text-lg md:leading-8">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}