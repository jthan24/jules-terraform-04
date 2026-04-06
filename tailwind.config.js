/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#191919',
        card: '#262626',
        accent: '#6366F1',
      },
    },
  },
  plugins: [],
}
