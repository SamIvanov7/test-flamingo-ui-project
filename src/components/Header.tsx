import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../contexts/AuthContext'
import { LogOut, User } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

interface HeaderProps {
  onLogin: () => void
}

export default function Header({ onLogin }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { user, isAuthenticated, logout } = useAuth()

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
  }

  const handleLogout = () => {
    logout()
    navigate('/')
    setShowUserMenu(false)
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

            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <LanguageSwitcher />
              
              {/* User Menu or Login Button */}
              {isAuthenticated && user ? (
                <div className="relative">
                  <motion.button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-limeGreen/20 flex items-center justify-center">
                      <User className="w-5 h-5 text-limeGreen" />
                    </div>
                    <span className="text-beigeCream text-sm font-medium">
                      {user.fullName.split(' ')[0]}
                    </span>
                  </motion.button>
                  
                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-48 bg-darkGreen/95 backdrop-blur-md rounded-lg shadow-lg py-2 z-50"
                      >
                        <button
                          onClick={() => {
                            navigate('/settings')
                            setShowUserMenu(false)
                          }}
                          className="w-full text-left px-4 py-2 text-beigeCream hover:bg-white/10 transition-colors"
                        >
                          Settings
                        </button>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-beigeCream hover:bg-white/10 transition-colors flex items-center space-x-2"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.button
                  onClick={() => navigate('/login')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-limeGreen/20 border border-limeGreen text-limeGreen font-medium rounded-lg
                           hover:bg-limeGreen/30 transition-all duration-300"
                >
                  Log In
                </motion.button>
              )}
              
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

                {/* Auth Section */}
                {isAuthenticated && user ? (
                  <div className="mt-8 space-y-4">
                    <div className="p-4 bg-white/10 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-limeGreen/20 flex items-center justify-center">
                          <User className="w-6 h-6 text-limeGreen" />
                        </div>
                        <div>
                          <p className="text-limeGreen font-medium">{user.fullName}</p>
                          <p className="text-beigeCream/60 text-sm">{user.email}</p>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      onClick={() => {
                        setIsMenuOpen(false)
                        handleLogout()
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-red-500/20 border-2 border-red-500 text-red-400 font-bold 
                               rounded-lg hover:bg-red-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Log Out</span>
                    </motion.button>
                  </div>
                ) : (
                  <div className="mt-8 space-y-3">
                    <motion.button
                      onClick={() => {
                        setIsMenuOpen(false)
                        navigate('/login')
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-limeGreen/20 border-2 border-limeGreen text-limeGreen font-bold 
                               rounded-lg hover:bg-limeGreen/30 hover:shadow-[0_0_20px_rgba(171,248,11,0.5)]
                               transition-all duration-300"
                    >
                      Log In
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        setIsMenuOpen(false)
                        navigate('/signup')
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-pink/20 border-2 border-pink text-pink font-bold 
                               rounded-lg hover:bg-pink/30 hover:shadow-[0_0_20px_rgba(229,159,206,0.5)]
                               transition-all duration-300"
                    >
                      Sign Up
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}