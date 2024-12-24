/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["Cairo", "sans-serif"], // Arapça için özel font
        default: ["Inter", "sans-serif"], // Türkçe ve varsayılan için font
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(50px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeOutDown: {
          from: { opacity: "1", transform: "translateY(0)" },
          to: { opacity: "0", transform: "translateY(50px)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-in-out forwards",
        fadeOutDown: "fadeOutDown 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-rtl"), // Sağdan sola destek
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".rtl": {
          direction: "rtl",
        },
        ".ltr": {
          direction: "ltr",
        },
      });
    }),
  ],
};
