/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}',
    './widgets/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "foreground": "#F5F5F5",
        "cyan": "#3CBCB4",
        "gray": "#4A5662",
        "head": "#F0F3F3",
        "foot": "#F1F1F1"
      },
      boxShadow: {
        'out': '-1px -1px 3px #FFFFFF, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4)',
        'in': 'inset -2px 2px 4px rgba(212, 212, 212, 0.2), inset 2px -2px 4px rgba(212, 212, 212, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.9), inset 2px 2px 5px rgba(212, 212, 212, 0.9)',
        'glow': '-5px 5px 10px rgba(222, 222, 222, 0.2), 5px -5px 10px rgba(222, 222, 222, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(222, 222, 222, 0.9)',
        'thumb-img': '-5px 5px 10px rgba(217, 217, 217, 0.2), 5px -5px 10px rgba(217, 217, 217, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(217, 217, 217, 0.9)',
        'card-in': 'inset -2px 2px 4px rgba(205, 205, 205, 0.2), inset 2px -2px 4px rgba(205, 205, 205, 0.2), inset -2px -2px 4px rgba(255, 255, 255, 0.9), inset 2px 2px 5px rgba(205, 205, 205, 0.9)',
        'box': 'inset -3px -3px 7px #FFFFFF, inset 2px 2px 5px rgba(174, 174, 192, 0.4)',
        'cartfoot': '-5px 5px 10px rgba(205, 205, 205, 0.2), 5px -5px 10px rgba(205, 205, 205, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9), 5px 5px 13px rgba(205, 205, 205, 0.9)',
        'cartbtn': 'inset -2px 2px 4px rgba(28, 111, 128, 0.2), inset 2px -2px 4px rgba(28, 111, 128, 0.2), inset -2px -2px 4px rgba(42, 167, 192, 0.9), inset 2px 2px 5px rgba(28, 111, 128, 0.9)',
      },
      backgroundColor: {
        'card': '#F6F6F6',
        'cart': 'linear-gradient(135deg, #459EAF 0%, #007991 100%)',
      },
    },
  },
  plugins: [],
}
