import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],  // ✅ mantener esto
    // ❌ eliminar alias que apuntaban a index.js


  },
  base: '/' 
})