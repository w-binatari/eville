"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export type HoverRevealItem = {
  title: string;
  image: string;
  alt: string;
  blurb?: string;
  imageClassName?: string;
};

type HoverRevealGridProps = {
  items: readonly HoverRevealItem[];
  className?: string;
  columnsClassName?: string;
  labelClassName?: string;
};

export function HoverRevealGrid({
  items,
  className,
  columnsClassName = "sm:grid-cols-2 lg:grid-cols-4",
  labelClassName = "text-[15px] font-medium tracking-wide text-navy",
}: HoverRevealGridProps) {
  const [pinned, setPinned] = useState<string | null>(null);

  return (
    <ul className={cn("grid gap-x-6 gap-y-1", columnsClassName, className)}>
      {items.map((item) => {
        const isPinned = pinned === item.title;

        return (
          <li key={item.title} className="group/reveal relative">
            <button
              type="button"
              aria-expanded={isPinned}
              onClick={() =>
                setPinned((current) => (current === item.title ? null : item.title))
              }
              className={cn(
                "w-full border-t border-line pt-4 text-left outline-none transition-colors duration-300",
                "hover:border-orange focus-visible:border-orange",
                isPinned && "border-orange",
              )}
            >
              <span
                className={cn(
                  "block transition-colors duration-300",
                  labelClassName,
                  "group-hover/reveal:text-orange group-focus-within/reveal:text-orange",
                  isPinned && "text-orange",
                )}
              >
                {item.title}
              </span>

              <div
                className={cn(
                  "grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  "group-hover/reveal:grid-rows-[1fr] group-focus-within/reveal:grid-rows-[1fr]",
                  isPinned && "grid-rows-[1fr]",
                )}
              >
                <div className="min-h-0 overflow-hidden">
                  <figure className="pt-4 pb-5">
                    <div
                      className={cn(
                        "relative aspect-[5/4] origin-top scale-[0.98] overflow-hidden bg-paper-deep opacity-0 transition-all duration-500 ease-out",
                        "group-hover/reveal:scale-100 group-hover/reveal:opacity-100",
                        "group-focus-within/reveal:scale-100 group-focus-within/reveal:opacity-100",
                        isPinned && "scale-100 opacity-100",
                      )}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={cn(
                          "object-cover transition-transform duration-700 ease-out",
                          "scale-105 group-hover/reveal:scale-100 group-focus-within/reveal:scale-100",
                          isPinned && "scale-100",
                          item.imageClassName,
                        )}
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent"
                      />
                    </div>
                    {item.blurb ? (
                      <figcaption
                        className={cn(
                          "mt-3 translate-y-2 text-[13px] leading-relaxed text-muted opacity-0 transition-all duration-500",
                          "group-hover/reveal:translate-y-0 group-hover/reveal:opacity-100",
                          "group-focus-within/reveal:translate-y-0 group-focus-within/reveal:opacity-100",
                          isPinned && "translate-y-0 opacity-100",
                        )}
                      >
                        {item.blurb}
                      </figcaption>
                    ) : null}
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
