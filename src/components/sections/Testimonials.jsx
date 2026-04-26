import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section.jsx';

const reviews = [
  {
    quote:
      'We replaced three separate tools with Handle AI. Our team replies 4× faster and customer satisfaction jumped 38% in the first quarter.',
    name: 'Mariam Al-Thani',
    role: 'Head of Customer Experience',
    company: 'Doha Retail Group',
    initials: 'MA',
    rating: 5,
  },
  {
    quote:
      'The chatbot builder is genuinely no-code. Our marketing team launched 12 campaign flows last month — zero engineering tickets.',
    name: 'Rashid Saleh',
    role: 'Marketing Director',
    company: 'Northwave Media',
    initials: 'RS',
    rating: 5,
  },
  {
    quote:
      'Handle AI qualifies leads while we sleep. We woke up to 47 hot leads on a Monday morning, all already scored and routed.',
    name: 'Noor Al-Khalifa',
    role: 'Sales Operations Lead',
    company: 'Pearl Properties',
    initials: 'NK',
    rating: 5,
  },
  {
    quote:
      'WhatsApp Business setup that used to take weeks happened in an afternoon. Support has been responsive and genuinely expert.',
    name: 'Hassan Mubarak',
    role: 'COO',
    company: 'Mubarak Logistics',
    initials: 'HM',
    rating: 5,
  },
  {
    quote:
      'The unified inbox alone saves us 20+ hours a week. eSenseGPT replies feel human — customers regularly thank "Sarah" who is actually Handle AI.',
    name: 'Aisha Rahman',
    role: 'Operations Manager',
    company: 'Bloom Beauty Co',
    initials: 'AR',
    rating: 5,
  },
  {
    quote:
      'Best customer-engagement platform we have evaluated, and we tested seven. The Qatar-based support team is a real differentiator.',
    name: 'Yousef Al-Suwaidi',
    role: 'Founder',
    company: 'Falcon Travel',
    initials: 'YS',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-[#000]">
      <SectionHeader
        eyebrow="Customers"
        title={
          <>
            Loved by businesses across{' '}
            <span className="gradient-text">the region</span>
          </>
        }
        subtitle="From early-stage startups to enterprise brands — Handle AI scales conversations into measurable growth."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <motion.figure
            key={r.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:p-7 hover:border-[#41B5E6]/25 hover:bg-[#41B5E6]/[0.03] transition-all"
          >
            <Quote size={28} className="text-[#41B5E6]/40 mb-3" />
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: r.rating }).map((_, idx) => (
                <Star key={idx} size={13} className="text-[#41B5E6] fill-[#41B5E6]" />
              ))}
            </div>
            <blockquote className="text-sm md:text-[15px] text-white/80 leading-relaxed">
              "{r.quote}"
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#272727] to-[#1A1A1A] border border-white/10 flex items-center justify-center text-xs font-bold text-[#41B5E6]">
                {r.initials}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{r.name}</div>
                <div className="text-xs text-white/50">
                  {r.role} · {r.company}
                </div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
