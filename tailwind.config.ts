import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6A6A",
        secondary: "#88FF6A",
        black1: "#1E1E1E",
        gray1: "#848383",
      },
      screens: {
        xs: "320px",
        md: "744px",
      },
      backgroundImage:{
        'hero-bg': "url('/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
