import Link from 'next/link';
import company from '@/data/company';
import cn from '@/utils/cn';

/**
 * Simmi Immigration logo — a unique custom mark (orbit + maple leaf + takeoff
 * spark) with the wordmark. Two SVG files swap automatically by theme:
 *   public/logos/simmi-full-light.svg  -> LIGHT mode (dark text)
 *   public/logos/simmi-full-dark.svg   -> DARK mode (white text)
 *
 * To use different artwork, replace those two files (keep the names) — the
 * header, footer and mobile menu all read from here.
 */
export default function Logo({ className }) {
  return (
    <Link
      href="/#top"
      className={cn('group inline-flex items-center', className)}
      aria-label={`${company.name} home`}
    >
      <img
        src="/logos/simmi-logo-light.png"
        alt={company.name}
        className="h-10 w-auto transition-transform duration-300 group-hover:scale-[1.03] dark:hidden sm:h-11"
      />
      <img
        src="/logos/simmi-logo-dark.png"
        alt={company.name}
        className="hidden h-10 w-auto transition-transform duration-300 group-hover:scale-[1.03] dark:block sm:h-11"
      />
    </Link>
  );
}
