import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stylish: ['"Playfair Display"', "serif"],
      },
      colors: {
        background: "#FFFFFF", // Main background & Navbar
        navbar: "#FFFFFF", // Explicitly setting navbar color
        dropdownLeft: "#F7F7F7", // Left dropdown menu
        dropdownRight: "#FFFFFF", // Right dropdown menu
        text: "#000000", // Black text
        cream: "#ECEBDE", // Lightest shade
        beige: "#D7D3BF", // Warm neutral
        sand: "#C1BAA1", // Medium earthy tone
        olive: "#A59D84",
      },
      backgroundImage: {
        "dark-gray-gradient":
          "linear-gradient(45deg, #171717 0%, #282828 100%)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
