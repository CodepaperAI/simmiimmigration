import { motion } from 'framer-motion';
import studyPermit from '@/data/studyPermit';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { breadcrumbSchema, faqSchema, organizationSchema } from '@/seo/schema';
import Seo from '@/components/common/Seo';
import Reveal from '@/components/common/Reveal';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceCta from '@/components/service/ServiceCta';

const {
  meta,
  hero,
  quickFacts,
  whatIsIt,
  pillars,
  documents,
  risksHeading,
  risks,
  risksNote,
  process,
  why,
  faqs,
  help,
} = studyPermit;

export default function StudyPermitPage() {
  const schemas = [
    organizationSchema(),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Study Permit', path: meta.path },
    ]),
  ];

  return (
    <>
      <Seo title={meta.title} description={meta.description} path={meta.path} schemas={schemas} />

      <ServiceHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        titleAccent={hero.titleAccent}
        intro={hero.intro}
        updated={meta.updated}
        image={hero.image}
        imageAlt={hero.imageAlt}
        facts={quickFacts}
      />

      {/* What is it */}
      <Section id="overview">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Overview" title={whatIsIt.heading} />
            <Reveal delay={0.1}>
              {whatIsIt.paragraphs.map((text) => (
                <p key={text.slice(0, 24)} className="mt-6 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                  {text}
                </p>
              ))}
            </Reveal>
          </div>

          <motion.ul
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-3 rounded-3xl border border-ink-200 bg-white p-8 shadow-soft dark:border-ink-800 dark:bg-ink-900 lg:col-span-7"
          >
            <li className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-maple-600">
              Who may apply
            </li>
            {whatIsIt.benefits.map((benefit) => (
              <motion.li
                key={benefit}
                variants={fadeUp}
                className="flex gap-3 text-[15px] text-ink-600 dark:text-ink-300"
              >
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-maple-600" strokeWidth={2.6} />
                {benefit}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>

      {/* Four pillars */}
      <Section muted id="requirements">
        <SectionHeading
          eyebrow="What officers look at"
          title="Four things that decide most student files"
          description="Study plan, funds, ties and consistency. Officers weigh these together, and the study plan carries the most weight."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08}>
              <div className="group h-full rounded-3xl border border-ink-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-maple-200 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-maple-50 text-maple-600 transition-colors group-hover:bg-maple-gradient group-hover:text-white dark:bg-ink-800">
                    <Icon name={pillar.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">{pillar.title}</h3>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Documents */}
      <Section id="documents">
        <SectionHeading eyebrow="Checklist" title={documents.heading} description={documents.description} />
        <motion.ul
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {documents.items.map((item, index) => (
            <motion.li
              key={item}
              variants={fadeUp}
              className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white p-5 transition-colors hover:border-maple-200 dark:border-ink-800 dark:bg-ink-900"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-maple-50 text-xs font-bold text-maple-600 dark:bg-ink-800 dark:text-maple-300">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* Refusal concerns */}
      <Section muted id="risks">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Avoid these" title={risksHeading} />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">{risksNote}</p>
              <Button href="/#contact" size="md" className="mt-7" withArrow>
                Get a refusal review
              </Button>
            </Reveal>
          </div>

          <motion.ul
            variants={stagger(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-3 lg:col-span-7"
          >
            {risks.map((risk) => (
              <motion.li
                key={risk}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-ink-200 bg-white px-5 py-4 text-[15px] text-ink-600 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-maple-600" />
                {risk}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>

      {/* Process */}
      <Section id="process">
        <SectionHeading
          eyebrow="Step by step"
          title="How we prepare your study permit"
          description="Six stages, from the first profile review to the decision."
        />
        <motion.ol
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {process.map((step, index) => (
            <motion.li
              key={step.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900"
            >
              <span className="absolute right-4 top-3 font-display text-5xl font-extrabold text-ink-100 transition-colors group-hover:text-maple-100 dark:text-ink-800 dark:group-hover:text-maple-900/40">
                {index + 1}
              </span>
              <h3 className="relative font-display text-lg font-bold text-ink-900 dark:text-white">{step.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* Why us */}
      <Section muted id="why-us">
        <SectionHeading eyebrow="Why us" title="What you get working with Simmi Immigration" align="center" />
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {why.map((item) => (
            <motion.div
              key={item.letter}
              variants={fadeUp}
              className="rounded-2xl border border-ink-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900"
            >
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-maple-gradient font-display text-base font-extrabold text-white shadow-soft">
                {item.letter}
              </span>
              <h3 className="mt-5 font-display text-base font-bold text-ink-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Answers" title="Study permit FAQ" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">
                Planning your next step after graduation? We map the study, work and permanent residence
                pathway together, not one permit at a time.
              </p>
              <Button href="/#programs" size="md" variant="outline" className="mt-6">
                Explore all programs
              </Button>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs} allowMultiple />
          </div>
        </div>
      </Section>

      <ServiceCta
        help={help}
        cardTitle="Start your study permit file"
        cardBody="We will confirm eligibility, shape the study plan, and build the document plan before anything is filed."
      />
    </>
  );
}
