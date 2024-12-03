import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500, // Adjust the chunk size limit for large assets
    outDir: 'build', // Specify the output directory as 'build'
  },
})
