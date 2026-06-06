import { cloneElement, FormEvent, ReactElement, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';
import { aiLevels, businessTypes } from '../data/recommendations';
import { SectionHeader } from './SectionHeader';

type Lead = {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  problem: string;
  aiLevel: string;
  budget: string;
  createdAt: string;
};

const initialLead: Lead = {
  name: '',
  email: '',
  phone: '',
  businessType: '',
  problem: '',
  aiLevel: '',
  budget: '',
  createdAt: '',
};

export function LeadForm() {
  const [lead, setLead] = useState<Lead>(initialLead);
  const [errors, setErrors] = useState<Partial<Record<keyof Lead, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof Lead, value: string) => {
    setLead((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof Lead, string>> = {};
    if (!lead.name.trim()) nextErrors.name = 'El nombre es requerido.';
    if (!/^\S+@\S+\.\S+$/.test(lead.email)) nextErrors.email = 'Ingrese un email valido.';
    if (!lead.phone.trim()) nextErrors.phone = 'El telefono o WhatsApp es requerido.';
    if (!lead.businessType) nextErrors.businessType = 'Seleccione un tipo de negocio.';
    if (!lead.problem.trim()) nextErrors.problem = 'Cuente brevemente que quiere resolver.';
    if (!lead.aiLevel) nextErrors.aiLevel = 'Seleccione su nivel actual.';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const payload = { ...lead, createdAt: new Date().toISOString() };
    const saved = JSON.parse(localStorage.getItem('ia_consulting_leads') ?? '[]') as Lead[];
    localStorage.setItem('ia_consulting_leads', JSON.stringify([payload, ...saved]));
    console.info('Nuevo caso IA Consulting:', payload);
    setSubmitted(true);
    setLead(initialLead);
  };

  return (
    <section id="contacto" className="section-shell">
      <SectionHeader
        eyebrow="Siguiente paso"
        title="Cuentenos que quiere resolver"
        description="No necesita llegar con una idea tecnica. Describa el problema, la tarea o la oportunidad. Nosotros buscamos el angulo practico."
      />
      <div className="aurora-border glass mx-auto max-w-4xl rounded-[2rem] p-5 md:p-8">
        {submitted ? (
          <motion.div
            className="grid min-h-[430px] place-items-center text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div>
              <motion.div
                className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-mint text-void shadow-glow"
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 8, 0] }}
                transition={{ type: 'spring', stiffness: 240, damping: 16 }}
              >
                <Check size={38} />
              </motion.div>
              <h3 className="text-3xl font-black">Recibimos tu caso.</h3>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/68">
                El siguiente paso es revisar donde puede ayudarte la IA de forma concreta.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-7 rounded-full border border-white/14 px-5 py-3 font-semibold text-white/78 transition hover:bg-white/10"
              >
                Enviar otro caso
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
            <Field label="Nombre" error={errors.name}>
              <input value={lead.name} onChange={(event) => update('name', event.target.value)} />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={lead.email}
                onChange={(event) => update('email', event.target.value)}
              />
            </Field>
            <Field label="WhatsApp / telefono" error={errors.phone}>
              <input value={lead.phone} onChange={(event) => update('phone', event.target.value)} />
            </Field>
            <Field label="Tipo de negocio" error={errors.businessType}>
              <select
                value={lead.businessType}
                onChange={(event) => update('businessType', event.target.value)}
              >
                <option value="">Seleccione...</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Nivel actual de IA" error={errors.aiLevel}>
              <select value={lead.aiLevel} onChange={(event) => update('aiLevel', event.target.value)}>
                <option value="">Seleccione...</option>
                {aiLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Rango de presupuesto opcional">
              <select value={lead.budget} onChange={(event) => update('budget', event.target.value)}>
                <option value="">Prefiero conversarlo</option>
                <option value="sesion">Sesion inicial</option>
                <option value="kit">Kit de soluciones</option>
                <option value="implementacion">Implementacion completa</option>
              </select>
            </Field>
            <Field label="Que problema quiere resolver?" error={errors.problem} wide>
              <textarea
                value={lead.problem}
                onChange={(event) => update('problem', event.target.value)}
                rows={5}
                placeholder="Ejemplo: pierdo mucho tiempo respondiendo mensajes, necesito contenido mas consistente, quiero automatizar seguimiento..."
              />
            </Field>
            <button
              type="submit"
              className="group md:col-span-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan px-6 py-4 font-black text-void shadow-glow transition hover:bg-mint"
            >
              Enviar mi caso
              <Send className="transition group-hover:translate-x-1" size={18} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  wide,
  children,
}: {
  label: string;
  error?: string;
  wide?: boolean;
  children: ReactElement<{ className?: string }>;
}) {
  const child = cloneElement(children, {
    className:
      'mt-2 w-full rounded-2xl border border-white/12 bg-black/28 px-4 py-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-cyan focus:ring-4 focus:ring-cyan/10',
  });

  return (
    <label className={wide ? 'md:col-span-2' : ''}>
      <span className="text-sm font-semibold text-white/70">{label}</span>
      {child}
      {error && <span className="mt-2 block text-sm text-ember">{error}</span>}
    </label>
  );
}
