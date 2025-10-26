import { useEffect, useMemo, useState } from 'react';
import { Rocket, Star, Github, Linkedin, FileText } from 'lucide-react';
import Spline from '@splinetool/react-spline';

function Hero({ labels, locale }) {
  const [variant, setVariant] = useState('a');
  const [ctaVariant, setCtaVariant] = useState('A');

  useEffect(() => {
    const qp = new URLSearchParams(window.location.search);
    const heroV = qp.get('hero-variant');
    const ctaV = qp.get('cta-text');
    if (heroV && ['a', 'b'].includes(heroV.toLowerCase())) setVariant(heroV.toLowerCase());
    if (ctaV && ['A', 'B'].includes(ctaV.toUpperCase())) setCtaVariant(ctaV.toUpperCase());
  }, []);

  const h1 = useMemo(() => {
    if (variant === 'b') return locale === 'ar' ? 'من المستودعات إلى السيرة الذاتية — جاهزة لأنظمة ATS فورًا' : 'From repos to resume—instantly ATS-ready';
    return locale === 'ar' ? 'حوّل GitHub الخاص بك إلى سيرة ذاتية متوافقة مع ATS' : 'Turn your GitHub into an ATS-ready CV';
  }, [variant, locale]);

  const primaryText = useMemo(() => {
    if (ctaVariant === 'B') return locale === 'ar' ? 'أنشئ سيرتي' : 'Create my CV';
    return labels.start;
  }, [ctaVariant, labels.start, locale]);

  const handlePrimary = () => {
    window?.plausible?.('cta_click', { props: { label: 'Hero primary' } });
    document.getElementById('start')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSecondary = () => {
    window?.plausible?.('cta_click', { props: { label: 'Hero secondary' } });
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section aria-labelledby="hero-title" className="relative isolate">
      <div className="relative h-[640px] sm:h-[720px] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B0F19]/30 via-[#0B0F19]/60 to-[#0B0F19]" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl text-white">
              <h1 id="hero-title" className="text-3xl sm:text-5xl font-semibold tracking-tight">
                {h1}
              </h1>
              <p className="mt-4 text-slate-200 text-base sm:text-lg">
                {locale === 'ar'
                  ? 'استورد GitHub وLinkedIn، وأنشئ نقاطًا حقيقية قابلة للتحقق، وخصّص للأدوار، وصدّر في دقائق.'
                  : 'Import GitHub & LinkedIn, generate truth-checked bullets, tailor to roles, and export in minutes.'}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button onClick={handlePrimary} className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                  <Rocket className="h-5 w-5" aria-hidden="true" />
                  {primaryText}
                </button>
                <button onClick={handleSecondary} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">
                  <Star className="h-5 w-5" aria-hidden="true" />
                  {labels.demo}
                </button>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4" /> {locale === 'ar' ? 'تصدير إلى PDF/DOCX/LaTeX' : 'Export to PDF/DOCX/LaTeX'}</span>
                <span>•</span>
                <span>{locale === 'ar' ? 'مصمم لأنظمة ATS' : 'Built for ATS'}</span>
                <span>•</span>
                <span>{labels.noCard}</span>
              </div>
            </div>

            <div className="mt-12 max-w-5xl">
              <p className="text-sm text-slate-300">{locale === 'ar' ? 'موثوق به من مهندسين في' : 'Trusted by early-career engineers at'}</p>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-5 gap-3 opacity-90">
                {['AAST', 'NTI', 'Sprints', 'Open Source Egypt', 'HackCairo'].map((name) => (
                  <div key={name} className="h-10 rounded bg-white/10 text-white flex items-center justify-center text-sm">{name}</div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4 text-slate-300">
              <a href="https://github.com/g2scv" className="inline-flex items-center gap-2 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" /> GitHub
              </a>
              <a href="https://www.linkedin.com/company/g2scv" className="inline-flex items-center gap-2 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
