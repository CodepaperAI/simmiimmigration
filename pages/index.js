import { useEffect } from 'react';
import Seo from '@/components/common/Seo';
import { pageSEO } from '@/seo/seo.config';
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from '@/seo/schema';

import Hero from '@/components/home/Hero';
import ComplexCases from '@/components/home/ComplexCases';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Programs from '@/components/home/Programs';
import Refusals from '@/components/home/Refusals';
import Process from '@/components/home/Process';
import Reviews from '@/components/home/Reviews';
import FinalCta from '@/components/home/FinalCta';
import Faq from '@/components/home/Faq';
import Credentials from '@/components/home/Credentials';
import Contact from '@/components/home/Contact';

export default function HomePage() {
  useEffect(() => {
    if (!window.location.hash) return;
    // Wait a tick so the target sections have rendered, then scroll to it.
    const id = window.location.hash.slice(1);
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const schemas = [
    organizationSchema(),
    localBusinessSchema(),
    websiteSchema(),
    faqSchema(),
    breadcrumbSchema([{ name: 'Home', path: '/' }]),
  ];

  return (
    <>
      <Seo
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        path={pageSEO.home.path}
        schemas={schemas}
      />

      <Hero />
      <ComplexCases />
      <Services />
      <WhyChooseUs />
      <Programs />
      <Refusals />
      <Process />
      <Reviews />
      <FinalCta />
      <Faq />
      <Credentials />
      <Contact />
    </>
  );
}
