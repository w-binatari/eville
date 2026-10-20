import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact HEROCK E-VILLE ACADEMY for admissions, support, and partnerships.",
};

const contacts = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone}`,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: site.whatsapp,
    href: `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`,
    icon: MessageCircle,
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here to help you take the next step"
        description="Reach us by email, phone, or WhatsApp — we typically respond within one business day."
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <ul className="space-y-4">
          {contacts.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-start gap-3 border border-line bg-surface-raised p-5 transition hover:border-orange/40"
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                <div>
                  <p className="font-semibold text-navy">{item.label}</p>
                  <p className="mt-1 text-sm text-muted">{item.value}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">{site.address}</p>
      </section>
    </>
  );
}
