"use client";

import Image from "next/image";
import { useState } from "react";
import { coreValues } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ValuesReveal() {
  const [pinned, setPinned] = useState<string | null>(null);

  return (
    <ul className="mt-8 grid gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
      {coreValues.map((value) => {
        const isPinned = pinned === value.title;

        return (
          <li key={value.title} className="group/value relative">
            <button
              type="button"
              aria-expanded={isPinned}
              onClick={() =>
                setPinned((current) => (current === value.title ? null : value.title))
              }
              className={cn(
                "w-full border-t border-line pt-4 text-left outline-none transition-colors duration-300",
                "hover:border-orange focus-visible:border-orange",
                isPinned && "border-orange",
              )}
            >
              <span
                className={cn(
                  "block text-[15px] font-medium tracking-wide text-navy transition-colors duration-300",
                  "group-hover/value:text-orange group-focus-within/value:text-orange",
                  isPinned && "text-orange",
                )}
              >
                {value.title}
              </span>

              <div
                className={cn(
                  "grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "group-hover/value:grid-rows-[1fr] group-focus-within/value:grid-rows-[1fr]",
                  isPinned && "grid-rows-[1fr]",
                )}
              >
                <div className="min-h-0 overflow-hidden">
                  <figure className="pt-4 pb-5">
                    <div
                      className={cn(
                        "relative aspect-[5/4] origin-top scale-[0.98] overflow-hidden bg-paper-deep opacity-0 transition-all duration-500 ease-out",
                        "group-hover/value:scale-100 group-hover/value:opacity-100",
                        "group-focus-within/value:scale-100 group-focus-within/value:opacity-100",
                        isPinned && "scale-100 opacity-100",
                      )}
                    >
                      <Image
                        src={value.image}
                        alt={value.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={cn(
                          "object-cover transition-transform duration-700 ease-out",
                          "scale-105 group-hover/value:scale-100 group-focus-within/value:scale-100",
                          isPinned && "scale-100",
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
                        "mt-3 translate-y-2 text-[13px] leading-relaxed text-muted opacity-0 transition-all duration-500",
                        "group-hover/value:translate-y-0 group-hover/value:opacity-100",
                        "group-focus-within/value:translate-y-0 group-focus-within/value:opacity-100",
                        isPinned && "translate-y-0 opacity-100",
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
