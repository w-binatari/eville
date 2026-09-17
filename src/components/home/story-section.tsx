import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

export function StorySection() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-full">
          <Image
            src="/images/campus/pupil-reading.jpg"
            alt="African schoolboy reading in class"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-16 sm:px-10 lg:px-14 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
            Who we are
          </p>
          <div className="rule-accent mt-5" />
          <h2 className="mt-6 font-serif text-3xl leading-tight text-navy md:text-4xl">
            Education that travels with you, and still feels like home.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            We built Herock E-Ville for learners across cities and continents: rigorous secondary
            curricula, tertiary diplomas, and professional courses delivered through live classrooms,
            digital libraries, and continuous mentoring.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Our vision is simple: accessible, innovative education that prepares people to lead with
            skill and integrity.
          </p>
          <div className="mt-8">
            <ButtonLink href="/about" variant="text">
              Read our story →
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
