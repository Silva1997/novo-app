/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Breakpoints personalizados
        'mobile': { raw: '(min-width: 20.5rem) and (max-width: 30rem)' }, // Correção 360px,480px
        'sm': '31.25rem',
        'md': '48rem',
        'lg': '64rem',
        'xl': '80rem',
        '2xl': '1536px',  
      },
    },
  },
  plugins: [],
};
