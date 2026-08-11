import Link from 'next/link';
import Card from '@/components/ui/Card';
import IconBox from '@/components/ui/IconBox';
import Icon from '@/components/ui/Icon';

export default function ServiceCard({ service }) {
  return (
    <Card className="flex h-full flex-col">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-soft-red opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <IconBox name={service.icon} />
      <h3 className="mt-6 text-xl">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
        {service.description}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-maple-600 dark:text-maple-400"
      >
        Learn More
        <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </Card>
  );
}