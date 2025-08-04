import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

interface HeaderProps {
  onLogin: () => void
}

export default function HeaderAccessible({ onLogin }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const navItems = [
    { name: t('navigation.home'), path: '/' },
    { name: t('navigation.about'), path: '/about' },
    { name: t('navigation.useCase'), path: '/use-case' },
    { name: t('navigation.pricing'), path: '/pricing' },
    { name: t('navigation.faq'), path: '/faq' },
    { name: t('navigation.blog'), path: '/blog' },
    { name: t('navigation.contact'), path: '/contact' },
    { name: t('navigation.dashboard'), path: '/dashboard' },
    { name: t('navigation.chat'), path: '/chat' },
    { name: t('navigation.requestFeature'), path: '/request-feature' }
  ]

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false)
    navigate(path)
    // Return focus to menu button after navigation
    menuButtonRef.current?.focus()
  }

  // Trap focus within menu when open
  useEffect(() => {
    if (isMenuOpen) {
      closeButtonRef.current?.focus()
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMenuOpen(false)
          menuButtonRef.current?.focus()
        }
      }
      
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Skip Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 
                   focus:px-4 focus:py-2 focus:bg-limeGreen focus:text-darkGreen focus:rounded-lg
                   focus:font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-limeGreen"
      >
        Skip to main content
      </a>

      {/* Fixed Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent" role="banner">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between" role="navigation">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-limeGreen rounded-lg"
              whileHover={{ scale: 1.05 }}
              onClick={(e) => {
                e.preventDefault()
                navigate('/')
              }}
              aria-label="flamingo.ai - Home"
            >
              <img 
                src="/assets/images/logo-variant-3.png" 
                alt="" 
                className="w-12 h-12 object-contain"
                aria-hidden="true"
              />
              <span className="text-xl font-bold text-limeGreen drop-shadow-lg">
                flamingo.ai
              </span>
            </motion.a>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation (Hidden on mobile) */}
              <ul className="hidden lg:flex items-center space-x-6" role="list">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault()
                        navigate(item.path)
                      }}
                      className="text-beigeCream hover:text-limeGreen transition-colors duration-300
                               focus:outline-none focus:text-limeGreen focus:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Language Switcher */}
              <LanguageSwitcher />
              
              {/* Burger Menu Button */}
              <motion.button
                ref={menuButtonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg hover:bg-darkGreen/10 transition-colors
                         focus:outline-none focus:ring-2 focus:ring-limeGreen"
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                aria-controls="navigation-menu"
              >
                <svg 
                  className="w-8 h-8 text-limeGreen" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2.5} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              </motion.button>
            </div>
          </nav>
        </div>
      </header>

      {/* Slide-in Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
              aria-hidden="true"
            />

            {/* Sidebar */}
            <motion.nav
              id="navigation-menu"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed top-0 left-0 h-full w-80 bg-darkGreen/95 backdrop-blur-md z-50 shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="p-6">
                {/* Close Button */}
                <motion.button
                  ref={closeButtonRef}
                  onClick={() => {
                    setIsMenuOpen(false)
                    menuButtonRef.current?.focus()
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-6 right-6 p-2 rounded-lg hover:bg-darkGreen/10 transition-colors
                           focus:outline-none focus:ring-2 focus:ring-limeGreen"
                  aria-label="Close navigation menu"
                >
                  <svg 
                    className="w-6 h-6 text-limeGreen" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </motion.button>

                {/* Logo in Sidebar */}
                <div className="flex items-center space-x-3 mb-10">
                  <img 
                    src="/assets/images/logo-variant-3.png" 
                    alt="" 
                    className="w-14 h-14 object-contain"
                    aria-hidden="true"
                  />
                  <span className="text-2xl font-bold text-limeGreen">
                    flamingo.ai
                  </span>
                </div>

                {/* Navigation Items */}
                <ul className="space-y-2" role="list">
                  {navItems.map((item, index) => (
                    <li key={item.path}>
                      <motion.a
                        href={item.path}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(item.path)
                        }}
                        className="block w-full text-left py-3 px-4 rounded-lg text-limeGreen font-medium
                                 hover:bg-limeGreen/10 hover:translate-x-2 
                                 transition-all duration-300
                                 focus:outline-none focus:ring-2 focus:ring-limeGreen focus:bg-limeGreen/10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {item.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>

                {/* Login Button */}
                <motion.button
                  onClick={() => {
                    setIsMenuOpen(false)
                    onLogin()
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-8 px-6 py-3 bg-limeGreen/20 border-2 border-limeGreen text-limeGreen font-bold 
                           rounded-lg hover:bg-limeGreen/30 hover:shadow-[0_0_20px_rgba(171,248,11,0.5)]
                           transition-all duration-300
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-darkGreen focus:ring-limeGreen"
                  aria-label="Log in to your account"
                >
                  Log In
                </motion.button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}