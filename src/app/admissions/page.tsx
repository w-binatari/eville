import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { admissionFaqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Learn how to apply to HEROCK E-VILLE ACADEMY: requirements, fees, and FAQs.",
};

const steps = [
  "Choose your program pathway (Secondary, Diploma, Professional, or Degree pathway).",
  "Review entry requirements and prepare supporting documents.",
  "Complete the online application and submit required materials.",
  "Receive admissions guidance and fee payment instructions.",
  "Activate your student portal and begin orientation.",
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Begin your journey with Herock E-Ville"
        description="Flexible entry for secondary and tertiary learners. Apply online and start learning from anywhere."
        ctaHref="/contact"
        ctaLabel="Request guidance"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-navy">Requirements</h2>
            <div className="mt-8 space-y-8">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                  Secondary entry
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  Age-appropriate placement assessment, prior school records where available, and a
                  completed application with parent/guardian details for junior learners.
                </p>
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                  Tertiary & professional
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  Relevant secondary or prior tertiary credentials, program-specific prerequisites,
                  and a personal statement for selected diploma and professional tracks.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-navy px-6 py-8 text-white sm:px-8">
            <h2 className="font-serif text-2xl">How to apply</h2>
            <ol className="mt-6 space-y-5">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4 text-sm leading-relaxed text-white/70">
                  <span className="font-serif text-lg text-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <ButtonLink href="/contact" className="mt-8">
              Start application
            </ButtonLink>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-line pt-12 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium text-navy">Tuition & fees</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Fee schedules vary by pathway and cohort. Contact admissions for current term pricing,
              payment plans, and what is included.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-navy">Scholarships & aid</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Limited merit and need-based support is available each cycle. Indicate interest on your
              application to receive scholarship guidance.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-serif text-3xl text-navy">Questions</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {admissionFaqs.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none font-medium text-navy">
                  <span className="flex items-center justify-between gap-4">
                    {item.q}
                    <span className="text-muted transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
