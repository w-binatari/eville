import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact HEROCK E-VILLE ACADEMY for admissions, support, and partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here to help you take the next step"
        description="Reach admissions, student support, or partnerships, we typically respond within one business day."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-start gap-3 rounded-lg border border-navy/10 p-4 transition hover:border-orange/40"
            >
              <Mail className="mt-0.5 h-5 w-5 text-orange" />
              <div>
                <p className="font-semibold text-navy">Email</p>
                <p className="text-sm text-muted">{site.email}</p>
              </div>
            </a>
            <a
              href={`tel:${site.phone}`}
              className="flex items-start gap-3 rounded-lg border border-navy/10 p-4 transition hover:border-orange/40"
            >
              <Phone className="mt-0.5 h-5 w-5 text-orange" />
              <div>
                <p className="font-semibold text-navy">Phone</p>
                <p className="text-sm text-muted">{site.phone}</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
              className="flex items-start gap-3 rounded-lg border border-navy/10 p-4 transition hover:border-orange/40"
            >
              <MessageCircle className="mt-0.5 h-5 w-5 text-orange" />
              <div>
                <p className="font-semibold text-navy">WhatsApp</p>
                <p className="text-sm text-muted">{site.whatsapp}</p>
              </div>
            </a>
            <p className="pt-2 text-sm text-muted">{site.address}</p>
          </div>

          <form className="space-y-4 border border-line bg-surface-raised p-6 md:p-8" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-navy">
                Full name
                <input
                  name="name"
                  required
                  className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-orange"
                />
              </label>
              <label className="block text-sm font-medium text-navy">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-orange"
                />
              </label>
            </div>
            <label className="block text-sm font-medium text-navy">
              Interest
              <select
                name="interest"
                className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-orange"
                defaultValue="Admissions"
              >
                <option>Admissions</option>
                <option>Secondary Programs</option>
                <option>Tertiary / Diploma</option>
                <option>Professional Courses</option>
                <option>Student Support</option>
                <option>Partnerships</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-navy">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1.5 w-full rounded-md border border-navy/15 bg-white px-3 py-2.5 outline-none focus:border-orange"
              />
            </label>
            <button
              type="submit"
              className="rounded-md bg-orange px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-hover"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
