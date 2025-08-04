import { motion } from 'framer-motion'
import { BackgroundPaths } from './BackgroundPaths'

export default function ChaosToOrderSectionSimple() {
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
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              {/* Dark chaotic background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-darkGreen/50 to-black/80" />
              
              {/* Static chaos visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="text-6xl font-bold text-pink/20"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 0.9, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    RNG ≠ RANDOM
                  </motion.div>
                  <div className="mt-4 flex justify-center gap-4 text-4xl text-pink/40">
                    {['$', '€', '♠', '♥', '♦', '♣'].map((symbol, i) => (
                      <motion.span
                        key={i}
                        animate={{ 
                          y: [0, -20, 0],
                          opacity: [0.4, 1, 0.4]
                        }}
                        transition={{ 
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity
                        }}
                      >
                        {symbol}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
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
              
              {/* Static flamingo representation */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8, type: "spring" }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-8xl"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🦩
                  </motion.div>
                  <div className="mt-4 text-limeGreen font-bold text-xl">
                    AI OBSERVER
                  </div>
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