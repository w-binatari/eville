"use client";

import { HoverRevealGrid } from "@/components/ui/hover-reveal-grid";
import { professionalCourses } from "@/lib/site";

export function CoursesReveal() {
  return (
    <HoverRevealGrid
      items={professionalCourses}
      className="mt-10"
      columnsClassName="sm:grid-cols-2 lg:grid-cols-3"
      labelClassName="text-[15px] font-medium text-navy"
    />
  );
}
