import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";

export const metadata: Metadata = {
  title: "Certificate Verification",
  description: "Verify HEROCK E-VILLE certificates, diplomas, and digital badges.",
};

export default function CertificatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="Verify credentials with confidence"
        description="Certificates, diplomas, and digital badges will include QR-code verification once the learning platform is live."
      />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <form className="space-y-4 rounded-lg border border-navy/10 p-6">
          <label className="block text-sm font-medium text-navy">
            Certificate ID / code
            <input
              disabled
              placeholder="Available after LMS launch"
              className="mt-1.5 w-full rounded-sm border border-line bg-surface-raised px-3 py-2.5 text-sm"
            />
          </label>
          <ButtonLink href="/contact" variant="secondary">
            Request verification help
          </ButtonLink>
        </form>
      </section>
    </>
  );
}
