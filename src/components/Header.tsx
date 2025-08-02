import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  onLogin: () => void
}

export default function Header({ onLogin }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Use Case', path: '/use-case' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Chat', path: '/chat' },
    { name: 'Request Feature', path: '/request-feature' }
  ]

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false)
    navigate(path)
  }

  return (
    <>
      {/* Fixed Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('/')}
            >
              <img 
                src="/assets/images/logo-variant-3.png" 
                alt="flamingo.ai" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold text-limeGreen drop-shadow-lg">
                flamingo.ai
              </span>
            </motion.div>

            {/* Burger Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg hover:bg-darkGreen/10 transition-colors"
            >
              <svg 
                className="w-8 h-8 text-limeGreen" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
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
            />

            {/* Sidebar */}
            <motion.nav
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed top-0 left-0 h-full w-80 bg-darkGreen/95 backdrop-blur-md z-50 shadow-2xl"
            >
              <div className="p-6">
                {/* Close Button */}
                <motion.button
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-6 right-6 p-2 rounded-lg hover:bg-darkGreen/10 transition-colors"
                >
                  <svg 
                    className="w-6 h-6 text-limeGreen" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
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
                    alt="flamingo.ai" 
                    className="w-14 h-14 object-contain"
                  />
                  <span className="text-2xl font-bold text-limeGreen">
                    flamingo.ai
                  </span>
                </div>

                {/* Navigation Items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.path)}
                      className="block w-full text-left py-3 px-4 rounded-lg text-limeGreen font-medium
                               hover:bg-limeGreen/10 hover:translate-x-2 
                               transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

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
                           transition-all duration-300"
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