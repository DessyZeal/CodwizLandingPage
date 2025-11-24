/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-lavender': '#f5f2ff',
        'custom-lavender-80': '#f5f2ffcc',
        'custom-lavender-50': '#f5f2ff80',
      },
      backgroundImage: {
        'gradient-purple-blue': 'linear-gradient(to right, #7443ee, #4976f5)',
      },
    },
  },
  plugins: [],
}