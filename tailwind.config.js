module.exports = {
  purge: [],
  //purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      //'mono': ['ui-monospace', 'SFMono-Regular', ...],
      'sans': ['Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif']
    }
  },
  variants: {
    extend: 
    {
      opacity: ['disabled']
    },
  },
  plugins: [],
}
