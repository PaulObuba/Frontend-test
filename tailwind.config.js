module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'banner': "url('../public/images/banner.png')",
    },
    extend: {
      colors: {
        'btn-bg': '#3DB0FF',
        'secondary': '#373C56',
        'sidebar-bg': '#E5E5E5',
      }
    },
  },
  plugins: [],
}
