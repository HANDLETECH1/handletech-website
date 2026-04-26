import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section.jsx';
import Button from '../ui/Button.jsx';

const plansBase = [
  {
    name: 'Essential',
    tagline: 'For startups & small teams',
    price: { yearly: 4100, monthly: 410 },
    features: [
      'WhatsApp Business API',
      'Up to 5 agents',
      '1,000 monthly active users',
      'Basic chatbot flows',
      'Bulk messaging & broadcasts',
      'Standard analytics',
      'Email support',
    ],
    cta: 'Start free trial',
    popular: false,
  },
  {
    name: 'Professional',
    tagline: 'For growing businesses',
    price: { yearly: 5000, monthly: 499 },
    features: [
      'Everything in Essential, plus',
      'Up to 20 agents',
      '10,000 monthly active users',
      'Advanced chatbot builder',
      'Custom campaign flows',
      'CRM integration & GSheets',
      'Advanced analytics & reports',
      'Priority support (24h SLA)',
    ],
    cta: 'Start free trial',
    popular: true,
  },
  {
    name: 'Business',
    tagline: 'For scale & omnichannel',
    price: { yearly: 5500, monthly: 549 },
    features: [
      'Everything in Professional, plus',
      'Unlimited agents',
      'Unlimited MAUs',
      'All channels (Instagram, FB, Telegram +)',
      'eSenseGPT GenAI conversations',
      'Custom integrations & API access',
      'Dedicated success manager',
      '24/7 priority support',
    ],
    cta: 'Talk to sales',
    popular: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <Section id="pricing" className="relative bg-[#000]">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div className="relative">
        <SectionHeader
          eyebrow="Pricing"
          title={
            <>
              Simple plans that{' '}
              <span className="gradient-text">scale with your business</span>
            </>
          }
          subtitle="Pick a plan, start a 14-day free trial — no credit card required. Switch or cancel anytime."
        />

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/8">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                !yearly ? 'bg-white text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-2 ${
                yearly ? 'bg-white text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              Yearly
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#41B5E6] text-black font-bold">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {plansBase.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`relative rounded-3xl p-7 md:p-8 flex flex-col ${
                p.popular
                  ? 'gradient-border glow-soft md:scale-[1.04]'
                  : 'glass'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 start-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full gradient-bg text-black px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider shadow-lg">
                    <Sparkles size={12} />
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">{p.name}</h3>
                <p className="text-sm text-white/55 mt-1">{p.tagline}</p>
              </div>

              <div className="mt-6 pb-6 border-b border-white/8">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-mono text-5xl font-black text-white">
                    {(yearly ? p.price.yearly : p.price.monthly).toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-white/50">QAR</span>
                </div>
                <div className="text-xs text-white/45 mt-1">
                  per {yearly ? 'year' : 'month'}, billed {yearly ? 'annually' : 'monthly'}
                </div>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f, idx) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
                    <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                      p.popular ? 'bg-[#41B5E6] text-black' : 'bg-white/10 text-[#41B5E6]'
                    }`}>
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className={idx === 0 && f.includes('Everything') ? 'text-white font-medium' : ''}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  as="a"
                  href="#cta"
                  variant={p.popular ? 'primary' : 'secondary'}
                  size="lg"
                  className="w-full group"
                >
                  {p.cta}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-white/45 mt-10">
          All plans include 14-day free trial · Setup support included · Prices in QAR (Qatari Riyal)
        </p>
      </div>
    </Section>
  );
}
