/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 0%",
          },
        },
        gradientBorder: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        scalePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        motion: {
          '0%':   { top: '0%', left: '0%', transform: 'rotate(0deg)' },
          '24%':  { top: '0%', left: 'calc(100% - 50px)', transform: 'rotate(0deg)' },
          '25%':  { top: '0%', left: 'calc(100% - 50px)', transform: 'rotate(90deg)' },
          '50%':  { top: 'calc(100% - 40px)', left: 'calc(100% - 50px)', transform: 'rotate(90deg)' },
          '51%':  { top: 'calc(100% - 40px)', left: 'calc(100% - 50px)', transform: 'rotate(180deg)' },
          '74%':  { top: 'calc(100% - 40px)', left: '0%' , transform: 'rotate(180deg)'},
          '75%':  { top: 'calc(100% - 40px)', left: '0%' , transform: 'rotate(270deg)'},
          '100%': { top: '0%', left: '0%', transform: 'rotate(270deg)' },
        },
      },
      boxShadow: {
      'glow-purple': '0 0 30px 10px rgba(216, 180, 254, 0.6)',
    },
      animation: {
        gradient: "gradient 3s linear infinite",
        gradientBorder: 'gradient 0.5s ease infinite',
        scalePulse: 'scalePulse 2s ease-in-out infinite',
        motion: 'motion 10s linear infinite',
      },
    },
  },
  plugins: [],
}

