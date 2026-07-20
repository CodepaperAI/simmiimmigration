import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

/**
 * Service page hero — matches the homepage style:
 * full-width background photo with a navy overlay and all text on top.
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
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {/* Background photo + navy overlay (same treatment as the homepage hero) */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={image}
          alt={imageAlt || ''}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/88 to-navy-900/60" />
      </div>

      <div className="relative mx-auto w-full px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-12 xl:px-20">
        {/* Breadcrumb */}
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

        <motion.div variants={stagger(0.1)} initial="hidden" animate="show" className="max-w-3xl">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur"
          >
            <Icon name="shield" className="h-3.5 w-3.5 text-red-400" />
            {eyebrow}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.06] text-white"
          >
            {title}
            {titleAccent && <span className="block text-red-400">{titleAccent}</span>}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
            {intro}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-4">
            <Button href="/#contact" size="lg" withArrow className="bg-red-gradient text-white shadow-lift">
              Book consultation
            </Button>
            <a
              href="#faq"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white hover:bg-white/20"
            >
              Read the FAQ
            </a>
            {updated && (
              <span className="flex items-center gap-2 text-xs font-semibold text-white/60">
                <Icon name="clock" className="h-4 w-4" />
                Last updated {updated}
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Quick facts */}
        {facts.length > 0 && (
          <motion.dl
            variants={stagger(0.08, 0.4)}
            initial="hidden"
            animate="show"
            className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl lg:grid-cols-4"
          >
            {facts.map((fact) => (
              <motion.div key={fact.label} variants={fadeUp} className="px-5 py-5">
                <Icon name={fact.icon} className="h-5 w-5 text-red-400" />
                <dt className="mt-2.5 font-display text-xl font-extrabold text-white">{fact.value}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-white/65">{fact.label}</dd>
              </motion.div>
            ))}
          </motion.dl>
        )}
      </div>
    </section>
  );
}
