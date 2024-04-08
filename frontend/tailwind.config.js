/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url(/images/login-bg.jpg)",
        // hero: "linear-gradient(73deg, rgba(255,187,248,1) 0%, rgba(167,183,255,1) 100%)",
        whole: "url(/images/hero-bg.svg)",
      },
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        "my-yellow": "#FDE74C",
        "my-orange": "#ff7d00",
        "light-orange": "#fae6d2",
        "my-gray": "#535766",
        "my-red": "#FF6A6A",
        "light-gray": "#f5f5f6",
      },
    },
  },
  plugins: [],
};
