# ANÁLISIS — Portafolio de Martín Figueroa

> Fase 1 del proyecto. Análisis de los repos reales de **github.com/FigueroaMartin** para construir un portafolio basado **solo en proyectos reales** (nada inventado).
> Generado: 2026-06-12 · Fuente: GitHub API pública + inspección de código local.

---

## Cómo se hizo el análisis

- Se listaron los **10 repos públicos** de `FigueroaMartin` (ninguno es fork, ninguno está vacío).
- Ningún repo tiene README en GitHub salvo 3, así que la descripción de cada proyecto se infirió **leyendo el código real**: `package.json`, `index.html`, READMEs locales, archivos de contexto (`CLAUDE.md`, `FORJA_CLAUDE_CODE_CONTEXT.md`) y estructura de carpetas.
- Se descartaron del showcase los repos antiguos o superados por una versión posterior (ver "Descartados").

---

## Resumen por proyecto

| # | Repo | Qué es | Stack real | Estado | Demo |
|---|------|--------|-----------|--------|------|
| 1 | **forja** | E-commerce de joyería masculina de autor "FORJA" (chilena) | React 19, Vite 8, Tailwind, Radix UI, Framer Motion, Embla/Swiper, Nodemailer | Activo (push 2026-06-12) | ✅ live |
| 2 | **Proyecto-Improfor-Web** | Panel web de administración de despacho de EPP "Improfor" | React 18, Vite 6, Supabase (Realtime), React Router 6, html5-qrcode | Activo (push 2026-06-12) | ✅ live |
| 3 | **Figuer-agentes-** | Equipo multi-agente de IA que automatiza el ciclo de desarrollo de software | Python, LangGraph, API de Anthropic, pytest (unit/integration/eval) | Activo (2026-06) | — |
| 4 | **Conecta2** | "Conectados": chat + video en tiempo real para jugadores (estilo Discord) | Astro, React, TypeScript, Supabase Realtime, WebRTC, Tailwind | 2025-11 | — |
| 5 | **finanzas-personales** | Dashboard PWA de finanzas personales | HTML/JS, Chart.js, PWA (manifest), sistema de diseño propio | Activo (2026-06) | — |
| 6 | **Proyecto-TDA** | "Inventarios El Gran Poeta": gestión de inventario para una biblioteca | Python, arquitectura por capas (DAO), MySQL, pytest | 2025-07 | — |
| — | E-commerce | Tienda "EcoSnack" de snacks saludables | HTML/CSS/JS vanilla | 2025-12 | — |
| — | Proyecto-improfor | Versión temprana de Improfor (superada por #2) | JavaScript | 2025-05 | — |
| — | Portfolio-main | Portafolio estático anterior (el que vamos a reemplazar) | HTML/CSS | 2025-09 | — |
| — | FigueroaMartin.github.io | Primer sitio estático | HTML/CSS | 2022-01 | — |

---

## Top 6 destacados (justificados)

### 1. FORJA — E-commerce de joyería de autor
**Por qué destaca:** es el proyecto más reciente y completo, con el stack más moderno y profesional de todo el portafolio. React 19 + Vite 8 con un set de librerías de producción real: **Radix UI** (accesibilidad), **Framer Motion** (animaciones), **Embla/Swiper** (carruseles) y un **endpoint de cotización por email** (`api/send-quote.js` con Nodemailer). Tiene identidad de marca trabajada (paleta dorado/plata sobre negro, tipografías Cormorant Garamond + DM Mono), deploy en Vercel con GitHub Actions y guía de tallas en PDF generada por scripts Python. Demuestra que puede llevar un producto de marca de punta a punta.
**Demo live:** https://figueroamartin.github.io/forja/

### 2. Improfor Web Admin — Panel de despacho de EPP
**Por qué destaca:** es una **aplicación de negocio real**, no un demo académico. Panel administrativo en React + Vite que comparte base de datos **Supabase** con una app móvil Expo, con **sincronización en tiempo real** (`postgres_changes`), **escáner de códigos de barra por webcam** (html5-qrcode), control de inventario, pedidos y despachos. Muestra integración full-stack, manejo de estado real, deploy en GitHub Pages y trabajo sobre un sistema productivo multi-cliente (web + móvil).

### 3. Equipo de Agentes de Desarrollo — IA agéntica
**Por qué destaca:** es el proyecto más **diferenciador y actual**. Un equipo de 8 agentes de IA (Arquitecto, Coder, Reviewer, Security Auditor, Tester, Doc Writer, Dependency Checker, Release Manager) orquestados con **LangGraph** y la **API de Anthropic**, con loop de revisión iterativa y asignación de modelos por criticidad (Opus/Sonnet/Haiku). Tiene **3 niveles de testing** (unit con mocks, integration con API real, eval con LLM-as-judge) y coverage con pytest. Demuestra dominio de un tema de frontera (agentes) con ingeniería seria detrás.

### 4. Conectados (Conecta2) — Chat + video en tiempo real
**Por qué destaca:** full-stack en tiempo real con **WebRTC** para video y **Supabase Realtime** para chat y canales. Construido con **Astro + React + TypeScript + Tailwind**, con esquema SQL propio (tablas, índices, RLS). Demuestra el stack más variado (Astro + TS) y capacidad de resolver comunicación en tiempo real, que es técnicamente exigente.

### 5. Finanzas Personales — Dashboard PWA
**Por qué destaca:** muestra **sensibilidad de diseño** y **visualización de datos**. Es una PWA instalable (manifest) con un **sistema de diseño propio** (paleta verde oscura, tipografías Syne + DM Mono, tokens CSS) y gráficos con **Chart.js**. Buen ejemplo de frontend cuidado y dashboards de datos.

### 6. Inventarios El Gran Poeta (Proyecto-TDA) — Backend por capas
**Por qué destaca:** aporta el lado de **ingeniería de software clásica**. Sistema de inventario en Python con **arquitectura por capas** (capa BD + capa de dominio con DAOs: productos, autores, editoriales, bodegas, movimientos, usuarios), base de datos **MySQL** (`libreria.sql`) y tests con pytest. Demuestra fundamentos de backend, modelado de datos y separación de responsabilidades.

---

## Perfil técnico inferido

**Desarrollador full-stack con foco frontend y trayectoria en ascenso clara.** Los repos cuentan una progresión: de HTML/CSS/JS vanilla (EcoSnack, 2022–2025) → React/Astro full-stack con Supabase (2025) → IA agéntica con LangGraph (2026). Construye **productos reales**, no solo ejercicios.

- **Frontend:** React (18 y 19), Astro, Vite, JavaScript + TypeScript. Estilos con Tailwind, CSS Modules y CSS-in-JS. Librerías de producción: Radix UI, Framer Motion, Embla/Swiper, Chart.js. Sensibilidad fuerte de diseño (sistemas de tokens, pairing tipográfico, dark mode, microinteracciones).
- **Backend / Datos:** Supabase (Postgres, Realtime, RLS, Auth), Python (DAOs, MySQL), Node (Nodemailer). Modelado de datos por capas.
- **Tiempo real:** Supabase Realtime, WebRTC.
- **IA / Agentes:** LangGraph + API de Anthropic, arquitecturas multi-agente, LLM-as-judge. Foco emergente y reciente.
- **Calidad / DevOps:** pytest (unit/integration/eval), coverage, GitHub Actions (CI), deploy en Vercel y GitHub Pages, PWA.
- **Contexto:** desarrollador chileno, hispanohablante. Perfil de estudiante/early-career que entrega software funcional y se mueve rápido hacia tecnología de frontera.

**Lenguajes por presencia en repos:** JavaScript (dominante) · TypeScript · Python · HTML/CSS · Astro.

---

## Descartados del showcase (con motivo)

- **Proyecto-improfor** → versión temprana superada por *Proyecto-Improfor-Web* (#2).
- **E-commerce (EcoSnack)** → proyecto académico en vanilla JS; útil como antecedente pero más débil que los destacados. *(Se puede incluir como "otros proyectos" si quieres.)*
- **Portfolio-main** → es el portafolio anterior que este proyecto reemplaza.
- **FigueroaMartin.github.io** → primer sitio estático (2022); valioso como punto de partida de la trayectoria, no como pieza destacada.

---

## Propuesta de valor para el hero (borrador, desde el análisis)

> "Desarrollador full-stack que construye productos reales — de e-commerce y paneles de negocio con React y Supabase, a equipos de agentes de IA."

*(Ajustable en Fase 2 con tu input.)*

---

## ⏸️ STOP — Esperando confirmación

**Antes de pasar a la Fase 2 (Build), confírmame:**

1. ¿El **top 6** está bien, o quieres sumar/quitar alguno (p. ej. incluir EcoSnack como proyecto secundario)?
2. ¿La **propuesta de valor** del hero te representa, o la ajustamos?
3. El portafolio lo armaré en `C:\Users\marti\OneDrive\Escritorio\Portafolio`. ¿Te sirve esa ubicación?
4. ¿Algún dato que falta y que **no puedo inventar**: tu rol/título exacto, ciudad, email/LinkedIn/GitHub para contacto, foto? (Si no, lo dejo marcado como `TODO` en Fase 2.)
