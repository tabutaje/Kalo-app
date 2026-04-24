import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Base path:
//   - En GitHub Pages la app se sirve bajo /Kalo-app/, así que los assets
//     (JS, CSS, imágenes) tienen que tener ese prefijo.
//   - En desarrollo local y dentro de Capacitor (Android) se sirve en la raíz,
//     así que dejamos './' — rutas relativas que funcionan en cualquier base.
// El workflow de GitHub Actions define GITHUB_PAGES=1 para activar el prefijo.
const isGithubPages = process.env.GITHUB_PAGES === '1'

export default defineConfig({
  base: isGithubPages ? '/Kalo-app/' : './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
