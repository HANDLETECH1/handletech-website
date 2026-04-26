import { forwardRef } from 'react';

const variants = {
  primary:
    'gradient-bg text-black font-bold hover:brightness-110 glow-primary',
  secondary:
    'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20',
  ghost:
    'bg-transparent text-white/80 hover:text-white hover:bg-white/5',
  outline:
    'bg-transparent text-white border border-[#41B5E6]/60 hover:bg-[#41B5E6]/10 hover:border-[#41B5E6]',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-7 py-3.5 text-base rounded-xl',
  xl: 'px-8 py-4 text-base rounded-2xl',
};

const Button = forwardRef(function Button(
  {
    as: Tag = 'button',
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
  },
  ref
) {
  const styles = `inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-all duration-200 ease-out active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#41B5E6]/50 focus:ring-offset-2 focus:ring-offset-black ${variants[variant]} ${sizes[size]} ${className}`;
  return (
    <Tag ref={ref} className={styles} {...props}>
      {children}
    </Tag>
  );
});

export default Button;
