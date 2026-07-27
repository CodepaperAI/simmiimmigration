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
        // NAVY — anchored on #002365 (rgb 0 35 101). Used for headings, dark text, hero overlay.
        navy: {
          50: '#E6EBF2',
          100: '#C0CDDE',
          200: '#93A8C6',
          300: '#6480A8',
          400: '#3D5C8A',
          500: '#1B3B6E',
          600: '#0A2A5C',
          700: '#002365',
          800: '#002365',
          900: '#002365',
          950: '#001238',
        },
        // Neutral ink — light shades (50-300) stay neutral for backgrounds/borders.
        // Text shades (400-950) resolve to the #002365 navy family so all body text is navy.
        ink: {
          50: '#F7F8FA',
          100: '#EEF1F5',
          200: '#DFE4EC',
          300: '#C3CBD8',
          400: '#3D5C8A',
          500: '#1B3B6E',
          600: '#0A2A5C',
          700: '#002365',
          800: '#002365',
          900: '#002365',
          950: '#001238',
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
        soft: '0 1px 3px rgba(0,35,101,0.06), 0 10px 28px -12px rgba(0,35,101,0.16)',
        lift: '0 24px 60px -24px rgba(0,35,101,0.32), 0 10px 24px -14px rgba(0,35,101,0.20)',
        glow: '0 0 0 1px rgba(210,37,54,0.10), 0 20px 50px -20px rgba(210,37,54,0.30)',
      },
      backgroundImage: {
        'maple-gradient': 'linear-gradient(135deg, #EA4453 0%, #D22536 55%, #B01B2A 100%)',
        'red-gradient': 'linear-gradient(135deg, #EA4453 0%, #D22536 55%, #B01B2A 100%)',
        'navy-gradient': 'linear-gradient(160deg, #002365 0%, #001238 100%)',
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