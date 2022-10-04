/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          700: '#6941C6',
          600: '#7F56D9',
          50: '#F4EBFF',
        },
      },
    },
  },
  plugins: [],
};
