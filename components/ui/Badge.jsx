import cn from '@/utils/cn';
import Icon from '@/components/ui/Icon';

export default function Badge({ children, icon, className, tone = 'soft' }) {
  const tones = {
    soft: 'border-maple-200 bg-maple-50 text-maple-700 dark:border-maple-900/60 dark:bg-maple-900/20 dark:text-maple-300',
    glass: 'border-white/25 bg-white/10 text-white backdrop-blur',
    auto: 'border-ink-200 bg-white/80 text-ink-700 backdrop-blur dark:border-white/25 dark:bg-white/10 dark:text-white',
  };
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]',
        tones[tone],
        className
      )}
    >
      {icon && <Icon name={icon} className="h-3.5 w-3.5" strokeWidth={2} />}
      {children}
    </span>
  );
}
