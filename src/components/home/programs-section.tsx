import Link from "next/link";
import { programTracks } from "@/lib/site";

export function ProgramsSection() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted">Pathways</p>
          <div className="rule-accent mt-5" />
          <h2 className="mt-6 font-serif text-3xl text-navy md:text-4xl">
            Three ways to grow with us
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Choose the stage that fits you now. Each pathway is structured, mentored, and fully online.
          </p>
        </div>

        <ul className="mt-14 divide-y divide-line border-y border-line">
          {programTracks.map((program, index) => (
            <li key={program.slug}>
              <Link
                href={program.href}
                className="group grid gap-3 py-8 transition sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span className="font-serif text-2xl text-orange/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl text-navy transition-colors group-hover:text-orange">
                    {program.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {program.summary}
                  </p>
                </div>
                <span className="text-sm text-ink/50 transition group-hover:text-orange">
                  Explore →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
