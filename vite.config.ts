 import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";


 // https://vitejs.dev/config/
 export default defineConfig(({ mode }) => ({
   server: {
     host: "::",
     port: 8080,
   },
   plugins: [
     react(),
     mode === 'null' && new Plugin(),
   ].filter(Boolean),
   resolve: {
     alias: {
       "@": path.resolve(__dirname, "./src"),
     },
   },
 }));