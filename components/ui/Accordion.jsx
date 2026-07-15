import { useState, useId } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import cn from '@/utils/cn';
import Icon from '@/components/ui/Icon';

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
          <span className="text-base font-semibold text-ink-900 dark:text-white">{item.question}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors',
              isOpen ? 'bg-maple-gradient text-white' : 'bg-white text-ink-500 dark:bg-ink-800 dark:text-ink-300'
            )}
          >
            <Icon name="chevron" className="h-4 w-4" strokeWidth={2} />
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

export default function Accordion({ items = [], allowMultiple = false }) {
  const [open, setOpen] = useState([0]);

  const toggle = (index) => {
    setOpen((prev) => {
      if (prev.includes(index)) return prev.filter((i) => i !== index);
      return allowMultiple ? [...prev, index] : [index];
    });
  };

  return (
    <div className="space-y-3">
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
