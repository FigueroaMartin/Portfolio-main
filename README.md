# Portafolio — Martín Figueroa

Portafolio personal de una página construido con **Astro 5 + Tailwind CSS 4 + TypeScript**.
Todo el contenido sale de repos reales de [github.com/FigueroaMartin](https://github.com/FigueroaMartin) — el análisis que lo respalda está en [ANALISIS.md](./ANALISIS.md).

**¿Por qué Astro?** El sitio es 100% contenido estático: Astro genera HTML puro con ~2 KB de JS total (toggle de tema + animaciones de scroll), lo que hace fácil mantener Lighthouse 90+. Next.js cargaría un runtime React innecesario para una página sin estado.

---

## Setup local

```bash
npm install
npm run dev       # → http://localhost:4321
```

Otros comandos:

```bash
npm run build     # build de producción → dist/
npm run preview   # sirve dist/ localmente
npm run check     # validación TypeScript de los .astro
```

---

## Editar contenido

### Proyectos — `src/data/projects.json`

Cada card del portafolio es una entrada del array `featured` (los `secondary` se listan compactos abajo):

```jsonc
{
  "slug": "mi-proyecto",          // id único
  "name": "Mi Proyecto",          // título de la card
  "year": "2026",
  "kind": "E-commerce",           // etiqueta corta de categoría
  "summary": "Qué hace y qué lo hace interesante (2-3 líneas).",
  "stack": ["React", "Supabase"], // badges de tecnología
  "repo": "https://github.com/FigueroaMartin/mi-proyecto",
  "demo": "https://..." ,         // o null si no hay demo
  "highlight": false              // true = card ancho doble (úsalo en UNO)
}
```

Guarda el archivo y la página se regenera sola — no hay que tocar componentes.

### Skills — `src/data/skills.json`

Grupos con título + lista de skills. Mismo trato: editar y listo.

### Datos personales — `src/data/site.ts`

Nombre, rol, tagline, email, GitHub, LinkedIn, ubicación y avatar. Los campos en `null` están marcados `TODO` y la página los muestra como placeholder hasta que los completes.

### Identidad visual — `src/styles/global.css`

Paleta (carbón/crema/ámbar) y tipografías (Syne display · Inter lectura · DM Mono etiquetas) viven como tokens CSS en `:root` (claro) y `.dark` (oscuro). Cambiar `--accent` re-tiñe todo el sitio.

---

## Deploy

### Opción A — GitHub Pages (ya configurado)

1. Sube este proyecto al repo `Portfolio-main` (rama `main`).
2. En GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Cada push a `main` ejecuta `.github/workflows/deploy.yml` y publica en
   `https://figueroamartin.github.io/Portfolio-main/`.

> Si renombras el repo, actualiza `GH_BASE` en `astro.config.mjs` (una sola línea).

```bash
git init
git add .
git commit -m "Portafolio inicial"
git branch -M main
git remote add origin https://github.com/FigueroaMartin/Portfolio-main.git
git push -u origin main --force   # --force solo si quieres pisar el contenido viejo del repo
```

### Opción B — Vercel

1. Importa el repo en [vercel.com](https://vercel.com) — detecta Astro solo, sin configuración.
2. Cuando tengas el dominio final, actualiza la URL de Vercel en `astro.config.mjs` (campo `site`) para que canonical y OG queden correctos.

---

## TODOs que requieren tu input

Cosas que **no se pueden inventar** y quedaron marcadas en el código:

| # | Qué | Dónde |
|---|-----|-------|
| 0 | Confirmar tu **título/rol** (hoy: "Desarrollador Full-Stack" — inferido de tus repos) | `src/data/site.ts` |
| 1 | Confirmar que quieres tu **email** público en el sitio (hoy: martinfigueroaa@gmail.com) | `src/data/site.ts` |
| 2 | **LinkedIn** — agregar URL (hoy se muestra un placeholder en Contacto) | `src/data/site.ts` |
| 3 | **Ubicación** — ciudad/país si quieres mostrarla | `src/data/site.ts` |
| 4 | **Foto** — hoy usa una copia local de tu avatar de GitHub (`public/avatar.png`); reemplaza si prefieres otra | `src/data/site.ts` |
| 5 | **2–3 líneas personales** en "Sobre mí": qué estudias/trabajas, qué buscas (práctica, primer rol, freelance) | `src/components/About.astro` (bloque marcado TODO) |
| 6 | **og.png** — la imagen para compartir en redes es un placeholder generado por script; reemplázala por una a tu gusto (1200×630) | `public/og.png` |
| 7 | **URL canónica** — hoy apunta a GH Pages; cámbiala si pasas a dominio propio o Vercel | `src/data/site.ts` (`canonicalUrl`) |
| 8 | Descripciones y `topics` de tus repos en GitHub están vacíos — completarlos mejora cómo se ve tu perfil (independiente de este sitio) | github.com |

---

## Estructura

```
Portafolio/
├── ANALISIS.md               # Fase 1: análisis de repos que respalda el contenido
├── astro.config.mjs          # site/base dual: Vercel y GH Pages
├── .github/workflows/deploy.yml
├── public/
│   ├── favicon.svg           # marca "mf·"
│   ├── avatar.png            # copia local de tu avatar de GitHub (TODO #4)
│   ├── robots.txt
│   └── og.png                # imagen OG (placeholder — TODO #6)
└── src/
    ├── data/
    │   ├── projects.json     # ← edita aquí tus proyectos
    │   ├── skills.json       # ← y aquí tus skills
    │   └── site.ts           # ← y aquí tus datos personales
    ├── styles/global.css     # tokens de la identidad (carbón/crema/ámbar)
    ├── layouts/Base.astro    # head: SEO, OG, JSON-LD, tema anti-flash
    ├── components/           # Nav, Hero, Projects, Skills, About, Contact, Footer
    └── pages/index.astro
```
