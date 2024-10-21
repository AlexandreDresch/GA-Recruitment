/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Mono", "sans-serif"],
        VT323: ["VT323", "monospace"],
      },
    },
  },
  plugins: [],
};
