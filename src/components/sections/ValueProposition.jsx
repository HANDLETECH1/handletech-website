import { motion } from 'framer-motion';
import { Layers, Bot, BarChart3, Shield } from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section.jsx';

const features = [
  {
    icon: Layers,
    title: 'Unified Inbox',
    body: 'Manage WhatsApp, Instagram, Facebook, your website live chat and mobile apps from one dashboard. No more app-switching, no missed messages.',
    bullets: ['5+ channels', 'Shared team inbox', 'Smart routing'],
  },
  {
    icon: Bot,
    title: 'AI Chatbots, 24/7',
    body: 'Intelligent assistants powered by Handle AI that understand intent, qualify leads, and answer FAQs in your brand voice — even at 3 AM.',
    bullets: ['GenAI replies', 'Custom flows', 'Multi-language'],
  },
  {
    icon: BarChart3,
    title: 'Lead Optimization',
    body: 'AI-driven scoring identifies your highest-intent leads automatically, so your sales team always works the right pipeline first.',
    bullets: ['Auto scoring', 'Intent signals', 'CRM sync'],
  },
  {
    icon: Shield,
    title: 'Enterprise-grade CRM',
    body: 'Consolidate every customer touchpoint into one secure profile. GDPR-ready, encrypted at rest, and audit-logged end-to-end.',
    bullets: ['Encrypted data', 'GDPR-ready', 'Role-based access'],
  },
];

export default function ValueProposition() {
  return (
    <Section id="features" className="bg-[#000]">
      <SectionHeader
        eyebrow="Why Handle"
        title={
          <>
            Everything you need to{' '}
            <span className="gradient-text">turn conversations into growth</span>
          </>
        }
        subtitle="One platform. Every channel. Built for businesses that treat customer experience as a competitive advantage."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            className="group relative rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:p-7 hover:border-[#41B5E6]/30 hover:from-[#41B5E6]/[0.05] transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ boxShadow: 'inset 0 0 60px -20px rgba(65, 181, 230, 0.3)' }} />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#41B5E6]/10 border border-[#41B5E6]/20 flex items-center justify-center text-[#41B5E6] mb-5 group-hover:scale-105 transition-transform">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight">
                {f.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                {f.body}
              </p>
              <ul className="space-y-1.5 pt-3 border-t border-white/5">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-white/55">
                    <span className="w-1 h-1 rounded-full bg-[#41B5E6]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
