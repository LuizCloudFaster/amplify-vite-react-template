import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '../amplify_outputs.json': './amplify_outputs.json', // Corrige o alias
    },
  },
  server: {
    fs: {
      allow: ["."], // Permite acessar arquivos na raiz do projeto
    },
  },
})