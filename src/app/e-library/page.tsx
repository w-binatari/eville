import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";

export const metadata: Metadata = {
  title: "E-Library",
  description: "Digital resources including e-books, lecture notes, past questions, and video tutorials.",
};

const resources = [
  { title: "E-books", detail: "Curated digital texts across secondary and tertiary subjects." },
  { title: "Lecture Notes", detail: "Downloadable summaries aligned to live and recorded classes." },
  { title: "Research Articles", detail: "Selected readings for diploma and professional learners." },
  { title: "Past Questions", detail: "Practice banks to prepare for assessments and exams." },
  { title: "Video Tutorials", detail: "Short explainers that reinforce classroom concepts." },
];

export default function ELibraryPage() {
  return (
    <>
      <PageHero
        eyebrow="E-Library"
        title="Resources that travel with you"
        description="A growing digital library for enrolled learners. Search notes, past questions, and tutorials from anywhere."
      />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <label htmlFor="library-search" className="sr-only">
            Search the e-library
          </label>
          <input
            id="library-search"
            placeholder="Search resources (available after portal launch)"
            disabled
            className="w-full max-w-xl rounded-sm border border-line bg-surface-raised px-4 py-3 text-sm text-muted"
          />
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => (
            <li key={item.title} className="rounded-lg border border-navy/10 p-5">
              <h2 className="font-semibold text-navy">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
