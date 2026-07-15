import { defaultSEO } from '@/seo/seo.config';

export function buildMeta({ title, description, path = '/', image, noindex = false } = {}) {
  const canonical = `${defaultSEO.siteUrl}${path === '/' ? '' : path}` || defaultSEO.siteUrl;
  return {
    title: title ? defaultSEO.titleTemplate.replace('%s', title) : defaultSEO.defaultTitle,
    description: description || defaultSEO.defaultDescription,
    canonical: canonical || defaultSEO.siteUrl,
    image: `${defaultSEO.siteUrl}${image || defaultSEO.defaultImage}`,
    noindex,
    keywords: defaultSEO.keywords.join(', '),
  };
}

export default buildMeta;
