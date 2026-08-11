import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import company from '@/data/company';
import { testimonials } from '@/data/testimonials';
import { fadeUp, viewport } from '@/lib/motion';

const VISIBLE = 3;      // cards shown in the row at once
const INTERVAL = 4000;  // ms between auto-rotations
const LIMIT = 160;      // chars before "View more"

function ReviewPopup({ review, onClose }) {
  return (
    <AnimatePresence>
      {review && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl border border-ink-200 bg-white p-8 dark:border-ink-800 dark:bg-ink-900"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink-50 text-2xl font-light leading-none text-navy-900 transition-colors hover:bg-ink-100 dark:bg-ink-800 dark:text-white"
            >
              &times;
            </button>
            <span className="flex gap-0.5 text-maple-600">
              {Array.from({ length: review.rating || 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-4 w-4 fill-current" strokeWidth={1} />
              ))}
            </span>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">{review.quote}</p>
            <div className="mt-6 border-t border-ink-100 pt-4 dark:border-ink-800">
              <p className="font-display font-bold text-navy-900 dark:text-white">{review.name}</p>
              <p className="text-xs text-ink-500 dark:text-ink-400">{review.service} &bull; {review.location}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ReviewCard({ review, onExpand }) {
  const isLong = review.quote.length > LIMIT;
  const preview = isLong ? review.quote.slice(0, LIMIT).trimEnd() + '\u2026' : review.quote;
  return (
    <div className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
      <span className="flex gap-0.5 text-maple-600">
        {Array.from({ length: review.rating || 5 }).map((_, i) => (
          <Icon key={i} name="star" className="h-4 w-4 fill-current" strokeWidth={1} />
        ))}
      </span>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">
        {preview}
        {isLong && (
          <button type="button" onClick={onExpand} className="ml-1 font-semibold text-maple-600 hover:underline">
            View more
          </button>
        )}
      </p>
      <div className="mt-6 border-t border-ink-100 pt-4 dark:border-ink-800">
        <p className="font-display font-bold text-navy-900 dark:text-white">{review.name}</p>
        <p className="text-xs text-ink-500 dark:text-ink-400">{review.service} &bull; {review.location}</p>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [start, setStart] = useState(0);
  const [active, setActive] = useState(null);
  const [paused, setPaused] = useState(false);

  const count = testimonials.length;

  // Auto-rotate every few seconds (pauses on hover or when a popup is open)
  useEffect(() => {
    if (paused || active) return;
    const timer = setInterval(() => {
      setStart((prev) => (prev + 1) % count);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [paused, active, count]);

  // Pick VISIBLE cards starting at `start`, wrapping around
  const shown = Array.from({ length: Math.min(VISIBLE, count) }, (_, i) => testimonials[(start + i) % count]);

  return (
    <Section id="reviews" muted>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Google reviews"
          title="Rated 5.0 by the people we got here"
          description="Every review below belongs to a real file: a visa issued, a permit extended, a family reunited."
        />
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
          <div className="flex items-center gap-3 rounded-2xl border border-ink-200 bg-white px-5 py-4 dark:border-ink-800 dark:bg-ink-900">
            <span className="font-display text-4xl font-extrabold text-navy-900 dark:text-white">
              {company.rating.value}
            </span>
            <span>
              <span className="flex gap-0.5 text-maple-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4 fill-current" strokeWidth={1} />
                ))}
              </span>
              <span className="mt-1 block text-xs text-ink-500 dark:text-ink-400">
                {company.rating.count} Google reviews
              </span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Auto-rotating row */}
      <div
        className="mt-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((review) => (
              <motion.div
                key={review.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ReviewCard review={review} onExpand={() => setActive(review)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setStart(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === start ? 'w-6 bg-maple-600' : 'w-2 bg-ink-300 dark:bg-ink-700'}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          href="https://www.google.com/search?q=Simmi+Immigration"
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          withArrow
        >
          Read all reviews on Google
        </Button>
      </div>

      <ReviewPopup review={active} onClose={() => setActive(null)} />
    </Section>
  );
}