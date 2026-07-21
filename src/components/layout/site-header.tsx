"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

const primaryNav = mainNav.filter((item) =>
  ["/", "/about", "/programs", "/admissions", "/contact"].includes(item.href),
);

const moreNav = mainNav.filter(
  (item) => !["/", "/about", "/programs", "/admissions", "/contact"].includes(item.href),
);

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [logoLocked, setLogoLocked] = useState(false);

  useEffect(() => {
    const masthead = document.getElementById("hero-masthead");
    if (!masthead) {
      setLogoLocked(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setLogoLocked(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-72px 0px 0px 0px" },
    );

    observer.observe(masthead);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/95 backdrop-blur-sm">
      <div className="relative mx-auto grid h-[4.25rem] max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 sm:px-6">
        <nav className="hidden items-center gap-6 lg:flex">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[13px] tracking-wide transition-colors",
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="justify-self-start border border-line p-2 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link
          href="/"
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out",
            logoLocked
              ? "pointer-events-auto scale-100 opacity-100"
              : "pointer-events-none scale-90 opacity-0",
          )}
          aria-hidden={!logoLocked}
          tabIndex={logoLocked ? 0 : -1}
        >
          <Image
            src="/brand/logo.png"
            alt="Herock E-Ville Academy"
            width={52}
            height={52}
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
            priority
          />
        </Link>

        <div className="col-start-3 justify-self-end">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 text-[13px] tracking-wide text-ink transition hover:text-orange"
          >
            Apply
            <span className="inline-flex h-7 w-7 items-center justify-center border border-orange/50 text-sm leading-none text-orange">
              →
            </span>
          </Link>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {[...primaryNav, ...moreNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-2.5 text-sm",
                  pathname === item.href ? "text-orange" : "text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
