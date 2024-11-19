import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';
// import { defineConfig } from 'vite';


const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

  

({
    base: "/rf-meter/",
    server: {
      host: "::",
      port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(dirname, "./src"),
    },
  },
  build: {},
});
