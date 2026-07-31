import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import { viewport } from '@/lib/motion';
import { processSteps } from '@/data/process';

export default function Process() {
  return (
    <Section id="process" muted>
      <SectionHeading
        align="center"
        eyebrow="Our process"
        title="Seven stages, and you always know which one you are in"
        description="No silence, no guesswork. Each stage has a deliverable, an owner and an expected timeline."
      />

      <div className="mt-14 rounded-3xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900 sm:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-2">
          {processSteps.map((step, index) => (
            <div key={step.step} className="flex items-start gap-4 lg:flex-1 lg:flex-col lg:items-center">
              {/* Icon circle + arrow */}
              <div className="flex items-center gap-2 lg:w-full lg:justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-maple-500 text-navy-900 dark:text-white">
                    <Icon name={step.icon} className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-maple-gradient text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </motion.div>

                {/* Arrow between steps (desktop only, not after last) */}
                {index < processSteps.length - 1 && (
                  <Icon name="arrowRight" className="hidden h-5 w-5 shrink-0 text-ink-300 lg:block" strokeWidth={2} />
                )}
              </div>

              {/* Text */}
              <div className="lg:mt-4 lg:text-center">
                <h3 className="font-display text-base font-bold text-navy-900 dark:text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300 lg:mx-auto lg:max-w-[9rem]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}