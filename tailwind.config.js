/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#00D54B",
        "secondary-color": "#00D54B",
        "footer-font": "#B6B6B6",
        "footer-font-secondary": "#606060;",
        "white-grey": "#F8F6F6;",
      },
      fontFamily: {
        primary: ["Agrandir", "serif"],
        secondary: ["Mulish", "sans-serif"],
      },
      backgroundImage: {
        "rays-pattern": "url('../public/images/rays.svg')",
        floor: "url('../public/images/floor.svg')",
      },
      screens: {
        xs: "540px",
        xxs: "380px",
        xxxs: "240px",
      },
    },
  },
  plugins: [],
};
