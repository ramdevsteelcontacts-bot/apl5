/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        apl: {
          // Bright backgrounds
          'bg': '#FFFBF5',
          'bg-warm': '#FFF7ED',
          'white': '#FFFFFF',
          'surface': '#FFFFFF',
          'surface-2': '#FFF8F0',
          'surface-3': '#FFEDD5',
          // Brand colors
          saffron: '#FF7A00',
          'saffron-light': '#FF9933',
          'saffron-dark': '#E65100',
          'deep-orange': '#DD4A00',
          gold: '#FFB300',
          'gold-light': '#FFCA28',
          'gold-dark': '#F59E0B',
          // Text
          'ink': '#1A1A2E',
          'ink-2': '#2D2D44',
          'ink-3': '#4A4A6A',
          'muted': '#6B6B80',
          'muted-light': '#9A9AB0',
          // Accent navy
          navy: '#1B2838',
          'navy-light': '#2A3F5F',
          // Lines/borders
          'line': '#F0E4D3',
          'line-2': '#FFE4C4',
        },
      },
      fontFamily: {
        display: ['"Oswald"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,122,0,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255,122,0,0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
