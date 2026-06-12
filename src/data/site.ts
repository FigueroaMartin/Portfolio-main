// Datos del sitio. Todo lo marcado TODO requiere tu input real — no se inventa nada.
export const SITE = {
  name: 'Martín Figueroa',
  role: 'Desarrollador Full-Stack', // TODO: confirma tu título (¿estudiante? ¿analista? como te presentes)
  // Propuesta de valor del hero (derivada del análisis de tus repos reales)
  tagline:
    'Construyo productos reales: de e-commerce y paneles de negocio con React y Supabase, a equipos de agentes de IA.',
  description:
    'Portafolio de Martín Figueroa, desarrollador full-stack: e-commerce, paneles de negocio con React y Supabase, y agentes de IA con LangGraph.',
  github: 'https://github.com/FigueroaMartin',
  email: 'martinfigueroaa@gmail.com', // TODO: confirma que quieres este email público en el sitio
  linkedin: null as string | null, // TODO: agrega tu URL de LinkedIn (ej. 'https://linkedin.com/in/...')
  location: null as string | null, // TODO: agrega tu ciudad (ej. 'Santiago, Chile')
  avatar: 'avatar.png', // copia local de tu avatar de GitHub (public/) — TODO: reemplazar por foto si prefieres
  // URL canónica del sitio publicado. Hoy: GH Pages. TODO: cámbiala si pasas a dominio propio/Vercel.
  canonicalUrl: 'https://figueroamartin.github.io/Portfolio-main/',
} as const;
