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
        gray_400: "#c5c5d1",
        gray_500: "#9a9b9f",
        blue_gray_50: "#ececf1",
        light_green_500: "#7dd63e",
        red_A400_87: "#ff2d5587",
        gray_900: "#202123",
        blue_gray_800: "#444654",
        blue_gray_900_02: "#333333",
        blue_gray_900_01: "#2b2c2f",
        blue_gray_900: "#343541",
        blue_gray_900_4c: "#3333334c",
        white_A700: "#ffffff",
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 2px  8px 0px #3333334c" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
