import Image from 'next/image';
import { motion } from 'framer-motion';
import company from '@/data/company';
import { EASE, fadeUp, stagger } from '@/lib/motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';

const SKYLINE = 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=2000&q=75';
const CONSULT = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=75';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-16 text-ink-900 transition-colors duration-500 dark:bg-ink-950 dark:text-white lg:pb-28 lg:pt-24">
      {/* ---- Light-mode backdrop ---- */}
      <div className="absolute inset-0 transition-opacity duration-500 dark:opacity-0" aria-hidden="true">
        <Image
          src={SKYLINE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.10] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-maple-50/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/85" />
      </div>

      {/* ---- Dark-mode backdrop ---- */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100" aria-hidden="true">
        <Image
          src={SKYLINE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/70" />
      </div>

      {/* Ambient red glow (works on both themes) */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-20 top-10 h-[28rem] w-[28rem] rounded-full bg-maple-600/20 blur-[120px] dark:bg-maple-600/25"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <motion.div variants={stagger(0.1)} initial="hidden" animate="show" className="lg:col-span-7">
            <motion.div variants={fadeUp}>
              <Badge tone="auto" icon="shield">
                Regulated Canadian Immigration Consultant
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-7 text-display-xl text-ink-950 dark:text-white">
              Refused a visa?
              <span className="block text-gradient">We turn setbacks into approvals.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-6 space-y-1.5">
              {['Refused a visa?', 'Delayed application?', 'Denied entry to Canada?'].map((line) => (
                <p key={line} className="font-display text-lg font-bold text-ink-800 dark:text-white/90">
                  {line}
                </p>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 dark:text-white/70"
            >
              We specialise in turning immigration challenges into success stories &mdash; strategic,
              personalised guidance for individuals facing complex issues, so you move forward with a
              clear plan. Super Visa, study, work, sponsorship and permanent residence, prepared by a
              regulated consultant who tells you what is realistic, then builds the file to prove it.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <Button href="#contact" size="lg" withArrow>
                Book consultation
              </Button>
              <Button href="#contact" size="lg" variant="outline">
                Free assessment
              </Button>
            </motion.div>

            <motion.ul variants={fadeUp} className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
              {[
                'Regulated and trusted expert support',
                'Tailored solutions for your unique case',
                'Support for complex or previously refused cases',
              ].map((badge) => (
                <li key={badge} className="flex items-center gap-2 text-sm text-ink-500 dark:text-white/60">
                  <Icon name="check" className="h-4 w-4 text-maple-600 dark:text-maple-500" strokeWidth={2.4} />
                  {badge}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Portrait + floating rating card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-3xl border border-ink-200/80 shadow-lift dark:border-white/10 dark:shadow-2xl">
                <Image
                  src={CONSULT}
                  alt="Immigration consultant reviewing an application with a client"
                  width={800}
                  height={640}
                  className="h-72 w-full object-cover sm:h-80"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-8 -left-4 w-64 rounded-2xl border border-ink-200/80 bg-white/90 p-5 shadow-lift backdrop-blur-xl dark:border-white/10 dark:bg-ink-900/90 dark:shadow-2xl sm:-left-8"
              >
                <div className="flex items-center gap-1 text-maple-600 dark:text-maple-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="h-4 w-4 fill-current" strokeWidth={1} />
                  ))}
                </div>
                <p className="mt-2 font-display text-3xl font-extrabold text-ink-950 dark:text-white">
                  {company.rating.value}
                  <span className="ml-2 text-sm font-semibold text-ink-400 dark:text-white/50">on Google</span>
                </p>
                <p className="mt-1 text-xs text-ink-400 dark:text-white/50">
                  {company.rating.count} verified client reviews
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.dl
          variants={stagger(0.08, 0.5)}
          initial="hidden"
          animate="show"
          className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-200/80 bg-ink-200/70 dark:border-white/10 dark:bg-white/10 lg:grid-cols-4"
        >
          {company.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-white/85 px-6 py-7 backdrop-blur dark:bg-ink-950/80"
            >
              <dt className="font-display text-3xl font-extrabold text-ink-950 dark:text-white sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1.5 text-xs leading-relaxed text-ink-500 dark:text-white/50">{stat.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
