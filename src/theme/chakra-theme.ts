import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        brand: {
          value: '#ABF80B',
        },
        primary: {
          value: '#ABF80B',
        },
        secondary: {
          value: '#FF0099',
        },
        background: {
          light: { value: '#FFF7E6' },
          dark: { value: '#3C403D' },
        },
        surface: {
          value: '#554348',
        },
        text: {
          primary: { value: '#FFF7E6' },
          secondary: { value: 'rgba(255, 247, 230, 0.7)' },
        },
      },
    },
    tokens: {
      colors: {
        limeGreen: { value: '#ABF80B' },
        pink: { value: '#FF0099' },
        darkGreen: { value: '#3C403D' },
        beigeCream: { value: '#FFF7E6' },
        raisinBlack: { value: '#554348' },
        
        // Gradients
        gradients: {
          brand: { value: 'linear-gradient(135deg, #ABF80B 0%, #FF0099 100%)' },
          glow: { value: 'radial-gradient(circle, rgba(171,248,11,0.6) 0%, transparent 70%)' },
        },
      },
      fonts: {
        heading: { value: 'var(--font-heading), sans-serif' },
        body: { value: 'var(--font-body), sans-serif' },
      },
      animations: {
        spinSlow: {
          value: 'spin 20s linear infinite',
        },
        float: {
          value: 'float 4s ease-in-out infinite',
        },
        glow: {
          value: 'glow 2s ease-in-out infinite',
        },
      },
      shadows: {
        glow: {
          sm: { value: '0 0 30px rgba(171,248,11,0.5)' },
          md: { value: '0 0 50px rgba(171,248,11,0.6)' },
          lg: { value: '0 0 70px rgba(171,248,11,0.8)' },
        },
      },
      radii: {
        xl: { value: '1rem' },
        '2xl': { value: '1.5rem' },
        '3xl': { value: '2rem' },
      },
    },
  },
  globalCss: {
    'html, body': {
      bg: 'darkGreen',
      color: 'text.primary',
      fontFamily: 'body',
    },
    '.glassmorphism': {
      bg: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: 'xl',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)