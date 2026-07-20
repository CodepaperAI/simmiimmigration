import { useRef } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ReviewCard from '@/components/ui/ReviewCard';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import company from '@/data/company';
import { testimonials } from '@/data/testimonials';
import { fadeUp, viewport } from '@/lib/motion';

export default function Reviews() {
  const trackRef = useRef(null);

  const scrollBy = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * (track.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <Section id="reviews">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Google reviews"
          title="Rated 5.0 by the people we got here"
          description="Every review below belongs to a real file: a visa issued, a permit extended, a family reunited."
        />

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="flex items-center gap-4">
          <div className="flex items-center gap-3 rounded-2xl border border-ink-200 bg-white px-5 py-4 dark:border-ink-800 dark:bg-ink-900">
            <span className="font-display text-4xl font-extrabold text-ink-900 dark:text-white">
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

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:border-maple-600 hover:text-maple-600 dark:border-ink-800 dark:text-ink-200"
            >
              <Icon name="arrowRight" className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next reviews"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:border-maple-600 hover:text-maple-600 dark:border-ink-800 dark:text-ink-200"
            >
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
      >
        {testimonials.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
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
    </Section>
  );
}
