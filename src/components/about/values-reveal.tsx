"use client";

import { HoverRevealGrid } from "@/components/ui/hover-reveal-grid";
import { coreValues } from "@/lib/site";

export function ValuesReveal() {
  return <HoverRevealGrid items={coreValues} className="mt-8" />;
}
