"use client";

import { HoverRevealGrid } from "@/components/ui/hover-reveal-grid";
import { secondarySubjects } from "@/lib/site";

export function SubjectsReveal() {
  return (
    <HoverRevealGrid
      items={secondarySubjects}
      className="mt-4"
      columnsClassName="sm:grid-cols-2 lg:grid-cols-3"
      labelClassName="text-sm font-medium text-navy"
    />
  );
}
