/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
    './seo/**/*.{js,jsx}',
  ],
  theme: {
    container: { center: true, padding: { DEFAULT: '1.25rem', lg: '2rem' } },
    extend: {
      colors: {
        // RED — primary action (buttons, accents, top bar). `maple` kept as alias.
        maple: {
          50: '#FEF2F3', 100: '#FEE2E4', 200: '#FCCACE', 300: '#F9A6AD',
          400: '#F4737E', 500: '#EA4453', 600: '#D22536', 700: '#B01B2A',
          800: '#921A27', 900: '#7A1A25', 950: '#430A10',
        },
        red: {
          50: '#FEF2F3', 100: '#FEE2E4', 200: '#FCCACE', 300: '#F9A6AD',
          400: '#F4737E', 500: '#EA4453', 600: '#D22536', 700: '#B01B2A',
          800: '#921A27', 900: '#7A1A25',
        },
        // NAVY — brand dark / hero overlay / headings
        navy: {
          50: '#EEF2F8', 100: '#D8E1EF', 200: '#B3C4DE', 300: '#849FC8',
          400: '#5677AC', 500: '#3A5A90', 600: '#2C4676', 700: '#243A61',
          800: '#1B2C4A', 900: '#132038', 950: '#0C1526',
        },
        // Neutral ink (cool grey to match navy)
        ink: {
          50: '#F7F8FA', 100: '#EEF1F5', 200: '#DFE4EC', 300: '#C3CBD8',
          400: '#8C97A8', 500: '#5F6B7E', 600: '#45505F', 700: '#333B47',
          800: '#232932', 900: '#161B22', 950: '#0D1117',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-xl': ['clamp(2.25rem, 5vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(1.9rem, 4vw, 3rem)', { lineHeight: '1.12', letterSpacing: '-0.018em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.1rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      borderRadius: { xl: '0.75rem', '2xl': '1rem', '3xl': '1.5rem', '4xl': '2rem' },
      boxShadow: {
        soft: '0 1px 3px rgba(19,32,56,0.06), 0 10px 28px -12px rgba(19,32,56,0.16)',
        lift: '0 24px 60px -24px rgba(19,32,56,0.32), 0 10px 24px -14px rgba(19,32,56,0.20)',
        glow: '0 0 0 1px rgba(210,37,54,0.10), 0 20px 50px -20px rgba(210,37,54,0.30)',
      },
      backgroundImage: {
        'maple-gradient': 'linear-gradient(135deg, #EA4453 0%, #D22536 55%, #B01B2A 100%)',
        'red-gradient': 'linear-gradient(135deg, #EA4453 0%, #D22536 55%, #B01B2A 100%)',
        'navy-gradient': 'linear-gradient(160deg, #1B2C4A 0%, #0C1526 100%)',
        'soft-red': 'linear-gradient(135deg, rgba(210,37,54,0.08) 0%, rgba(210,37,54,0.03) 100%)',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        'pulse-ring': { '0%': { transform: 'scale(0.9)', opacity: '0.5' }, '100%': { transform: 'scale(1.6)', opacity: '0' } },
        bob: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-4px)' } },
        countup: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
        bob: 'bob 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};