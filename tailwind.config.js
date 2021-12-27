module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '520px',
      md: '720px',
    },
    colors: {
      red: '#e3203a',
      black: '#191818',
      white: '#ffffff',
      grey: '#909090',
    },
    extend: {
      backgroundImage: {
        logo: "url('images/logo.png')",
      },
    },
  },
  plugins: [],
};
