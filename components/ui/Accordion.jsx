import { useState, useId } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import cn from '@/utils/cn';

function AccordionItem({ item, isOpen, onToggle }) {
  const id = useId();
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border transition-colors duration-300',
        isOpen
          ? 'border-maple-200 bg-white shadow-soft dark:border-maple-900/70 dark:bg-ink-900'
          : 'border-ink-200 bg-ink-50/60 hover:border-ink-300 dark:border-ink-800 dark:bg-ink-900/50'
      )}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`panel-${id}`}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="text-base font-semibold text-navy-900 dark:text-white">{item.question}</span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-6 w-6 shrink-0 items-center justify-center text-2xl font-light leading-none text-red-600 dark:text-red-400"
            aria-hidden="true"
          >
            +
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`panel-${id}`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-500 dark:text-ink-300">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accordion({ items = [], allowMultiple = false, startClosed = false }) {
  const [open, setOpen] = useState(startClosed ? [] : [0]);

  const toggle = (index) => {
    setOpen((prev) => {
      if (prev.includes(index)) return prev.filter((i) => i !== index);
      return allowMultiple ? [...prev, index] : [index];
    });
  };

  return (
    <div className="space-y-2.5">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          item={item}
          isOpen={open.includes(index)}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}