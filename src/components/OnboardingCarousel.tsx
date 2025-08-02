import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Flamingo3D from './Flamingo3D'
import ParticleField from './ParticleField'

const slides = [
  {
    title: "Meet Your AI Assistant",
    titleColor1: "Meet Your",
    titleColor2: "AI Assistant",
    description: "Our pink flamingo AI analyzes slot patterns in real-time to provide you with probability insights.",
    flamingoState: 'happy' as const,
  },
  {
    title: "Real-Time Predictions",
    titleColor1: "Real-Time",
    titleColor2: "Predictions",
    description: "Get instant probability calculations updated with every spin. Make informed decisions with AI-powered insights.",
    flamingoState: 'thinking' as const,
  },
  {
    title: "Play Responsibly",
    titleColor1: "Play",
    titleColor2: "Responsibly",
    description: "Set limits, track your session, and enjoy gaming with built-in responsible gaming tools.",
    flamingoState: 'excited' as const,
  },
]

export default function OnboardingCarousel() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      navigate('/dashboard')
    }
  }

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleSkip = () => {
    navigate('/dashboard')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-deepGreen via-djungle to-forest"
    >
      {/* 3D Scene with enhanced lighting */}
      <div className="absolute inset-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          
          {/* Enhanced lighting similar to AboutUs page */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#E59FCE" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ABF80B" />
          <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} color="#ABF80B" />
          <directionalLight position={[0, 2, 5]} intensity={0.5} color="#E7DFCE" />
          
          <Flamingo3D 
            animationState={slides[currentSlide].flamingoState}
            interactionMode="reactive"
            scale={2}
          />
          
          <ParticleField 
            count={100} 
            density={currentSlide === 2 ? 2 : 1}
            color={currentSlide === 0 ? '#E59FCF' : currentSlide === 1 ? '#ADFF00' : '#869F6A'}
          />
          
          <EffectComposer>
            <Bloom 
              luminanceThreshold={0.1} 
              luminanceSmoothing={0.9} 
              intensity={1.5}
            />
          </EffectComposer>
          
          <Environment preset="sunset" />
        </Canvas>
      </div>

      {/* Dark Green Overlay for better text visibility */}
      <div className="absolute inset-0 bg-darkGreen/50 backdrop-blur-sm z-5" />

      {/* Content Overlay with enhanced styling */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Skip Button */}
        <div className="text-right">
          <motion.button
            onClick={handleSkip}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-beigeCream/50 hover:text-limeGreen transition-colors text-lg font-semibold"
          >
            Skip →
          </motion.button>
        </div>

        {/* Slide Content with AboutUs-style typography */}
        <div className="flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl text-center"
            >
              <motion.h2 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-limeGreen">{slides[currentSlide].titleColor1}</span>{' '}
                <span className="text-pink">{slides[currentSlide].titleColor2}</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-beigeCream/80 max-w-3xl mx-auto"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* Additional visual elements */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex justify-center space-x-8"
              >
                {currentSlide === 0 && (
                  <>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-pink">98.3%</div>
                      <div className="text-sm text-beigeCream/60">Pattern Detection</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-limeGreen">24/7</div>
                      <div className="text-sm text-beigeCream/60">AI Analysis</div>
                    </div>
                  </>
                )}
                {currentSlide === 1 && (
                  <>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-limeGreen">2.7M</div>
                      <div className="text-sm text-beigeCream/60">Spins Analyzed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-pink">15K+</div>
                      <div className="text-sm text-beigeCream/60">Active Users</div>
                    </div>
                  </>
                )}
                {currentSlide === 2 && (
                  <>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-pink">100%</div>
                      <div className="text-sm text-beigeCream/60">Secure</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-limeGreen">Fair</div>
                      <div className="text-sm text-beigeCream/60">Gaming Tools</div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation with enhanced styling */}
        <div className="flex items-center justify-between">
          {/* Progress Dots */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-12 bg-limeGreen shadow-[0_0_10px_rgba(171,248,11,0.5)]' 
                    : 'w-3 bg-beigeCream/30 hover:bg-beigeCream/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons with enhanced styling */}
          <div className="flex space-x-4">
            {currentSlide > 0 && (
              <motion.button
                onClick={handlePrevious}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-limeGreen/50 rounded-xl text-limeGreen font-bold
                         hover:border-limeGreen hover:bg-limeGreen/10 hover:shadow-[0_0_20px_rgba(171,248,11,0.3)]
                         transition-all duration-300"
              >
                ← Previous
              </motion.button>
            )}
            
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-limeGreen text-darkGreen font-bold rounded-xl text-lg
                       hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all duration-300"
            >
              {currentSlide === slides.length - 1 ? "Let's Start →" : 'Next →'}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-limeGreen/10 rounded-full blur-3xl animate-pulse" />
      </div>
    </motion.div>
  )
}