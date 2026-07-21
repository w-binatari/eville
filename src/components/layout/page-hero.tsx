import { ButtonLink } from "@/components/ui/button-link";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
}: PageHeroProps) {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        {eyebrow && (
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted">{eyebrow}</p>
        )}
        <div className="rule-accent mt-5" />
        <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight text-navy md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
        {ctaHref && ctaLabel && (
          <div className="mt-8">
            <ButtonLink href={ctaHref}>{ctaLabel}</ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
