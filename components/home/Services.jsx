import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import { services } from '@/data/services';
import { stagger, viewport } from '@/lib/motion';

export default function Services() {
  return (
    <Section id="services" muted>
      <SectionHeading
        align="center"
        eyebrow="What we do"
        title="Every pathway, handled end to end"
        description="Ten core services covering the routes most people actually take into Canada. Not sure which one fits? The assessment answers that first."
      />

      <motion.div
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </motion.div>
    </Section>
  );
}
