import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export function BackgroundFX() {
  const x = useMotionValue(50);
  const y = useMotionValue(20);
  const smoothX = useSpring(x, { stiffness: 80, damping: 26 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 26 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      x.set((event.clientX / window.innerWidth) * 100);
      y.set((event.clientY / window.innerHeight) * 100);
    };
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-radial-grid" />
      <div className="scanner-grid absolute inset-0 opacity-55 [mask-image:linear-gradient(to_bottom,black,transparent_86%)]" />
      <motion.div
        className="absolute h-[34rem] w-[34rem] rounded-full bg-cyan/20 blur-3xl"
        style={{ left: smoothX, top: smoothY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="absolute -right-32 top-32 h-[28rem] w-[28rem] rounded-full bg-plasma/20 blur-3xl"
        animate={{ y: [0, 36, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 left-0 h-[24rem] w-[24rem] rounded-full bg-mint/10 blur-3xl"
        animate={{ x: [0, 48, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      {Array.from({ length: 28 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-white/50"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 19) % 100}%`,
          }}
          animate={{ opacity: [0.12, 0.8, 0.12], y: [-8, 8, -8] }}
          transition={{ duration: 4 + (index % 5), repeat: Infinity, delay: index * 0.12 }}
        />
      ))}
    </div>
  );
}
