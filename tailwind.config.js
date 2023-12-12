/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        current:"rgb(var(--bg-color))",
        pinkcolor:"rgb(var(--fill-color))",
        yellowcolor:"rgb(var(--y-color))",
      },
    },
  },
  plugins: [],
}

