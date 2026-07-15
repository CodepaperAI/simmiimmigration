import Seo from '@/components/common/Seo';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" path="/404" noindex />
      <Section className="py-32 text-center">
        <p className="font-display text-8xl font-extrabold text-maple-600/20">404</p>
        <h1 className="mt-4 text-display-md">This page is not in our records</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-500 dark:text-ink-300">
          The link may be out of date. Head back to the homepage, or book a consultation and we will
          point you to the right pathway.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href="/" withArrow>Back to homepage</Button>
          <Button href="/#contact" variant="outline">Book consultation</Button>
        </div>
      </Section>
    </>
  );
}
