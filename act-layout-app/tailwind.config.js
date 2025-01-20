module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./layouts/**/*.tsx",
    "./ui/**/*.tsx",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {},
      boxShadow: {
        custom: "0px 0px 10px  rgb(0 0 0 / 0.2)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
    require("@tailwindcss/line-clamp"),
  ],
  variants: {
    extend: {},
  },
};
