/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter Tight"
      },
      colors: {
        primary: "#14b8a6",
        secondary: "#0d9488",
        'custom-dark': '#232D32',
      },
      backgroundImage: {
        'fade-gradient': 'linear-gradient(to bottom, #232D32, rgba(85, 95, 100, 0.4), rgba(85, 95, 100, 0))', // Fades to transparent
        'fade-blue': 'linear-gradient(to bottom, blue, rgba(0, 0, 255, 0.4), rgba(0, 0, 255, 0))', // Fades to transparent
      },
    
    },
  },
  plugins: [],
}