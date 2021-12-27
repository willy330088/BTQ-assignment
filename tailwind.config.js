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
      dark: '#808080',
    },
    backgroundPosition: {
      center: '50% 100%',
    },
    backgroundSize: {
      nuts: '54px 11px',
      dividerH: '32px',
    },
    extend: {
      backgroundImage: {
        logo: "url('images/logo.png')",
        pattern: "url('images/pattern.png')",
        shallow: "url('images/shallow-patt.png')",
        conf: "url('images/conf.png')",
        nutsRed: "url('images/nuts-red.png')",
        divider: "url('images/divider.png')",
      },
    },
  },
  plugins: [],
};
