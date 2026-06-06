import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { TiltCard } from './TiltCard';

const transformations = [
  ['Publicaciones genericas', 'Contenido optimizado'],
  ['Tiempo perdido', 'Automatizacion'],
  ['Procesos manuales', 'Flujos inteligentes'],
  ['Prompts malos', 'Resultados concretos'],
];

export function Hero() {
  return (
    <section id="inicio" className="section-shell min-h-screen pt-28 md:pt-36">
      <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm text-cyan">
            <Sparkles size={16} />
            AI no es el producto. Resolver su problema si.
          </div>
          <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.95] tracking-normal text-white md:text-7xl xl:text-8xl">
            Traiga su problema.{' '}
            <span className="text-gradient">Nosotros encontramos</span> la forma inteligente de resolverlo.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            Convertimos tareas repetitivas, contenido mediocre, procesos lentos y oportunidades perdidas en soluciones practicas usando IA.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-6 py-4 font-bold text-void shadow-glow transition hover:bg-mint"
            >
              Analizar mi caso
              <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a
              href="#scanner"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-6 py-4 font-semibold text-white transition hover:border-white/30 hover:bg-white/14"
            >
              <Play size={18} />
              Ver como funciona
            </a>
          </div>
        </motion.div>

        <TiltCard className="relative mx-auto w-full max-w-xl">
          <motion.div
            className="aurora-border glass relative overflow-hidden rounded-[2rem] p-4 md:p-6"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">Transformador</p>
                <h2 className="text-xl font-bold">Problema a sistema</h2>
              </div>
              <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-semibold text-mint">
                En vivo
              </span>
            </div>
            <div className="space-y-3">
              {transformations.map(([before, after], index) => (
                <motion.div
                  key={before}
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-2xl border border-white/10 bg-black/20 p-3"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.35 }}
                >
                  <div className="rounded-xl bg-white/7 p-3 text-sm text-white/62">{before}</div>
                  <ArrowRight className="text-cyan" size={18} />
                  <div className="rounded-xl bg-cyan/12 p-3 text-sm font-semibold text-white shadow-glow">
                    {after}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 h-28 overflow-hidden rounded-2xl border border-white/10 bg-void/60">
              <motion.div
                className="h-full bg-[linear-gradient(90deg,transparent,rgba(46,233,255,.32),transparent)]"
                animate={{ x: ['-100%', '110%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </section>
  );
}
