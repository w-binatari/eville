import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  compact?: boolean;
  invert?: boolean;
};

export function Logo({ compact = false, invert = false }: LogoProps) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <Image
        src="/brand/logo.png"
        alt={`${site.name} crest`}
        width={compact ? 44 : 56}
        height={compact ? 44 : 56}
        className="h-11 w-11 object-contain md:h-12 md:w-12"
        priority
      />
      {!compact && (
        <div className="leading-[1.15]">
          <p
            className={cn(
              "font-serif text-[1.05rem] tracking-tight md:text-[1.15rem]",
              invert ? "text-paper" : "text-navy",
            )}
          >
            Herock E-Ville
          </p>
          <p
            className={cn(
              "text-[10px] uppercase tracking-[0.22em]",
              invert ? "text-paper/55" : "text-muted",
            )}
          >
            Academy
          </p>
        </div>
      )}
    </Link>
  );
}
