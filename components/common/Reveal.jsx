import { motion } from 'framer-motion';
import { fadeUp, viewport } from '@/lib/motion';

export default function Reveal({ children, delay = 0, className, variants = fadeUp }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
