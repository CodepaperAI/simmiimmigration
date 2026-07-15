import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import company from '@/data/company';
import Icon from '@/components/ui/Icon';

export default function WhatsAppButton() {
  const [showTip, setShowTip] = useState(false);

  // Nudge the user with a one-time tooltip a few seconds after load.
  useEffect(() => {
    const show = setTimeout(() => setShowTip(true), 4000);
    const hide = setTimeout(() => setShowTip(false), 11000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {showTip && (
          <motion.a
            href={company.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 12, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden max-w-[220px] rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm font-medium text-ink-700 shadow-lift dark:border-ink-800 dark:bg-ink-900 dark:text-ink-100 sm:block"
          >
            Questions? Chat with us on WhatsApp.
          </motion.a>
        )}
      </AnimatePresence>

      <motion.a
        href={company.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Simmi Immigration on WhatsApp"
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" aria-hidden="true" />
        <Icon name="whatsapp" className="relative h-7 w-7" strokeWidth={0} />
      </motion.a>
    </div>
  );
}
