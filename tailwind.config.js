/** @type import('tailwindcss').Config */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: 'rgba(255, 255, 223, 0.6)' // Adjust the RGBA as needed
      },
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'pacifico': ['Pacifico', 'cursive'],
      },
    }
  },
  plugins: [],
}
