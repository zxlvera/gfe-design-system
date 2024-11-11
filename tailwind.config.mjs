/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{mjs,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
}
