import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { SubjectsReveal } from "@/components/programs/subjects-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import {
  degreePathways,
  diplomaPrograms,
  professionalCourses,
  secondaryLevels,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore secondary education, diploma programs, professional courses, and degree pathways at HEROCK E-VILLE ACADEMY.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Pathways for every stage of learning"
        description="From Junior Secondary to professional certification, structured programs with expert instruction and flexible online delivery."
        ctaHref="/admissions"
        ctaLabel="Apply now"
      />

      <section id="secondary" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="font-serif text-3xl text-navy">Secondary education</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
          Interactive lessons, assessments, and mentoring for academic success, aligned with national
          and international standards.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Junior Secondary
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-navy">
              {secondaryLevels.junior.map((level) => (
                <li key={level} className="border-b border-orange/40 pb-0.5 font-medium">
                  {level}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Senior Secondary
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-navy">
              {secondaryLevels.senior.map((level) => (
                <li key={level} className="border-b border-orange/40 pb-0.5 font-medium">
                  {level}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="mt-14 text-lg font-medium text-navy">Subjects</h3>
        <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
          Hover or tap a subject to see the world it opens into.
        </p>
        <SubjectsReveal />
      </section>

      <section id="tertiary" className="scroll-mt-28 border-y border-line ">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <h2 className="font-serif text-3xl text-navy">Tertiary education</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
            Diploma programs focused on critical thinking, digital competencies, leadership, and
            industry-relevant expertise.
          </p>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {diplomaPrograms.map((program) => (
              <li key={program} className="flex items-baseline justify-between gap-4 py-4">
                <span className="font-medium text-navy">{program}</span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted">Diploma</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-lg font-medium text-navy">Degree pathways</h3>
          <ul className="mt-4 space-y-2 text-[15px] text-muted">
            {degreePathways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="professional" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="font-serif text-3xl text-navy">Professional courses</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
          Short, career-focused certifications for the modern workforce.
        </p>
        <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {professionalCourses.map((course) => (
            <li key={course} className="border-t border-line pt-3 font-medium text-navy">
              {course}
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <ButtonLink href="/admissions">Enquire about enrolment</ButtonLink>
        </div>
      </section>
    </>
  );
}
