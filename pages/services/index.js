import Link from 'next/link';
import { motion } from 'framer-motion';
import servicePages from '@/data/servicePages';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { breadcrumbSchema, organizationSchema } from '@/seo/schema';
import Seo from '@/components/common/Seo';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import ServiceHero from '@/components/service/ServiceHero';

/* The three hand-built pages are not in servicePages, so add them here. */
const FEATURED = [
  {
    category: 'Visiting Family',
    items: [
      { label: 'Super Visa', href: '/services/super-visa', desc: 'Parents and grandparents, up to 5 years per entry.', icon: 'family' },
      { label: 'Visitor Visa', href: '/services/visitor-visa', desc: 'Tourism, family visits and short business trips.', icon: 'plane' },
    ],
  },
  {
    category: 'Study',
    items: [
      { label: 'Study Permit', href: '/services/study-permit', desc: 'Study plan, financial proof, DLI acceptance.', icon: 'graduation' },
    ],
  },
];

const CATEGORY_ORDER = ['Work Permits', 'Permanent Residence', 'Business Visa', 'Super Visa Guides', 'Additional Services'];

export default function ServicesIndex({ groups }) {
  const schemas = [
    organizationSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
  ];

  return (
    <>
      <Seo
        title="Immigration Services"
        description="Every Canadian immigration service Simmi Immigration supports: Super Visa, visitor visa, study permits, work permits, permanent residence, business immigration and more."
        path="/services"
        schemas={schemas}
      />

      <ServiceHero
        eyebrow="Our Services"
        title="Every pathway,"
        titleAccent="in one place."
        intro="From a first visit to permanent residence and citizenship. Choose a program below, or book a consultation and we will tell you which route actually fits your situation."
        image="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=75"
        imageAlt="Toronto skyline"
      />

      {groups.map((group, groupIndex) => (
        <Section key={group.category} muted={groupIndex % 2 === 1} id={group.category.toLowerCase().replace(/\s+/g, '-')}>
          <SectionHeading eyebrow={`0${groupIndex + 1}`} title={group.category} />

          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {group.items.map((item) => (
              <motion.div key={item.href} variants={fadeUp}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maple-200 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-maple-50 text-maple-600 transition-colors group-hover:bg-maple-gradient group-hover:text-white dark:bg-ink-800">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900 transition-colors group-hover:text-maple-600 dark:text-white">
                    {item.label}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{item.desc}</p>
                  <span className="mt-5 flex items-center gap-2 text-sm font-semibold text-maple-600">
                    Learn more
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2.2}
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      ))}
    </>
  );
}

export function getStaticProps() {
  const dynamicGroups = CATEGORY_ORDER.map((category) => ({
    category,
    items: Object.entries(servicePages)
      .filter(([, data]) => data.category === category)
      .map(([slug, data]) => ({
        label: data.hero.eyebrow,
        href: `/services/${slug}`,
        desc: data.meta.description,
        icon: data.quickFacts?.[0]?.icon || 'maple',
      })),
  })).filter((group) => group.items.length > 0);

  return { props: { groups: [...FEATURED, ...dynamicGroups] } };
}
