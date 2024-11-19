import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from 'vite';

export default Config ({
  base: "/rf-meter/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {},
});
