import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { newsItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "News & Blog",
  description: "School news, academic tips, career development, and student success stories.",
};

const categories = [
  "School News",
  "Academic Tips",
  "Technology",
  "Career Development",
  "Scholarships",
  "Student Success",
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Blog"
        title="Stories from the academy community"
        description="Updates on programs, scholarships, academic tips, and learner success."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="border border-line px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-muted"
            >
              {category}
            </span>
          ))}
        </div>
        <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
          {newsItems.map((item) => (
            <li key={item.title} className="py-5">
              <p className="text-xs font-medium uppercase tracking-wider text-orange">{item.date}</p>
              <Link href={item.href} className="mt-1 block text-xl font-semibold text-navy hover:text-orange">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
