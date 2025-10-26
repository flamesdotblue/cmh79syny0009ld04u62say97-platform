import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // Simple i18n toggle between English and Arabic
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const qp = new URLSearchParams(window.location.search);
    const lang = qp.get('lang');
    if (lang && ['en', 'ar'].includes(lang)) setLocale(lang);
  }, []);

  const t = useMemo(() => {
    const map = {
      en: {
        start: 'Start free',
        demo: 'Book a demo',
        noCard: 'No credit card required',
      },
      ar: {
        start: 'ابدأ مجانًا',
        demo: 'احجز عرضًا توضيحيًا',
        noCard: 'لا حاجة لبطاقة بنكية',
      },
    };
    return map[locale];
  }, [locale]);

  return (
    <div className={locale === 'ar' ? 'font-sans antialiased dark:bg-[#0B0F19] dark:text-white' : 'font-sans antialiased dark:bg-[#0B0F19] dark:text-white'} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded">Skip to content</a>
      <Header locale={locale} setLocale={setLocale} labels={t} />
      <main id="main">
        <Hero labels={t} locale={locale} />
        <Features locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}

export default App;
