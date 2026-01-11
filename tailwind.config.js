/** @type {import('tailwindcss').Config} */
export default {
  // 1. ADD THIS: Point to your files
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // 2. ADD THIS: Enables the 'dark' class logic we used in App.jsx
  darkMode: 'class', 
  theme: {
    extend: {
      // 3. ADD THIS: Define your Matrix colors
      colors: {
        'matrix-black': '#000000',
        'matrix-green': '#22c55e',
      },
      keyframes: {
        'scan-line': {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        }
      },
      animation: {
        'scan-line': 'scan-line 1.5s linear forwards',
      },
    },
  },
  plugins: [],
}