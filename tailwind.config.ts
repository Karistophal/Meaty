import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      addUtilities({
        '.fontsherif': {
          letterSpacing: '-0.025em',
          fontFamily: 'var(--font-barlow-condensed)',
          fontWeight: '900',
        },
        '.text-10xl': {
          fontSize: "10rem",
          lineHeight: "1",
        }
      });
    },
  ],
};

export default config;
