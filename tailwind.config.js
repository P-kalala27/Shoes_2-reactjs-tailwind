export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        night:{
          DEFAULT: "#OD1120",
          50: "#171e2c",
          500: "#0d1120"
        }
      },
      // creating own keyframes with name and how it's must be executed
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float:{
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn:{
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      // the animation property
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        fadeIn: 'fadeIn 2.5s ease-in-out',
      },
      // setting a fontFamily
      fontFamily:{
        Open: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto Condensed', 'sans-serif']
      }
    },  
    

    
  },
  plugins: [],
}