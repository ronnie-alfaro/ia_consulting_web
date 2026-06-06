import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function FinalCTA() {
  return (
    <section className="section-shell pb-16">
      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white text-void p-7 text-center md:p-12"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(46,233,255,.32),transparent_28rem),radial-gradient(circle_at_80%_20%,rgba(124,60,255,.22),transparent_24rem)]" />
        <div className="relative z-10">
          <h2 className="mx-auto max-w-4xl text-balance text-4xl font-black leading-tight md:text-6xl">
            Su negocio ya tiene problemas. La diferencia es que ahora pueden convertirse en sistemas.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-void/66">
            Empiece con un caso real. Una tarea, un proceso, una venta perdida o una idea que necesita mejor direccion.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-void px-6 py-4 font-bold text-white transition hover:bg-plasma"
          >
            Analizar mi caso
            <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
