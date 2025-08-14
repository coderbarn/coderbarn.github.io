module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bronze: '#b08d57',
        copper: '#b87333',
        sepia: '#704214',
        iron: '#43464b',
        parchment: '#f5ecd7',
      },
      fontFamily: {
        victorian: ['"IM Fell English SC"', 'serif'],
      },
    },
  },
  plugins: [],
}