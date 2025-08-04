import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import InteractiveSlotDemo from '../components/InteractiveSlotDemo'
import StickyHeader from '../components/StickyHeader'
import TrustIndicators from '../components/TrustIndicators'
import CompactFeatures from '../components/CompactFeatures'
import MinimalFooter from '../components/MinimalFooter'

export default function OptimizedLandingPage() {
  const navigate = useNavigate()
  const [demoCompleted, setDemoCompleted] = useState(false)
  const [activeUsers, setActiveUsers] = useState(15247)
  const { scrollY } = useScroll()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5) - 2)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleDemoComplete = () => {
    setDemoCompleted(true)
  }

  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const scale = useTransform(scrollY, [0, 200], [1, 0.95])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-darkGreen"
    >
      <StickyHeader />
      
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ opacity }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 bg-limeGreen/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink/5 rounded-full blur-3xl" />
        </motion.div>

        <motion.div 
          className="relative z-10 max-w-5xl mx-auto text-center"
          style={{ scale }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-beigeCream">Beat the House</span>{' '}
              <span className="text-limeGreen">with AI</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-beigeCream/80 mb-12 max-w-2xl mx-auto">
              See your winning probability before you spin
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <InteractiveSlotDemo onComplete={handleDemoComplete} />
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <motion.button
              onClick={() => navigate('/onboarding')}
              className={`
                px-8 py-4 text-lg font-bold rounded-xl transition-all duration-300
                ${demoCompleted 
                  ? 'bg-limeGreen text-darkGreen shadow-[0_0_30px_rgba(171,248,11,0.5)]' 
                  : 'bg-transparent border-2 border-limeGreen/50 text-limeGreen hover:border-limeGreen'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={demoCompleted ? { 
                boxShadow: [
                  '0 0 30px rgba(171,248,11,0.5)',
                  '0 0 50px rgba(171,248,11,0.8)',
                  '0 0 30px rgba(171,248,11,0.5)'
                ]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {demoCompleted ? 'Start Winning Now →' : 'Try flamingo.ai Free'}
            </motion.button>

            <motion.div 
              className="flex items-center justify-center space-x-2 text-beigeCream/60"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-limeGreen rounded-full animate-pulse" />
              <span className="text-sm">
                {activeUsers.toLocaleString()} players winning today
              </span>
            </motion.div>
          </motion.div>

          {!demoCompleted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                <svg className="w-6 h-6 text-limeGreen mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="text-xs text-beigeCream/50">See it in action</span>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </section>

      <TrustIndicators />
      
      <CompactFeatures />
      
      <section className="py-20 px-4 text-center bg-gradient-to-b from-darkGreen to-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-beigeCream mb-8">
            Ready to turn the odds in your favor?
          </h2>
          <p className="text-lg text-beigeCream/70 mb-8">
            Join thousands of players who are already winning with AI-powered insights
          </p>
          <motion.button
            onClick={() => navigate('/onboarding')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-limeGreen text-darkGreen font-bold text-xl rounded-xl
                     shadow-[0_0_40px_rgba(171,248,11,0.6)] hover:shadow-[0_0_60px_rgba(171,248,11,0.8)]
                     transition-all duration-300"
          >
            Start Your Free Trial →
          </motion.button>
          <p className="text-sm text-beigeCream/50 mt-4">
            No credit card required • 7-day free trial
          </p>
        </motion.div>
      </section>

      <MinimalFooter />
    </motion.div>
  )
}