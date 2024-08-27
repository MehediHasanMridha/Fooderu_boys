/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '420px',
      // for mobile 430px

      'md': '768px',
      // for tab 786

      'lg': '820px',
      // for tab 834

      'xl': '1040px',
      // pc 
    }
  },
  plugins: [],
}

