import { Code2, CheckCircle2, Layers, UsersRound, Gauge, Wand2 } from 'lucide-react';

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
    </div>
  );
}

function PricingTier({ name, price, features, highlight }) {
  return (
    <div className={`rounded-2xl border p-6 shadow-sm ${highlight ? 'border-blue-600 ring-2 ring-blue-600' : 'border-slate-200 dark:border-slate-800'}`}>
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="mt-2 flex items-baseline gap-1">
        {price === 'Contact us' ? (
          <span className="text-3xl font-semibold">{price}</span>
        ) : (
          <>
            <span className="text-3xl font-semibold">{price}</span>
            {price !== 'Free' && <span className="text-sm text-slate-500">/mo</span>}
          </>
        )}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#start" className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>Get started</a>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className="group rounded-lg border border-slate-200 dark:border-slate-800 p-4 open:shadow-sm">
      <summary className="cursor-pointer list-none">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">{q}</h4>
          <span className="text-slate-500 group-open:rotate-180 transition-transform">⌃</span>
        </div>
      </summary>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{a}</p>
    </details>
  );
}

function Features() {
  const features = [
    {
      icon: Code2,
      title: 'GitHub & LinkedIn Import',
      desc: 'Pull repos, commits, PRs, and profile data to bootstrap content.',
    },
    {
      icon: CheckCircle2,
      title: 'Truth-Checked Bullets',
      desc: 'Generate accomplishment bullets from commit history with source links.',
    },
    {
      icon: Gauge,
      title: 'ATS Optimization',
      desc: 'Parse job descriptions, align keywords, and show an ATS score.',
    },
    {
      icon: Layers,
      title: 'Template Gallery',
      desc: 'Polished PDF/DOCX/LaTeX templates with consistent typography and spacing.',
    },
    {
      icon: Wand2,
      title: 'Role Tailoring',
      desc: 'Create per-job variants fast: Data, Backend, DevOps, Mobile, AI/ML.',
    },
    {
      icon: UsersRound,
      title: 'Versioning & Collaboration',
      desc: 'Track edits, compare variants, and share links for review.',
    },
  ];

  const useCases = [
    'New Graduates: Turn projects & internships into crisp bullets.',
    'Career Switchers: Map prior experience to tech roles with aligned skills.',
    'Freelancers: Package client work into concise, verifiable achievements.',
    'Researchers & ML: Highlight experiments, notebooks, and model results.',
    'Open-Source Contributors: Showcase PRs, issues, and releases as measurable impact.',
  ];

  const faqs = [
    {
      q: 'Is it ATS compliant?',
      a: 'Yes. Templates and exports align with common ATS parsing rules and keyword visibility.',
    },
    {
      q: 'Where do bullets come from?',
      a: 'Your repos, commits, PRs, issues, and profile data enrich bullet generation with traceable sources.',
    },
    { q: 'Can I export to LaTeX/DOCX/PDF?', a: 'Yes. All three formats are supported on Pro and above.' },
    { q: 'Do you store my data?', a: 'Project data is stored for your account; you can delete data anytime from settings.' },
    { q: 'Does it support Arabic resumes?', a: 'Yes. English and Arabic are supported, with mixed-language sections where needed.' },
    { q: "What's the refund policy?", a: '14-day money-back guarantee on first purchase.' },
  ];

  return (
    <section id="features" className="relative bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Features built for tech resumes</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Build an ATS-ready CV in minutes; import from GitHub/LinkedIn/old PDFs; auto-tailor; export anywhere.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>

        <section id="use-cases" className="mt-20">
          <h3 className="text-xl font-semibold">Use Cases</h3>
          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {useCases.map((u) => (
              <li key={u} className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-900/40">{u}</li>
            ))}
          </ul>
        </section>

        <section id="how" className="mt-20">
          <h3 className="text-xl font-semibold">How it works</h3>
          <ol className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            {[
              'Connect GitHub/LinkedIn or upload an old resume.',
              'Generate truth-checked bullets & select a template.',
              'Tailor to a specific role and export.',
            ].map((step, i) => (
              <li key={step} className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white mr-2">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="pricing" className="mt-20">
          <h3 className="text-xl font-semibold">Pricing</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PricingTier name="Free" price="Free" features={["1 CV", "Watermark export", "Basic templates", "Community support"]} />
            <PricingTier name="Pro" price="$9" highlight features={["5 CVs", "Premium templates", "PDF/DOCX/LaTeX export", "Role tailoring", "ATS score", "Priority support"]} />
            <PricingTier name="Team" price="$29" features={["Unlimited CVs", "Shared templates", "Brand kit", "Review links", "SSO"]} />
            <PricingTier name="Enterprise" price="Contact us" features={["Custom templates", "Policy controls", "On-prem options", "SLA"]} />
          </div>
        </section>

        <section id="faq" className="mt-20">
          <h3 className="text-xl font-semibold">FAQ</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </section>

        <section id="start" className="mt-20">
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Ship your next role.</h3>
              <p className="mt-2 text-white/90">Create an ATS-ready resume in minutes—grounded in your real work.</p>
            </div>
            <a href="#" onClick={() => window?.plausible?.('cta_click', { props: { label: 'Final CTA' } })} className="inline-flex items-center justify-center rounded-md bg-white text-blue-700 hover:bg-blue-50 px-5 py-3 font-medium">
              Get started free
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Features;
