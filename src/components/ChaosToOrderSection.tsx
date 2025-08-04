import { useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import ParticleField from './ParticleFieldEnhanced'
import { BackgroundPaths } from './BackgroundPaths'
import Flamingo3DWrapper from './Flamingo3DWrapper'

export default function ChaosToOrderSection() {
  const [isInView, setIsInView] = useState(false)
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-darkGreen via-raisinBlack to-darkGreen">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-darkGreen/80 via-transparent to-darkGreen/80" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.span 
              className="text-beigeCream inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Every spin isn't random,
            </motion.span>
            <br />
            <motion.span 
              className="text-limeGreen inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              but a link in a chain.
            </motion.span>
            <br />
            <motion.span 
              className="text-pink inline-block"
              initial={{ rotateX: 90, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              We teach you to see the whole chain.
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Split Screen Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 min-h-[600px]">
          {/* Left Side - Chaos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            onViewportEnter={() => setIsInView(true)}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              {/* Dark chaotic background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-darkGreen/50 to-black/80" />
              
              {/* Chaotic Particle Field */}
              <div className="absolute inset-0">
                <Suspense fallback={
                  <div className="flex items-center justify-center h-full">
                    <div className="text-pink animate-pulse">Loading chaos...</div>
                  </div>
                }>
                  {typeof window !== 'undefined' && (
                    <ParticleField mode="chaos" isActive={isInView} />
                  )}
                </Suspense>
              </div>
              
              {/* Glitch effect overlay */}
              <motion.div
                className="absolute inset-0 mix-blend-screen opacity-20"
                animate={{
                  background: [
                    'linear-gradient(0deg, transparent 0%, rgba(255,0,0,0.1) 50%, transparent 100%)',
                    'linear-gradient(180deg, transparent 0%, rgba(255,0,0,0.1) 50%, transparent 100%)',
                  ]
                }}
                transition={{ duration: 0.1, repeat: Infinity }}
              />
            </div>
            
            {/* Text Content - Chaos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6"
            >
              <h3 className="text-2xl font-bold text-pink mb-4">The Illusion of Randomness</h3>
              <ul className="space-y-3 text-beigeCream/80">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-pink mt-1">•</span>
                  <span>The casino makes you believe that every spin is a new, independent chance.</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-pink mt-1">•</span>
                  <span>In reality, you are playing against a cold algorithm (RNG) whose goal is to guarantee your long-term loss.</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-pink mt-1">•</span>
                  <span>Billions of spins from other players form cycles that are hidden from you.</span>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Side - Order */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              {/* Bright ordered background */}
              <div className="absolute inset-0 bg-gradient-to-br from-limeGreen/10 via-darkGreen/30 to-darkGreen/50" />
              
              {/* Ordered Background Paths */}
              <div className="absolute inset-0">
                <BackgroundPaths />
              </div>
              
              {/* Flamingo 3D in center */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0, rotateY: -180 }}
                whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1.2, type: "spring", stiffness: 50 }}
              >
                <div className="w-64 h-64 relative">
                  <Suspense fallback={
                    <div className="flex items-center justify-center h-full">
                      <div className="text-limeGreen animate-pulse">Loading AI...</div>
                    </div>
                  }>
                    <Flamingo3DWrapper />
                  </Suspense>
                  {/* Glow effect around flamingo */}
                  <div className="absolute inset-0 bg-limeGreen/20 rounded-full blur-3xl scale-150 animate-pulse" />
                </div>
              </motion.div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-limeGreen/20 via-transparent to-transparent mix-blend-screen" />
            </div>
            
            {/* Text Content - Order */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6"
            >
              <h3 className="text-2xl font-bold text-limeGreen mb-4">Quantum Clarity</h3>
              <ul className="space-y-3 text-beigeCream/80">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-limeGreen mt-1">•</span>
                  <span>Our quantum core analyzes this hidden mathematics in real-time.</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-limeGreen mt-1">•</span>
                  <span>We turn the chaos of data into a clear probability map, identifying 'hot' and 'cold' zones within the RNG cycles.</span>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-limeGreen mt-1">•</span>
                  <span>You cease to be a victim of the algorithm and become its observer.</span>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => {
              // Scroll to next section
              const nextSection = document.getElementById('video-showcase-section')
              nextSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 bg-transparent border-2 border-limeGreen text-limeGreen font-bold rounded-xl text-base sm:text-lg
                     hover:bg-limeGreen/10 hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all duration-300
                     group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">See how it works in practice</span>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-limeGreen to-pink"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-pink/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-limeGreen/50 to-transparent" />
    </section>
  )
}