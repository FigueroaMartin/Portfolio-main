import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GH Pages sirve bajo /NOMBRE_REPO/ — Vercel sirve en la raíz.
// El workflow de GitHub Actions exporta DEPLOY_TARGET=github automáticamente.
// Si cambias el nombre del repo, actualiza GH_BASE aquí y nada más.
const GH_SITE = 'https://figueroamartin.github.io';
const GH_BASE = '/Portfolio-main/';

const isGitHub = process.env.DEPLOY_TARGET === 'github';

export default defineConfig({
  site: isGitHub ? GH_SITE : 'https://portafolio-martin-figueroa.vercel.app', // TODO: dominio real de Vercel
  base: isGitHub ? GH_BASE : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
