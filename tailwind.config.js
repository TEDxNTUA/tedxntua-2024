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
        "our-red": "#fc8803",
        "our-black": "#191617",
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
