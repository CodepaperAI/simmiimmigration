import { Html, Head, Main, NextScript } from 'next/document';

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('simmi-theme');
    var dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  } catch (e) {}
})();
`;

export default function Document() {
  return (
    <Html lang="en-CA">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/logos/simmi-mark.png" />
        <link rel="apple-touch-icon" href="/logos/simmi-mark.png" />
        <meta name="theme-color" content="#C8102E" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}