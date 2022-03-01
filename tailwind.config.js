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
      primary : {
        100 : '#17a655',
        200 : '#0f723a'
      },
      secondary : {
        100 : '#E2E2D5',
        200 : '#888883'
      },

      required : '#FF0000',

      headerFP : '#242C42',
      navItem : '#242c42',

      white : '#ffffff',
      black : '#000000',

      gray : '#cccccc',

      transparent : 'hsla(0, 0%, 0%, 0)',

      coursesGray : {
        'content' : '#6f8190',
        'title' : '#49575f' ,
        'border' : "#eaedf5",
        'coursesItemBG' : '#FAFAFA',
        'coursesItemTitle' : '#49575f',
        'coursesHoveredItemTitle' : '#242c42',
        'coursesItemDescription' : "#6f8190"
      },

      mainPageGray : {
        'sliderRounds' : '#bfc6d7'
      },

      aboutUsSliderShadow: 'rgba(10, 15, 28, 0.7)',
      aboutUsCommentTriangles : 'rgba(255, 255, 255, 0.35)',
      aboutUsCommentSliderArrows :'#7f7f84',
      aboutUsSliderArrowsShadow: 'rgba(10, 15, 28, 0.25)',

      aboutUsComment : 'rgba(255, 255, 255, 0.3)',

      coursesDetailBorder : 'rgb(133, 133, 133)',

      LinkToBlue : '#337ab7',

      coursesYellow : {
        'coursesRate' : '#e2cf00'
      },

      footerListBorder : '#2F374C',

      shadowOnImage : 'rgba(10, 15, 28, 0.7)'
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
      'minScreen' : '10px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'navResponse' : '1078px',
      'headerContactsWebs' : {'max' : '1077px'} ,
      'footerAdd' : '775px',
      'navWithButton' : {'max' : '900px'},
      'min900' : '900px',
      'minMax1075' : {'max' : '1075px' , 'min' : '900px'},
      'coursesMinBeforeStyle' : {'max' : '639px'},

      'max798px' : {'max' : '798px'},
      'max768px' : {'max' : '768px'},
      'max480px' : {'max' : '480px'},
      'max380' : {'max' : '380px'},
      'max320px' : {'max' : '320px'},
      'max600px' : {'max' : '600px'},
      'max718px' : {'max' : '718px'},
      'max740px' : {'max' : '740px'},
      'max1024px' : {'max' : '1024px'},
      'max767px' : {'max' : '767px'},
      'max1200px' : {'max' : "1200px" , 'min' : '767px'},
      'max400px' : {'max' : '400px'},
      'max992px' : {'max' : '992px'},
      'max450px' : {'max' : '450px'},
      'max900px' : {'max' : '900px'},
      
      'min500px' : '512px',
      'min799px' : '799px',

      'footerFirstResponse' : '992px',
      'footerSecondResponse' : '768px',
      'footerItemsGridF' : {'max' : '555px'},
      'footerItemsGridS' : {'max' : '992px'},

      'maxW600' : {'max' : '600px'}
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
        'courses' : 'url("http://edu.ens.am/assets/images/banner-1.jpg")',
        'coursesSectionSearchInput' : 'url("http://edu.ens.am/assets/images/background-search.png")',
        'mainSlider' : {
          'item0' : 'url("http://edu.ens.am/assets/images/background-slider-31603025168992.jpg")',
          'item1' : 'url("http://edu.ens.am/assets/images/background-slider-11602533686655.jpg")',
          'item2' : 'url("http://edu.ens.am/assets/images/background-slider-11602533686655.jpg")' 
        },
        'mainPageValues' : "url('http://edu.ens.am/assets/images/background-count-number.png')",
        mainAboutCommentsSlider : 'url("http://edu.ens.am/assets/images/background-talk-about-us.jpg")',
        loopIcon : 'url(http://edu.ens.am/assets/images/lib-pictures/icon-plus.png)',
        successfulStudents : 'url("http://edu.ens.am/assets/images/background-best-staff.jpg")'
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
