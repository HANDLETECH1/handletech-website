export default function Logo({ variant = 'full', className = '' }) {
  const src = variant === 'icon' ? '/logos/handle-icon-light.png' : '/logos/handle-logo-light.png';
  const height = variant === 'icon' ? 'h-12' : 'h-14 md:h-16';

  return (
    <a
      href="/"
      aria-label="Handle Technologies — Home"
      className={`relative inline-flex items-center group ${className}`}
    >
      <span className="absolute -inset-3 rounded-xl bg-[#41B5E6]/25 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <img
        src={src}
        alt="Handle Technologies"
        className={`relative ${height} w-auto select-none transition-transform duration-200 group-hover:scale-[1.02]`}
        draggable={false}
      />
    </a>
  );
}
