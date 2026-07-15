import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import company from '@/data/company';
import { faqs } from '@/data/faqs';

export default function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="FAQ"
            title="The questions people ask before they call"
            description="If yours is not here, ask it directly. Answers are free; guessing is expensive."
          />
          <div className="mt-8 rounded-3xl border border-ink-200 bg-ink-50/60 p-6 dark:border-ink-800 dark:bg-ink-900/50">
            <p className="text-sm font-semibold text-ink-900 dark:text-white">Still deciding?</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
              Call and describe your situation in five minutes. We will tell you whether you need us.
            </p>
            <a
              href={company.phoneHref}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-maple-600 dark:text-maple-400"
            >
              <Icon name="phone" className="h-4 w-4" />
              {company.phone}
            </a>
          </div>
        </div>

        <div className="lg:col-span-8">
          <Accordion items={faqs} />
          <div className="mt-10">
            <Button href="#contact" withArrow>
              Ask your question in a consultation
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
