module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        bubbleFloat: "bubbleFloat 10s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)", opacity: "0.7" },
          "50%": { transform: "translateY(-150px)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "0.7" },
        },
        bubbleFloat: {
          "0%": { transform: "translateY(0)", opacity: "0.7" },
          "50%": { transform: "translateY(-150px)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "0.7" },
        },
      },
      colors: {
        primary: "rgba(34, 139, 34, 0.7)",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        bubbleColor1: "rgba(255, 165, 0, 0.7)",
        bubbleColor2: "rgba(30, 144, 255, 0.7)",
        bubbleColor3: "rgba(255, 20, 147, 0.7)",
        bubbleColor4: "rgba(34, 139, 34, 0.7)",
        bubbleColor5: "rgba(255, 0, 255, 0.7)",
      },
    },
  },
  darkMode: 'class', // This enables the dark mode feature based on a class
  plugins: [],
};
