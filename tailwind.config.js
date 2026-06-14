/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: { DEFAULT: '#7B1C1C', dark: '#4a0e0e', deep: '#3d0b0b' },
        gold:   { DEFAULT: '#C9992A', light: '#f0d080', muted: '#c9a96e' },
        cream:  { DEFAULT: '#FDF6E3', soft: '#fef9f2' },
        dark:   { DEFAULT: '#1a0800', deep: '#2a1000', footer: '#0d0400' },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dancing:  ['"Dancing Script"', 'cursive'],
        crimson:  ['"Crimson Text"', 'serif'],
      },
      keyframes: {
        pulseGold: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(201,153,42,0.5)' },
          '50%':     { boxShadow: '0 0 0 10px rgba(201,153,42,0)' },
        },
        glowPulse: {
          '0%,100%': { opacity: '0.6' },
          '50%':     { opacity: '1' },
        },
      },
      animation: {
        pulseGold: 'pulseGold 2.5s ease-in-out infinite',
        glowPulse: 'glowPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
