import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import cn from '@/utils/cn';
import { programCategories } from '@/data/programs';
import { EASE } from '@/lib/motion';

export default function Programs() {
  const [active, setActive] = useState(programCategories[0].id);
  const current = programCategories.find((c) => c.id === active) || programCategories[0];

  // Navbar links like #permanent-residence open this section on the right category.
  useEffect(() => {
    const syncFromHash = () => {
      const id = window.location.hash.replace('#', '');
      if (programCategories.some((category) => category.id === id)) setActive(id);
    };
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    // Clicking a link whose hash already matches the URL fires no hashchange
    // event, so also listen for clicks on any anchor pointing at a category.
    const onClick = (event) => {
      const link = event.target.closest('a[href*="#"]');
      if (!link) return;
      const id = link.getAttribute('href').split('#')[1];
      if (id && programCategories.some((category) => category.id === id)) {
        setActive(id);
      }
    };
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('hashchange', syncFromHash);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <Section id="programs" muted>
      {/* Anchor targets used by the navbar */}
      <span id="permanent-residence" className="block scroll-mt-32" aria-hidden="true" />
      <span id="business-visa" className="block scroll-mt-32" aria-hidden="true" />
      <span id="additional-services" className="block scroll-mt-32" aria-hidden="true" />

      <SectionHeading
        eyebrow="Immigration programs"
        title="Six categories. Forty-plus routes."
        description="Select a category to see the programs inside it. Every item on these lists is something we prepare and file."
      />

      {/* Category tabs */}
      <div className="mt-12 flex gap-2 overflow-x-auto pb-2 no-scrollbar" role="tablist" aria-label="Immigration program categories">
        {programCategories.map((category) => {
          const isActive = category.id === active;
          return (
            <button
              key={category.id}
              id={`tab-${category.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${category.id}`}
              onClick={() => setActive(category.id)}
              className={cn(
                'relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300',
                isActive ? 'text-white' : 'text-ink-600 hover:text-maple-600 dark:text-ink-300'
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="program-pill"
                  transition={{ duration: 0.4, ease: EASE }}
                  className="absolute inset-0 rounded-full bg-maple-gradient"
                />
              )}
              <span className="relative z-10">{category.title}</span>
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div id={`panel-${current.id}`} role="tabpanel" aria-labelledby={`tab-${current.id}`} className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="grid gap-8 lg:grid-cols-12"
          >
            <div className="relative overflow-hidden rounded-3xl lg:col-span-5">
              <Image
                src={current.image}
                alt={current.alt}
                width={1200}
                height={900}
                className="h-72 w-full object-cover lg:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-2xl text-white">{current.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{current.blurb}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-ink-200 bg-white p-7 dark:border-ink-800 dark:bg-ink-900 lg:col-span-7 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-maple-600">
                {current.items.length} programs in this category
              </p>
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.04 } } }}
                className="mt-6 grid gap-3 sm:grid-cols-2"
              >
                {current.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                    className="group flex items-center gap-3 rounded-xl border border-ink-200 bg-ink-50/60 px-4 py-3 transition-colors hover:border-maple-200 hover:bg-white dark:border-ink-800 dark:bg-ink-950/50 dark:hover:border-maple-900"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-soft-red text-maple-600 transition-colors group-hover:bg-maple-gradient group-hover:text-white dark:text-maple-400">
                      <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.6} />
                    </span>
                    <span className="text-sm font-medium text-ink-800 dark:text-ink-100">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-ink-200 pt-7 dark:border-ink-800">
                <Button href="#contact" withArrow>
                  Check my eligibility
                </Button>
                <p className="text-xs text-ink-400">Free 15-minute pathway assessment.</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </Section>
  );
}
