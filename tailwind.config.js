//** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: '200px',
        md: '300px',
        lg: '400px',
        xl: '1240px',
        '2xl': '1496px',
      }
    },
    variants: {
      // ...
      gridTemplateRows: ['hover', 'focus'],
    }
  },
  plugins: [],
}

