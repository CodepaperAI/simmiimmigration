import cn from '@/utils/cn';
import Container from '@/components/ui/Container';

export default function Section({ id, className, containerClassName, children, muted = false }) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 py-14 sm:py-20',
        muted
          ? 'bg-ink-100/80 dark:bg-navy-900'
          : 'bg-white dark:bg-navy-950',
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}