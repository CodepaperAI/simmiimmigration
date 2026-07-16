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

/**
 * Human-readable HTML sitemap: every page and sub-page as a clickable link,
 * grouped by category. (The machine-readable XML sitemap lives at /sitemap.xml.)
 */

// Top-level / hand-built pages.
const CORE = {
  title: 'Main Pages',
  links: [
    { label: 'Home', href: '/' },
    { label: 'All Services', href: '/services' },
    { label: 'Super Visa', href: '/services/super-visa' },
    { label: 'Visitor Visa', href: '/services/visitor-visa' },
    { label: 'Study Permit', href: '/services/study-permit' },
    { label: 'Contact', href: '/#contact' },
  ],
};

// Homepage anchor sections, so users can jump straight into the one-page content.
const ON_THIS_PAGE = {
  title: 'Homepage Sections',
  links: [
    { label: 'Complex Case Support', href: '/#complex-cases' },
    { label: 'Services Overview', href: '/#services' },
    { label: 'Why Choose Us', href: '/#why-us' },
    { label: 'Immigration Programs', href: '/#programs' },
    { label: 'Refusal Support', href: '/#refusals' },
    { label: 'Our Process', href: '/#process' },
    { label: 'Client Reviews', href: '/#reviews' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Book a Consultation', href: '/#contact' },
  ],
};

const CATEGORY_ORDER = [
  'Work Permits',
  'Permanent Residence',
  'Business Visa',
  'Super Visa Guides',
  'Additional Services',
];

function LinkList({ links }) {
  return (
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="group inline-flex items-start gap-2 text-[15px] text-ink-600 transition-colors hover:text-maple-600 dark:text-ink-300 dark:hover:text-maple-400"
          >
            <Icon
              name="arrowRight"
              className="mt-1 h-3.5 w-3.5 shrink-0 text-ink-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-maple-600"
              strokeWidth={2.2}
            />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SitemapColumn({ title, links }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-3xl border border-ink-200 bg-white p-7 shadow-soft dark:border-ink-800 dark:bg-ink-900"
    >
      <div className="mb-5 flex items-center justify-between border-b border-ink-200 pb-4 dark:border-ink-800">
        <h2 className="font-display text-lg font-bold text-ink-900 dark:text-white">{title}</h2>
        <span className="rounded-full bg-maple-50 px-2.5 py-1 text-xs font-bold text-maple-600 dark:bg-ink-800 dark:text-maple-300">
          {links.length}
        </span>
      </div>
      <LinkList links={links} />
    </motion.div>
  );
}

export default function SitemapPage({ groups }) {
  const schemas = [
    organizationSchema(),
    breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Sitemap', path: '/sitemap' },
    ]),
  ];

  const columns = [CORE, ON_THIS_PAGE, ...groups];

  return (
    <>
      <Seo
        title="Sitemap"
        description="Browse every page on the Simmi Immigration website — Super Visa, visitor visa, study and work permits, permanent residence, business immigration and Super Visa guides."
        path="/sitemap"
        schemas={schemas}
      />

      <ServiceHero
        eyebrow="Sitemap"
        title="Every page,"
        titleAccent="one click away."
        intro="A full map of the site. Select any link to open that page — each service also lists the programs inside it. Everything here is something we prepare and file."
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=75"
        imageAlt="Global network of connected routes"
      />

      <Section>
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {columns.map((group) => (
            <SitemapColumn key={group.title} title={group.title} links={group.links} />
          ))}
        </motion.div>
      </Section>
    </>
  );
}

export function getStaticProps() {
  const groups = CATEGORY_ORDER.map((category) => ({
    title: category,
    links: Object.entries(servicePages)
      .filter(([, data]) => data.category === category)
      .map(([slug, data]) => ({ label: data.hero.eyebrow, href: `/services/${slug}` })),
  })).filter((group) => group.links.length > 0);

  return { props: { groups } };
}
