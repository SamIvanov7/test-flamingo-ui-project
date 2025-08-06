# Flamingo.ai Project Structure

## 🦩 Project Overview

Flamingo.ai is a controversial gambling AI assistant web application that claims to help users "Win the Game" by advising and directing players to victory, calculating and identifying patterns in slot games using quantum computing and AI. The application features a rebellious, anti-establishment theme with a pink flamingo mascot and uses advanced Three.js/3D graphics, animations, and a modern tech stack with a cutting-edge landing page.

**Tech Stack:**
- React 18 with TypeScript
- Vite for build tooling
- React Router for navigation  
- Three.js/React Three Fiber for 3D graphics
- Framer Motion for animations
- Tailwind CSS for styling
- GSAP for advanced animations
- i18next for internationalization (EN, ES, RU, VI)
- Axios & Cheerio for web scraping
- Puppeteer for dynamic content scraping

## 📁 Directory Structure

```
test-flamingo-ui-project/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components for routing
│   ├── config/             # Configuration files
│   │   └── scraperConfigs.ts # Web scraper configurations
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
│   │   └── MCPExample.tsx  # MCP integration example
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   │   ├── blogScraper.ts  # Blog scraper utilities
│   │   └── scraperExample.ts # Scraper usage examples
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
│       └── images/        # Content images (gambling scandals)
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
├── Web Scraping Tools     # Scraping utilities
│   ├── scraper-standalone.js  # Standalone scraper
│   ├── scraper-puppeteer.js   # Puppeteer scraper
│   ├── scraper-cli.js         # CLI scraper tool
│   ├── scrape-news.js         # News scraper
│   ├── blog-scraper-demo.js   # Demo scraper
│   └── test-scraper.cjs       # Test scraper
├── MCP_SERVERS_README.md  # MCP servers documentation
├── mcp-server.js          # MCP server script
├── mcp-server.pid         # MCP server process ID
├── start-mcp-server.sh    # Script to start MCP server
├── stop-mcp-server.sh     # Script to stop MCP server
├── marketing.md           # Marketing strategies
├── new_marketing_ideas.md # New marketing concepts
└── Configuration files    # Various config files
```

## 🎨 Component Architecture

### Core Components (`/src/components/`)

#### 3D & Animation Components
- **Flamingo3D.tsx** - Main 3D flamingo model with animations
- **Flamingo3DWrapper.tsx** - Wrapper for 3D flamingo component
- **ChatFlamingo3D.tsx** - Specialized flamingo for chat interface
- **ParticleField.tsx** - Floating mathematical formulas animation
- **ParticleFieldEnhanced.tsx** - Enhanced particle field with chaos/order modes
- **BackgroundPaths.tsx** - Animated path background elements
- **BeamsBackground.tsx** - Animated light beams background effect

#### Layout Components
- **Header.tsx** - Navigation header with slide-in menu and language switcher
- **HeaderAccessible.tsx** - Accessible version of header component
- **Layout.tsx** - Page layout wrapper
- **Footer.tsx** - Footer component with links and branding
- **VideoBackground.tsx** - Video background with fog effects
- **VideoBackgroundClean.tsx** - Video background without effects
- **LanguageSwitcher.tsx** - Language selection dropdown

#### Game Components
- **ProbabilityCard.tsx** - Displays win probability
- **GameControls.tsx** - Betting controls interface
- **SessionHeader.tsx** - Game session information
- **SlotSelectionModal.tsx** - Slot game selector

#### Chat & AI Components
- **ChatPanel.tsx** - AI assistant chat interface
- **OnboardingCarousel.tsx** - New user onboarding flow

#### Feature Components
- **ErrorBoundary.tsx** - React error boundary for error handling

#### Content Components
- **BlogPost.tsx** - Enhanced blog post card with animations
- **NewsDetailTemplate.tsx** - Full article detail template with social sharing
- **GamblingNewsSection.tsx** - Enhanced anti-casino news display with categories
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

1.  **LandingPage.tsx** - Homepage with hero, chaos-to-order visualization, AI showcase, video demonstration, and news sections
2.  **AboutPage.tsx** - Team information and company mission with "Ghosts in the Machine" section featuring anonymous team members
3.  **UseCasePage.tsx** - Interactive use case demonstrations
4.  **PricingPage.tsx** - Subscription tiers and pricing
5.  **BlogPage.tsx** - Casino exposé articles with full article detail view support
6.  **ContactPage.tsx** - Contact form with whistleblower support
7.  **FAQPage.tsx** - Frequently asked questions page
8.  **GameDashboard.tsx** - Main gambling interface
9.  **ChatPage.tsx** - Full-screen AI assistant interface
10. **SettingsPage.tsx** - User preferences and limits
11. **RequestFeaturePage.tsx** - Feature request and voting system
12. **ComponentShowcase.tsx** - Component demonstration page

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
- Full article detail pages with rich media support
- Social sharing functionality (Facebook, Twitter, LinkedIn)
- Article bookmarking system
- Related articles suggestions
- Comment sections on articles
- Gambling scandal news with trending indicators
- User success stories
- Feature request system
- Multi-language support (English, Spanish, Russian, Vietnamese)

### Web Scraping Features
- Universal blog scraper with Cheerio
- Dynamic content scraper with Puppeteer
- Support for multiple platforms (Medium, WordPress, Ghost, Substack, Dev.to, Hashnode)
- News article extraction with metadata
- Export to JSON, CSV, and Markdown formats
- Anti-bot detection handling
- Customizable scraping configurations

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
- **tailwind.config.js** - Tailwind CSS customization with custom colors
- **tsconfig.json** - TypeScript configuration
- **tsconfig.node.json** - TypeScript configuration for Node.js
- **package.json** - Dependencies and scripts
- **package-lock.json** - Locked dependency versions
- **postcss.config.js** - PostCSS configuration
- **.npmrc** - NPM configuration for React 18/19 compatibility

## 🌐 Routing Structure

```
/                    # Landing page
/about               # About us
/use-case            # Use cases
/pricing             # Pricing plans
/blog                # Blog posts list
/blog/:articleId     # Individual article detail
/contact             # Contact form
/dashboard           # Game dashboard
/chat                # AI chat interface
/settings            # User settings
/request-feature     # Feature requests
/onboarding          # New user flow
/showcase            # Component showcase
/faq                 # Frequently asked questions
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: > 1024px (lg)
- Wide: > 1280px (xl)
- Ultra-wide: > 1536px (2xl)

Enhanced responsive features:
- Touch-friendly interactions
- Adaptive typography scaling
- Flexible grid layouts
- Optimized image loading
- Mobile-first approach

## ♿ Accessibility

The application follows WCAG 2.1 guidelines:
- ARIA labels on interactive elements
- Focus states for keyboard navigation
- Semantic HTML structure
- Screen reader support
- High contrast ratios
- Accessible component variants
- Skip navigation links
- Alternative text for images

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
- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production (TypeScript + Vite)
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint with TypeScript rules
- `npm install` - Install all dependencies

### Web Scraping Scripts
- `node scraper-standalone.js scrape <url>` - Basic web scraping
- `node scrape-news.js <article-url>` - Scrape news articles
- `node blog-scraper-demo.js` - Run scraping demonstrations
- `node scraper-puppeteer.js` - Scrape JavaScript-heavy sites

### MCP Server Integration
- **mcp-server.js** - Model Context Protocol server
- **start-mcp-server.sh** - Script to start MCP server
- **stop-mcp-server.sh** - Script to stop MCP server
- **mcp_servers/** - Directory containing MCP server configurations for various UI component libraries

## 📦 Dependencies

### Core Dependencies
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^7.7.1
- typescript: ^5.2.2

### 3D & Animation
- @react-three/drei: ^9.88.17
- @react-three/fiber: ^8.15.11
- @react-three/postprocessing: ^2.15.11
- three: ^0.159.0
- framer-motion: ^10.16.16
- gsap: ^3.12.3
- lottie-react: ^2.4.0
- react-spring: ^9.7.3

### UI & Styling
- tailwindcss: ^3.3.0
- tailwind-merge: ^2.1.0
- clsx: ^2.0.0
- lucide-react: ^0.536.0
- react-icons: ^5.5.0

### Internationalization
- i18next: ^25.3.2
- react-i18next: ^15.6.1
- i18next-browser-languagedetector: ^8.2.0

### Web Scraping
- axios: ^1.7.2
- cheerio: ^1.0.0
- puppeteer: ^23.0.0

### Development Tools
- vite: ^5.0.8
- @vitejs/plugin-react: ^4.2.1
- eslint: ^8.55.0
- @typescript-eslint/eslint-plugin: ^6.14.0
- @typescript-eslint/parser: ^6.14.0
- autoprefixer: ^10.4.16
- postcss: ^8.4.32

### MCP Integration
- @apify/mcp-server-rag-web-browser: ^0.1.3
- express: ^5.1.0

## 🚀 Recent Updates

### Web Scraping Integration (Latest)
- Implemented universal blog scraper with multiple platform support
- Added Puppeteer for JavaScript-rendered content scraping
- Created CLI tools for scraping automation
- Built scraper configurations for major blogging platforms
- Added export functionality for JSON, CSV, and Markdown formats
- Created comprehensive article detail view template
- Added social sharing functionality (Facebook, Twitter, LinkedIn)
- Implemented bookmark system for saving articles
- Added related articles suggestions
- Integrated comment sections with like functionality
- Created responsive article layout with hero images
- Added author profiles and bios
- Enhanced blog page with routing for individual articles
- Implemented article data conversion system
- Added view counter and reading time estimates
- Created tag-based navigation system
- Integrated rich HTML content rendering
- Created optimized landing page variants
- Added performance-optimized versions of key components
- Implemented lazy loading and code splitting strategies
- Optimized image loading with responsive formats
- Added "From Chaos to Order" section with split-screen visualization
- Created enhanced ParticleField with chaos/order modes
- Integrated Flamingo3D as the conductor of order
- Added Interactive Center with video showcase functionality
- Created cyberpunk-themed video player with HUD overlay
- Implemented video playlist with case file selection
- Enhanced "EXPOSED: Industry Scandals" section
- Improved BlogPost component with advanced animations
- Added category badges and trending indicators
- Implemented glassmorphism effects across components
- Added accessible component variants
- Improved accessibility with ARIA labels and focus states
- Added comprehensive accessibility documentation
- Implemented keyboard navigation support
- Created skip navigation links
- No storage of sensitive user data
- Client-side only gambling calculations
- Secure routing with React Router
- XSS protection through React's built-in escaping
- Content Security Policy headers recommended for production
- Scraping tools respect robots.txt and rate limiting
