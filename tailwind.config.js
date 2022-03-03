const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(({ addUtilities })=> {
      addUtilities({
        '.content-auto': {
          'content-visibility': 'auto',
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
      })
    }),
  ],
  mode : 'jit',
  content : [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

    content : {
      'border-right' : '"|"'
    },

    colors : {
      white : '#ffffff',
      black : '#000000',

      appleButtonBorder : 'rgb(207, 217, 222)',

      gray : '#cccccc',

      transparent : 'hsla(0, 0%, 0%, 0)',
    },

    fontFamily : {
      mainFont : ['Lato']
    },

    borderWidth : {
      '5px' : '0.313rem'
    },

    fontSize: {
      'min' : '.5rem',
      'xs': '.75rem',
      '9px' : '9px',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '42px' : '42px',
      '30px' : '30px'
    },

    maxWidth : {
      '250px' : '250px',
      '300px' : '300px',
    },

    screens: {
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'maxlg' : {'max' : '1024px'},
      '2xl' :  '1124px',

      'max519px' : {'max' : '519px'}
    },    

    extend: {
      boxShadow : {
        'coursesBorder' : '0 0 15px rgb(0 0 0 / 28%)',
        'coursesInput' : '0 0 5px rgb(0 0 0 / 20%)',
        'coursesRegContainer' : '0 0 15px rgb(0 0 0 / 30%)'
      },

      height: {
        '101px' : '101px',
        'headerFP' : '3.25rem',
        'headerMP' : '105px',
        'headerMPMini' : '55px',
        '3px' : '3px',
        '5px' : '5px',
        '300px' : '300px',
        '120px' : '120px',
        '225px' : '225px',
        '100px' : '100px',
        '105px' : '105px'
      },

      margin : {
        'headerFP' : "5.594rem",
        '10px' : '0.625rem',
        '70px' : '4.375rem',
        '15px' : '0.938rem',
        'minus65' : '-65px',
        '5px' : '5px',
        '90px' : '90px',
        '12px' : '12px',
        '1/4' : '25%'
      },

      padding : {
        'headerFP' : '0.938rem',
        '10px' : '0.625rem',
        '25px' : '25.4px',
        '100px' : "100px",
        '30px' : '30px',
        '15px' : '15px'
      },

      width : {
        '125px' : '125px',
        'logo' : '13.75rem',
        '300px' : '300px',
        '550px' : '550px',
        '420px' : '420px' ,
        '346.5px' : '346.5px'
      },

      lineHeight : {
        '100px' : '6.25rem',
        '25px' : '25px',
        '30px' : '30px',
      },

      backgroundImage : {
        bigImageStartPage : "url('https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png')"
      },

      spacing : {
        '50px' : '50px',
        'minus50' : '-50px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
