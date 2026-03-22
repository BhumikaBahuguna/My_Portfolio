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
          900: '#0B0F14',
          800: '#111820',
          700: '#18212C',
          600: '#222D3A',
          500: '#2C3A48',
        },
        accent: {
          DEFAULT: '#FF4D8D',
          light: '#FF7AA8',
          dark: '#CC3D70',
        },
        accent2: {
          DEFAULT: '#B026FF',
          light: '#D06BFF',
          dark: '#7F1CCC',
        },
        cosmic: {
          purple: '#2A0845',
          blue: '#0B1536',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'particle-drift': 'drift 20s linear infinite',
        'pulse-edge': 'pulseEdge 4s ease-in-out infinite alternate',
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
        drift: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '100%': { transform: 'translateY(-100px) translateX(50px)' },
        },
        pulseEdge: {
          '0%': { boxShadow: 'inset 0 0 20px rgba(108,99,255,0.05), inset 0 0 10px rgba(177,78,255,0.02)' },
          '100%': { boxShadow: 'inset 0 0 60px rgba(108,99,255,0.2), inset 0 0 20px rgba(177,78,255,0.1)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #030014 0%, #15133C 50%, #030014 100%)',
      },
    },
  },
  plugins: [],
}
