module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './app/public/index.html'],
    options: {
      safelist: ['text-gigant', 'text-big', 'text-[16px]', 'w-[160px]'],
    },
  },
  theme: {
    extend: {
      fontSize: {
        big: '28px',
        verybig: '32px',
        gigant: '36px',
      },
      colors: {
        background: '#3A3A3A',
        primary: '#535353',
        accent: '#61DAFB',
        white: '#FFFFFF',
      },
      spacing: {
        355: '355px',
        408: '408px',
      },
    },
  },
  plugins: [],
};
