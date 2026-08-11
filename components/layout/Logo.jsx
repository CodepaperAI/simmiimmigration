import Link from 'next/link';
import company from '@/data/company';
import cn from '@/utils/cn';

export default function Logo({ className, imgClassName }) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center', className)}
      aria-label={`${company.name} home`}
    >
      <img
        src="/logos/simmi-logo-light.png"
        alt={company.name}
        className={cn(
          'w-auto transition-transform duration-300 group-hover:scale-[1.03] dark:hidden',
          imgClassName || 'h-16 sm:h-14'
        )}
      />
      <img
        src="/logos/simmi-logo-dark.png"
        alt={company.name}
        className={cn(
          'hidden w-auto transition-transform duration-300 group-hover:scale-[1.03] dark:block',
          imgClassName || 'h-16 sm:h-14'
        )}
      />
    </Link>
  );
}