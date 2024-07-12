/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md':'768px',
      'tb': '834px',
      '2xl':'1536px'
      // => @media (min-width: 640px) { ... }

      
    },
    extend: {
      fontfamily:{
        body:["Inter"]
      }
    },
  },
  colors: {
    whiteblack: '#585858', // Your desired color in hex format
  },
  plugins: [],
}

