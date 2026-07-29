import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';
import Icon from '@/components/ui/Icon';
import ConsultationForm from '@/components/ui/ConsultationForm';

/**
 * Service page hero — split layout:
 * LEFT  = photo background + navy overlay, white text on top
 * RIGHT = the shared white ConsultationForm
 * Quick-facts full-width below.
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
    <section className="relative overflow-hidden border-b border-ink-200 bg-ink-50/50 dark:border-ink-800 dark:bg-ink-950">
      <div className="relative mx-auto w-full px-4 py-8 sm:px-6 md:px-8 lg:px-12 lg:py-10 xl:px-20">
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          {/* LEFT — photo background with white text on top */}
          <div className="relative overflow-hidden rounded-3xl lg:col-span-6">
            {/* Photo + navy overlay */}
            <div className="absolute inset-0" aria-hidden="true">
              <Image
                src={image}
                alt={imageAlt || ''}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-900/85 to-navy-900/70" />
            </div>

            {/* Text content on top of the photo */}
            <div className="relative p-7 sm:p-9 lg:p-10">
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                aria-label="Breadcrumb"
                className="mb-6 flex items-center gap-2 text-xs font-semibold text-white/60"
              >
                {trail.map((item, index) => {
                  const isLast = index === trail.length - 1;
                  return (
                    <span key={item.label} className="flex items-center gap-2">
                      {item.href && !isLast ? (
                        <a href={item.href} className="whitespace-nowrap transition-colors hover:text-white">
                          {item.label}
                        </a>
                      ) : (
                        <span className={isLast ? 'whitespace-nowrap text-white' : 'whitespace-nowrap'}>
                          {item.label}
                        </span>
                      )}
                      {!isLast && <Icon name="chevron" className="h-3.5 w-3.5 -rotate-90 text-white/40" strokeWidth={2.2} />}
                    </span>
                  );
                })}
              </motion.nav>

              <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
                <motion.span
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur"
                >
                  <Icon name="shield" className="h-3.5 w-3.5 text-red-400" />
                  {eyebrow}
                </motion.span>

                <motion.h1
                  variants={fadeUp}
                  className="mt-5 font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.07] text-white"
                >
                  {title}
                  {titleAccent && <span className="block text-red-400">{titleAccent}</span>}
                </motion.h1>

                <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-white/85">
                  {intro}
                </motion.p>

                <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-4">
                  
               <a 
           href="/#contact"
                    className="rounded-full bg-red-gradient px-6 py-3 text-sm font-semibold text-white shadow-lift transition-transform hover:scale-[1.02]"
                  >
                    Free Assessment
                  </a>
                  {updated && (
                    <span className="flex items-center gap-2 text-xs font-semibold text-white/60">
                      <Icon name="clock" className="h-4 w-4" />
                      Last updated {updated}
                    </span>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT — white form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <ConsultationForm />
          </motion.div>
        </div>

        {/* Quick facts — full width below, compact */}
        {facts.length > 0 && (
          <motion.dl
            variants={stagger(0.08, 0.4)}
            initial="hidden"
            animate="show"
            className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {facts.map((fact) => (
              <motion.div
                key={fact.label}
                variants={fadeUp}
                className="rounded-xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900"
              >
                <Icon name={fact.icon} className="h-4 w-4 text-maple-600" />
                <dt className="mt-1.5 font-display text-base font-extrabold text-navy-900 dark:text-white">{fact.value}</dt>
                <dd className="mt-0.5 text-[11px] leading-snug text-ink-500 dark:text-ink-400">{fact.label}</dd>
              </motion.div>
            ))}
          </motion.dl>
        )}
      </div>
    </section>
  );
}