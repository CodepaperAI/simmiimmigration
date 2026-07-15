import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Icon from '@/components/ui/Icon';
import cn from '@/utils/cn';

export default function ThemeToggle({ className }) {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={cn(
        'relative flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white/70 text-ink-700 transition-colors hover:border-maple-300 hover:text-maple-600',
        'dark:border-ink-700 dark:bg-ink-900/70 dark:text-ink-200 dark:hover:text-maple-400',
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mounted ? theme : 'placeholder'}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          <Icon name={isDark ? 'moon' : 'sun'} className="h-5 w-5" />
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
