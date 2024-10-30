import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0EA5E9",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#0369A1",
          foreground: "#ffffff",
        },
        warning: {
          DEFAULT: "#EF4444",
          foreground: "#ffffff",
        },
        safe: {
          DEFAULT: "#22C55E",
          foreground: "#ffffff",
        }
      },
      keyframes: {
        "signal-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        }
      },
      animation: {
        "signal-pulse": "signal-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;