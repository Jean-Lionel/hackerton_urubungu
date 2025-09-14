import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    host: true,   // permet d’écouter toutes les interfaces réseau
    port: 5173,   // tu peux changer si besoin
  }
})
