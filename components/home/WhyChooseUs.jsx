import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureCard from '@/components/ui/FeatureCard';
import { whyChooseUs } from '@/data/whyChooseUs';
import { stagger, viewport } from '@/lib/motion';

export default function WhyChooseUs() {
  return (
    <Section id="why-us">
      <SectionHeading
        eyebrow="Why choose us"
        title="Eight reasons clients stay with us to the landing"
        description="Immigration advice is easy to give and hard to be accountable for. These are the standards we hold ourselves to on every file."
      />

      <motion.div
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {whyChooseUs.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </motion.div>
    </Section>
  );
}
