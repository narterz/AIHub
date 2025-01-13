import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#022213",
        accent: "#bef237",
        textLight: "#d6d6d4",
        textDark: "#021106",
        background: "#eaeaea",
        component: "#ffffff",
      },
      backgroundImage: {
        'modal-image': "url('/public/images/ModalImg.png')",
      }
    },
  },
  plugins: [],
} satisfies Config;
