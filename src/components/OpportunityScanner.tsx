import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, ScanLine } from 'lucide-react';
import {
  type AiLevel,
  type BusinessType,
  type PainPoint,
  aiLevels,
  businessTypes,
  getRecommendations,
  painPoints,
} from '../data/recommendations';
import { SectionHeader } from './SectionHeader';

const labels: Record<string, string> = {
  'servicio profesional': 'Servicio profesional',
  retail: 'Retail',
  educacion: 'Educacion',
  'salud y bienestar': 'Salud / bienestar',
  restaurante: 'Restaurante',
  creador: 'Creador',
  otro: 'Otro',
  contenido: 'Contenido',
  tiempo: 'Tiempo',
  clientes: 'Clientes',
  organizacion: 'Organizacion',
  automatizacion: 'Automatizacion',
  'imagen/diseno': 'Imagen / diseno',
  ventas: 'Ventas',
  soporte: 'Soporte',
  nunca: 'Nunca la he usado',
  'lo probe': 'La probe',
  'a veces': 'La uso a veces',
  frecuente: 'La uso seguido',
};

export function OpportunityScanner() {
  const [business, setBusiness] = useState<BusinessType>('servicio profesional');
  const [pain, setPain] = useState<PainPoint>('tiempo');
  const [level, setLevel] = useState<AiLevel>('lo probe');

  const recommendations = useMemo(
    () => getRecommendations(business, pain, level),
    [business, pain, level],
  );

  return (
    <section id="scanner" className="section-shell">
      <SectionHeader
        eyebrow="Momento scanner"
        title="AI Opportunity Scanner"
        description="Seleccione su contexto. En segundos vera una primera lectura de donde la IA puede convertirse en una solucion concreta."
      />
      <div className="aurora-border glass overflow-hidden rounded-[2rem]">
        <div className="grid lg:grid-cols-[.95fr_1.05fr]">
          <div className="border-b border-white/10 p-5 md:p-8 lg:border-b-0 lg:border-r">
            <ScannerGroup title="Tipo de negocio">
              {businessTypes.map((item) => (
                <OptionButton
                  key={item}
                  active={business === item}
                  label={labels[item]}
                  onClick={() => setBusiness(item)}
                />
              ))}
            </ScannerGroup>
            <ScannerGroup title="Dolor principal">
              {painPoints.map((item) => (
                <OptionButton
                  key={item}
                  active={pain === item}
                  label={labels[item]}
                  onClick={() => setPain(item)}
                />
              ))}
            </ScannerGroup>
            <ScannerGroup title="Nivel actual de IA">
              {aiLevels.map((item) => (
                <OptionButton
                  key={item}
                  active={level === item}
                  label={labels[item]}
                  onClick={() => setLevel(item)}
                />
              ))}
            </ScannerGroup>
          </div>
          <div className="scanner-grid relative min-h-[520px] overflow-hidden p-5 md:p-8">
            <motion.div
              className="absolute left-0 right-0 top-1/3 h-px bg-cyan/70 shadow-[0_0_30px_rgba(46,233,255,.95)]"
              animate={{ y: [-120, 240, -120], opacity: [0.15, 1, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-white/45">Lectura preliminar</p>
                  <h3 className="mt-2 text-2xl font-black">Probablemente podemos ayudarte con:</h3>
                </div>
                <div className="rounded-2xl border border-cyan/30 bg-cyan/10 p-3 text-cyan">
                  <ScanLine size={28} />
                </div>
              </div>

              <div className="my-8 space-y-3">
                {recommendations.map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/28 p-4"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                  >
                    <Activity className="mt-0.5 flex-none text-mint" size={18} />
                    <span className="leading-6 text-white/82">{item}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href="#contacto"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-bold text-void transition hover:bg-mint sm:w-auto"
              >
                Enviar este caso
                <ArrowRight className="transition group-hover:translate-x-1" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScannerGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-7 last:mb-0">
      <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-white/52">{title}</h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function OptionButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
        active
          ? 'border-cyan bg-cyan text-void shadow-glow'
          : 'border-white/12 bg-white/7 text-white/70 hover:border-white/30 hover:bg-white/12'
      }`}
    >
      {label}
    </button>
  );
}
