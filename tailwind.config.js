/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          800: '#53389E',
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
          200: '#EAECF0',
        },
        success: {
          700: '#027A48',
          50: '#ECFDF3',
        },
        error: {
          700: '#DE486C',
          50: '#FDECED',
        },
        indigo: {
          700: '#3538CD',
          50: '#EEF4FF',
        },
        blue: {
          700: '#175CD3',
          50: '#EFF8FF',
        },
        white: '#fff',
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
