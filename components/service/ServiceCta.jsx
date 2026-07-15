import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/common/Reveal';
import Button from '@/components/ui/Button';

/**
 * Closing CTA band used at the bottom of every service page.
 * Follows the active theme: soft maple wash in light mode, deep ink in dark.
 */
export default function ServiceCta({ help, related = [], cardTitle, cardBody }) {
  return (
    <section className="relative overflow-hidden bg-ink-50 py-24 text-ink-900 transition-colors duration-500 dark:bg-ink-950 dark:text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-maple-600/10 blur-[120px] dark:bg-maple-600/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent to-maple-50/60 dark:to-transparent"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading eyebrow="Next step" title={help.heading} />

            {help.paragraphs.map((text) => (
              <p
                key={text.slice(0, 24)}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600 dark:text-white/70"
              >
                {text}
              </p>
            ))}

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-400 dark:text-white/45">
              {help.disclaimer}
            </p>

            {related.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {related.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-600 transition-colors hover:border-maple-400 hover:text-maple-600 dark:border-white/20 dark:bg-transparent dark:text-white/80 dark:hover:border-white dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="rounded-3xl border border-ink-200 bg-white p-8 shadow-lift backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none">
              <p className="font-display text-2xl font-bold text-ink-900 dark:text-white">
                {cardTitle || 'Talk to a regulated consultant'}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-white/60">
                {cardBody ||
                  'We confirm eligibility, flag the risks, and build the document plan before anything is filed.'}
              </p>
              <Button href="/#contact" size="lg" className="mt-7 w-full" withArrow>
                Book consultation
              </Button>
              <Button href="/#contact" size="lg" variant="outline" className="mt-3 w-full">
                Free assessment
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
