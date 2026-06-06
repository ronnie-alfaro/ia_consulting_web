import { motion } from 'framer-motion';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.7 }}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan/80">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-black leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/66 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
