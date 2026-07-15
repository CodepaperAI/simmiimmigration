import Icon from '@/components/ui/Icon';

export default function ReviewCard({ review }) {
  return (
    <figure className="flex h-full w-[85vw] shrink-0 snap-center flex-col rounded-3xl border border-ink-200 bg-white p-7 shadow-soft dark:border-ink-800 dark:bg-ink-900 sm:w-[26rem]">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-maple-600" aria-label={`${review.rating} out of 5 stars`}>
          {Array.from({ length: review.rating }).map((_, i) => (
            <Icon key={i} name="star" className="h-4 w-4 fill-current" strokeWidth={1} />
          ))}
        </div>
        <span className="rounded-full bg-ink-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-500 dark:bg-ink-800 dark:text-ink-300">
          {review.service}
        </span>
      </div>
      <Icon name="quote" className="mt-5 h-6 w-6 text-maple-200 dark:text-maple-900" />
      <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700 dark:text-ink-200">
        {review.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-200 pt-5 dark:border-ink-800">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-maple-gradient text-sm font-bold text-white">
          {review.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink-900 dark:text-white">{review.name}</span>
          <span className="block text-xs text-ink-500 dark:text-ink-400">{review.location}</span>
        </span>
      </figcaption>
    </figure>
  );
}
