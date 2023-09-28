module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f1f3f4",
          300: "#e2e3e4",
          400: "#b2b3b4",
          500: "#a6a6a6",
          600: "#76797b",
          900: "#202124",
          "900_02": "#1b1f23",
          "900_cc": "#1b1f23cc",
          "900_01": "#282828",
          "100_16": "#f2f3f416",
          "100_01": "#f2f3f4",
          "900_e5": "#1b1f23e5",
        },
        orange: { 300: "#f6be4f", A200: "#d6a243" },
        blue_gray: { 400: "#86888a", 900: "#35363a" },
        light_blue: { 700: "#0383d8" },
        red: { 300: "#ed6a5e", 400: "#ce5347" },
        green: { 400: "#62c554", 500: "#58a942", 600: "#29a869" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        sfprotext: "SF Pro Text",
        creatodisplay: "Creato Display",
        satoshivariable: "Satoshi Variable",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
