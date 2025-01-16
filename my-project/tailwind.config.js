/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // Add Raleway font
        roboto: ['Roboto', 'sans-serif'],   // Add Roboto font (or any other font)
      },
    },
  },
  plugins: [],
}
