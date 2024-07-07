module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '3xl': '1.953rem',
      'hui': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        'background': '#3A3A3A',
        'primary': '#535353',
        'accent': '#61DAFB',
        'white': '#FFFFFF',
      },
      spacing: {
        '355': '355px',
        '408': '408px',
      },
      fontSize: {
        'chlen': '2rem',
      },
    },
  },
  plugins: [],
};
