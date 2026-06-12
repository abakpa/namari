/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          500: "#1e40af",
          600: "#0a2472",
          700: "#071952",
          900: "#050d2b",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
        gold: "#f59e0b",
        ink: "#0f172a",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)",
        glow: "0 24px 80px rgba(6, 182, 212, 0.22)",
      },
    },
  },
  plugins: [],
};
