import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section>
      <div id="hero-masthead" className="bg-paper px-4 pb-10 pt-8 sm:px-6 sm:pb-12 sm:pt-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          {/* Mobile: stacked. Desktop: single row, no wrap */}
          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:flex-nowrap sm:items-center sm:justify-center sm:gap-5 md:gap-7">
            <p className="shrink-0 font-serif text-[clamp(2.75rem,14vw,3.75rem)] font-bold leading-none tracking-tight text-navy sm:text-[clamp(2.5rem,5.2vw,4.25rem)]">
              HEROCK
            </p>

            <Image
              src="/brand/logo.png"
              alt=""
              width={160}
              height={160}
              priority
              className="h-20 w-20 shrink-0 object-contain sm:h-[4.5rem] sm:w-[4.5rem] md:h-24 md:w-24"
            />

            <p className="shrink-0 font-serif text-[clamp(2.75rem,14vw,3.75rem)] font-bold leading-none tracking-tight text-navy sm:text-[clamp(2.5rem,5.2vw,4.25rem)]">
              E-VILLE
            </p>
          </div>

          <div className="mt-8 flex w-full flex-col items-center justify-between gap-3 text-center sm:mt-9 sm:flex-row sm:items-end sm:text-left">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink/75 sm:text-xs">
              Innovative learning for excellence
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink/75 sm:text-xs sm:text-right">
              Secondary &amp; tertiary pathways
            </p>
          </div>
        </div>
      </div>

      <div className="relative min-h-[70vh] w-full sm:min-h-[78vh]">
        <Image
          src="/images/campus/pupils-studying.jpg"
          alt="African pupils studying and drawing together at school"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/20" />

        <Link
          href="/admissions"
          className="absolute bottom-8 left-4 bg-orange px-5 py-3 text-sm tracking-wide text-white transition hover:bg-orange-hover sm:bottom-12 sm:left-8 sm:px-6 sm:py-3.5"
        >
          Begin your application
        </Link>

        <Link
          href="/programs"
          className="absolute right-4 top-8 border border-ink/15 bg-paper px-5 py-3 text-sm tracking-wide text-ink transition hover:border-orange hover:text-orange sm:right-8 sm:top-12 sm:px-6 sm:py-3.5"
        >
          Explore programs →
        </Link>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[420px]">
          <Image
            src="/images/campus/pupil-reading.jpg"
            alt="African schoolboy reading a textbook by the classroom window"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-between gap-10 bg-navy px-6 py-12 text-paper sm:px-10 sm:py-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-orange">Welcome</p>
            <h1 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-paper/70">
              An online academy for secondary and tertiary learners, live classrooms, digital
              libraries, and mentors who stay with you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="border border-paper/40 px-5 py-2.5 text-sm tracking-wide text-paper transition hover:border-paper"
            >
              Our story
            </Link>
            <Link
              href="/contact"
              className="bg-orange px-5 py-2.5 text-sm tracking-wide text-white transition hover:bg-orange-hover"
            >
              Talk to admissions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
