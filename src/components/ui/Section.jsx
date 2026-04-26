import { motion } from 'framer-motion';

export default function Section({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`relative w-full py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">{children}</div>
    </motion.section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-start';
  return (
    <div className={`max-w-3xl ${alignment} mb-14 md:mb-20`}>
      {eyebrow && (
        <div className={`mb-4 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#41B5E6]/30 bg-[#41B5E6]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#41B5E6]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-white/65 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
