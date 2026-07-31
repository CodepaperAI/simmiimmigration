import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import FreeAssessmentForm from '@/components/ui/FreeAssessmentForm';

export default function FormModal({ open, onClose }) {
  // Lock body scroll while the modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-navy-950/70 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative my-auto w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-soft transition-colors hover:bg-white dark:bg-ink-800 dark:text-white"
            >
              <Icon name="close" className="h-4 w-4" strokeWidth={2.4} />
            </button>
            <FreeAssessmentForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}