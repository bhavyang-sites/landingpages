/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // We are overriding the default blue to match the "Insure" hex code (#2D4B7A)
        // This automatically updates all text-blue-600, bg-blue-600, etc. across your site.
        blue: {
          50: '#f2f5f9',  // Light background for the service icons
          100: '#e4ebf2', 
          200: '#cddce7',
          300: '#aabed3',
          400: '#829cba',
          500: '#426597', // Lighter hover state
          600: '#2D4B7A', // The exact brand color from the logo
          700: '#233a5f',
          800: '#1b2d49', // Darker text color used in Navbar
          900: '#142236', // Deep background for the Hero gradient
        }
      }
    },
  },
  plugins: [],
}