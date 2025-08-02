# Flamingo.ai Project Structure

## 🦩 Project Overview

Flamingo.ai is a controversial gambling AI assistant web application that claims to help users "beat the house" by identifying patterns in casino games using quantum computing and AI. The application features a rebellious, anti-establishment theme with a pink flamingo mascot and uses advanced 3D graphics, animations, and a modern tech stack.

**Tech Stack:**
- React 18 with TypeScript
- Vite for build tooling
- React Router for navigation
- Three.js/React Three Fiber for 3D graphics
- Framer Motion for animations
- Tailwind CSS for styling
- GSAP for advanced animations
- i18next for internationalization (EN, RU)

## 📁 Directory Structure

```
test-flamingo-ui-project/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components for routing
│   ├── styles/             # Global styles and CSS
│   ├── i18n/               # Internationalization
│   │   ├── config.ts       # i18next configuration
│   │   └── locales/        # Translation files
│   │       ├── en.json     # English translations
│   │       ├── es.json     # Spanish translations
│   │       ├── ru.json     # Russian translations
│   │       └── vi.json     # Vietnamese translations
│   ├── App.tsx             # Main application component with routing
│   └── main.tsx            # Application entry point
├── assets/                 # Static assets
│   ├── images/            # PNG images and logos
│   ├── models/            # 3D GLB model files
│   └── videos/            # Background videos
├── public/                # Public static files
├── dist/                  # Production build output
└── Configuration files    # Various config files
```

## 🎨 Component Architecture

### Core Components (`/src/components/`)

#### 3D & Animation Components
- **Flamingo3D.tsx** - Main 3D flamingo model with animations
- **ChatFlamingo3D.tsx** - Specialized flamingo for chat interface
- **ParticleField.tsx** - Floating mathematical formulas animation
- **AnimatedNumber.tsx** - Smooth number transitions

#### Layout Components
- **Header.tsx** - Navigation header with slide-in menu and language switcher
- **Layout.tsx** - Page layout wrapper
- **VideoBackground.tsx** - Video background with fog effects
- **VideoBackgroundClean.tsx** - Video background without effects
- **LanguageSwitcher.tsx** - Language selection dropdown

#### Game Components
- **ProbabilityCard.tsx** - Displays win probability
- **GameControls.tsx** - Betting controls interface
- **SlotMachine.tsx** - Animated slot machine
- **SessionHeader.tsx** - Game session information
- **SlotSelectionModal.tsx** - Slot game selector

#### Chat & AI Components
- **ChatPanel.tsx** - AI assistant chat interface
- **OnboardingCarousel.tsx** - New user onboarding flow

#### Content Components
- **BlogPost.tsx** - Blog post card component
- **GamblingNewsSection.tsx** - Anti-casino news display
- **SettingsPanel.tsx** - User settings interface

### Pages (`/src/pages/`)

1. **LandingPage.tsx** - Homepage with video background and marketing content
2. **AboutPage.tsx** - Team information and company mission with "Ghosts in the Machine" section featuring anonymous team members (Tunn3l!spectre, Sh4dowQubit, Sup3rposition)
3. **UseCasePage.tsx** - Interactive use case demonstrations
4. **PricingPage.tsx** - Subscription tiers and pricing
5. **BlogPage.tsx** - Casino exposé articles and strategies
6. **ContactPage.tsx** - Contact form with whistleblower support
7. **GameDashboard.tsx** - Main gambling interface
8. **ChatPage.tsx** - Full-screen AI assistant interface
9. **SettingsPage.tsx** - User preferences and limits
10. **RequestFeaturePage.tsx** - Feature request and voting system

## 🎨 Design System

### Color Palette
- **Pink** (#E59FCE) - Primary accent
- **Lime Green** (#ABF80B) - Secondary accent, CTAs
- **Dark Green** (#041812) - Deep backgrounds
- **Dark Blue** (#050D8A) - Accent color
- **Beige/Cream** (#E7DFCE) - Primary text
- **Raisin Black** (#2B2B31) - Dark backgrounds
- **Bone** (#D6CEBF) - Secondary text
- **Lilac** (#CE91BA) - Accent
- **Onyx** (#373F3D) - Dark elements
- **Moss Green** (#89A254) - Tertiary accent

### Styling Approach
- Tailwind CSS for utility-first styling
- Custom CSS variables for theme colors
- Glassmorphism effects throughout
- Responsive design with mobile-first approach

## 🚀 Key Features

### Gaming Features
- Real-time probability analysis using quantum computing
- Pattern detection visualization
- Session tracking and limits
- Responsible gaming tools
- Multi-casino support

### AI Features
- Interactive 3D AI assistant "Floyd"
- Real-time chat support
- Pattern recognition alerts
- Strategic recommendations based on quantum analysis

### Content Features
- Anti-casino blog posts
- Gambling scandal news
- User success stories
- Feature request system
- Multi-language support (English, Spanish, Russian, Vietnamese)

## 🔧 Configuration Files

- **vite.config.ts** - Vite build configuration
- **tailwind.config.js** - Tailwind CSS customization
- **tsconfig.json** - TypeScript configuration
- **package.json** - Dependencies and scripts
- **postcss.config.js** - PostCSS configuration

## 🌐 Routing Structure

```
/                    # Landing page
/about               # About us
/use-case            # Use cases
/pricing             # Pricing plans
/blog                # Blog posts
/contact             # Contact form
/dashboard           # Game dashboard
/chat                # AI chat interface
/settings            # User settings
/request-feature     # Feature requests
/onboarding          # New user flow
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Target Audience

The application targets online gamblers who believe casinos manipulate their games and are looking for an edge. The messaging is deliberately controversial and anti-establishment, positioning flamingo.ai as a tool to "expose casino secrets" and "beat the house."

## 🌍 Internationalization

The application supports multiple languages through i18next:
- **English (EN)** - Default language
- **Spanish (ES)** - Complete translations
- **Russian (RU)** - Complete translations
- **Vietnamese (VI)** - Complete translations

Language preference is stored in localStorage and persists across sessions.
