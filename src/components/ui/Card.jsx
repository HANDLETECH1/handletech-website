export default function Card({
  children,
  className = '',
  featured = false,
  hover = true,
}) {
  const base = featured
    ? 'gradient-border glow-soft'
    : 'glass';
  const hoverStyles = hover
    ? 'transition-all duration-300 ease-out hover:border-white/15 hover:-translate-y-1'
    : '';
  return (
    <div className={`relative rounded-2xl p-6 md:p-8 ${base} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
