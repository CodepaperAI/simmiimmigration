import Image from 'next/image';
import { motion } from 'framer-motion';
import { EASE, fadeUp, stagger } from '@/lib/motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';

const SKYLINE = 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=2000&q=75';

export default function ServiceHero({ eyebrow, title, titleAccent, intro, updated, image, imageAlt, facts = [] }) {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-14 text-ink-900 transition-colors duration-500 dark:bg-ink-950 dark:text-white lg:pb-24 lg:pt-20">
      {/* Light backdrop */}
      <div className="absolute inset-0 transition-opacity duration-500 dark:opacity-0" aria-hidden="true">
        <Image src={SKYLINE} alt="" fill priority sizes="100vw" className="object-cover opacity-[0.08] grayscale" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-maple-50/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80" />
      </div>
      {/* Dark backdrop */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100" aria-hidden="true">
        <Image src={SKYLINE} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70" />
      </div>

      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-24 top-0 h-[26rem] w-[26rem] rounded-full bg-maple-600/20 blur-[120px]"
      />

      <Container className="relative">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-xs font-semibold text-ink-400 dark:text-ink-400"
        >
          <a href="/" className="transition-colors hover:text-maple-600">Home</a>
          <Icon name="chevron" className="h-3.5 w-3.5 -rotate-90" strokeWidth={2.2} />
          <span className="text-ink-700 dark:text-ink-200">{title}</span>
        </motion.nav>

        <div className="grid items-center gap-14 lg:grid-cols-12">
          <motion.div variants={stagger(0.1)} initial="hidden" animate="show" className="lg:col-span-7">
            <motion.div variants={fadeUp}>
              <Badge tone="auto" icon="family">{eyebrow}</Badge>
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-7 text-display-xl text-ink-950 dark:text-white">
              {title}
              {titleAccent && <span className="block text-gradient">{titleAccent}</span>}
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-7 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-white/70">
              {intro}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/#contact" size="lg" withArrow>
                Book consultation
              </Button>
              <Button href="#faq" size="lg" variant="outline">
                Read the FAQ
              </Button>
              {updated && (
                <span className="flex items-center gap-2 text-xs font-semibold text-ink-400">
                  <Icon name="clock" className="h-4 w-4" />
                  Last updated {updated}
                </span>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-ink-200/80 shadow-lift dark:border-white/10">
              <Image
                src={image}
                alt={imageAlt}
                width={900}
                height={700}
                className="h-72 w-full object-cover sm:h-[22rem]"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 to-transparent p-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Icon name="shield" className="h-4 w-4 text-maple-400" />
                  Prepared by a regulated consultant
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick facts */}
        {facts.length > 0 && (
          <motion.dl
            variants={stagger(0.08, 0.5)}
            initial="hidden"
            animate="show"
            className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-200/80 bg-ink-200/70 dark:border-white/10 dark:bg-white/10 lg:grid-cols-4"
          >
            {facts.map((fact) => (
              <motion.div key={fact.label} variants={fadeUp} className="bg-white/85 px-6 py-7 backdrop-blur dark:bg-ink-950/80">
                <Icon name={fact.icon} className="h-5 w-5 text-maple-600 dark:text-maple-500" />
                <dt className="mt-3 font-display text-2xl font-extrabold text-ink-950 dark:text-white">{fact.value}</dt>
                <dd className="mt-1.5 text-xs leading-relaxed text-ink-500 dark:text-white/50">{fact.label}</dd>
              </motion.div>
            ))}
          </motion.dl>
        )}
      </Container>
    </section>
  );
}
