module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#E75818",
        "cl-orange": "#E75818",
        "cl-dark-gray": "rgba(22, 22, 22, 0.4)",
        "cl-gray": "rgba(22, 22, 22, 0.04)",
        "cl-black": "#161616",
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        85: "85%",
        full: "100%",
      },
      height: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
