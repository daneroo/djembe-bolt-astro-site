/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'primary': '#e36c2f', // Orange color from the logo
        'secondary': '#3c3c3c', // Dark gray color from the background
        'accent': '#ffffff', // White color for text and accents
      },
    },
  },
  plugins: [],
}