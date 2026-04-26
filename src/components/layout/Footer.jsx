import { Instagram, Twitter, Facebook, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';
import Logo from './Logo.jsx';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Integrations', href: '#features' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Customers', href: '#testimonials' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: 'mailto:info@handletech.io' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '#faq' },
      { label: 'API Docs', href: '#' },
      { label: 'WhatsApp Guide', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR', href: '#' },
    ],
  },
];

const socials = [
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Twitter, href: '#', label: 'X / Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 bg-[#0A0A0A]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <Logo />
            <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-xs">
              Revolutionize customer engagement. Automate communication across every channel — WhatsApp, Instagram, Facebook, Telegram and more — from one intelligent hub.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/55">
              <a href="mailto:info@handletech.io" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-[#41B5E6]" />
                info@handletech.io
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#41B5E6] mt-0.5 shrink-0" />
                <span>13th Floor, Marina Real Estate Tower, Lusail — Qatar</span>
              </div>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-white/90 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/55 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-white/40">
            © {year} Handle Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-white/8 bg-white/[0.02] text-white/55 hover:text-[#41B5E6] hover:border-[#41B5E6]/40 hover:bg-[#41B5E6]/10 transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
