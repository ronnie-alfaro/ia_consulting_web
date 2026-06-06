import { BrainCircuit, CircleHelp, Gauge, WandSparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

const problems = [
  { icon: CircleHelp, title: 'No saben que puede ayudarles', text: 'Ven la IA como algo lejano, no como una herramienta para su realidad diaria.' },
  { icon: BrainCircuit, title: 'Parece demasiado complicado', text: 'La tecnologia distrae del punto importante: resolver un problema concreto.' },
  { icon: WandSparkles, title: 'La probaron y salio mal', text: 'Un mal prompt produce una mala respuesta. Eso no significa que la oportunidad no exista.' },
  { icon: Gauge, title: 'La usan sin sistema', text: 'Copian, pegan y repiten. El potencial aparece cuando hay criterio, flujo y seguimiento.' },
];

export function ProblemSection() {
  return (
    <section id="problema" className="section-shell">
      <SectionHeader
        eyebrow="Cambio de enfoque"
        title="La mayoria no tiene un problema de IA. Tiene un problema sin resolver."
        description="La conversacion no empieza con herramientas. Empieza con tareas lentas, contenido que no conecta, clientes sin seguimiento y procesos que consumen energia."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {problems.map((item, index) => (
          <motion.article
            key={item.title}
            className="glass rounded-3xl p-5 transition hover:-translate-y-1 hover:border-cyan/30"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <item.icon className="mb-5 text-cyan" size={30} />
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/62">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
