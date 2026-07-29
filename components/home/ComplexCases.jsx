import Image from 'next/image';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { fadeUp, scaleIn, stagger, viewport } from '@/lib/motion';


const features = [
  'Regulated and trusted expert support',
  'Tailored solutions for your unique case',
  'Support for complex or previously refused cases',
];

export default function ComplexCases() {
  return (
    <Section id="complex-cases" className="overflow-hidden">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={viewport} className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl border border-ink-200 shadow-lift dark:border-ink-800">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=75"
              alt="Consultant and client reviewing a refused immigration file together"
              width={1200}
              height={900}
              className="h-64 w-full object-cover sm:h-80 lg:h-[26rem]"
            />
          </div>
          
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="show" viewport={viewport} className="order-1 lg:order-2">
          <motion.div variants={fadeUp}>
            <Badge icon="shield">Complex Case Support</Badge>
          </motion.div>

          <motion.h2 variants={fadeUp} className="mt-7 font-display text-display-lg text-ink-900 dark:text-white">
            Your Canada plan, built to be approved.
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-ink-500 dark:text-ink-300">
            Super Visa, study, work, sponsorship and permanent residence &mdash; prepared by a
            regulated consultant who tells you what is realistic, then builds the file to prove it.
            Including cases that were refused before.
          </motion.p>

          <motion.ul variants={stagger(0.08)} className="mt-8 space-y-3.5">
            {features.map((feature) => (
              <motion.li key={feature} variants={fadeUp} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft-red text-maple-600 dark:text-maple-400">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.6} />
                </span>
                <span className="text-[15px] font-medium text-ink-700 dark:text-ink-200">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-9">
            <Button href="#contact" size="lg" withArrow>
              Book a confidential consultation today
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
