/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Fixed the file extension typo (j → js)
  theme: {
    extend: {
      // Add extended gradient color stops
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      
      // Extend colors for more vibrant options
      colors: {
        orange: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
        pink: {
          500: '#ec4899',
          600: '#db2777',
        },
        purple: {
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        },
        fuchsia: {
          500: '#d946ef',
          600: '#c026d3',
        },
        emerald: {
          500: '#10b981',
          600: '#059669',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        indigo: {
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        }
      },
      
      // Add animation utilities
      animation: {
        bounce: 'bounce 2s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      // Extend transition properties
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'flex': 'flex',
      }
    },
  },
  
}