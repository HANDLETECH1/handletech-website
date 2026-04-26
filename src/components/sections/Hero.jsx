import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Sparkles, MessageCircle, Send, Bot, Check } from 'lucide-react';
import Button from '../ui/Button.jsx';

const channelLogos = [
  { name: 'WhatsApp', color: '#25D366' },
  { name: 'Instagram', color: '#E1306C' },
  { name: 'Facebook', color: '#1877F2' },
  { name: 'Websites', color: '#41B5E6' },
  { name: 'Mobile apps', color: '#A855F7' },
];

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#41B5E6]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-40 -right-32 w-96 h-96 rounded-full bg-[#41B5E6]/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#41B5E6]/30 bg-[#41B5E6]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#41B5E6]">
              <Sparkles size={13} />
              Powered by Handle AI
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black leading-[1.05] tracking-tight text-white">
              Revolutionize{' '}
              <span className="gradient-text">Customer Engagement</span>{' '}
              Across Every Channel
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/65 leading-relaxed max-w-xl">
              Automate communication across WhatsApp, Instagram, Facebook, your website, mobile apps and more — from one intelligent hub. Built for businesses ready to scale conversations into conversions.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button as="a" href="#cta" variant="primary" size="xl" className="group">
                Start free trial
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button as="a" href="#demo" variant="secondary" size="xl" className="group">
                <PlayCircle size={18} />
                Watch 2-min demo
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/55">
              <div className="flex items-center gap-2">
                <Check size={16} className="text-[#41B5E6]" /> 14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-[#41B5E6]" /> No credit card
              </div>
              <div className="flex items-center gap-2">
                <Check size={16} className="text-[#41B5E6]" /> Setup in minutes
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">
                Connects with every channel your customers use
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {channelLogos.map((c) => (
                  <span
                    key={c.name}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/8 text-xs font-semibold text-white/70 hover:bg-white/[0.06] transition-colors"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full me-2" style={{ background: c.color }} />
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.15 }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-[#41B5E6]/15 blur-[80px] rounded-full pointer-events-none" />

      {/* Main chat console */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative gradient-border rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-[#0F0F0F]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-white/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Handle AI Console
          </div>
          <div className="w-12" />
        </div>

        <div className="p-5 bg-gradient-to-b from-[#141414] to-[#0F0F0F] space-y-4">
          {/* Customer message */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#272727] to-[#1A1A1A] border border-white/10 flex items-center justify-center text-xs font-bold text-white/80 shrink-0">
              SA
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-white/80">Sara Al-Mansoori</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#25D366]/15 text-[#25D366] font-semibold">WhatsApp</span>
                <span className="text-[10px] text-white/30">2:14 PM</span>
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-white/[0.04] border border-white/8 px-3.5 py-2.5 text-sm text-white/85 max-w-[85%]">
                Hi! Do you offer same-day delivery for orders placed before 3 PM?
              </div>
            </div>
          </div>

          {/* AI typing indicator */}
          <div className="flex items-center gap-2 ps-12 text-xs text-white/40">
            <Bot size={12} className="text-[#41B5E6]" />
            Handle AI is replying
            <div className="flex gap-1">
              <span className="w-1 h-1 rounded-full bg-[#41B5E6] animate-pulse" />
              <span className="w-1 h-1 rounded-full bg-[#41B5E6] animate-pulse" style={{ animationDelay: '0.2s' }} />
              <span className="w-1 h-1 rounded-full bg-[#41B5E6] animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>

          {/* AI reply */}
          <div className="flex items-start gap-3 justify-end">
            <div className="max-w-[85%]">
              <div className="flex items-center gap-2 mb-1 justify-end">
                <span className="text-[10px] text-white/30">2:14 PM</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#41B5E6]/15 text-[#41B5E6] font-semibold">AI Reply</span>
                <span className="text-xs font-semibold text-white/80">Handle AI</span>
              </div>
              <div className="rounded-2xl rounded-tr-sm gradient-bg text-black px-3.5 py-2.5 text-sm font-medium">
                Yes! Orders placed before 3 PM ship same-day across Doha. Want me to share live tracking once dispatched?
              </div>
              <div className="mt-1.5 flex items-center gap-2 justify-end text-[10px] text-white/40">
                <Check size={10} className="text-[#41B5E6]" />
                Delivered in 0.4s
              </div>
            </div>
            <div className="w-9 h-9 rounded-full gradient-bg border border-white/10 flex items-center justify-center text-black shrink-0">
              <Bot size={16} />
            </div>
          </div>

          {/* Composer */}
          <div className="mt-2 flex items-center gap-2 rounded-xl bg-white/[0.03] border border-white/8 px-3 py-2.5">
            <MessageCircle size={15} className="text-white/40" />
            <span className="flex-1 text-xs text-white/40">Type a reply or let Handle AI handle it…</span>
            <button className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center text-black">
              <Send size={13} />
            </button>
          </div>
        </div>

        {/* Stats footer */}
        <div className="grid grid-cols-3 border-t border-white/5 bg-[#0A0A0A]">
          <div className="px-4 py-3 border-r border-white/5">
            <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">Resolved</div>
            <div className="font-mono text-sm text-white font-bold">94.2%</div>
          </div>
          <div className="px-4 py-3 border-r border-white/5">
            <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">Avg reply</div>
            <div className="font-mono text-sm text-white font-bold">0.8s</div>
          </div>
          <div className="px-4 py-3">
            <div className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">Active</div>
            <div className="font-mono text-sm text-white font-bold">1,284</div>
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="absolute -top-4 -right-4 md:-right-8 glass-strong rounded-xl p-4 w-52 hidden sm:block"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
            <Check size={14} />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Lead Qualified</div>
            <div className="text-[10px] text-white/40">Just now</div>
          </div>
        </div>
        <div className="font-mono text-2xl font-bold text-white">+47</div>
        <div className="text-[10px] text-white/40 mt-0.5">High-intent leads today</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute -bottom-4 -left-4 md:-left-8 glass-strong rounded-xl p-4 w-56 hidden sm:block"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-white">Channels live</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-bold">5/5</span>
        </div>
        <div className="flex gap-1">
          {['#25D366', '#E1306C', '#1877F2', '#41B5E6', '#A855F7'].map((c, i) => (
            <span
              key={i}
              className="flex-1 h-1.5 rounded-full"
              style={{ background: c, opacity: 0.85 }}
            />
          ))}
        </div>
        <div className="mt-2 text-[10px] text-white/40">All inboxes synced • 0 errors</div>
      </motion.div>
    </div>
  );
}
