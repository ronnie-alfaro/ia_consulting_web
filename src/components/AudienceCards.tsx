import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

const audiences = [
  {
    title: 'Los que no saben que la IA puede ayudarles',
    text: 'Tienen trabajo repetitivo, preguntas frecuentes o contenido pendiente, pero no lo han traducido a una oportunidad.',
    example: 'Ejemplo: ordenar consultas de clientes y responder mas rapido.',
  },
  {
    title: 'Los que quieren usarla pero no saben como',
    text: 'Sienten que deberian empezar, pero cada herramienta abre mas dudas que respuestas.',
    example: 'Ejemplo: crear prompts base para ventas, contenido y administracion.',
  },
  {
    title: 'Los que creen que no la necesitan',
    text: 'Confunden IA con moda. Nosotros la aterrizamos en tiempo, dinero, calidad y consistencia.',
    example: 'Ejemplo: reducir horas de tareas internas sin cambiar todo el negocio.',
  },
  {
    title: 'Los que ya la usan, pero pierden potencial',
    text: 'Obtienen resultados aislados, sin un flujo reutilizable ni criterios claros de calidad.',
    example: 'Ejemplo: convertir usos sueltos en un sistema semanal.',
  },
];

export function AudienceCards() {
  return (
    <section className="section-shell">
      <SectionHeader
        eyebrow="Para quien es"
        title="No necesita entender IA para aprovecharla."
        description="Solo necesita traer un problema suficientemente real. Nosotros hacemos el puente entre la necesidad y la solucion practica."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {audiences.map((audience, index) => (
          <motion.article
            key={audience.title}
            className="group glass relative overflow-hidden rounded-3xl p-6"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan/10 blur-2xl transition group-hover:bg-mint/20" />
            <span className="text-sm font-semibold text-cyan">0{index + 1}</span>
            <h3 className="mt-4 text-2xl font-black leading-tight">{audience.title}</h3>
            <p className="mt-4 leading-7 text-white/64">{audience.text}</p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/7 p-4 text-sm text-white/72">
              {audience.example}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
