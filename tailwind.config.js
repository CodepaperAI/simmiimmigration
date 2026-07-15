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
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', lg: '2rem' },
    },
    extend: {
      colors: {
        maple: {
          50: '#FFF1F2',
          100: '#FFE2E4',
          200: '#FFC9CE',
          300: '#FCA0A8',
          400: '#F46B78',
          500: '#E23A4C',
          600: '#C8102E', // primary elegant red
          700: '#A50D26',
          800: '#7E0A1D',
          900: '#5C0715',
        },
        ink: {
          50: '#F7F8F9',
          100: '#EDEFF2',
          200: '#DCDFE5',
          300: '#B9BFC9',
          400: '#8C95A3',
          500: '#5E6775',
          600: '#3D4552',
          700: '#2A303A',
          800: '#1B1F27',
          900: '#12151B',
          950: '#0C0E13',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.04', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 4.4vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.6rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(18,21,27,0.04), 0 8px 24px -12px rgba(18,21,27,0.12)',
        lift: '0 24px 60px -24px rgba(200,16,46,0.28), 0 8px 24px -16px rgba(18,21,27,0.2)',
      },
      backgroundImage: {
        'maple-gradient': 'linear-gradient(135deg, #E23A4C 0%, #C8102E 55%, #7E0A1D 100%)',
        'soft-red': 'linear-gradient(135deg, rgba(226,58,76,0.10) 0%, rgba(200,16,46,0.04) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
};
