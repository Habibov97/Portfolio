/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        Romanesco: ["Romanesco", "cursive"],
        Merriweather: ["Merriweather", "serif"],
        Times: ["Libre Baskerville", "serif"],
        Roman: ['Times New Roman', "sans - serif"],
        Poppin: ["Poppins", "sans-serif"]


      },
    },
  },
  plugins: [],
}