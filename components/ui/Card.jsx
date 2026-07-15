import { motion } from 'framer-motion';
import cn from '@/utils/cn';
import { fadeUp } from '@/lib/motion';

export default function Card({ className, children, hoverable = true, ...props }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={hoverable ? { y: -6 } : undefined}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-7 shadow-soft transition-shadow duration-300',
        hoverable && 'hover:border-maple-200 hover:shadow-lift dark:hover:border-maple-900',
        'dark:border-ink-800 dark:bg-ink-900',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
