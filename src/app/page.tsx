import { ClassMoments } from "@/components/home/class-moments";
import { ClosingCta } from "@/components/home/closing-cta";
import { CommunitySection } from "@/components/home/community-section";
import { Hero } from "@/components/home/hero";
import { ProgramsSection } from "@/components/home/programs-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClassMoments />
      <ProgramsSection />
      <CommunitySection />
      <ClosingCta />
    </>
  );
}
