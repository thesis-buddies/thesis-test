module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{html,js}",
    "./src/components/**/*.{html,js}",
    "./src/layouts/**/*.{html,js}",
    "./src/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
