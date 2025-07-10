/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F051D',
        foreground: '#E0D8F0',
        card: '#1A0A33',
        primary: '#A855F7',
        secondary: '#FBBF24',
        success: '#22C55E',
        border: '#392A54',
      },
      fontFamily: {
        heading: ['var(--font-montserrat)'],
        sans: ['var(--font-work-sans)'],
      }
    },
  },
  plugins: [],
};
