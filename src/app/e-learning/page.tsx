import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "E-Learning Portal",
  description: "Access courses, live classrooms, assignments, and grades on the HEROCK E-VILLE learning portal.",
};

const portalFeatures = [
  "Course enrolment & structured learning paths",
  "Video lessons and recorded lectures",
  "Live virtual classrooms",
  "Assignments, quizzes, and online examinations",
  "Grades and attendance tracking",
  "Discussion forums and student communities",
  "Digital certificates and badges",
  "Parent progress visibility (secondary)",
];

export default function ELearningPage() {
  return (
    <>
      <PageHero
        eyebrow="E-Learning Portal"
        title="Your campus, wherever you are"
        description="The student and parent portals will connect to our Moodle learning platform for courses, live classes, assessments, and certificates."
        ctaHref="/admissions"
        ctaLabel="Apply for Access"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy">Portal features</h2>
            <ul className="mt-6 space-y-3">
              {portalFeatures.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div id="parents" className="space-y-4">
            <div className="rounded-lg bg-navy p-6 text-white">
              <h3 className="text-lg font-semibold">Student Login</h3>
              <p className="mt-2 text-sm text-white/70">
                Portal launch is in progress. Enrolled students will receive credentials after
                admissions confirmation.
              </p>
              <ButtonLink href="/contact" className="mt-5">
                Contact Admissions
              </ButtonLink>
            </div>
            <div className="border border-line bg-surface-raised p-6">
              <h3 className="text-lg font-semibold text-navy">Parent Portal</h3>
              <p className="mt-2 text-sm text-muted">
                Parents of secondary learners will be able to track performance, attendance, fee
                status, and communicate with teachers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
