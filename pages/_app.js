import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@/context/ThemeContext';
import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export default function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider>
      <div className={`${display.variable} ${body.variable} font-sans`}>
        <Layout>
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </Layout>
      </div>
    </ThemeProvider>
  );
}