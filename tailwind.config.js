module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      black:{
        light:'#241F2A'
      },
      search:'grey',
      background:'#17151D',
      searchbar:'#1B1A20',
      box:'#7D30F5',
      icon:'#3F6EFF',
      white:'#ffffff'
   }
  },
  variants: {
    extend: {},
  },
  plugins: [],
 
}
