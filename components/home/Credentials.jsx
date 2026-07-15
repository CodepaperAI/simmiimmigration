import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import { credentials } from '@/data/credentials';
import { fadeUp, stagger, viewport } from '@/lib/motion';

export default function Credentials() {
  return (
    <Section id="credentials" muted>
      <SectionHeading
        align="center"
        eyebrow="Trust & credentials"
        title="Licensed to represent you. Accountable if we fail you."
        description="Only lawyers, notaries in Quebec, and consultants regulated by the CICC may charge for immigration advice in Canada. Always check your representative's licence."
      />

      <motion.ul
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {credentials.map((item) => (
          <motion.li
            key={item.abbr}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-7 text-center transition-all duration-300 hover:border-maple-200 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900"
          >
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-soft-red text-maple-600 transition-colors group-hover:bg-maple-gradient group-hover:text-white dark:text-maple-400">
              <Icon name="badge" className="h-7 w-7" />
            </span>
            <p className="mt-5 font-display text-2xl font-extrabold tracking-tight text-ink-900 dark:text-white">
              {item.abbr}
            </p>
            <p className="mt-2 text-sm font-medium leading-snug text-ink-700 dark:text-ink-200">{item.name}</p>
            <p className="mt-3 text-xs text-ink-400">{item.note}</p>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
