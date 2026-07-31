import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';
import Icon from '@/components/ui/Icon';
import FreeAssessmentForm from '@/components/ui/FreeAssessmentForm';

/**
 * Service page hero — light layout:
 * LEFT  = breadcrumb, badge, navy heading, intro, photo card, quick facts
 * RIGHT = the shared white ConsultationForm
 */
export default function ServiceHero({
  eyebrow,
  title,
  titleAccent,
  intro,
  updated,
  image,
  imageAlt,
  facts = [],
  crumb,
  breadcrumbs,
}) {
  const trail = [
    { label: 'Home', href: '/' },
    ...(breadcrumbs || []),
    { label: crumb || eyebrow },
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-navy-950">
      <div className="relative mx-auto w-full px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-12 xl:px-20">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT — light column */}
          <div className="lg:col-span-6">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-2 text-xs font-semibold text-ink-500 dark:text-ink-400"
            >
              {trail.map((item, index) => {
                const isLast = index === trail.length - 1;
                return (
                  <span key={item.label} className="flex items-center gap-2">
                    {item.href && !isLast ? (
                      <a href={item.href} className="whitespace-nowrap transition-colors hover:text-maple-600">
                        {item.label}
                      </a>
                    ) : (
                      <span className={isLast ? 'whitespace-nowrap text-navy-900 dark:text-white' : 'whitespace-nowrap'}>
                        {item.label}
                      </span>
                    )}
                    {!isLast && <Icon name="chevron" className="h-3.5 w-3.5 -rotate-90 text-ink-400" strokeWidth={2.2} />}
                  </span>
                );
              })}
            </motion.nav>

            <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-maple-200 bg-maple-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-maple-700 dark:border-maple-900/60 dark:bg-maple-950/30 dark:text-maple-300"
              >
                <Icon name="shield" className="h-3.5 w-3.5" />
                {eyebrow}
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="mt-5 font-display text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.07] text-navy-900 dark:text-white"
              >
                {title}
                {titleAccent && <span className="block text-maple-600 dark:text-maple-400">{titleAccent}</span>}
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-ink-600 dark:text-ink-300">
                {intro}
              </motion.p>

              {/* Photo card */}
              <motion.div variants={fadeUp} className="mt-8 overflow-hidden rounded-2xl">
                <div className="relative h-56 w-full sm:h-64 lg:h-72">
                  <Image
                    src={image}
                    alt={imageAlt || ''}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>

              {/* Quick facts */}
              {facts.length > 0 && (
                <motion.dl variants={fadeUp} className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-xl border border-ink-200 bg-ink-50/60 p-4 dark:border-ink-800 dark:bg-ink-900"
                    >
                      <Icon name={fact.icon} className="h-4 w-4 text-maple-600" />
                      <dt className="mt-1.5 font-display text-base font-extrabold text-navy-900 dark:text-white">{fact.value}</dt>
                      <dd className="mt-0.5 text-[11px] leading-snug text-ink-500 dark:text-ink-400">{fact.label}</dd>
                    </div>
                  ))}
                </motion.dl>
              )}
            </motion.div>
          </div>

          {/* RIGHT — white form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <FreeAssessmentForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}