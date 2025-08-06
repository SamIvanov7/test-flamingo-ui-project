# Flamingo.ai Project Structure

## 🦩 Project Overview

Flamingo.ai is a controversial gambling AI assistant web application that claims to help users "Win the Game" by advicing and vector players to the win , calculating and identifying patterns in slotgames using quantum computing and AI. The application features a rebellious, anti-establishment theme with a pink flamingo mascot and uses advanced Three.js and 3D graphics, animations, sliders, and a modern tech stack and modern LandingPage.

**Tech Stack:**
- React 18 with TypeScript
- Vite for build tooling
- React Router for navigation
- Three.js/React Three Fiber for 3D graphics
- Framer Motion for animations
- Tailwind CSS for styling
- GSAP for advanced animations
- i18next for internationalization (EN, ES, RU, VI)

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
│   ├── hooks/              # Custom React hooks
│   ├── examples/           # Component examples
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main application component with routing
│   └── main.tsx            # Application entry point
├── assets/                 # Static assets
│   ├── images/            # PNG images and logos
│   ├── models/            # 3D GLB model files
│   ├── styles/            # CSS files
│   └── videos/            # Background videos
├── public/                # Public static files
│   ├── assets/            # Public assets directory
│   │   ├── fonts/         # Web fonts
│   │   ├── images/        # Public images
│   │   ├── models/        # Public 3D models
│   │   └── videos/        # Public videos
│   └── content/           # Content directory
│       └── images/        # Content images
├── docs/                  # Documentation files
│   ├── accessibility-implementation-guide.md
│   ├── landing-page-optimization-analysis.md
│   ├── landing-page-ux-accessibility-audit.md
│   └── performance-optimization-summary.md
├── mcp_servers/           # MCP server configurations
│   ├── 21stdev.json
│   ├── firecrawl-mcp.json
│   ├── floatui.json
│   ├── flowbitereact.json
│   ├── hyperui.json
│   ├── nextui.json
│   ├── parkui.json
│   ├── preline.json
│   ├── reactcomponents.json
│   ├── sailboat.json
│   ├── tailgrids.json
│   └── tremor.json
├── dist/                  # Production build output
├── node_modules/          # NPM dependencies
├── MCP_SERVERS_README.md  # MCP servers documentation
├── mcp-server.js          # MCP server script
├── mcp-server.pid         # MCP server process ID
├── start-mcp-server.sh    # Script to start MCP server
├── stop-mcp-server.sh     # Script to stop MCP server
├── prompthelper.md        # Prompt helper documentation
└── Configuration files    # Various config files
```

## 🎨 Component Architecture

### Core Components (`/src/components/`)

#### 3D & Animation Components
- **Flamingo3D.tsx** - Main 3D flamingo model with animations
- **ChatFlamingo3D.tsx** - Specialized flamingo for chat interface
- **ParticleField.tsx** - Floating mathematical formulas animation
- **ParticleFieldEnhanced.tsx** - Enhanced particle field with chaos/order modes
- **BackgroundPaths.tsx** - Animated path background elements
- **BeamsBackground.tsx** - Animated light beams background effect

#### Layout Components
- **Header.tsx** - Navigation header with slide-in menu and language switcher
- **HeaderAccessible.tsx** - Accessible version of header component
- **HeaderOptimized.tsx** - Performance-optimized header
- **StickyHeader.tsx** - Fixed position header variant
- **Layout.tsx** - Page layout wrapper
- **Footer.tsx** - Footer component with links and branding
- **MinimalFooter.tsx** - Simplified footer variant
- **VideoBackground.tsx** - Video background with fog effects
- **VideoBackgroundClean.tsx** - Video background without effects
- **VideoBackgroundOptimized.tsx** - Performance-optimized video background
- **LanguageSwitcher.tsx** - Language selection dropdown

#### Game Components
- **ProbabilityCard.tsx** - Displays win probability
- **GameControls.tsx** - Betting controls interface
- **SessionHeader.tsx** - Game session information
- **SlotSelectionModal.tsx** - Slot game selector
- **InteractiveSlotDemo.tsx** - Interactive slot machine demonstration

#### Chat & AI Components
- **ChatPanel.tsx** - AI assistant chat interface
- **OnboardingCarousel.tsx** - New user onboarding flow

#### Feature Components
- **CompactFeatures.tsx** - Compact feature showcase
- **TrustIndicators.tsx** - Trust and credibility indicators
- **ErrorBoundary.tsx** - React error boundary for error handling

#### Content Components
- **BlogPost.tsx** - Enhanced blog post card with animations
- **GamblingNewsSection.tsx** - Enhanced anti-casino news display with categories
- **GamblingNewsSectionOptimized.tsx** - Performance-optimized news section
- **ChaosToOrderSection.tsx** - Visual contrast between chaos and order with split screen
- **ChaosToOrderSectionSimple.tsx** - Simplified chaos to order visualization

#### Video Showcase Components (Interactive Center - Section 4)
- **VideoShowcaseSlide.tsx** - Main container for video showcase section
- **InteractiveVideoPlayer.tsx** - Interactive video player with playlist
- **MainVideoDisplay.tsx** - Active video display with controls
- **VideoOverlay.tsx** - HUD-style overlay with technical information
- **VideoPlaylist.tsx** - Video case selection playlist
- **PlaylistItem.tsx** - Individual playlist item with tags and states
- **PlaylistItemAccessible.tsx** - Accessible version of playlist item

### Pages (`/src/pages/`)

1. **LandingPage.tsx** - Homepage with hero, chaos-to-order visualization, AI showcase, video demonstration, and news sections
2. **LandingPageOptimized.tsx** - Performance-optimized landing page variant
3. **OptimizedLandingPage.tsx** - Further optimized landing page implementation
4. **AboutPage.tsx** - Team information and company mission with "Ghosts in the Machine" section featuring anonymous team members (Tunn3l!spectre, Sh4dowQubit, Sup3rposition)
5. **UseCasePage.tsx** - Interactive use case demonstrations
6. **PricingPage.tsx** - Subscription tiers and pricing
7. **BlogPage.tsx** - Casino exposé articles and strategies
8. **ContactPage.tsx** - Contact form with whistleblower support
9. **FAQPage.tsx** - Frequently asked questions page
10. **GameDashboard.tsx** - Main gambling interface
11. **ChatPage.tsx** - Full-screen AI assistant interface
12. **SettingsPage.tsx** - User preferences and limits
13. **RequestFeaturePage.tsx** - Feature request and voting system

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
- **Neutral** (#171717) - Used in BeamsBackground
- **Cyan** (#00FFFF) - Cyberpunk accent for video showcase
- **Magenta** (#FF00FF) - Neon accent for active elements

### Styling Approach
- Tailwind CSS for utility-first styling
- Custom CSS variables for theme colors
- Glassmorphism effects throughout
- Responsive design with mobile-first approach
- Advanced animations using Framer Motion
- Canvas-based background effects

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
- Anti-casino blog posts with categories (scandal, investigation, lawsuit)
- Gambling scandal news with trending indicators
- User success stories
- Feature request system
- Multi-language support (English, Spanish, Russian, Vietnamese)

### Visual Features
- Animated light beam backgrounds
- Parallax scrolling effects
- 3D text animations
- Glassmorphism card designs
- Hover animations and transitions
- Loading states with custom spinners
- Interactive video showcase with HUD overlay
- Cyberpunk-themed video player interface
- Real-time case file selection system
- Chaos to Order visualization with dual particle systems
- Split-screen contrasting casino randomness vs AI clarity

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

Enhanced responsive features:
- Touch-friendly interactions
- Adaptive typography scaling
- Flexible grid layouts
- Optimized image loading

## ♿ Accessibility

The application follows WCAG 2.1 guidelines:
- ARIA labels on interactive elements
- Focus states for keyboard navigation
- Semantic HTML structure
- Screen reader support
- High contrast ratios

## 🎯 Target Audience

The application targets online gamblers who believe casinos manipulate their games and are looking for an edge. The messaging is deliberately controversial and anti-establishment, positioning flamingo.ai as a tool to "expose casino secrets" and "beat the house."

## 🌍 Internationalization

The application supports multiple languages through i18next:
- **English (EN)** - Default language
- **Spanish (ES)** - Complete translations
- **Russian (RU)** - Complete translations
- **Vietnamese (VI)** - Complete translations

Language preference is stored in localStorage and persists across sessions.

## 🛠️ Build and Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

### MCP Server Integration
- **mcp-server.js** - Model Context Protocol server
- **start-mcp-server.sh** - Script to start MCP server
- **stop-mcp-server.sh** - Script to stop MCP server
- **mcp_servers/** - Directory containing MCP server configurations for various UI component libraries

## 📚 Documentation

The project includes comprehensive documentation:
- **accessibility-implementation-guide.md** - Guide for implementing accessibility features
- **landing-page-optimization-analysis.md** - Analysis of landing page performance optimizations
- **landing-page-ux-accessibility-audit.md** - UX and accessibility audit results
- **performance-optimization-summary.md** - Summary of performance improvements
- **MCP_SERVERS_README.md** - Documentation for MCP server setup and usage
- **prompthelper.md** - Helper guide for AI prompts

## 🚀 Recent Updates

### Performance Optimizations
- Created optimized landing page variants (LandingPageOptimized, OptimizedLandingPage)
- Added performance-optimized versions of key components (HeaderOptimized, VideoBackgroundOptimized, GamblingNewsSectionOptimized)
- Implemented lazy loading and code splitting strategies

### Component Enhancements
- Added "From Chaos to Order" section with split-screen visualization and simplified variant
- Created enhanced ParticleField with chaos/order modes and casino symbols
- Integrated Flamingo3D as the conductor of order in the visualization
- Added Interactive Center (Section 4) with video showcase functionality
- Created cyberpunk-themed video player with HUD overlay
- Implemented video playlist with case file selection
- Enhanced "EXPOSED: Industry Scandals" section with BeamsBackground
- Improved BlogPost component with advanced animations
- Added category badges and trending indicators to news items
- Implemented glassmorphism effects across components
- Enhanced loading states and transitions

### Accessibility Improvements
- Added accessible component variants (HeaderAccessible, PlaylistItemAccessible)
- Improved accessibility with ARIA labels and focus states
- Added comprehensive accessibility documentation
- Implemented keyboard navigation support

### New Features
- Added FAQ page for common questions
- Implemented MCP server integration for enhanced development
- Added performance monitoring and optimization tools
- Created simplified component variants for better performance on lower-end devices