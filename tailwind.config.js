module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        calendar: '1440px',
      },
      margin: {
        '60px': '60px',
      },
      minWidth: {
        '1/2': '50%',
        16: '4rem',
      },
      width: {
        '1/7': 'calc(100%/7)',
        '1/8': 'calc(100%/8)',
      },
      zIndex: {
        90: '90',
        100: '100',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
