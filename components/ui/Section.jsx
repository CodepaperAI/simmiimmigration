import cn from '@/utils/cn';
import Container from '@/components/ui/Container';

export default function Section({ id, className, containerClassName, children, muted = false }) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 py-6 sm:py-8',
        muted && 'bg-ink-50/60 dark:bg-ink-900/40',
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
