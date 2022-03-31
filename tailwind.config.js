module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        accent: "var(--color-bg-accent)",
        samurai: "var(--color-bg-samurai)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      borderColor: {
        primary: "var(--color-border-primary)",
      },
      fill: {
        primary: "var(--color-fill-primary)",
      },
    },
  },
  plugins: [],
};
