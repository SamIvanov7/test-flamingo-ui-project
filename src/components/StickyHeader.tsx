import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function StickyHeader() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setScrolled(latest > 50)
    })
    return unsubscribe
  }, [scrollY])

  return (
    <motion.header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled 
          ? 'bg-darkGreen/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
        }
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/assets/images/flamingo_logo.png" 
              alt="Flamingo AI" 
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-limeGreen">flamingo.ai</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#how-it-works" 
              className="text-beigeCream hover:text-limeGreen transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#demo" 
              className="text-beigeCream hover:text-limeGreen transition-colors"
            >
              Live Demo
            </a>
            <a 
              href="#pricing" 
              className="text-beigeCream hover:text-limeGreen transition-colors relative"
            >
              Pricing
              <span className="absolute -top-2 -right-6 bg-pink text-darkGreen text-xs px-1 rounded">
                New
              </span>
            </a>
          </div>
          
          <motion.button
            onClick={() => navigate('/onboarding')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              px-6 py-2 font-bold rounded-lg transition-all duration-300
              ${scrolled
                ? 'bg-limeGreen text-darkGreen shadow-[0_0_20px_rgba(171,248,11,0.5)]'
                : 'bg-transparent border-2 border-limeGreen text-limeGreen hover:bg-limeGreen/10'
              }
            `}
            animate={scrolled ? { 
              boxShadow: [
                '0 0 20px rgba(171,248,11,0.5)',
                '0 0 30px rgba(171,248,11,0.7)',
                '0 0 20px rgba(171,248,11,0.5)'
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Start Free Trial
          </motion.button>
          
          <button className="md:hidden text-limeGreen">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </motion.header>
  )
}