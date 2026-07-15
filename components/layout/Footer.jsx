import Link from 'next/link';
import company from '@/data/company';
import { footerLinks } from '@/data/navigation';
import Container from '@/components/ui/Container';
import Logo from '@/components/layout/Logo';
import Icon from '@/components/ui/Icon';

const headingClass =
  'text-xs font-bold uppercase tracking-[0.18em] text-ink-900 dark:text-white';
const linkClass =
  'text-sm text-ink-500 transition-colors hover:text-maple-600 dark:text-white/60 dark:hover:text-maple-400';
const bodyClass = 'text-ink-500 dark:text-white/70';

function LinkColumn({ title, links }) {
  return (
    <div>
      <h3 className={headingClass}>{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink-200 bg-ink-50 pt-20 text-ink-900 transition-colors duration-500 dark:border-ink-800 dark:bg-ink-950 dark:text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-maple-600/10 blur-3xl dark:bg-maple-600/20"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-500 dark:text-white/60">
              {company.description}
            </p>
            <div className="mt-7 flex gap-3">
              {company.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-all duration-300 hover:border-transparent hover:bg-maple-gradient hover:text-white dark:border-white/15 dark:text-white/70"
                >
                  <Icon name={item.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <LinkColumn title="Quick links" links={footerLinks.quickLinks} />
            <LinkColumn title="Services" links={footerLinks.services} />
            <div>
              <h3 className={headingClass}>Contact</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a
                    href={company.phoneHref}
                    className={`flex items-start gap-3 transition-colors hover:text-maple-600 dark:hover:text-maple-400 ${bodyClass}`}
                  >
                    <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-maple-600 dark:text-maple-500" />
                    {company.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={company.emailHref}
                    className={`flex items-start gap-3 break-all transition-colors hover:text-maple-600 dark:hover:text-maple-400 ${bodyClass}`}
                  >
                    <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-maple-600 dark:text-maple-500" />
                    {company.email}
                  </a>
                </li>
                <li className={`flex items-start gap-3 ${bodyClass}`}>
                  <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-maple-600 dark:text-maple-500" />
                  <span>
                    {company.hours.map((slot) => (
                      <span key={slot.days} className="block">
                        {slot.days}: {slot.time}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
              <a
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-maple-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-soft"
              >
                Free assessment
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ink-200 py-7 text-xs text-ink-400 dark:border-white/10 dark:text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-ink-900 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <span>Immigration advice provided by a licensed RCIC.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
