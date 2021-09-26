module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandcol: "#3ab2ac",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
