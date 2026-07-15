import cn from '@/utils/cn';
import Icon from '@/components/ui/Icon';

export default function IconBox({ name, className, size = 'md' }) {
  const sizes = {
    sm: 'h-10 w-10 rounded-xl',
    md: 'h-14 w-14 rounded-2xl',
  };
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center bg-soft-red text-maple-600 ring-1 ring-inset ring-maple-100 transition-all duration-300',
        'group-hover:bg-maple-gradient group-hover:text-white group-hover:ring-transparent',
        'dark:ring-maple-900/50 dark:text-maple-400',
        sizes[size],
        className
      )}
    >
      <Icon name={name} className={size === 'sm' ? 'h-5 w-5' : 'h-6 w-6'} />
    </span>
  );
}
