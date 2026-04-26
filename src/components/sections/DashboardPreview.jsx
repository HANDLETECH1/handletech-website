import { motion } from 'framer-motion';
import { Inbox, Users, MessageSquare, TrendingUp, Settings, BarChart3, Bot, Zap, Search } from 'lucide-react';
import Section, { SectionHeader } from '../ui/Section.jsx';

const sidebarItems = [
  { Icon: Inbox, label: 'Unified Inbox', count: '24', active: true },
  { Icon: Users, label: 'Contacts', count: '12.4k' },
  { Icon: Bot, label: 'AI Chatbots', count: '8' },
  { Icon: Zap, label: 'Campaigns', count: '3' },
  { Icon: BarChart3, label: 'Analytics' },
  { Icon: Settings, label: 'Settings' },
];

const inbox = [
  { name: 'Ahmed Khalil', channel: 'WhatsApp', preview: 'Thanks! When will my order arrive?', time: '2m', unread: 2, color: '#25D366' },
  { name: 'Layla Hassan', channel: 'Instagram', preview: 'Do you have this in size M?', time: '5m', unread: 1, color: '#E1306C' },
  { name: 'Omar Sayed', channel: 'Telegram', preview: 'Auto-resolved by Handle AI ✓', time: '12m', unread: 0, color: '#26A5E4' },
  { name: 'Fatima Noor', channel: 'Facebook', preview: 'Can I get a refund for order #4821?', time: '24m', unread: 1, color: '#1877F2' },
];

const chartBars = [42, 58, 35, 72, 64, 89, 76, 92, 81, 68, 94, 100];

export default function DashboardPreview() {
  return (
    <Section id="dashboard" className="bg-[#0A0A0A] overflow-hidden">
      <SectionHeader
        eyebrow="Product Tour"
        title={
          <>
            One dashboard.{' '}
            <span className="gradient-text">Every conversation.</span>
          </>
        }
        subtitle="See how your team will work in Handle AI — built for clarity, speed, and decisions made in seconds."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative"
      >
        <div className="absolute -inset-x-10 -inset-y-6 bg-[#41B5E6]/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative gradient-border rounded-2xl overflow-hidden shadow-2xl">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-[#0F0F0F]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 text-xs text-white/60">
              <Search size={12} />
              app.handletech.io/dashboard
            </div>
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full gradient-bg" />
            </div>
          </div>

          <div className="grid grid-cols-12 min-h-[460px] bg-[#0A0A0A]">
            {/* Sidebar */}
            <aside className="col-span-3 lg:col-span-2 border-e border-white/5 bg-[#0F0F0F] p-3">
              <div className="space-y-1">
                {sidebarItems.map((s) => (
                  <div
                    key={s.label}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      s.active
                        ? 'bg-[#41B5E6]/15 text-[#41B5E6] border border-[#41B5E6]/25'
                        : 'text-white/55 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <s.Icon size={14} />
                      <span className="hidden lg:inline">{s.label}</span>
                    </div>
                    {s.count && (
                      <span className="text-[10px] font-mono font-bold opacity-80 hidden lg:inline">
                        {s.count}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </aside>

            {/* Inbox */}
            <div className="col-span-9 lg:col-span-5 border-e border-white/5 p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-white">Unified Inbox</h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-bold">
                  Live
                </span>
              </div>
              <div className="space-y-2">
                {inbox.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-colors cursor-default ${
                      i === 0 ? 'bg-white/[0.04] border border-white/8' : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ background: `${m.color}25`, border: `1px solid ${m.color}50`, color: m.color }}
                    >
                      {m.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-white truncate">{m.name}</span>
                        <span className="text-[10px] text-white/40 font-mono shrink-0">{m.time}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold" style={{ background: `${m.color}15`, color: m.color }}>
                          {m.channel}
                        </span>
                        <span className="text-[11px] text-white/55 truncate">{m.preview}</span>
                      </div>
                    </div>
                    {m.unread > 0 && (
                      <span className="w-5 h-5 rounded-full gradient-bg text-black text-[10px] font-bold flex items-center justify-center shrink-0">
                        {m.unread}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Analytics panel */}
            <div className="col-span-12 lg:col-span-5 p-4 border-t lg:border-t-0 border-white/5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-white">Engagement (7d)</h4>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold">
                  <TrendingUp size={11} /> +24%
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <MetricCard label="Conversations" value="12,847" delta="+18%" />
                <MetricCard label="Resolved by AI" value="94.2%" delta="+3.1%" />
                <MetricCard label="Avg response" value="0.8s" delta="-12%" />
                <MetricCard label="Conversions" value="2,418" delta="+31%" />
              </div>

              <div className="rounded-xl border border-white/8 bg-white/[0.02] p-3">
                <div className="flex items-end gap-1.5 h-24">
                  {chartBars.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.04, duration: 0.5, ease: 'easeOut' }}
                      className="flex-1 rounded-t-md gradient-bg opacity-80 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[9px] text-white/40 font-mono">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function MetricCard({ label, value, delta }) {
  const positive = !delta.startsWith('-');
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.02] p-3">
      <div className="text-[10px] uppercase tracking-wider text-white/45 font-semibold">{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="font-mono text-lg font-bold text-white">{value}</span>
        <span className={`text-[10px] font-bold font-mono ${positive ? 'text-emerald-400' : 'text-[#41B5E6]'}`}>
          {delta}
        </span>
      </div>
    </div>
  );
}
