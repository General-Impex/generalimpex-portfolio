/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#025341',
        accent: '#9CCC65',
        white: '#FFFFFF',
        black: '#000000',
        gray: '#777777',
        'dark-gray': '#6B7B84',
        'light-gray': '#D9D9D9',
        'bg-light': '#F5F5F5',
      },
      fontFamily: {
        'heading': ['Outfit', 'sans-serif'],
        'body': ['DM Sans', 'sans-serif'],
        'section': ['Poppins', 'sans-serif'],
        'subtitle': ['Nunito Sans', 'sans-serif'],
      },
      maxWidth: {
        'container': '1280px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}
