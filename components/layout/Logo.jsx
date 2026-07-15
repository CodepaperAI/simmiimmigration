import Link from 'next/link';
import company from '@/data/company';
import cn from '@/utils/cn';

/**
 * Full Simmi Immigration logo (emblem + wordmark).
 * Two artwork files swap automatically by theme:
 *   public/logos/simmi-logo-light.png  -> shown in LIGHT mode
 *   public/logos/simmi-logo-dark.png   -> shown in DARK mode (text lightened)
 * Swap those two files to change the logo across header, footer and mobile menu.
 */
export default function Logo({ className }) {
  return (
    <Link
      href="/#top"
      className={cn('group inline-flex items-center', className)}
      aria-label={`${company.name} home`}
    >
      {/* Light mode */}
      <img
        src="/logos/simmi-logo-light.png"
        alt={company.name}
        className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] dark:hidden"
      />
      {/* Dark mode */}
      <img
        src="/logos/simmi-logo-dark.png"
        alt={company.name}
        className="hidden h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] dark:block"
      />
    </Link>
  );
}
