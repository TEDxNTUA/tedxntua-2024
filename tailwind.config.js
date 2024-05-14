/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aestheticRegular: ["AestheticRegular", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
      },
      fontSize: {
        xxs: "0.7rem",
      },
      screens: {
        "3xl": "2000px",
        "4xl": "2500px",
        "5xl": "4000px",
      },
      colors: {
        "tedx-red": "#eb0028",
        "our-white": "#efefee",
        "our-blue": "#1c7293",
        "our-purple": {
          100: "#BFACE2",
          200: "#7e5884",
        },
        "our-pink": "#BFACE2",
        "our-black": "#191617",
        "our-yellow": "#cfff04",
      },
      animation: {
        "text-reveal":
          "text-reveal 2s cubic-bezier(0.77, 0, 0.175, 1) 15s infinite",
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
