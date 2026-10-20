import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/lib/site";

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
        description="Certificates, diplomas, and digital badges include verification through the learning portal."
        ctaHref={site.portalUrl}
        ctaLabel="Open Learning Portal"
      />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="border border-line bg-surface-raised p-6 sm:p-8">
          <p className="text-[15px] leading-relaxed text-muted">
            Sign in to the learning portal to verify certificates, or contact us by email if you need
            help confirming a credential.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={site.portalUrl}>Go to Portal</ButtonLink>
            <ButtonLink href={`mailto:${site.email}`} variant="outline">
              Email verification help
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
