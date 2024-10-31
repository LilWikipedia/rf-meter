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
        win95: {
          bg: "#008080",
          window: "#c0c0c0",
          border: "#dfdfdf",
          borderDark: "#404040",
          text: "#000000",
          title: "#000080",
        },
        primary: {
          DEFAULT: "#000080",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#c0c0c0",
          foreground: "#000000",
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
      boxShadow: {
        'win95-out': '2px 2px 0 #404040, -2px -2px 0 #ffffff',
        'win95-in': 'inset 2px 2px 0 #404040, inset -2px -2px 0 #ffffff',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;