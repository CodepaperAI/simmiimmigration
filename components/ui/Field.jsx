import cn from '@/utils/cn';

const base =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors dark:bg-ink-950 dark:text-white';

export default function Field({
  as = 'input',
  id,
  label,
  error,
  hint,
  options,
  className,
  ...props
}) {
  const Tag = as;
  const invalid = Boolean(error);

  const fieldProps = {
    id,
    'aria-invalid': invalid,
    'aria-describedby': invalid ? `${id}-error` : hint ? `${id}-hint` : undefined,
    className: cn(
      base,
      invalid
        ? 'border-maple-500 focus:border-maple-600'
        : 'border-ink-200 hover:border-ink-300 focus:border-maple-500 dark:border-ink-800',
      as === 'textarea' && 'min-h-[128px] resize-y'
    ),
    ...props,
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink-800 dark:text-ink-100">
        {label}
      </label>

      {as === 'select' ? (
        <select {...fieldProps}>
          {options?.map((option, index) => (
            <option key={option} value={index === 0 ? '' : option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <Tag {...fieldProps} />
      )}

      {hint && !invalid && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-ink-400">
          {hint}
        </p>
      )}
      {invalid && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-maple-600">
          {error}
        </p>
      )}
    </div>
  );
}
