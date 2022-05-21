module.exports = {
  mode: 'jit',
  theme: {
    fontFamily: {
      sans: 'PatsySans, Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      rubik: ['Rubik', 'serif', 'Helvetica', 'Arial'],
      mulish: ['Mulish', 'serif', 'Helvetica', 'Arial'],
      dmsans: ['DMSans', 'serif', 'Helvetica', 'Arial'],
    },
    screens: {
      xs: '360px',
      sm: '640px',
      md: '720px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      spacing: {
        0.75: '0.19rem',
      },
      colors: {
        'main-color': '#7ac751',
        'light-black': '#2F2F2F',
        'dark-gray': '#555',
        'h2-gray': '#515151B5',
        'border-gray': '#E3E3E3C7',
        'placeholder-gray': '#B0B0B0',
        'bg-light-gray': '#f7f8fa',
        'span-gray': '#757575',
        'li-gray': '#C2C2C2',
        'price-gray': '#CCCCCC',
        'label-blue': '#00B7F1',
        'label-red': '#FF6868',
        'bg-testimonals-gray': '#F8FAFB',
        'testimonials-text-gray': '#515151',
        'overlay-gray': 'E2E2EA',
      },
    },
  },
  variants: {
    extend: {},
  },
  content: [
    './public/index.html',
    './src/**/*.{vue,js,jsx,ts,tsx}',
    './src/**/*.svg',
  ],
  purge: ['./src/**/*.{vue,js,jsx,ts,tsx}', './src/**/*.svg'],
};
