export type BusinessType =
  | 'servicio profesional'
  | 'retail'
  | 'educacion'
  | 'salud y bienestar'
  | 'restaurante'
  | 'creador'
  | 'otro';

export type PainPoint =
  | 'contenido'
  | 'tiempo'
  | 'clientes'
  | 'organizacion'
  | 'automatizacion'
  | 'imagen/diseno'
  | 'ventas'
  | 'soporte';

export type AiLevel = 'nunca' | 'lo probe' | 'a veces' | 'frecuente';

export const businessTypes: BusinessType[] = [
  'servicio profesional',
  'retail',
  'educacion',
  'salud y bienestar',
  'restaurante',
  'creador',
  'otro',
];

export const painPoints: PainPoint[] = [
  'contenido',
  'tiempo',
  'clientes',
  'organizacion',
  'automatizacion',
  'imagen/diseno',
  'ventas',
  'soporte',
];

export const aiLevels: AiLevel[] = ['nunca', 'lo probe', 'a veces', 'frecuente'];

const painRecommendations: Record<PainPoint, string[]> = {
  contenido: [
    'Crear mejores publicaciones en menos tiempo',
    'Convertir ideas sueltas en un calendario semanal de contenido',
    'Diseñar prompts reutilizables con tono, oferta y audiencia claros',
    'Transformar contenido existente en piezas para redes, email y WhatsApp',
  ],
  tiempo: [
    'Detectar tareas repetitivas que pueden convertirse en plantillas',
    'Crear flujos de trabajo para producir, revisar y publicar mas rapido',
    'Reducir pasos manuales con automatizaciones simples',
    'Preparar asistentes para resumir, ordenar y responder informacion',
  ],
  clientes: [
    'Crear scripts para captar, calificar y dar seguimiento a prospectos',
    'Construir respuestas frecuentes con tono humano y consistente',
    'Diseñar mensajes para reactivar clientes dormidos',
    'Convertir consultas repetidas en un flujo de atencion claro',
  ],
  organizacion: [
    'Ordenar procesos internos en listas accionables',
    'Crear plantillas para reuniones, seguimiento y reportes',
    'Convertir documentos dispersos en bases de conocimiento practicas',
    'Diseñar un sistema simple para prioridades semanales',
  ],
  automatizacion: [
    'Mapear un proceso manual y decidir que pasos automatizar primero',
    'Conectar formularios, hojas, correos o mensajes en un flujo basico',
    'Crear alertas y respuestas iniciales para oportunidades entrantes',
    'Prototipar asistentes internos sin construir software complejo',
  ],
  'imagen/diseno': [
    'Crear briefs visuales para piezas mas consistentes',
    'Mejorar prompts de imagen con estilo, contexto y uso final',
    'Construir variantes para anuncios, publicaciones y presentaciones',
    'Definir una guia visual simple para que la IA produzca mejor',
  ],
  ventas: [
    'Aterrizar oferta, objeciones y mensajes comerciales',
    'Crear un mini funnel asistido por IA: contenido, landing y seguimiento',
    'Generar guiones de venta consultiva segun tipo de cliente',
    'Analizar conversaciones para encontrar oportunidades perdidas',
  ],
  soporte: [
    'Automatizar respuestas frecuentes sin sonar robotico',
    'Crear una base de respuestas para WhatsApp, email y redes',
    'Clasificar consultas por urgencia, tema y proximo paso',
    'Diseñar un asistente FAQ entrenado con informacion del negocio',
  ],
};

const levelRecommendations: Record<AiLevel, string> = {
  nunca: 'Empezar con casos simples, visibles y sin jerga tecnica.',
  'lo probe': 'Corregir prompts, contexto y criterios para obtener mejores resultados.',
  'a veces': 'Convertir usos aislados en procesos repetibles.',
  frecuente: 'Optimizar, medir y conectar la IA con flujos reales del negocio.',
};

export function getRecommendations(
  businessType: BusinessType,
  pain: PainPoint,
  level: AiLevel,
) {
  const contextual =
    businessType === 'restaurante'
      ? 'Crear promociones, respuestas y contenido semanal alrededor de menus, horarios y temporadas'
      : businessType === 'servicio profesional'
        ? 'Convertir experiencia tecnica en contenido claro que atrae clientes correctos'
        : businessType === 'retail'
          ? 'Mejorar descripciones, campanas y seguimiento de clientes por producto'
          : businessType === 'creador'
            ? 'Transformar una idea central en piezas para varias plataformas'
            : 'Priorizar un primer sistema practico que produzca valor esta semana';

  return [...painRecommendations[pain].slice(0, 3), contextual, levelRecommendations[level]];
}
