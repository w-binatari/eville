import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { upcomingEvent } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming webinars, workshops, seminars, and career talks at HEROCK E-VILLE.",
};

const events = [
  upcomingEvent,
  {
    title: "Secondary Exam Prep Workshop",
    date: "Aug 26, 2026",
    time: "2:00 PM WAT",
    href: "/contact",
  },
  {
    title: "Intro to Data Analytics Open Session",
    date: "Sep 5, 2026",
    time: "5:00 PM WAT",
    href: "/contact",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Learn together, live and online"
        description="Webinars, workshops, seminars, and career talks for students, parents, and professionals."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event.title}
              className="flex flex-col gap-4 rounded-lg border border-navy/10 p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-navy">{event.title}</h2>
                <p className="mt-1 text-sm text-muted">
                  {event.date} · {event.time}
                </p>
              </div>
              <ButtonLink href={event.href} size="sm">
                Register
              </ButtonLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
