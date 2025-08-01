/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        pink: '#E59FCE',        // Header bar and branding
        limeGreen: '#ABF80B',   // Interactive elements
        darkGreen: '#041812',   // Main text on light backgrounds
        darkBlue: '#050D8A',    // Navigation icons
        beigeCream: '#E7DFCE',  // Chart backgrounds
        
        // Additional palette colors
        raisinBlack: '#2B2B31', // Dark backgrounds
        bone: '#D6CEBF',        // Light backgrounds
        lilac: '#CE91BA',       // Soft highlights
        onyx: '#373F3D',        // Secondary text
        mossGreen: '#89A254',   // Decorative elements
        
        // Legacy color mappings (for gradual migration)
        acid: '#ABF80B',        // Maps to limeGreen
        salmon: '#E59FCE',      // Maps to pink
        cream: '#E7DFCE',       // Maps to beigeCream
        sage: '#89A254',        // Maps to mossGreen
        forest: '#041812',      // Maps to darkGreen
        djungle: '#2B2B31',     // Maps to raisinBlack
        deepGreen: '#041812',   // Maps to darkGreen
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 2s ease-in-out infinite',
        'magnetic': 'magnetic 0.3s ease-out',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            filter: 'drop-shadow(0 0 20px currentColor)',
          },
          '50%': { 
            opacity: '0.5',
            filter: 'drop-shadow(0 0 40px currentColor)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glitch': {
          '0%, 100%': { 
            textShadow: '0 0 2px #FF00FF, 0 0 4px #00FFFF',
            transform: 'translate(0)',
          },
          '20%': { 
            textShadow: '-2px 0 2px #FF00FF, 2px 0 4px #00FFFF',
            transform: 'translate(2px, -2px)',
          },
          '40%': { 
            textShadow: '2px 0 2px #FF00FF, -2px 0 4px #00FFFF',
            transform: 'translate(-2px, 2px)',
          },
        },
        'magnetic': {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.1) translate(var(--x), var(--y))' },
          '100%': { transform: 'scale(1) translate(0, 0)' },
        },
      },
      backgroundImage: {
        'aurora': 'linear-gradient(45deg, #E59FCE 0%, #050D8A 25%, #ABF80B 50%, #E59FCE 75%, #050D8A 100%)',
      },
    },
  },
  plugins: [],
}