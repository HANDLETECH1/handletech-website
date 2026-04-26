import { motion } from 'framer-motion';
import { Plug, Workflow, Rocket } from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section.jsx';

const steps = [
  {
    num: '01',
    icon: Plug,
    title: 'Connect your channels',
    body: 'Link WhatsApp Business API, Instagram, Facebook, Telegram and any other channel in under 5 minutes. No code, no IT ticket.',
  },
  {
    num: '02',
    icon: Workflow,
    title: 'Design your flows',
    body: 'Use the visual chatbot builder or pick a template. Define welcome messages, FAQs, lead-qualification logic, and handoff rules.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Launch & scale',
    body: 'Go live and let Handle AI handle every conversation 24/7. Track resolution, conversion and CSAT from one analytics dashboard.',
  },
];

export default function HowItWorks() {
  return (
    <Section id="how" className="bg-[#0A0A0A]">
      <SectionHeader
        eyebrow="How it works"
        title="From signup to scale in three steps"
        subtitle="No engineering team required. Most businesses go live in a single afternoon."
      />

      <div className="relative">
        <div className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-transparent via-[#41B5E6]/40 to-transparent" />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-[#41B5E6]/30 blur-2xl" />
                  <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-[#272727] to-[#141414] border border-white/10 flex items-center justify-center text-[#41B5E6]">
                    <s.icon size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full gradient-bg text-black font-mono font-bold text-sm flex items-center justify-center border-4 border-[#0A0A0A]">
                    {s.num}
                  </div>
                </div>
                <h3 className="mt-7 text-xl font-bold text-white tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-xs">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
