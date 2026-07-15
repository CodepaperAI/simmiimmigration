import company from '@/data/company';
import { faqs } from '@/data/faqs';
import { services } from '@/data/services';
import { defaultSEO } from '@/seo/seo.config';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${company.url}/#organization`,
    name: company.name,
    legalName: company.legalName,
    url: company.url,
    logo: `${company.url}${company.logo}`,
    description: company.description,
    email: company.email,
    telephone: company.phone,
    foundingDate: company.founded,
    sameAs: company.social.map((s) => s.href),
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${company.url}/#localbusiness`,
    name: company.name,
    image: `${company.url}${company.ogImage}`,
    url: company.url,
    telephone: company.phone,
    email: company.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    areaServed: { '@type': 'Country', name: 'Canada' },
    openingHours: company.openingHoursSpec,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: company.rating.value,
      reviewCount: company.rating.count,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Immigration Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.title, description: service.description },
      })),
    },
  };
}

export function faqSchema(items = faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function breadcrumbSchema(crumbs = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${defaultSEO.siteUrl}${crumb.path}`,
    })),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: company.url,
    name: company.name,
    inLanguage: 'en-CA',
  };
}
