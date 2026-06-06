import { motion, useScroll, useSpring } from 'framer-motion';

const navItems = [
  { label: 'Problema', href: '#problema' },
  { label: 'Scanner', href: '#scanner' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Caso', href: '#contacto' },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-cyan via-mint to-plasma"
        style={{ scaleX, width: '100%' }}
      />
      <header className="fixed left-0 right-0 top-4 z-40 px-4">
        <nav className="glass mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full px-4 text-sm text-white/78 md:px-5">
          <a href="#inicio" className="flex items-center gap-2 font-semibold text-white">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_20px_rgba(46,233,255,.9)]" />
            IA Consulting
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contacto"
            className="rounded-full bg-white px-4 py-2 font-semibold text-void transition hover:bg-cyan"
          >
            Analizar
          </a>
        </nav>
      </header>
    </>
  );
}
