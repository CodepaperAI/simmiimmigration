import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';
import { refusalTypes } from '@/data/refusals';
import { stagger, viewport } from '@/lib/motion';

export default function Refusals() {
  return (
    <Section id="refusals">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          className="lg:col-span-8"
          eyebrow="Refused application support"
          title="A refusal does not always mean the end of your Canada plan."
          description="It means one officer, on one submission, was not persuaded. We find out exactly why \u2014 then decide whether to reapply, request reconsideration, or challenge the decision."
        />
        <div className="lg:col-span-4 lg:justify-self-end">
          <Button href="#contact" size="lg" variant="outline" withArrow>
            Book a refusal review
          </Button>
        </div>
      </div>

      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-14 grid gap-6 md:grid-cols-2"
      >
        {refusalTypes.map((item) => (
          <Card key={item.title} className="border-l-4 border-l-maple-600">
            <h3 className="text-xl">{item.title}</h3>
            <p className="mt-4 flex gap-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
              <Icon name="eye" className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" />
              <span>
                <span className="font-semibold text-ink-700 dark:text-ink-100">Why it happens: </span>
                {item.reason}
              </span>
            </p>
            <p className="mt-3 flex gap-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-maple-600" strokeWidth={2.4} />
              <span>
                <span className="font-semibold text-ink-700 dark:text-ink-100">What we do: </span>
                {item.fix}
              </span>
            </p>
          </Card>
        ))}
      </motion.div>
    </Section>
  );
}
