module.exports = {
  mode: "jit",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Tajawal"],
        eng: ["Roboto"],
      },
      colors: {
        darkBlue: "#012A4A",
        SecDarkBlue: "#0B2347",
        orange: "#E56B6F",
        crame: "#F9F9F9",
        liteBlue: "#27AFE8",
        liteGreen: "#2CD97B",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
