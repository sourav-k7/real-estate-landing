/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#1F2328",
        secondary: "#F4511E",
      },
      colors: {
        primary: "#F4511E",
      },
      borderColor: {
        primary: "#F4511E",
      },
    },
  },
  plugins: [],
};
