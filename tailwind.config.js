/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#182857",
        purple: "#8758ff",
        danger: "#ef4444",
        "bold-text": "#0b0a1c",
        "base-text": "#282e36",
        "light-text": "#77787d",
        "bg-primary": "rgba(93, 184, 228, 0.1)",
        "bg-purple": "rgba(135, 88, 255, 0.1)",
        "bg-danger": "rgba(255, 59, 59, 0.14)",
        "bg-white": "#fff",
        "bg-gray": "#B6B6B6",
      },
      backgroundImage: {
        "app-bg-gradient":
          "linear-gradient(0deg, #fafafa, #fafafa), linear-gradient(180deg, rgba(149, 133, 190, 0.05) 0%, rgba(93, 184, 228, 0.05) 100%)",
        "base-gradient":
          "linear-gradient(180deg, rgba(94, 184, 227, 0.02) 0%, rgba(94, 184, 227, 0.05) 0.01%, rgba(135, 88, 255, 0.05) 100%)",
      },
    },
  },
  plugins: [],
};
