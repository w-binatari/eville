import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Rules governing use of the HEROCK E-VILLE ACADEMY website and learning services."
      />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-14 text-sm leading-relaxed text-muted sm:px-6 lg:px-8">
        <p>
          By accessing our website or enrolling in programs, you agree to use our services lawfully,
          provide accurate information, and respect academic integrity policies including assessment
          rules.
        </p>
        <p>
          Program content, branding, and materials remain the property of {site.name} or its
          licensors. Enrolment does not transfer ownership of course materials.
        </p>
        <p>
          We may update these terms as services evolve. Continued use after updates constitutes
          acceptance of the revised terms.
        </p>
      </section>
    </>
  );
}
