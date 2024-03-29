/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  /* 'jit' stand fro 'Just-in-Time engine' offer more feature to use */
  mode: "jit",
  theme: {
    extend: {
      /* custom setting theme color for 'bg-' syntax. i.e bg-red */
      colors: {
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      /* the way to setting bg-color involve gradient */
      backgroundImage: () => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.05%, #ffba00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24cbff 14.53%, #ff59ff 69.36%, #ffbd0c 117.73%)",
      }),
      /* setting for font- syntax. i.e font-playfair */
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      /* for css 'before/after:content-' use image  */
      content: {
        brush: "url('./assets/brush.png')",
        stamp1: "url('./assets/stamp-1.png')",
        stamp2: "url('./assets/stamp-2.png')",
        stamp3: "url('./assets/stamp-3.png')",
      },
    },
    /* responsive setting syntax -> xs:... */
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
