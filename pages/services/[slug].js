import servicePages, { serviceSlugs } from '@/data/servicePages';
import ServicePage from '@/components/service/ServicePage';

export default function ServiceSlugPage({ slug, data }) {
  return <ServicePage slug={slug} data={data} />;
}

export function getStaticPaths() {
  return {
    paths: serviceSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
      data: servicePages[params.slug],
    },
  };
}
