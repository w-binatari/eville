import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = {
  title: "Refund Policy",
};

export default function RefundPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Refund Policy"
        description="Guidance on tuition refunds and fee adjustments for HEROCK E-VILLE programs."
      />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-14 text-sm leading-relaxed text-muted sm:px-6 lg:px-8">
        <p>
          Refund eligibility depends on program type, cohort start date, and the timing of
          withdrawal. Requests should be submitted in writing to admissions.
        </p>
        <p>
          Administrative and third-party fees may be non-refundable. Detailed refund windows are
          confirmed in each offer letter / enrolment agreement.
        </p>
      </section>
    </>
  );
}
