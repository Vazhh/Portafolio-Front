/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl': '-9px 20px 25px 0px rgb(0 0 0 / 0.1)',
        'back': 'inset 0px 0px 150px 2px #ffffff',
      },
      dropShadow: {
        'md': '0 20px 5px rgba(245, 66, 66, 0.25)', 
      },
      transitionProperty: {
        'custom': 'all, background-color, background-image',
      },
      transitionTimingFunction: {
        'custom-ease': 'ease-in-out',
      },
      transitionDuration: {
        'custom': '400ms',
        'bg': '200ms',
        'bg-img': '200ms',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... } //vista vertical

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }//vista horizontal

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants:{
    extend: {
      transitionProperty: ['hover', 'focus'],
      transitionTimingFunction: ['hover', 'focus'],
      transitionDuration: ['hover', 'focus'],
    },
  },
  plugins: [],
  darkMode: 'class',
}