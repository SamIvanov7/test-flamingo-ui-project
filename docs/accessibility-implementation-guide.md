# Accessibility Implementation Guide

## 🎯 Quick Implementation Steps

### 1. Update Color Variables (High Priority)
Add these to your `tailwind.config.js` or CSS variables:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // High contrast versions
        'limeGreen-hc': '#8FD900', // 4.6:1 on dark backgrounds
        'pink-hc': '#D584B5', // 4.5:1 on white
        'text-on-light': '#1F1F1F', // 13:1 on light backgrounds
      }
    }
  }
}
```

### 2. Add Global Accessibility Styles
Add to `src/styles/index.css`:

```css
/* Focus styles */
*:focus-visible {
  outline: 2px solid var(--color-limeGreen);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Skip link styles */
.skip-link:focus {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 9999;
  padding: 0.75rem 1.5rem;
  background: var(--color-limeGreen);
  color: var(--color-darkGreen);
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  :root {
    --color-limeGreen: #FFFFFF;
    --color-pink: #FFFFFF;
    --color-darkGreen: #000000;
    --color-beigeCream: #FFFFFF;
  }
}
```

### 3. Update Main Layout
Add to your root layout or App.tsx:

```tsx
// App.tsx
export default function App() {
  return (
    <>
      {/* Skip Navigation */}
      <a href="#main-content" className="skip-link sr-only">
        Skip to main content
      </a>
      
      <div className="min-h-screen">
        <Header />
        <main id="main-content" role="main">
          <Routes>
            {/* Your routes */}
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}
```

### 4. Component Updates Checklist

#### Header Component
- [x] Add skip navigation link
- [x] Add aria-expanded to menu button
- [x] Add aria-label to navigation
- [x] Implement escape key to close menu
- [x] Add focus management
- [x] Add desktop navigation for key items

#### Video Components
- [x] Add keyboard navigation to playlist
- [x] Add aria-pressed to active items
- [x] Add play/pause keyboard controls
- [ ] Add video transcript option
- [ ] Add closed captions support

#### Interactive Elements
- [ ] Add aria-label to all buttons
- [ ] Add role="button" to clickable divs
- [ ] Ensure all interactions work with keyboard
- [ ] Add loading states with aria-busy

### 5. Testing Checklist

#### Manual Testing
- [ ] Navigate entire page using only keyboard
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Check all focus indicators are visible
- [ ] Verify escape key closes modals
- [ ] Test with browser zoom at 200%

#### Automated Testing
```bash
# Install testing tools
npm install --save-dev @axe-core/react

# Add to your main component
import axe from '@axe-core/react';

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}
```

### 6. Screen Reader Announcements
Add live regions for dynamic content:

```tsx
// For important updates
<div aria-live="polite" aria-atomic="true">
  {message}
</div>

// For urgent alerts
<div role="alert" aria-live="assertive">
  {errorMessage}
</div>
```

### 7. Form Accessibility Template
For any forms in your app:

```tsx
<form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email" className="required">
      Email Address
      <span className="sr-only">(required)</span>
    </label>
    <input
      id="email"
      type="email"
      required
      aria-required="true"
      aria-invalid={errors.email ? 'true' : 'false'}
      aria-describedby={errors.email ? 'email-error' : undefined}
    />
    {errors.email && (
      <p id="email-error" role="alert" className="error-message">
        {errors.email}
      </p>
    )}
  </div>
</form>
```

### 8. Image Accessibility
Update all images:

```tsx
// Decorative images
<img src="..." alt="" aria-hidden="true" />

// Informative images
<img src="..." alt="Description of what the image shows" />

// Complex images
<figure>
  <img src="..." alt="Brief description" aria-describedby="fig1-desc" />
  <figcaption id="fig1-desc">
    Detailed description of the complex image
  </figcaption>
</figure>
```

## 🚀 Performance Considerations

### Reduce Motion
```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<motion.div
  animate={prefersReducedMotion ? {} : { x: 100 }}
  transition={prefersReducedMotion ? { duration: 0 } : { duration: 1 }}
/>
```

### Lazy Loading
```tsx
// For images
<img loading="lazy" src="..." alt="..." />

// For components
const VideoShowcase = lazy(() => import('./VideoShowcaseSlide'));
```

## 📊 Success Metrics

Target these accessibility scores:
- Lighthouse Accessibility: 95+
- axe DevTools: 0 violations
- WAVE: 0 errors, minimal alerts
- Keyboard navigation: 100% functionality
- Screen reader: All content accessible

## 🔗 Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Screen Reader Testing Guide](https://webaim.org/articles/screenreader_testing/)