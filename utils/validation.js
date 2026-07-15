export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value).trim());
export const isPhone = (value) => /^[+()\-\s\d]{7,20}$/.test(String(value).trim());
export const isFilled = (value) => String(value || '').trim().length > 1;

export function validateContactForm(values) {
  const errors = {};
  if (!isFilled(values.name)) errors.name = 'Enter your full name.';
  if (!isEmail(values.email)) errors.email = 'Enter an email we can reply to.';
  if (!isPhone(values.phone)) errors.phone = 'Enter a phone number with country code.';
  if (!isFilled(values.service)) errors.service = 'Choose the service you need.';
  if (String(values.message || '').trim().length < 10) errors.message = 'Tell us a little about your case (10+ characters).';
  return errors;
}
