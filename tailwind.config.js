/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'paper': '#fafaf9', // stone-50
        'charcoal': '#0c0a09', // stone-900
        'safety': '#ea580c', // orange-600
      },
      borderWidth: {
        'default': '2px',
      },
    },
  },
  plugins: [],
}

