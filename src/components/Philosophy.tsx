import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

const principles = [
  'No usar IA para mentir',
  'No reemplazar criterio humano',
  'No complicar lo simple',
  'No vender herramientas innecesarias',
  'Soluciones practicas primero',
];

export function Philosophy() {
  return (
    <section className="section-shell">
      <div className="glass rounded-[2rem] p-6 md:p-10">
        <SectionHeader
          eyebrow="Filosofia"
          title="No vendemos humo. Convertimos problemas reales en sistemas utiles."
          description="La IA solo importa si mejora una decision, reduce friccion o crea una capacidad que antes no tenia el negocio."
        />
        <div className="grid gap-3 md:grid-cols-5">
          {principles.map((principle, index) => (
            <motion.div
              key={principle}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <CheckCircle2 className="mb-4 text-mint" size={22} />
              <p className="text-sm font-semibold leading-6 text-white/78">{principle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
