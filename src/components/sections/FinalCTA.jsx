import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import Button from '../ui/Button.jsx';

export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden bg-[#000]">
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#41B5E6]/15 blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative mx-auto w-full max-w-5xl px-5 md:px-8"
      >
        <div className="relative gradient-border rounded-3xl p-10 md:p-16 overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#41B5E6]/5 via-transparent to-[#272727]/40 pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#41B5E6]/30 bg-[#41B5E6]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#41B5E6] mb-6">
              <Sparkles size={13} />
              Start in minutes — no card required
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Ready to handle every conversation,{' '}
              <span className="gradient-text">automatically?</span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-white/65 leading-relaxed">
              Join 4,200+ businesses already scaling customer engagement with Handle AI. Try free for 14 days — keep what you build, even if you cancel.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button as="a" href="#trial" variant="primary" size="xl" className="group">
                Start free trial
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button as="a" href="#demo" variant="secondary" size="xl">
                <Calendar size={18} />
                Book a 20-min demo
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs text-white/50 font-medium">
              <span>14-day free trial</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>No credit card required</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Cancel anytime</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
