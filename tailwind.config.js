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
      boxShadow: {
        "all-sm": "0 0 2px 0 rgba(0, 0, 0, 0.05)",
        "all-md":
          "0 0 6px -1px rgba(0, 0, 0, 0.1), 0 0 4px -1px rgba(0, 0, 0, 0.06)",
        "all-lg":
          "0 0 15px -3px rgba(0, 0, 0, 0.1), 0 0 6px -2px rgba(0, 0, 0, 0.05)",
        "all-xl":
          "0 0 25px -5px rgba(0, 0, 0, 0.1), 0 0 10px -5px rgba(0, 0, 0, 0.04)",
        "all-2xl": "0 0 50px -12px rgba(0, 0, 0, 0.25)",
        "all-3xl": "0 0 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
