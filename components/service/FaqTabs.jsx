import Accordion from '@/components/ui/Accordion';

export default function FaqTabs({ groups = [] }) {
  return (
    <div className="mt-10 space-y-10">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="mb-4 font-display text-xl font-bold text-navy-900 dark:text-white">
            {group.title}
          </h3>
          <Accordion items={group.items} allowMultiple startClosed />
        </div>
      ))}
    </div>
  );
}