import { Github, Linkedin, Twitter } from 'lucide-react';

function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      title: 'Product',
      links: [
        { href: '#features', label: 'Features' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#', label: 'Templates' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '#', label: 'About' },
        { href: '#', label: 'Careers' },
        { href: '#demo', label: 'Contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { href: '#', label: 'Blog' },
        { href: '#', label: 'Guides' },
        { href: '#', label: 'Changelog' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { href: '#', label: 'Privacy' },
        { href: '#', label: 'Terms' },
      ],
    },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B0F19]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{c.title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="g2scv logo" className="h-6 w-6" />
            <span className="font-semibold">g2scv</span>
          </div>
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
            <a href="https://github.com/g2scv" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/g2scv" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://x.com/g2scv" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500">© {year} g2scv. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
