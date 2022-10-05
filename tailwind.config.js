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
        gray: {
          900: '#101828',
          700: '#344054',
          600: '#475467',
          500: '#667085',
          300: '#D0D5DD',
        },
      },
      boxShadow: {
        input: '0px 1px 2px rgba(16, 24, 40, 0.05)',
        'button-primary': '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
    },
  },
  safelist: [{ pattern: /p(y|x|b|t|l|r)-.*/ }],
  plugins: [],
};
