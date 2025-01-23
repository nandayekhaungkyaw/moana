/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "serif"],
        subrayada: ["var(--font-monsterrat)" , "serif"],
        leckerli: ["var(--font-leckerli)" , "sans-serif"],
      },
      fontSize: {
        "6xl": "64px",
      },
      lineHeight: {
        "6xl": "71px",
      },
      colors: {
        primary: {
          DEFAULT: "#1badff",
          50: "#d1efff",
          100: "#b3e4ff",
          200: "#8dd6ff",
          300: "#67c8ff",
          400: "#41bbff",
          500: "#1790d5",
          600: "#1273aa",
          700: "#0e5780",
          800: "#093a55",
          900: "#052333",
        },
        secondary: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        footerColor: {
          DEFAULT: "#042031",
        },
      },
      backgroundImage: {
        commercial: "url('/images/moana_about/about-bg.png')",
      },
      spacing: {
        "section-spacing": "40px", // use as className="mb-section-spacing" or "mt-section-spacing"
      },
      borderRadius: {
        DEFAULT: "10px",
        sm: "4px",
        lg: "20px",
      },
    },
    boxSizing: {
      DEFAULT: "border-box",
      inherit: "inherit",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "1px #1badff",
        },
        ".text-stroke-sm": {
          "-webkit-text-stroke": "0.5px #1badff",
        },
        ".text-stroke-lg": {
          "-webkit-text-stroke": "2px #1badff",
        },
      });
    },
  ],
};
