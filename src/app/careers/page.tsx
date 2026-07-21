import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the HEROCK E-VILLE ACADEMY team: teaching, academic support, and operations roles.",
};

const openings = [
  {
    title: "Secondary Subject Tutors (Online)",
    type: "Contract",
    detail: "Mathematics, Sciences, English, and Social Sciences.",
  },
  {
    title: "Professional Course Instructors",
    type: "Contract",
    detail: "Data Analytics, Digital Marketing, Cybersecurity, and related fields.",
  },
  {
    title: "Student Success Coordinator",
    type: "Full-time",
    detail: "Support onboarding, engagement, and learner outcomes across cohorts.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Teach. Mentor. Build the future of learning."
        description="We're assembling educators and operators who believe education should be accessible without compromising excellence."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ul className="space-y-4">
          {openings.map((job) => (
            <li
              key={job.title}
              className="flex flex-col gap-4 border-b border-navy/10 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange">
                  {job.type}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-navy">{job.title}</h2>
                <p className="mt-1 text-sm text-muted">{job.detail}</p>
              </div>
              <ButtonLink href="/contact" size="sm" variant="outline">
                Express Interest
              </ButtonLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
