import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { ReactNode } from 'react';

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [8, -8]), { stiffness: 220, damping: 24 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-8, 8]), { stiffness: 220, damping: 24 });

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
