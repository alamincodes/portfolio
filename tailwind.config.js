/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily:{
      primary: 'Roboto Mono, monospace'
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
        lg: "5rem",
      },
    },
   
    extend: {
      colors: {
        body: '#010208',
        white: '#fff',
        primary: '#6D28D9',
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
};
