import Image from 'next/image';
import { motion } from 'framer-motion';
import superVisa from '@/data/superVisa';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { breadcrumbSchema, faqSchema, organizationSchema } from '@/seo/schema';
import Seo from '@/components/common/Seo';
import Reveal from '@/components/common/Reveal';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceCta from '@/components/service/ServiceCta';
import FaqTabs from '@/components/service/FaqTabs';

const {
  meta,
  hero,
  quickFacts,
  intro,
  whatIsIt,
  comparison,
  eligibility,
  pillars,
  insurance,
  documents,
  process,
  risks,
  sponsorshipNote,
  faqGroups,
  help,
} = superVisa;

export default function SuperVisaPage() {
  const flatFaqs = faqGroups.flatMap((group) => group.items).slice(0, 12);

  const schemas = [
    organizationSchema(),
    faqSchema(flatFaqs),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Super Visa', path: meta.path },
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

      {/* Overview */}
      <Section id="overview">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Overview" title={intro.heading} />
          </div>
          <Reveal className="space-y-5 lg:col-span-7">
            {intro.paragraphs.map((text) => (
              <p key={text.slice(0, 32)} className="text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                {text}
              </p>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* What is it + benefits */}
      <Section muted id="what-is-a-super-visa">
        <SectionHeading eyebrow="The basics" title={whatIsIt.heading} />
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <Reveal className="space-y-5 lg:col-span-7">
            {whatIsIt.paragraphs.map((text) => (
              <p key={text.slice(0, 32)} className="text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                {text}
              </p>
            ))}
          </Reveal>

          <motion.ul
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-3 rounded-3xl border border-ink-200 bg-white p-7 shadow-soft dark:border-ink-800 dark:bg-ink-900 lg:col-span-5"
          >
            <li className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-maple-600">Main benefits</li>
            {whatIsIt.benefits.map((benefit) => (
              <motion.li key={benefit} variants={fadeUp} className="flex gap-3 text-[15px] text-ink-600 dark:text-ink-300">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-maple-600" strokeWidth={2.6} />
                {benefit}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>

      {/* Comparison table */}
      <Section id="comparison">
        <SectionHeading eyebrow="Compare" title={comparison.heading} description={comparison.description} />

        <Reveal className="mt-12 overflow-hidden rounded-3xl border border-ink-200 shadow-soft dark:border-ink-800">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left">
              <thead>
                <tr className="bg-maple-gradient text-white">
                  <th className="px-6 py-4 text-sm font-bold">Feature</th>
                  <th className="px-6 py-4 text-sm font-bold">Visitor Visa</th>
                  <th className="px-6 py-4 text-sm font-bold">Super Visa</th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ delay: index * 0.06, duration: 0.5 }}
                    className="border-t border-ink-200 bg-white transition-colors hover:bg-maple-50/60 dark:border-ink-800 dark:bg-ink-900 dark:hover:bg-ink-800/60"
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-ink-900 dark:text-white">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-ink-500 dark:text-ink-300">{row.visitor}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-maple-700 dark:text-maple-300">{row.superVisa}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* Eligibility */}
      <Section muted id="eligibility">
        <SectionHeading eyebrow="Eligibility" title="Who can apply, and who can host" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {eligibility.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.1}>
              <div className="h-full rounded-3xl border border-ink-200 bg-white p-8 shadow-soft transition-shadow hover:shadow-lift dark:border-ink-800 dark:bg-ink-900">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-maple-gradient text-white shadow-soft">
                  <Icon name={block.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink-900 dark:text-white">{block.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">{block.intro}</p>
                <ul className="mt-6 space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-ink-600 dark:text-ink-300">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-maple-600" strokeWidth={2.6} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Four pillars */}
      <Section id="requirements">
        <SectionHeading
          eyebrow="What officers look at"
          title="The four things that decide most Super Visa files"
          description="Get these right and the rest of the application usually follows. Get one wrong and it is the most common reason for a refusal."
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

      {/* Insurance */}
      <Section muted id="insurance">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-ink-200 shadow-lift dark:border-ink-800">
              <Image
                src={insurance.image}
                alt={insurance.imageAlt}
                width={900}
                height={700}
                className="h-80 w-full object-cover lg:h-[26rem]"
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-ink-950/85 px-5 py-4 backdrop-blur-xl"
              >
                <p className="font-display text-2xl font-extrabold text-white">$100,000+</p>
                <p className="mt-0.5 text-xs text-white/60">minimum emergency coverage</p>
              </motion.div>
            </div>
          </Reveal>

          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Insurance" title={insurance.heading} />
            <Reveal delay={0.1}>
              {insurance.paragraphs.map((text) => (
                <p key={text.slice(0, 24)} className="mt-6 text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                  {text}
                </p>
              ))}
              <ul className="mt-7 space-y-3">
                {insurance.requirements.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-ink-600 dark:text-ink-300">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-maple-600" strokeWidth={2.6} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl border border-ink-200 bg-white p-5 text-sm leading-relaxed text-ink-500 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-300">
                {insurance.footnote}
              </p>
              <p className="mt-4 flex gap-3 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                <Icon name="badge" className="mt-0.5 h-5 w-5 shrink-0 text-maple-600" />
                {insurance.medicalNote}
              </p>
            </Reveal>
          </div>
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

      {/* Process */}
      <Section muted id="process">
        <SectionHeading
          eyebrow="Step by step"
          title="The Super Visa application process"
          description="Ten stages, from the first eligibility check to submitting the passport for visa issuance."
        />
        <motion.ol
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-12 grid gap-5 md:grid-cols-2"
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

      {/* Refusal risks */}
      <Section id="risks">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Avoid these" title="Common problems and refusal risks" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">{sponsorshipNote}</p>
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
                className="flex items-start gap-3 rounded-xl border border-ink-200 bg-ink-50/60 px-5 py-4 text-[15px] text-ink-600 dark:border-ink-800 dark:bg-ink-900/50 dark:text-ink-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-maple-600" />
                {risk}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section muted id="faq">
        <SectionHeading
          eyebrow="Answers"
          title="Super Visa frequently asked questions"
          description="Pick a category to jump straight to the questions families ask us most."
        />
        <FaqTabs groups={faqGroups} />
      </Section>

      <ServiceCta
        help={help}
        cardTitle="Start your Super Visa file"
        cardBody="Book a consultation and we will confirm eligibility, calculate the income threshold for your family size, and build the document plan before anything is filed."
      />
    </>
  );
}
