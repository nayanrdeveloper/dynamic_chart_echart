/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#405189",
        input: '#ced4da',
        inputColor: '#212529'
      }
    },
  },
  plugins: [],
}
