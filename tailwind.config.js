/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'techie-gray': {
          50: '#FCFCFC',
          100: '#E7E8EB',
          300: '#ABAEB7',
          600: '#5A5F70',
          900: '#1C202E',
        },
        'very-dark-gray': '#2C2C2C'
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}