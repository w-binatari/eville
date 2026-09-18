"use client";

import Image from "next/image";
import { useState } from "react";
import { coreValues } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ValuesReveal() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <ul className="mt-8 grid gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
      {coreValues.map((value) => {
        const isOpen = active === value.title;

        return (
          <li key={value.title}>
            <button
              type="button"
              aria-expanded={isOpen}
              onMouseEnter={() => setActive(value.title)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(value.title)}
              onBlur={() => setActive(null)}
              onClick={() =>
                setActive((current) => (current === value.title ? null : value.title))
              }
              className={cn(
                "group w-full border-t border-line pt-4 text-left outline-none transition-colors duration-300",
                isOpen ? "border-orange" : "hover:border-navy/40",
              )}
            >
              <span
                className={cn(
                  "block text-[15px] font-medium tracking-wide transition-colors duration-300",
                  isOpen ? "text-orange" : "text-navy group-hover:text-orange",
                )}
              >
                {value.title}
              </span>

              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="min-h-0 overflow-hidden">
                  <figure className="pt-4 pb-5">
                    <div
                      className={cn(
                        "relative aspect-[5/4] overflow-hidden bg-paper-deep transition-transform duration-500 ease-out",
                        isOpen ? "scale-100 opacity-100" : "scale-[0.98] opacity-0",
                      )}
                    >
                      <Image
                        src={value.image}
                        alt={value.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={cn(
                          "object-cover transition-transform duration-700 ease-out",
                          isOpen ? "scale-100" : "scale-105",
                          "imageClassName" in value ? value.imageClassName : undefined,
                        )}
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent"
                      />
                    </div>
                    <figcaption
                      className={cn(
                        "mt-3 text-[13px] leading-relaxed text-muted transition-all duration-500",
                        isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                      )}
                    >
                      {value.blurb}
                    </figcaption>
                  </figure>
                </div>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
