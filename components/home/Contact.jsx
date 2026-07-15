import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactCard from '@/components/ui/ContactCard';
import ConsultationForm from '@/components/ui/ConsultationForm';
import Icon from '@/components/ui/Icon';
import company from '@/data/company';
import { fadeUp, stagger, viewport } from '@/lib/motion';

export default function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="lg:col-span-5"
        >
          <SectionHeading
            eyebrow="Contact us"
            title="Start with a conversation"
            description="Tell us where you are, and we will tell you what is possible \u2014 clearly, and without a sales pitch."
          />

          <motion.div variants={fadeUp} className="mt-10 space-y-4">
            <ContactCard icon="phone" label="Phone" value={company.phone} href={company.phoneHref} hint="Mon–Fri, 9:00 AM – 6:00 PM" />
            <ContactCard icon="mail" label="Email" value={company.email} href={company.emailHref} hint="Replies within one business day" />
            <ContactCard icon="clock" label="Business hours" value="Mon–Fri: 9:00 AM – 6:00 PM" hint="Saturday by appointment" />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {company.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-all hover:border-transparent hover:bg-maple-gradient hover:text-white dark:border-ink-800 dark:text-ink-300"
              >
                <Icon name={item.icon} className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="lg:col-span-7"
        >
          <ConsultationForm />
        </motion.div>
      </div>
    </Section>
  );
}
