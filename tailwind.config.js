/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bit-bee-blue': '#001F3F',
        'bit-bee-green': '#005F30',
        'bit-bee-yellow': '#FFD700',
        'bit-bee-grey': '#D3D3D3',
        'bit-bee-red': '#8B0000'
      }
    },
  },
  plugins: [],
}

