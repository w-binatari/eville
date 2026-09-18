import type { Metadata } from "next";
import { ValuesReveal } from "@/components/about/values-reveal";
import { PageHero } from "@/components/layout/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: site.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A community of learners, not just a platform"
        description="HEROCK E-VILLE ACADEMY exists to make rigorous education reachable for secondary students, tertiary learners, and working professionals."
        ctaHref="/admissions"
        ctaLabel="Start your application"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-serif text-3xl text-navy">Our story</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                We are a dynamic online learning institution committed to transforming education
                through innovation, accessibility, and excellence. Learners join us from many places and leave with knowledge, confidence, and community.
              </p>
              <p>
                At the secondary level, we prepare students with curricula aligned to national and
                international standards. For tertiary learners, we offer diplomas, professional
                certifications, and specialized training for a digital workforce.
              </p>
              <p>
                Learning here extends beyond the classroom: virtual studios, digital libraries,
                assessments, career support, and student communities that keep growth continuous.
              </p>
            </div>
          </div>

          <div className="space-y-8 border-l border-line pl-0 lg:pl-10">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                Vision
              </p>
              <p className="mt-3 font-serif text-2xl leading-snug text-navy">
                To become a leading global online learning institution that empowers individuals
                through accessible, innovative, and transformative education.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                Mission
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                To provide flexible, affordable, and high-quality education that equips learners with
                the knowledge, skills, and values needed to thrive in an interconnected world.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-serif text-3xl text-navy">What we stand for</h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
            Hover or tap each value to see the learners it lives through.
          </p>
          <ValuesReveal />
        </div>

        <p className="mt-20 text-center font-serif text-2xl text-navy md:text-3xl">
          {site.motto}
        </p>
      </section>
    </>
  );
}
