import Link from 'next/link';
import { motion } from 'framer-motion';
import cn from '@/utils/cn';
import Icon from '@/components/ui/Icon';

const variants = {
  primary:
    'bg-maple-gradient text-white shadow-soft hover:shadow-lift focus-visible:ring-maple-600',
  outline:
    'border border-ink-300 text-ink-900 hover:border-maple-600 hover:text-maple-600 dark:border-ink-700 dark:text-white dark:hover:border-maple-500 dark:hover:text-maple-400',
  ghost:
    'text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800',
  light:
    'bg-white text-ink-900 shadow-soft hover:bg-ink-50',
};

const MotionLink = motion(Link);

const sizes = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
};

export default function Button({
  as,
  href,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className,
  children,
  ...props
}) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-tight transition-all duration-300',
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {children}
      {withArrow && (
        <Icon
          name="arrowRight"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  const hover = { scale: 1.02 };
  const tap = { scale: 0.98 };

  if (href) {
    return (
      <MotionLink href={href} className={classes} whileHover={hover} whileTap={tap} {...props}>
        {content}
      </MotionLink>
    );
  }

  const Tag = as ? motion(as) : motion.button;
  return (
    <Tag className={classes} whileHover={hover} whileTap={tap} {...props}>
      {content}
    </Tag>
  );
}
