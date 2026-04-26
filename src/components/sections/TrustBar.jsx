import { motion } from 'framer-motion';
import Counter from '../ui/Counter.jsx';

const stats = [
  { value: 4200, suffix: '+', label: 'Businesses on Handle' },
  { value: 38, suffix: 'M+', label: 'Conversations automated' },
  { value: 94, suffix: '%', label: 'Resolution rate' },
  { value: 0.8, suffix: 's', label: 'Avg AI reply time', decimals: 1 },
];

const partners = ['Meta', 'WhatsApp', 'Google', 'Microsoft', 'AWS', 'Stripe'];

export default function TrustBar() {
  return (
    <section className="relative py-16 border-y border-white/5 bg-[#0A0A0A]">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-black gradient-text text-glow">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              </div>
              <div className="mt-2 text-xs md:text-sm text-white/55 font-medium tracking-wide">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 pt-10 border-t border-white/5">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-6">
            Trusted partners and integrations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
            {partners.map((p) => (
              <span
                key={p}
                className="text-lg md:text-xl font-bold text-white/70 tracking-tight hover:text-white transition-colors"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
