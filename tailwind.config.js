/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FEFEFE",
        accent: "#52a8a6",
        cardBg: "#5CD2C6",
        darkBlue: "#363753",
        lightPurple: "#6D6EA5",
        lightGray: "#f0f2f9",
        lightGreen: "#8cc6c5",
        lightGrayText: "#353535",
        lightOrange: "#ee7d2b",

        // new
        brand: {
          DEFAULT: "#6C5CE7", // slightly more premium purple
          light: "#A29BFE",
          soft: "#F1EFFF", // background tint
          glow: "#8B7CFF",
        },
        ink: "#0B0B0F",
        subtext: "#6B7280",
        canvas: "#FCFCFD", // softer than FAFAF9
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-mid": "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
