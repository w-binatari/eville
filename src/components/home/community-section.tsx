import Image from "next/image";
import Link from "next/link";
import { newsItems, upcomingEvent } from "@/lib/site";

export function CommunitySection() {
  return (
    <section className="border-b border-line bg-surface-raised">
      <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-2">
        <div className="relative min-h-[360px]">
          <Image
            src="/images/campus/learner-portrait.jpg"
            alt="African learner smiling outdoors"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-navy/35" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-paper sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-paper/70">
              Next gathering
            </p>
            <p className="mt-3 font-serif text-3xl">{upcomingEvent.title}</p>
            <p className="mt-2 text-sm text-paper/75">
              {upcomingEvent.date} · {upcomingEvent.time}
            </p>
            <Link
              href={upcomingEvent.href}
              className="mt-5 inline-block text-sm text-paper underline-offset-4 hover:underline"
            >
              Register for the session →
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center px-4 py-14 sm:px-10 lg:px-14">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted">From the academy</p>
          <div className="rule-accent mt-5" />
          <h2 className="mt-6 font-serif text-3xl text-navy">News worth sitting with</h2>
          <ul className="mt-8 space-y-6">
            {newsItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className="group block">
                  <p className="text-xs text-muted">{item.date}</p>
                  <p className="mt-1 text-[15px] text-navy transition group-hover:text-orange">
                    {item.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/news"
            className="mt-8 text-sm text-ink underline-offset-4 hover:underline"
          >
            All news →
          </Link>
        </div>
      </div>
    </section>
  );
}
