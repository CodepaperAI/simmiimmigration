import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fadeUp, viewport } from '@/lib/motion';

export default function Timeline({ steps = [] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={ref} className="relative mt-16">
      {/* Rail */}
      <div className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-ink-200 dark:bg-ink-800 sm:block md:left-1/2 md:-ml-px" />
      <motion.div
        style={{ scaleY }}
        className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px origin-top bg-maple-gradient sm:block md:left-1/2 md:-ml-px"
      />
      <motion.span
        style={{ top: glowY }}
        aria-hidden="true"
        className="absolute left-[13px] hidden h-3.5 w-3.5 -translate-y-1/2 rounded-full bg-maple-600 shadow-[0_0_0_6px_rgba(200,16,46,0.15)] sm:block md:left-1/2 md:-ml-[7px]"
      />

      <ol className="space-y-10 md:space-y-0">
        {steps.map((step, index) => {
          const left = index % 2 === 0;
          return (
            <motion.li
              key={step.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="relative sm:pl-16 md:flex md:min-h-[9rem] md:items-center md:pl-0"
            >
              <span className="absolute left-3 top-2.5 hidden h-2 w-2 rounded-full bg-white ring-2 ring-ink-300 dark:bg-ink-950 dark:ring-ink-700 sm:block md:left-1/2 md:-ml-1" />
              <div
                className={
                  left
                    ? 'md:w-1/2 md:pr-14 md:text-right'
                    : 'md:ml-auto md:w-1/2 md:pl-14'
                }
              >
                <p className="font-display text-4xl font-extrabold text-maple-600/25 dark:text-maple-500/25">
                  {step.step}
                </p>
                <h3 className="mt-1 text-xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                  {step.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
