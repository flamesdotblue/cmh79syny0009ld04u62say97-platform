import { useEffect, useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

function Header({ locale, setLocale, labels }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navItems = [
    { href: '#features', label: locale === 'ar' ? 'الميزات' : 'Features' },
    { href: '#use-cases', label: locale === 'ar' ? 'حالات الاستخدام' : 'Use Cases' },
    { href: '#pricing', label: locale === 'ar' ? 'الأسعار' : 'Pricing' },
    { href: '#faq', label: locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQ' },
  ];

  const handleNavClick = (label) => {
    if (window?.plausible) {
      window.plausible('nav_click', { props: { label } });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0B0F19]/80 backdrop-blur border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <a href="#" className="flex items-center gap-2" aria-label="g2scv home">
            <img src="/logo.svg" alt="g2scv logo" className="h-6 w-6" />
            <span className="font-semibold tracking-tight">g2scv</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className="text-sm text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
              className="text-xs rounded border border-slate-200 dark:border-slate-700 px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={locale === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
            >
              {locale === 'en' ? 'AR' : 'EN'}
            </button>
            <a
              href="#demo"
              onClick={() => window?.plausible?.('cta_click', { props: { label: 'Book a demo' } })}
              className="text-sm px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {labels.demo}
            </a>
            <a
              href="#start"
              onClick={() => window?.plausible?.('cta_click', { props: { label: 'Start free (header)' } })}
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Rocket className="h-4 w-4" aria-hidden="true" />
              {labels.start}
            </a>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <nav id="mobile-menu" className="lg:hidden pb-3" aria-label="Mobile">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.label)}
                  className="px-3 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
                  className="text-xs rounded border border-slate-200 dark:border-slate-700 px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {locale === 'en' ? 'AR' : 'EN'}
                </button>
                <a
                  href="#demo"
                  onClick={() => window?.plausible?.('cta_click', { props: { label: 'Book a demo' } })}
                  className="flex-1 text-center text-sm px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {labels.demo}
                </a>
                <a
                  href="#start"
                  onClick={() => window?.plausible?.('cta_click', { props: { label: 'Start free (mobile)' } })}
                  className="flex-1 text-center text-sm px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {labels.start}
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
