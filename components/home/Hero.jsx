import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';
import Icon from '@/components/ui/Icon';
import FormModal from '@/components/ui/FormModal';

const HERO_IMG =
  'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=2000&q=80';

const POINTS = [
  'Regulated and trusted expert support',
  'Tailored solutions for your unique case',
  'Support for complex or previously refused cases',
];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* White trust bar */}
      <div className="bg-white py-3 text-center dark:bg-navy-950">
        <p className="text-sm font-bold text-maple-600 dark:text-maple-400">
          Licensed RCIC &bull; CICC Regulated &bull; Trusted Canadian Immigration Consultants
        </p>
      </div>

      <section className="relative overflow-hidden bg-navy-900 text-white">
        {/* Background photo + navy overlay */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image src={HERO_IMG} alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/85 to-navy-900/40" />
        </div>

        <div className="relative mx-auto w-full px-4 py-10 sm:px-6 md:px-8 lg:px-12 lg:py-10 xl:px-20">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left */}
            <motion.div variants={stagger(0.1)} initial="hidden" animate="show" className="lg:col-span-7">
              <motion.h1 variants={fadeUp} className="mt-4 font-display text-[clamp(1.75rem,6vw,3.4rem)] font-extrabold leading-[1.1] text-white">
                Refused a visa? Delayed application? Denied entry to Canada?
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-5 max-w-xl leading-relaxed text-white/80">
                We specialise in turning immigration challenges into success stories. Our team offers
                strategic, personalised guidance for individuals facing complex immigration issues,
                helping clients move forward with a clear plan.
              </motion.p>

              <motion.ul variants={fadeUp} className="mt-6 space-y-2.5">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-center gap-3 font-semibold text-white">
                    <span className="flex h-4 w-4 shrink-0 rotate-45 rounded-sm bg-red-500" />
                    {p}
                  </li>
                ))}
              </motion.ul>

              <motion.p variants={fadeUp} className="mt-7 font-display text-base font-bold text-white">
                Book a confidential consultation today
              </motion.p>
              <motion.p variants={fadeUp} className="mt-1 text-white/70">
                Let us assess your situation and develop a clear path forward.
              </motion.p>
            </motion.div>

            {/* Right — consultation card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl lg:p-8">
                <h2 className="font-display text-2xl font-bold leading-tight text-white">
                  Book Your Immigration Consultation
                </h2>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="/#contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-gradient px-6 py-3.5 font-semibold text-white shadow-lift transition-transform hover:scale-[1.02]"
                  >
                    Book Consultation
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur transition-colors hover:border-white hover:bg-white/20"
                  >
                    Free Assessment
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Free Assessment modal */}
        <FormModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </section>
    </>
  );
}