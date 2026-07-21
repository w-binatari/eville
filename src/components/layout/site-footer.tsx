import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { mainNav, site } from "@/lib/site";

const secondary = [
  { label: "E-Learning", href: "/e-learning" },
  { label: "E-Library", href: "/e-library" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Careers", href: "/careers" },
  { label: "Certificates", href: "/certificates" },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refunds", href: "/refund" },
  { label: "Cookies", href: "/cookies" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              An online academy for secondary and tertiary learners, rooted in excellence,
              accessibility, and community.
            </p>
            <p className="mt-4 font-serif text-xl text-navy">{site.motto}</p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-orange">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/75">
              {mainNav
                .filter((i) =>
                  ["/", "/about", "/programs", "/admissions", "/contact"].includes(i.href),
                )
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-orange">
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-orange">Campus</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ink/75">
              {secondary.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-orange">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-1 text-sm text-muted">
              <a href={`mailto:${site.email}`} className="block transition hover:text-orange">
                {site.email}
              </a>
              <a href={`tel:${site.phone}`} className="block transition hover:text-navy">
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line bg-navy">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3.5 text-xs text-paper/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <ul className="flex flex-wrap gap-4">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
