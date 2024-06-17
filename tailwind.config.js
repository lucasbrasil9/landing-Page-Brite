/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html, js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#292f36',
          hover: '#343e4a'
        },
        secondary: '#4d5053',
        accent: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
          hover: '#b88c5d',
        }
      }
    },
    container: {
      padding: {
        DEFAULT: '15px'
      },
    },
    screens: {
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1200px',
    },
    backgroundImage: {
      bg: 'url(/assets/bg/OurSolutions.jpg)',
    },
    fontFamily: {
      primary: 'DM Sans Bold',
      second: 'Dm Sans Regular',
    },

    
  },
  plugins: [],
}

