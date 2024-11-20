import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/rf-meter/',
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
});