/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366', 
          dark: '#002244',
        },
        secondary: {
          DEFAULT: '#ff6600',
          hover: '#e65c00',
        },
        darkgrey: '#333333',
      },
    },
  },
  plugins: [],
}