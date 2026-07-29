import { Fragment } from 'react';
import Accordion from '@/components/ui/Accordion';

export default function FaqTabs({ groups = [] }) {
  return (
    <div className="mt-12 space-y-12">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="mb-6 font-display text-xl font-bold text-ink-900 dark:text-white">
            {group.title}
          </h3>
          <div className="grid gap-x-8 gap-y-4 lg:grid-cols-2">
            {group.items.map((item) => (
              <Accordion key={item.q || item.question} items={[item]} allowMultiple />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}