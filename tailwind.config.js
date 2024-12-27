/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richblack: {
          700: "#2C2F33", 
          800: "#23272A", 
          900: "#0D1117", 
        },
      },
    },
  },
  plugins: [],
}

