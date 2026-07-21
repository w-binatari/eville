import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { site } from "@/lib/site";

type LegalPageProps = {
  title: string;
  summary: string;
  sections: { heading: string; body: string }[];
};

function LegalPage({ title, summary, sections }: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={summary} />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold text-navy">{section.heading}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{section.body}</p>
            </div>
          ))}
          <p className="text-sm text-muted">
            Questions? Email{" "}
            <a className="font-medium text-orange hover:underline" href={`mailto:${site.supportEmail}`}>
              {site.supportEmail}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary="How HEROCK E-VILLE ACADEMY collects, uses, and protects personal information."
      sections={[
        {
          heading: "Information we collect",
          body: "We collect information you provide through applications, contact forms, enrolments, and portal use, such as name, contact details, academic records, and payment references.",
        },
        {
          heading: "How we use information",
          body: "We use personal data to process admissions, deliver learning services, communicate updates, improve our platform, and meet legal obligations.",
        },
        {
          heading: "Sharing",
          body: "We do not sell personal data. We may share information with service providers who support hosting, payments, communications, or learning delivery under appropriate safeguards.",
        },
        {
          heading: "Your choices",
          body: "You may request access, correction, or deletion of personal data subject to legal and academic record-keeping requirements.",
        },
      ]}
    />
  );
}
