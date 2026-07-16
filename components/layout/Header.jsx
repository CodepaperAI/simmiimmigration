import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import cn from '@/utils/cn';
import company from '@/data/company';
import { mainNav } from '@/data/navigation';
import useScrolled from '@/hooks/useScrolled';
import Logo from '@/components/layout/Logo';
import MobileMenu from '@/components/layout/MobileMenu';
import ThemeToggle from '@/components/common/ThemeToggle';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';

const linkClass =
  'relative flex items-center gap-1 whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-semibold text-ink-600 transition-colors hover:bg-white hover:text-maple-600 hover:shadow-sm dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white';

function NavDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const wide = item.children.length > 5;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <Link
        href={item.href}
        aria-expanded={open}
        className={cn(linkClass, open && 'bg-white text-maple-600 shadow-sm dark:bg-ink-800 dark:text-white')}
      >
        {item.label}
        <Icon
          name="chevron"
          className={cn('h-3.5 w-3.5 transition-transform duration-300', open && 'rotate-180')}
          strokeWidth={2.2}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3',
              wide ? 'w-[40rem]' : 'w-[23rem]'
            )}
          >
            <div
              className={cn(
                'overflow-hidden rounded-2xl border border-ink-200/80 bg-white/95 p-2 shadow-lift backdrop-blur-xl dark:border-ink-800 dark:bg-ink-900/95',
                wide && 'grid grid-cols-2 gap-1'
              )}
            >
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-maple-50 dark:hover:bg-ink-800"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-maple-gradient text-white">
                    <Icon name={child.icon} className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink-900 transition-colors group-hover:text-maple-600 dark:text-white">
                      {child.label}
                    </span>
                    {child.desc && (
                      <span className="mt-0.5 block text-xs text-ink-500 dark:text-ink-400">{child.desc}</span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden border-b border-ink-200 bg-ink-50 py-2 text-ink-700 transition-colors duration-500 dark:border-ink-800 dark:bg-ink-950 dark:text-white lg:block">
        <Container className="flex items-center justify-between text-xs">
          <p className="flex items-center gap-2 text-ink-600 dark:text-white/70">
            <Icon name="shield" className="h-4 w-4 text-maple-600 dark:text-maple-500" />
            Regulated Canadian Immigration Consultant &middot; CICC member
          </p>
          <div className="flex items-center gap-6">
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 text-ink-600 transition-colors hover:text-maple-600 dark:text-white/80 dark:hover:text-white"
            >
              <Icon name="phone" className="h-3.5 w-3.5 text-maple-600 dark:text-maple-500" />
              {company.phone}
            </a>
            <a
              href={company.emailHref}
              className="flex items-center gap-2 text-ink-600 transition-colors hover:text-maple-600 dark:text-white/80 dark:hover:text-white"
            >
              <Icon name="mail" className="h-3.5 w-3.5 text-maple-600 dark:text-maple-500" />
              {company.email}
            </a>
            <div className="flex items-center gap-3 border-l border-ink-200 pl-6 dark:border-ink-800">
              {company.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="text-ink-500 transition-colors hover:text-maple-600 dark:text-white/60 dark:hover:text-white"
                >
                  <Icon name={item.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'sticky top-0 z-40 w-full border-b transition-all duration-500',
          scrolled
            ? 'border-ink-200/70 bg-white/85 shadow-soft backdrop-blur-xl dark:border-ink-800/80 dark:bg-ink-950/85'
            : 'border-transparent bg-white/70 backdrop-blur-md dark:bg-ink-950/60'
        )}
      >
        <Container
          className={cn(
            'flex items-center justify-between gap-4 transition-all duration-500',
            scrolled ? 'h-[68px]' : 'h-20'
          )}
        >
          <Logo className="shrink-0" />

          {/* Desktop nav — pill container, nothing wraps */}
          <nav
            className="hidden items-center gap-0.5 rounded-full border border-ink-200/70 bg-ink-50/70 p-1 shadow-sm dark:border-ink-800 dark:bg-ink-900/60 xl:flex"
            aria-label="Primary"
          >
            {mainNav.map((item) =>
              item.children ? (
                <NavDropdown key={item.label} item={item} />
              ) : (
                <Link key={item.label} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <ThemeToggle />
            <a
              href={company.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-[13px] font-semibold text-ink-800 transition-colors hover:border-maple-400 hover:text-maple-600 dark:border-ink-700 dark:text-white dark:hover:border-maple-500 lg:inline-flex"
            >
              <Icon name="phone" className="h-4 w-4 text-maple-600 dark:text-maple-500" />
              Call now
            </a>
            <Button href="/#contact" size="sm" className="hidden px-5 sm:inline-flex">
              Book consultation
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-ink-200 text-ink-800 transition-colors hover:border-maple-400 hover:text-maple-600 dark:border-ink-700 dark:text-white xl:hidden"
            >
              <span className="block h-0.5 w-4 rounded-full bg-current" />
              <span className="block h-0.5 w-4 rounded-full bg-current" />
            </button>
          </div>
        </Container>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
