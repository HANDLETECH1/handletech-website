import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function Counter({ value, suffix = '', prefix = '', decimals = 0, duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const motion = useMotionValue(0);
  const spring = useSpring(motion, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (inView) motion.set(value);
  }, [inView, value, motion]);

  useEffect(() => {
    return spring.on('change', (latest) => {
      const n = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest);
      setDisplay(Number(n).toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }));
    });
  }, [spring, decimals]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
