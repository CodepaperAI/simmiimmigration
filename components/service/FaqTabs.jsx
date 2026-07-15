import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import cn from '@/utils/cn';
import { EASE } from '@/lib/motion';
import Accordion from '@/components/ui/Accordion';

export default function FaqTabs({ groups = [] }) {
  const [active, setActive] = useState(0);
  const group = groups[active];

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-12">
      {/* Category rail */}
      <div className="lg:col-span-4">
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2 lg:sticky lg:top-28 lg:flex-col lg:overflow-visible lg:pb-0">
          {groups.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  'relative flex shrink-0 items-center justify-between gap-3 whitespace-nowrap rounded-xl px-4 py-3 text-sm font-semibold transition-colors lg:w-full',
                  isActive
                    ? 'text-white'
                    : 'text-ink-600 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800'
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="faq-tab"
                    transition={{ duration: 0.35, ease: EASE }}
                    className="absolute inset-0 -z-10 rounded-xl bg-maple-gradient shadow-soft"
                  />
                )}
                {item.title}
                <span className={cn('text-xs font-bold', isActive ? 'text-white/70' : 'text-ink-400')}>
                  {item.items.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Questions */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <Accordion items={group.items} allowMultiple />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
