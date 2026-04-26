export default function Badge({ children, variant = 'default', className = '' }) {
  const styles = {
    default:
      'bg-white/5 text-white/80 border border-white/10',
    primary:
      'bg-[#41B5E6]/12 text-[#41B5E6] border border-[#41B5E6]/30',
    success:
      'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
    gold:
      'bg-amber-400/10 text-amber-300 border border-amber-400/30',
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
