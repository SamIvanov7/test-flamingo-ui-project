
<summary_title>Pricing</summary_title>

<image_analysis>
Core Purpose:
- Display product/service pricing options
- Enable price comparison
- Facilitate purchase decisions
- Show pricing tiers and features

Key Components:
- Pricing cards/tables
- Feature comparison matrix
- Toggle for monthly/annual billing
- CTAs for each pricing tier
- Payment method indicators
- Discount badges/promotional elements

Layout Structure:
- Horizontal pricing tier layout (3-4 columns)
- Sticky header for scrollable comparison
- Mobile: Stack cards vertically
- Highlight recommended/popular plan
- Consistent card heights
- Feature list alignment across tiers

Component Architecture:
- PricingContainer (parent)
- BillingToggle
- PricingCard
- FeatureList
- ComparisonTable
- PurchaseButton
- PromoTag

Design System:
- Price: Large display font (32-40px)
- Plan names: Bold (24px)
- Features: Regular text (16px)
- 16/24/32/48px spacing scale
- Brand colors + neutral palette

Style Architecture:
- CSS Modules or Styled Components
- Mobile-first breakpoints
- Card hover animations
- Smooth billing toggle transition
- Price update animations

Quality Assurance:
- Unit tests for price calculations
- E2E tests for purchase flow
- A11y: ARIA labels for toggles
- Performance: Lazy load comparison
- Cross-browser compatibility
- Responsive testing
</image_analysis>

<development_planning>
Component Architecture:
- Component breakdown
- State management
- Data flow
</development_planning>