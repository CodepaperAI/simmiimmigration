import { motion } from 'framer-motion';
import { EASE, viewport } from '@/lib/motion';
import { breadcrumbSchema, faqSchema, organizationSchema } from '@/seo/schema';
import { categoryBreadcrumb } from '@/data/serviceCategories';
import Seo from '@/components/common/Seo';
import Reveal from '@/components/common/Reveal';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import Icon from '@/components/ui/Icon';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceCta from '@/components/service/ServiceCta';

export default function ServicePage({ slug, data }) {
  const {
    meta,
    hero,
    quickFacts = [],
    prose = [],
    cards = [],
    comparison,
    documents,
    process = [],
    why = [],
    faqs = [],
    help,
    related = [],
    category,
  } = data;

  const path = `/services/${slug}`;
  const cat = categoryBreadcrumb[category];
  const breadcrumbs = cat ? [cat] : [];

  const schemas = [
    organizationSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      ...(cat ? [{ name: cat.label, path: cat.href }] : []),
      { name: hero.eyebrow, path },
    ]),
    ...(faqs.length ? [faqSchema(faqs)] : []),
  ];

  /**
   * Every section is optional. We build a list of only the ones that have data,
   * then stripe the backgrounds by position — so a page that skips, say, the
   * process section never ends up with two identical backgrounds side by side.
   */
  const sections = [];

  if (prose.length > 0) {
    sections.push({
      id: 'overview',
      render: (muted) => (
        <Section key="overview" id="overview" muted={muted}>
          <div className="space-y-16">
            {prose.map((block, index) => (
              <div key={block.heading} className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <SectionHeading eyebrow={index === 0 ? 'Overview' : undefined} title={block.heading} />
                </div>
                <Reveal className="space-y-5 lg:col-span-8">
                  {(block.paragraphs || []).map((text) => (
                    <p key={text.slice(0, 30)} className="text-[17px] leading-relaxed text-ink-600 dark:text-ink-300">
                      {text}
                    </p>
                  ))}
                  {block.items && (
                    <ul className="space-y-3 rounded-2xl border border-ink-200 bg-ink-50/60 p-6 dark:border-ink-800 dark:bg-ink-900/50">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-3 text-[15px] text-ink-600 dark:text-ink-300">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-maple-600" strokeWidth={2.6} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              </div>
            ))}
          </div>
        </Section>
      ),
    });
  }

  if (cards.length > 0) {
    sections.push({
      id: 'details',
      render: (muted) => (
        <Section key="details" id="details" muted={muted}>
          <SectionHeading eyebrow="The detail" title="What you need to know" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.07}>
                <div className="group h-full rounded-3xl border border-ink-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-maple-200 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maple-50 text-maple-600 transition-colors group-hover:bg-maple-gradient group-hover:text-white dark:bg-ink-800">
                      <Icon name={card.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-xl font-bold text-ink-900 dark:text-white">{card.title}</h3>
                  </div>

                  {card.body && (
                    <p className="mt-5 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">{card.body}</p>
                  )}

                  {card.items && (
                    <ul className="mt-5 space-y-3">
                      {card.items.map((item) => (
                        <li key={item} className="flex gap-3 text-[15px] text-ink-600 dark:text-ink-300">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-maple-600" strokeWidth={2.6} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      ),
    });
  }

  if (comparison) {
    sections.push({
      id: 'comparison',
      render: (muted) => (
        <Section key="comparison" id="comparison" muted={muted}>
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
                      <td className="px-6 py-4 text-sm font-semibold text-maple-700 dark:text-maple-300">
                        {row.superVisa}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </Section>
      ),
    });
  }

  if (documents?.items?.length) {
    sections.push({
      id: 'documents',
      render: (muted) => (
        <Section key="documents" id="documents" muted={muted}>
          <SectionHeading eyebrow="Checklist" title={documents.heading} description={documents.description} />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {documents.items.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: EASE }}
                className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white p-5 transition-colors hover:border-maple-200 dark:border-ink-800 dark:bg-ink-900"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-maple-50 text-xs font-bold text-maple-600 dark:bg-ink-800 dark:text-maple-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </Section>
      ),
    });
  }

  if (process.length > 0) {
    sections.push({
      id: 'process',
      render: (muted) => (
        <Section key="process" id="process" muted={muted}>
          <SectionHeading eyebrow="Step by step" title="How the process works" />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: EASE }}
                className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900"
              >
                <span className="absolute right-4 top-3 font-display text-5xl font-extrabold text-ink-100 transition-colors group-hover:text-maple-100 dark:text-ink-800 dark:group-hover:text-maple-900/40">
                  {index + 1}
                </span>
                <h3 className="relative font-display text-lg font-bold text-ink-900 dark:text-white">{step.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </Section>
      ),
    });
  }

  if (why.length > 0) {
    sections.push({
      id: 'why-us',
      render: (muted) => (
        <Section key="why-us" id="why-us" muted={muted}>
          <SectionHeading eyebrow="Why us" title="What you get working with Simmi Immigration" align="center" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((item, index) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: EASE }}
                className="rounded-2xl border border-ink-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900"
              >
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-maple-gradient font-display text-base font-extrabold text-white shadow-soft">
                  {item.letter}
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-ink-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      ),
    });
  }

  if (faqs.length > 0) {
    sections.push({
      id: 'faq',
      render: (muted) => (
        <Section key="faq" id="faq" muted={muted}>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="Answers" title="Frequently asked questions" />
            </div>
            <div className="lg:col-span-8">
              <Accordion items={faqs} allowMultiple />
            </div>
          </div>
        </Section>
      ),
    });
  }

  return (
    <>
      <Seo title={meta.title} description={meta.description} path={path} schemas={schemas} />

      <ServiceHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        titleAccent={hero.titleAccent}
        intro={hero.intro}
        updated={meta.updated}
        image={hero.image}
        imageAlt={hero.imageAlt}
        facts={quickFacts}
        breadcrumbs={breadcrumbs}
      />

      {/* Only the sections this service actually has data for, striped by position */}
      {sections.map((section, index) => section.render(index % 2 === 1))}

      <ServiceCta help={help} related={related} />
    </>
  );
}
