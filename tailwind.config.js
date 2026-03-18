/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0F0F0F',
          800: '#121212',
          700: '#1A1A2E',
          600: '#16213E',
          500: '#1E1E2F',
        },
        accent: {
          DEFAULT: '#6C63FF',
          light: '#8B83FF',
          dark: '#5A52E0',
        },
        accent2: {
          DEFAULT: '#A855F7',
          light: '#C084FC',
          dark: '#9333EA',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(108,99,255,0.3), 0 0 20px rgba(108,99,255,0.1)' },
          '100%': { boxShadow: '0 0 10px rgba(108,99,255,0.5), 0 0 40px rgba(108,99,255,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0F0F0F 0%, #1A1A2E 50%, #0F0F0F 100%)',
      },
    },
  },
  plugins: [],
}
