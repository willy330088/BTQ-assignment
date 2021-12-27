module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '520px',
      md: '720px',
      lg: '1025px',
    },
    colors: {
      red: '#e41f3a',
      black: '#191818',
      white: '#ffffff',
      grey: '#909090',
      pink: '#ff9fac',
    },
    extend: {
      backgroundImage: {
        logo: "url('images/logo.png')",
        pattern: "url('images/pattern.png')",
        shallow: "url('images/shallow-patt.png')",
        conf: "url('images/conf.png')",
      },
    },
  },
  plugins: [],
};
