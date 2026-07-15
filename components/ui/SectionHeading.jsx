import { motion } from 'framer-motion';
import cn from '@/utils/cn';
import { fadeUp, stagger, viewport } from '@/lib/motion';

export default function SectionHeading({ eyebrow, title, description, align = 'left', className, light = false }) {
  const centered = align === 'center';
  return (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={cn('max-w-3xl', centered && 'mx-auto text-center', className)}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className={cn(
            'mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]',
            centered && 'justify-center',
            light ? 'text-maple-300' : 'text-maple-600 dark:text-maple-400'
          )}
        >
          <span className="h-px w-8 bg-current" aria-hidden="true" />
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn('text-display-lg', light && 'text-white')}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            'mt-5 text-lg leading-relaxed',
            light ? 'text-white/75' : 'text-ink-500 dark:text-ink-300'
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
