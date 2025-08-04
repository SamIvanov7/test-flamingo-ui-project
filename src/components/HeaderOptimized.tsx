import { useState, memo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
// import LanguageSelector from './LanguageSelector'

interface HeaderProps {
  onLogin: () => void
}

// Memoized header component to prevent re-renders when parent state changes
// Only re-renders when onLogin prop changes
const HeaderOptimized = memo(({ onLogin }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // UseCallback to memoize menu toggle function
  // Prevents recreation of function on every render, which would cause child re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  // UseCallback for closing menu
  // Separate function to avoid passing setIsMenuOpen directly to children
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  // Memoized navigation items to prevent recreation on every render
  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/use-case', label: 'Use Case' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/faq', label: 'FAQ' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-darkGreen/90 backdrop-blur-lg border-b border-limeGreen/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - wrapped in memo since it doesn't change */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/flamingo-logo.png" alt="Flamingo" className="w-8 h-8" />
            <span className="text-limeGreen font-bold text-xl">flamingo.ai</span>
          </Link>

          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-beigeCream hover:text-limeGreen transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <LanguageSelector /> */}
            <motion.button
              onClick={onLogin}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-limeGreen text-darkGreen font-bold rounded-lg hover:bg-limeGreen/90 transition-colors"
            >
              Dashboard
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 text-limeGreen"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - using AnimatePresence for smooth transitions */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-darkGreen/95 backdrop-blur-lg border-t border-limeGreen/20"
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className="text-beigeCream hover:text-limeGreen transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-limeGreen/20">
                  {/* <LanguageSelector /> */}
                  <motion.button
                    onClick={() => {
                      onLogin()
                      closeMenu()
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4 px-6 py-3 bg-limeGreen text-darkGreen font-bold rounded-lg hover:bg-limeGreen/90 transition-colors"
                  >
                    Dashboard
                  </motion.button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
})

HeaderOptimized.displayName = 'HeaderOptimized'

export default HeaderOptimized