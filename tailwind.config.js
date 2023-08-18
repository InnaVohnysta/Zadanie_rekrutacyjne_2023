/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans'],
        montserrat: ['Montserrat', 'sans'],
      },
      screens: {
        sm: '600px',
        md: '900px',
        lg: '1024px',
        xl: '1200px',
        xxl: '1440px',
      },
      maxWidth:{
        'xl': '1440px',
        'hero-text': '30.56rem',
        'oferta': '45rem',
        'oferta-elements': '23.625rem',
        'o-firma-text': '31.25rem',
        'inst-b': '10.1rem',

      },
      colors: {
        'black':'#111111',
        'beige': '#DCC1AB',
        'green': '#1B5B31',
        'gray': '#F5F0EC',
      },
      spacing: {

        '5.5': '5.563rem',
        '4.5':'4.5rem',
        '7.5':'7.5rem',
        '12.5': '12.5rem',
        '3.75': '3.75rem',
        '3.875': '3.875rem',
        '6.875': '6.875rem',
        'insta': '65rem',
      },
      borderRadius:{
        '12.5': '12.5rem',
        '1.75': '1.75rem',
      },
      fontSize:{
        'nav': ['0.875rem', { lineHeight: '1.313rem' }],
        'large':['3.75rem', {lineHeight: '4.375rem'}],
        'smaller':['0.75rem', {lineHeight: '1.125rem'}],
        'heading-3':['3rem', {lineHeight: '3.45rem'}],
        'h-4': ['1.75rem', {lineHeight: '2.013rem'}],
        'inst-h': ['2.5rem', {lineHeight: '3rem'}],
        'nav-f': ['0.875rem', { lineHeight: '1rem' }],
      },
      letterSpacing:{
        5 :'-5%',
      },
      animation: {
        'flip-in-ver-left': 'flip-in-ver-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'scale-in-top': 'scale-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        'flip-in-ver-left': {
          '0%': {
            '-webkit-transform': 'rotateY(80deg)',
            'transform': 'rotateY(80deg)',
            'opacity': '0',
          },
          '100%': {
            '-webkit-transform': 'rotateY(0)',
            'transform': 'rotateY(0)',
            'opacity': '1',
          },
        },
        'scale-in-top': {
          '0%': {
            '-webkit-transform': 'scale(0)',
                    'transform': 'scale(0)',
            '-webkit-transform-origin': '50% 0%',
                    'transform-origin': '50% 0%',
            'opacity': '1'
          },
          '100%': {
            '-webkit-transform': 'scale(1)',
                    'transform': 'scale(1)',
            '-webkit-transform-origin': '50% 0%',
                    'transform-origin': '50% 0%',
            'opacity': '1',
          }
        }
      },
    },
  },
  
  
  plugins: [],
}

