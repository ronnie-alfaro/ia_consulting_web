# IA Consulting Landing

Landing page React + TypeScript para un servicio de consultoria de IA enfocado en resolver problemas reales de negocio.

## Stack

- Vite
- React + TypeScript
- Tailwind CSS
- Framer Motion
- LocalStorage para captura MVP

## Ejecutar

```bash
npm install
npm run dev
```

Luego abre la URL local que muestre Vite.

## Build

```bash
npm run build
```

## Notas

- El scanner de oportunidades usa reglas frontend en `src/data/recommendations.ts`.
- El formulario guarda leads en `localStorage` bajo la llave `ia_consulting_leads`.
- La estructura esta preparada para conectar luego con Supabase, Airtable, Resend o un CRM.
