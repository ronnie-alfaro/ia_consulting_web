import { ClipboardCheck, Layers3, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

const services = [
  {
    icon: ClipboardCheck,
    title: 'Diagnostico IA',
    text: 'Encontramos donde la IA puede ayudarte.',
    detail: 'Mapa de oportunidades, prioridades y primeros casos de uso.',
  },
  {
    icon: Layers3,
    title: 'Kit de Soluciones',
    text: 'Prompts, plantillas, contenido y flujos listos para usar.',
    detail: 'Material practico para empezar sin depender de teoria.',
  },
  {
    icon: Workflow,
    title: 'Implementacion',
    text: 'Automatizaciones, asistentes, procesos y sistemas conectados.',
    detail: 'Desde una sesion simple hasta una implementacion completa.',
  },
];

export function Services() {
  return (
    <section id="servicios" className="section-shell">
      <SectionHeader
        eyebrow="Servicios"
        title="Desde una sesion simple hasta una implementacion completa."
        description="No vendemos paquetes rigidos antes de entender el problema. Elegimos el nivel correcto segun impacto, urgencia y complejidad."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className="glass group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cyan/30"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <div className="mb-8 inline-flex rounded-2xl border border-white/10 bg-white/8 p-4 text-cyan group-hover:bg-cyan group-hover:text-void">
              <service.icon size={30} />
            </div>
            <h3 className="text-2xl font-black">{service.title}</h3>
            <p className="mt-3 text-lg text-white/82">{service.text}</p>
            <p className="mt-5 border-t border-white/10 pt-5 leading-7 text-white/58">{service.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
