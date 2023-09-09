// Defining Configs Of TailwindCSS
module.exports = {
  content: [
      './app/*.{js,jsx}',
      './app/**/*.{js,jsx}',
      './app/**/**/*.{js,jsx}',
      './component/*.{js,jsx}',
      './component/**/*.{js,jsx}',
      './chunk/*.{js,jsx}',
      './chunk/**/*.{js,jsx}',
  ],
  theme: {
      extend: {
          colors: {
              theme: '#FF6120',
              darkBlue: '#2D324F',
          }
      }
  },
  plugins: [],
}
