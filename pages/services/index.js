import Link from 'next/link';
import { motion } from 'framer-motion';
import servicePages from '@/data/servicePages';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import { breadcrumbSchema, organizationSchema } from '@/seo/schema';
import Seo from '@/components/common/Seo';
import Section from '@/components/ui/Section';
import Icon from '@/components/ui/Icon';
import ServiceHero from '@/components/service/ServiceHero';

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

      <Section>
        <motion.div
  variants={stagger(0.06)}
  initial="hidden"
  whileInView="show"
  viewport={viewport}
  className="gap-6 lg:columns-2 [&>*]:mb-6 [&>*]:break-inside-avoid"
>
  {groups.map((group, groupIndex) => (
    <motion.div
      key={group.category}
      variants={fadeUp}
      className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900"
    >
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-xs font-bold text-maple-600">
                  {String(groupIndex + 1).padStart(2, '0')}
                </span>
                <h2 className="font-display text-lg font-bold text-navy-900 dark:text-white">{group.category}</h2>
              </div>

              <div className="space-y-2.5">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-3 rounded-xl border border-ink-200 bg-ink-50/50 px-4 py-3 transition-colors hover:border-maple-200 hover:bg-white dark:border-ink-800 dark:bg-ink-950/40 dark:hover:border-maple-900"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-maple-50 text-maple-600 transition-colors group-hover:bg-maple-gradient group-hover:text-white dark:bg-ink-800">
                      <Icon name={item.icon} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold text-navy-900 transition-colors group-hover:text-maple-600 dark:text-white">
                        {item.label}
                      </span>
                    </span>
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 shrink-0 text-ink-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-maple-600"
                      strokeWidth={2.2}
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
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