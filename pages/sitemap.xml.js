import servicePages from '@/data/servicePages';
import company from '@/data/company';

const SITE = company.url; // https://www.simmiimmigration.com

// Static, hand-built routes and their SEO priority / change cadence.
const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/super-visa', priority: '0.9', changefreq: 'monthly' },
  { path: '/services/visitor-visa', priority: '0.8', changefreq: 'monthly' },
  { path: '/services/study-permit', priority: '0.8', changefreq: 'monthly' },
];

function buildSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const staticUrls = STATIC_ROUTES.map(
    (r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  );

  // Every data-driven service page.
  const serviceUrls = Object.keys(servicePages).map(
    (slug) => `  <url>
    <loc>${SITE}/services/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...serviceUrls].join('\n')}
</urlset>`;
}

// This page never renders in the browser — it streams XML from the server.
export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(buildSitemap());
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
