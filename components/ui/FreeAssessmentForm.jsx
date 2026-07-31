import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Field from '@/components/ui/Field';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { services } from '@/data/services';
import { validateContactForm } from '@/utils/validation';

const initialValues = { name: '', email: '', phone: '', service: '', message: '' };

export default function FreeAssessmentForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [hp, setHp] = useState('');

  const update = (key) => (event) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (hp) {
      setStatus('sent');
      setValues(initialValues);
      return;
    }

    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          formType: 'Free Assessment',
          company_website: hp,
          page: typeof window !== 'undefined' ? window.location.pathname : '',
        }),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('sent');
      setValues(initialValues);
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full min-h-[26rem] flex-col items-center justify-center rounded-3xl border border-maple-200 bg-white p-10 text-center dark:border-maple-900/60 dark:bg-ink-900"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-maple-gradient text-white">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.2} />
        </span>
        <h3 className="mt-6 text-2xl">Request received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-500 dark:text-ink-300">
          A consultant will call you within one business day to confirm your appointment.
        </p>
        <Button variant="outline" size="sm" className="mt-7" onClick={() => setStatus('idle')}>
          Send another request
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-ink-200 bg-white p-7 shadow-soft dark:border-ink-800 dark:bg-ink-900 sm:p-9"
    >
      <h3 className="text-2xl">Get Free Assessment</h3>
      <p className="mt-2 text-sm text-ink-500 dark:text-ink-300">
        Tell us where you are in the process. We reply within one business day.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field id="fa-name" label="Full name" placeholder="Jaspreet Kaur" value={values.name} onChange={update('name')} error={errors.name} autoComplete="name" required />
        <Field id="fa-email" type="email" label="Email" placeholder="you@email.com" value={values.email} onChange={update('email')} error={errors.email} autoComplete="email" required />
        <Field id="fa-phone" type="tel" label="Phone" placeholder="+1 647 000 0000" value={values.phone} onChange={update('phone')} error={errors.phone} autoComplete="tel" hint="Include your country code." required />
        <Field
          id="fa-service"
          as="select"
          label="Service needed"
          value={values.service}
          onChange={update('service')}
          error={errors.service}
          options={['Select a service', ...services.map((s) => s.title), 'Refusal review', 'Something else']}
          required
        />
        <Field
          id="fa-message"
          as="textarea"
          label="Your situation"
          placeholder="Current status, any previous applications or refusals, and what you want to achieve."
          value={values.message}
          onChange={update('message')}
          error={errors.message}
          className="sm:col-span-2"
          required
        />
      </div>

      {/* Honeypot */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="fa-company_website">Company website</label>
        <input
          id="fa-company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
        />
      </div>

      {status === 'error' && (
        <p className="mt-5 flex items-center gap-2 rounded-xl border border-maple-200 bg-maple-50 px-4 py-3 text-sm text-maple-700 dark:border-maple-900/60 dark:bg-maple-950/30 dark:text-maple-300">
          <Icon name="shield" className="h-4 w-4 shrink-0" />
          Something went wrong sending your request. Please try again, or call us directly.
        </p>
      )}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-xs text-ink-400">
          <Icon name="shield" className="h-4 w-4 text-maple-600" />
          Confidential. Never shared with third parties.
        </p>
        <Button type="submit" size="lg" disabled={status === 'sending'} withArrow={status !== 'sending'}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={status}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {status === 'sending' ? 'Sending\u2026' : 'Get Free Assessment'}
            </motion.span>
          </AnimatePresence>
        </Button>
      </div>
    </form>
  );
}