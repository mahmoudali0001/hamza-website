/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/*.js"],
  theme: {
    extend: {
      screens: {
        xm: "350px",
        // => @media (min-width: 100%) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1380px",
        // => @media (min-width: 1280px) { ... }

        xxl: "1500px",
        // => @media (min-width: 1500px) { ... }
      },
      textColor: {
        main: "#F2A71B",
      },
      backgroundColor: {
        main: "#2f4213e6",
        sec: "#F2A71B",
      },
      fontFamily: {
        cairo: "Cairo, sans-serif",
      },
    },
  },
  plugins: [],
};
