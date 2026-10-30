/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10151B',
        violet: {
          450: '#55B8C8',
        },
        electric: '#B8DCE4',
        ice: {
          DEFAULT: '#55B8C8',
          light: '#B8DCE4',
          dark: '#347F91',
        },
        slate: {
          night: '#151D25',
          card: '#19232C',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}