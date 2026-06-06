import { motion } from 'framer-motion';
import { ArrowRight, GitBranch } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const examples = [
  {
    before: 'Hazme una imagen para mi negocio.',
    after: 'Crea una imagen vertical para Instagram de una cafeteria premium en Costa Rica, luz natural, producto principal visible, estilo editorial, espacio para texto y tono calido profesional.',
  },
  {
    before: 'Necesito vender mas.',
    after: 'Oferta clara -> piezas de contenido -> landing simple -> seguimiento por WhatsApp/email -> medicion de objeciones y ajustes semanales.',
  },
  {
    before: 'Pierdo mucho tiempo respondiendo lo mismo.',
    after: 'FAQ assistant + plantillas de WhatsApp + respuestas de email + criterios para escalar casos que requieren decision humana.',
  },
];

export function BeforeAfter() {
  return (
    <section className="section-shell">
      <SectionHeader
        eyebrow="Motor de transformacion"
        title="La diferencia no es usar IA. Es darle direccion."
        description="Un pedido vago produce algo vago. Un sistema con contexto, criterio y proximo paso produce trabajo util."
      />
      <div className="space-y-4">
        {examples.map((example, index) => (
          <motion.article
            key={example.before}
            className="glass grid gap-4 rounded-3xl p-4 md:grid-cols-[.8fr_auto_1.2fr] md:items-center md:p-5"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <div className="rounded-2xl border border-red-300/20 bg-red-400/8 p-5">
              <p className="mb-2 text-xs uppercase tracking-[0.22em] text-red-100/50">Antes</p>
              <p className="text-lg font-semibold text-white/78">{example.before}</p>
            </div>
            <div className="hidden rounded-full border border-cyan/30 bg-cyan/10 p-3 text-cyan md:block">
              <ArrowRight size={22} />
            </div>
            <div className="rounded-2xl border border-mint/25 bg-mint/10 p-5">
              <p className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-mint/70">
                <GitBranch size={14} />
                Despues
              </p>
              <p className="leading-7 text-white">{example.after}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
