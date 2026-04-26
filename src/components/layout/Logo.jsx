export default function Logo({ className = '' }) {
  return (
    <a href="/" className={`flex items-center gap-2.5 group ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 rounded-lg bg-[#41B5E6]/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
        <svg
          viewBox="0 0 32 32"
          className="relative w-9 h-9"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#41B5E6" />
              <stop offset="100%" stopColor="#7FD4F2" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="8" fill="#272727" />
          <path
            d="M9 8 v16 M9 16 h14 M23 8 v16"
            stroke="url(#logoGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-white font-black text-lg tracking-tight">Handle</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#41B5E6]">
          Technologies
        </span>
      </div>
    </a>
  );
}
