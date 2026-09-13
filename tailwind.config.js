/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'matrix-black': '#050706',
        'matrix-dark': '#0a0f0d',
        'matrix-green': '#22c55e',
        'matrix-emerald': '#10b981',
        'cyber-cyan': '#06b6d4',
        'cyber-glow': 'rgba(34, 197, 94, 0.4)',
        // Executive Palette
        'executive-slate': '#0f172a',
        'executive-navy': '#090d16',
        'executive-blue': '#2563eb',
        'executive-sapphire': '#1d4ed8',
        'executive-light': '#f8fafc',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'cyber': '0 0 25px rgba(34, 197, 94, 0.25)',
        'cyber-lg': '0 0 40px rgba(34, 197, 94, 0.35)',
        'cyber-border': '0 0 15px rgba(34, 197, 94, 0.3), inset 0 0 15px rgba(34, 197, 94, 0.1)',
        'executive': '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(15, 23, 42, 0.04)',
        'executive-lg': '0 30px 60px -20px rgba(37, 99, 235, 0.15), 0 0 1px 1px rgba(37, 99, 235, 0.1)',
        'executive-card': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(226, 232, 240, 0.8)',
      },
      keyframes: {
        'scan-line': {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'scan-line': 'scan-line 1.5s linear forwards',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'radar-sweep': 'radar-sweep 8s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}