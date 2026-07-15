import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import company from '@/data/company';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const MOUNTAINS =
  'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=2000&q=70';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-ink-900 transition-colors duration-500 dark:bg-ink-950 dark:text-white lg:py-32">
      {/* Light-mode backdrop */}
      <div className="absolute inset-0 transition-opacity duration-500 dark:opacity-0" aria-hidden="true">
        <Image
          src={MOUNTAINS}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-maple-50/70" />
      </div>

      {/* Dark-mode backdrop */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100" aria-hidden="true">
        <Image
          src={MOUNTAINS}
          alt="Canadian mountain landscape at sunrise"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/90 via-ink-950/80 to-ink-950" />
      </div>

      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-maple-600/15 blur-[130px] dark:bg-maple-600/25"
      />

      <Container className="relative">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.25em] text-maple-600 dark:text-maple-400"
          >
            Ready for clarity?
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-6 text-display-lg text-ink-950 dark:text-white">
            Book a private consultation for your Canada plan.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-ink-600 dark:text-white/70"
          >
            One hour with a regulated consultant. An honest assessment, a recommended pathway, and a
            quoted fee before you commit to anything.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/#contact" size="lg" withArrow>
              Book consultation
            </Button>
            <Button href={company.phoneHref} size="lg" variant="outline">
              <Icon name="phone" className="h-4 w-4" />
              {company.phone}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
