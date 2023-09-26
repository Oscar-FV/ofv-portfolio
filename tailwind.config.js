/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
         {
           'waves_pattern': "url('src/assets/waves-bg.svg')"
         }
    },
  },
  plugins: [],
}

