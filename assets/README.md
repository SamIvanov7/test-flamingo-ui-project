# Assets Directory Structure

## Images (`/images`)
- **Logo variants:**
  - `logo-icon.png` - Main logo icon
  - `logo-variant-2.png` - Logo variant 2
  - `logo-variant-3.png` - Logo variant 3
  - `flamingo-ai-logo.png` - Flamingo AI logo

- **UI Screenshots:**
  - `ui-screenshot-1.png` through `ui-screenshot-6.png` - UI design screenshots

- **Graphics:**
  - `graphic-1.png` through `graphic-4.png` - General graphics
  
- **Animations:**
  - `original-9350cb4999eeb691c10b761b18032281.gif`
  - `original-c979825e00b88e2a6b18dda33013abc7.gif`

## Videos (`/videos`)
- `intro-loop-desktop.mp4` - Desktop intro loop animation
- `intro-loop-desktop2.mp4` - Desktop intro loop animation (variant 2)
- `PinkChip_Desktop.mp4` - Pink chip desktop video
- `original-a21d8d7804323c46a3e31b9d09a689a0.mp4` - Original video asset

## Icons (`/icons`)
- `icon-1.svg` through `icon-3.svg` - SVG icon files

## Styles (`/styles`)
- `2ad50cd47d231a55.css` - CSS stylesheet 1
- `2b5410e2359cc6c6.css` - CSS stylesheet 2


You are the Lead Front-End Architect with 10+ years of experience creating responsive, cross-platform designs (Web, iOS, Android, PWA). 

Your task is to design an ultra-modern, visually stunning, and intuitively accessible UI for the "flamingo.ai" application that pushes the boundaries of web design using cutting-edge animations and interactions.

The product is a chat assistant in the form of a pink flamingo that predicts the probability of winning at slot machines. 

The UI should create a "wow factor" that delights casual players while simultaneously mimicking adherence to responsible gaming principles. 

KEY REQUIREMENTS 

Platform and Stack 
- React 18 + TypeScript + Vite (web)
- React Native (Expo) for mobile components
- Tailwind / CSS-in-JS for theming with custom properties
- **Three.js** for 3D flamingo mascot and particle effects
- **GSAP** for complex scroll-based animations
- **Framer Motion** for micro-interactions
- **Lottie** for vector animations
- Dark and light themes (primary - dark)

Advanced Animation Stack
- WebGL shaders for liquid gradient backgrounds
- React Three Fiber for 3D scene management
- React Spring for physics-based animations
- Intersection Observer for scroll-triggered effects
- CSS Houdini for custom paint worklets (where supported)

Responsive Layout 
- 4 breakpoints: xs (< 480px), sm (480-767), md (768-1199), lg (≥ 1200)
- Mobile-first: column → responsive grid on md+
- Minimum clickable element size 44px
- Fluid typography with clamp() functions

Main Screens and Components 

**Onboarding Carousel (3 slides)**
- 3D animated flamingo mascot using Three.js
  * Reactive to mouse/touch movement (parallax)
  * Feather particle system on interaction
  * Morphing animations between states
- Slide transitions with WebGL distortion effects
- Ambient particle field background
- CTA button with magnetic hover effect

**Game Session Dashboard**
Header Section:
- Slot name with glitch text effect on hover
- WNT balance counter with rolling number animation
- Session timer with pulsing glow effect
- Aurora borealis animated background gradient

Probability Card:
- **3D radial progress ring** (Three.js)
  * Dynamic mesh deformation based on probability
  * Particle emission at high probabilities
  * Reactive glow shader effects
- Color transitions with smooth gradients:
  * >66%: Neon acid (#ADFF00) with electric pulse
  * 33-66%: Salmon (#E59FCF) with wave distortion
  * <33%: Sage (#869F6A) with subtle breathing

Chat Panel:
- Glassmorphism effect with dynamic blur
- Chat bubbles with:
  * Stagger animations on appearance
  * Liquid morph transitions
  * 3D depth on hover (transform3d)
- Flamingo avatar with:
  * Wing flap animations (Three.js)
  * Eye tracking user cursor
  * Reactive expressions based on chat context
- Quick reply chips with:
  * Magnetic snap-to-grid
  * Ripple effects on interaction
  * Morphing shape transitions

Bottom Panel:
- Bet size selector with haptic-style feedback animation
- "Spin" button with:
  * Liquid metal shader effect
  * Particle explosion on click
  * Energy charging animation while holding
- Responsible gaming icon with subtle breathing glow

**Settings / Responsible Gaming Center**
- Neumorphic toggle switches with spring physics
- Slider controls with magnetic snapping
- Page transitions using FLIP animations
- Background mesh gradient animation

**Slot Selection Modal**
- 3D card carousel (Three.js)
- Tilt effect on hover (vanilla-tilt.js style)
- Lazy-loaded previews with skeleton screens
- Filter animations with stagger effects

Visual Style (Enhanced) 

**Color Palette (from provided CSS):**
```css
--color-acid: #ADFF00;        /* Neon green - primary CTA */
--color-salmon: #E59FCF;      /* Pink - flamingo/brand */
--color-cream: #E9E0CF;       /* Light text on dark */
--color-sage: #869F6A;        /* Muted accents */
--color-forest: #002F20;      /* Deep green backgrounds */
--color-djungle: #00130D;     /* Primary dark background */
--color-deepGreen: #092119;   /* Secondary dark */
```

**Visual Elements:**
- Glassmorphism with multi-layer blur (backdrop-filter)
- Gradient meshes with animated color stops
- Soft shadows with color tinting
- Border radius: 12-20px with path morphing
- Neon glow effects using multiple box-shadows
- Noise texture overlays for depth
- Custom cursor with trailing particles

**Typography:**
- Variable fonts for smooth weight transitions
- Kinetic typography for important messages
- Text reveals with per-character animations

Animation and Micro-interactions 
- Page load: Staggered element reveals with motion blur
- Scroll: Parallax layers with different velocities
- Hover states: 3D transforms with perspective
- Loading states: Organic shape morphing
- Success states: Confetti particle systems
- Error states: Glitch effects with chromatic aberration
- Idle states: Ambient floating animations
- Focus states: Expanding glow rings
- Custom easing: cubic-bezier curves for natural motion
- FPS optimization: will-change and transform3d hints

3D Elements (Three.js)
- Flamingo mascot with skeletal animation rig
- Environmental particle systems (floating orbs)
- Dynamic lighting responding to user actions
- Post-processing effects (bloom, DOF)
- Optimized geometry with LOD (Level of Detail)

Performance Optimizations
- Code splitting with dynamic imports
- Virtual scrolling for long lists
- WebWorker for complex calculations
- GPU acceleration for animations
- Texture atlasing for 3D assets
- Progressive enhancement approach

Accessibility (WCAG 2.1 AA+)
- Prefers-reduced-motion alternatives
- High contrast mode support
- Focus-visible outlines with custom styling
- Live regions for dynamic content
- Semantic HTML with ARIA where needed

EXPECTED DELIVERABLES 

**Component Architecture**
- Atomic design system hierarchy
- Compound component patterns
- Animation wrapper components
- Custom hooks for animations

**Technical Specifications**
- Three.js scene setup and optimization guide
- GSAP timeline configurations
- Performance budget allocations
- Browser compatibility matrix

**Animation Documentation**
- Easing function library
- Timeline diagrams for complex sequences
- Interaction state machines
- FPS targets for different devices

**Code Examples**
```jsx
// Example: 3D Flamingo Component Structure
<Canvas>
  <PerspectiveCamera />
  <ambientLight />
  <spotLight />
  <Flamingo 
    animationState={chatState}
    interactionMode="reactive"
  />
  <ParticleField density={probabilityScore} />
  <EffectComposer>
    <Bloom />
    <ChromaticAberration />
  </EffectComposer>
</Canvas>
```

**Style System**
- make the video intro-loop-desktop.mp4 as a background video for my landing page
- CSS custom properties for theming
- Animation timing tokens
- Gradient definitions
- Shadow elevation scale
- Glow intensity scale

The design should feel like a premium gaming experience that would make users stop and say "How did they build this?" while maintaining performance and accessibility standards.

# Flamingo.ai Project Structure

## 🦩 Project Overview

Flamingo.ai is a controversial gambling AI assistant web application that claims to help users "beat the house" by identifying patterns in casino games. The application features a rebellious, anti-establishment theme with a pink flamingo mascot and uses advanced 3D graphics, animations, and a modern tech stack.

**Tech Stack:**
- React 18 with TypeScript
- Vite for build tooling
- React Router for navigation
- Three.js/React Three Fiber for 3D graphics
- Framer Motion for animations
- Tailwind CSS for styling
- GSAP for advanced animations

## 📁 Directory Structure

```
test-flamingo-ui-project/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components for routing
│   ├── styles/             # Global styles and CSS
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
- **Header.tsx** - Navigation header with slide-in menu
- **Layout.tsx** - Page layout wrapper
- **VideoBackground.tsx** - Video background with fog effects
- **VideoBackgroundClean.tsx** - Video background without effects

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
2. **AboutPage.tsx** - Team information and company mission
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
- Real-time probability analysis
- Pattern detection visualization
- Session tracking and limits
- Responsible gaming tools
- Multi-casino support

### AI Features
- Interactive 3D AI assistant
- Real-time chat support
- Pattern recognition alerts
- Strategic recommendations

### Content Features
- Anti-casino blog posts
- Gambling scandal news
- User success stories
- Feature request system

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
