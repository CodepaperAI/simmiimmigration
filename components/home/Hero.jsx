import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';
import Icon from '@/components/ui/Icon';

const HERO_IMG =
  'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=2000&q=80';

const POINTS = [
  'Regulated and trusted expert support',
  'Tailored solutions for your unique case',
  'Support for complex or previously refused cases',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {/* Background photo + navy overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image src={HERO_IMG} alt="" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/85 to-navy-900/40" />
      </div>

      {/* Full-width padded content (no narrow container) */}
      <div className="relative mx-auto w-full px-6 py-12 sm:px-10 lg:px-14 xl:px-20 lg:py-14">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left */}
          <motion.div variants={stagger(0.1)} initial="hidden" animate="show" className="lg:col-span-7">
            <motion.span variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">
              Complex Case Support
            </motion.span>

            <motion.h1 variants={fadeUp} className="mt-5 font-display text-[clamp(2.5rem,5.5vw,4.75rem)] font-extrabold leading-[1.04] text-white">
              Refused a visa?<br />Delayed application?<br />Denied entry<br />to Canada?
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
              We specialise in turning immigration challenges into success stories. Our team offers
              strategic, personalised guidance for individuals facing complex immigration issues,
              helping clients move forward with a clear plan.
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-8 space-y-3.5">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 font-semibold text-white">
                  <span className="flex h-4 w-4 shrink-0 rotate-45 rounded-sm bg-red-500" />
                  {p}
                </li>
              ))}
            </motion.ul>

            <motion.p variants={fadeUp} className="mt-9 font-display text-lg font-bold text-white">
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
            <div className="rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl lg:p-10">
              <h2 className="font-display text-3xl font-bold leading-tight text-white">
                Book Your<br />Immigration Consultation
              </h2>
              <p className="mt-4 text-white/75">
                Speak with Simmi Immigration about your options and next steps.
              </p>
              <a
                href="#contact"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-red-gradient px-6 py-4 text-base font-semibold text-white shadow-lift transition-transform hover:scale-[1.02]"
              >
                Book Consultation
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
