import Card from '@/components/ui/Card';
import IconBox from '@/components/ui/IconBox';

export default function FeatureCard({ feature }) {
  return (
    <Card className="h-full">
      <IconBox name={feature.icon} size="sm" />
      <h3 className="mt-5 text-lg">{feature.title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
        {feature.description}
      </p>
    </Card>
  );
}
