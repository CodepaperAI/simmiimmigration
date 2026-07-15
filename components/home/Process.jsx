import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Timeline from '@/components/ui/Timeline';
import { processSteps } from '@/data/process';

export default function Process() {
  return (
    <Section id="process" muted>
      <SectionHeading
        align="center"
        eyebrow="Our process"
        title="Seven stages, and you always know which one you are in"
        description="No silence, no guesswork. Each stage has a deliverable, an owner and an expected timeline."
      />
      <Timeline steps={processSteps} />
    </Section>
  );
}
