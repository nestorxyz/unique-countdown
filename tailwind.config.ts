import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        silk: ["var(--font-silk)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
