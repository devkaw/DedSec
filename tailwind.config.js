/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
        'cyber-purple': '#9D00FF',
        'cyber-blue': '#0066FF',
        'dark-bg': '#0A0A0A',
        'darker-bg': '#050505',
      },
      fontFamily: {
        mono: ['Consolas', 'Courier New', 'monospace'],
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        glitch: 'glitch 0.3s linear infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
      },
    },
  },
  plugins: [],
};