import cn from '@/utils/cn';
import Icon from '@/components/ui/Icon';

export default function ContactCard({ icon, label, value, href, hint, className }) {
  const Wrapper = href ? 'a' : 'div';
  return (
    <Wrapper
      href={href}
      className={cn(
        'group flex items-start gap-4 rounded-2xl border border-ink-200 bg-white p-5 transition-all duration-300',
        href && 'hover:border-maple-200 hover:shadow-soft',
        'dark:border-ink-800 dark:bg-ink-900',
        className
      )}
    >
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft-red text-maple-600 transition-colors group-hover:bg-maple-gradient group-hover:text-white dark:text-maple-400">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-wider text-ink-400">{label}</span>
        <span className="mt-1 block truncate font-semibold text-ink-900 dark:text-white">{value}</span>
        {hint && <span className="mt-0.5 block text-xs text-ink-500 dark:text-ink-400">{hint}</span>}
      </span>
    </Wrapper>
  );
}
