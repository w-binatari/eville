import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = {
  title: "Cookie Policy",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        description="How we use cookies and similar technologies on the HEROCK E-VILLE website."
      />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-14 text-sm leading-relaxed text-muted sm:px-6 lg:px-8">
        <p>
          We use essential cookies to operate the site securely and optional analytics cookies to
          understand how visitors use our pages so we can improve content and performance.
        </p>
        <p>
          You can control cookies through your browser settings. Disabling some cookies may affect
          site functionality.
        </p>
      </section>
    </>
  );
}
