import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          violet: "hsl(263, 55%, 52%)",
          grayishBlue: "hsl(217, 19%, 35%)",
          blackishBlue: "hsl(219, 29%, 14%)",
          white: "hsl(0, 0%, 100%)",
        },
        neutral: {
          lightGray: "hsl(0, 0%, 81%)",
          lightGrayishBlue: "hsl(210, 46%, 95%)",
        },
      },
      fontFamily:{
        barlow : ['var(--font-barlow)', 'sans-serif']
      },
      backgroundImage:{
        comma : "url('../../public/sources/images/bg-pattern-quotation.svg')"
      }
    },
  },
  plugins: [],
} satisfies Config;
