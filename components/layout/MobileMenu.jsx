import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { mainNav } from '@/data/navigation';
import company from '@/data/company';
import cn from '@/utils/cn';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import useLockBodyScroll from '@/hooks/useLockBodyScroll';

function MobileNavItem({ item, index, onClose }) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <motion.li
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.04 * index + 0.08 }}
      >
        <Link
          href={item.href}
          onClick={onClose}
          className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-ink-800 transition-colors hover:bg-ink-50 hover:text-maple-600 dark:text-ink-100 dark:hover:bg-ink-900"
        >
          {item.label}
          <Icon name="arrowRight" className="h-4 w-4 text-ink-300" />
        </Link>
      </motion.li>
    );
  }

  return (
    <motion.li
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.04 * index + 0.08 }}
    >
      {/* Tap the row to expand the group; the chevron rotates. */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-ink-800 transition-colors hover:bg-ink-50 hover:text-maple-600 dark:text-ink-100 dark:hover:bg-ink-900"
      >
        {item.label}
        <Icon
          name="chevron"
          className={cn('h-4 w-4 text-ink-400 transition-transform duration-300', expanded && 'rotate-180')}
          strokeWidth={2.2}
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="ml-2 mt-1 space-y-0.5 border-l border-ink-200 pl-3 dark:border-ink-800">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-ink-600 transition-colors hover:text-maple-600 dark:text-ink-300"
                >
                  {child.label}
                  <Icon name="arrowRight" className="h-3.5 w-3.5 text-ink-300" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function MobileMenu({ open, onClose }) {
  useLockBodyScroll(open);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-ink-950/50 backdrop-blur-sm xl:hidden"
            aria-hidden="true"
          />
          <motion.div
            id="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="fixed inset-y-0 right-0 z-50 flex h-[100dvh] w-[86%] max-w-sm flex-col border-l border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-950 xl:hidden"
          >
            {/* Fixed header */}
            <div className="flex shrink-0 items-center justify-between border-b border-ink-200 px-6 py-4 dark:border-ink-800">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-maple-600">Menu</p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink-700 dark:border-ink-800 dark:text-ink-200"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            {/* Scrollable nav */}
            <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile">
              <ul className="space-y-1">
                {mainNav.map((item, index) => (
                  <MobileNavItem key={item.label} item={item} index={index} onClose={onClose} />
                ))}
              </ul>
            </nav>

            {/* Fixed footer — always visible, covers the bottom */}
            <div className="shrink-0 space-y-3 border-t border-ink-200 bg-white px-6 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-5 dark:border-ink-800 dark:bg-ink-950">
              <Button href="/#contact" size="lg" className="w-full" onClick={onClose} withArrow>
                Book consultation
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={company.phoneHref}
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 rounded-full border border-ink-200 py-3 text-sm font-semibold text-ink-700 transition-colors hover:border-maple-400 hover:text-maple-600 dark:border-ink-700 dark:text-ink-200"
                >
                  <Icon name="phone" className="h-4 w-4 text-maple-600 dark:text-maple-500" />
                  Call
                </a>
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white"
                >
                  <Icon name="whatsapp" className="h-4 w-4" strokeWidth={0} />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
