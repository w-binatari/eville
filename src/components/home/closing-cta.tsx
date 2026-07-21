import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/site";

export function ClosingCta() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <p className="text-[11px] uppercase tracking-[0.22em] text-orange">Next step</p>
        <p className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-navy md:text-4xl lg:text-5xl">
          {site.motto}
        </p>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">
          Whether you are preparing for exams, building a career skill, or guiding a child through
          secondary school, there is a place for you here.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/admissions">Apply now</ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Talk to admissions
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
