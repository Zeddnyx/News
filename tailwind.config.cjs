/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter:  ['Inter', 'sans-serif'],
      },
      colors: {
        orange: 'hsl(35, 77%, 62%)',
        red: 'hsl(5, 85%, 63%)',
        White: 'hsl(36, 100%, 99%)',
        grayB: 'hsl(233, 8%, 79%)',
        darkG: 'hsl(236, 13%, 42%)',
        darkB: 'hsl(240, 100%, 5%)',
      },
    },
  },
  plugins: [],
}
