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
