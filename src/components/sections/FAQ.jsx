import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section.jsx';

const faqs = [
  {
    q: 'What channels does Handle AI support?',
    a: 'Out of the box: WhatsApp Business API, Instagram, Facebook Messenger, LinkedIn, your website (live-chat widget), and your mobile apps (iOS + Android SDKs). We also offer custom integrations for SMS, email, and any platform with a public API.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most businesses go live in a single afternoon. Connecting WhatsApp Business API takes 5–15 minutes once you have your Meta Business account verified. Our onboarding team helps with verification and template approval at no extra cost.',
  },
  {
    q: 'Do I need engineers to build chatbots?',
    a: 'No. Handle AI ships with a visual drag-and-drop chatbot builder, a template catalog with 50+ pre-built flows, and natural-language flow editing. Your marketing or operations team can launch flows without writing code.',
  },
  {
    q: 'How does pricing work? Are there hidden fees?',
    a: 'You pay a flat subscription based on the plan you choose. WhatsApp conversation fees set by Meta are passed through at cost — we do not mark them up. There are no setup fees, no per-message fees from Handle, and no surprise charges.',
  },
  {
    q: 'Is my customer data secure?',
    a: 'Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256), hosted in regional data centers, and access is role-based with full audit logging. We are GDPR-ready and support data residency requirements for the GCC region.',
  },
  {
    q: 'Can Handle AI integrate with my existing CRM?',
    a: 'Yes. We offer native integrations for HubSpot, Salesforce, Zoho, and Pipedrive, plus a REST API and Zapier connector for everything else. Customer profiles sync bi-directionally in real time.',
  },
  {
    q: 'What languages does the AI support?',
    a: 'Handle AI replies natively in Arabic (MSA + Gulf dialects), English, French, Hindi, and Urdu — and can be configured for 30+ more on request. Tone and brand voice can be customized per language.',
  },
  {
    q: 'What happens after my 14-day free trial?',
    a: 'You can pick a paid plan, request an extension, or simply do nothing — your account pauses with all data preserved for 90 days. No automatic billing, no credit card required during trial.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="bg-[#0A0A0A]">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions? We have answers."
        subtitle="Everything you need to know about Handle AI. Can't find what you are looking for? Email info@handletech.io."
      />

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className={`rounded-xl border overflow-hidden transition-colors ${
                isOpen
                  ? 'border-[#41B5E6]/30 bg-[#41B5E6]/[0.04]'
                  : 'border-white/8 bg-white/[0.02] hover:border-white/15'
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="w-full flex items-start justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-start"
              >
                <span className={`text-sm md:text-base font-semibold tracking-tight ${isOpen ? 'text-white' : 'text-white/85'}`}>
                  {f.q}
                </span>
                <span
                  className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'gradient-bg text-black rotate-45' : 'bg-white/5 text-white/60 border border-white/10'
                  }`}
                >
                  <Plus size={14} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-[15px] text-white/65 leading-relaxed">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
