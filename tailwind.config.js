module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        16: '4rem',
      },
      width: {
        '1/7': 'calc(100%/7)',
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
      zIndex: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
