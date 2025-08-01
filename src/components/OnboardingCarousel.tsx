import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Flamingo3D from './Flamingo3D'
import ParticleField from './ParticleField'

interface OnboardingCarouselProps {
  onComplete: () => void
}

const slides = [
  {
    title: "Meet Your AI Assistant",
    description: "Our pink flamingo AI analyzes slot patterns in real-time to provide you with probability insights.",
    flamingoState: 'happy' as const,
  },
  {
    title: "Real-Time Predictions",
    description: "Get instant probability calculations updated with every spin. Make informed decisions with AI-powered insights.",
    flamingoState: 'thinking' as const,
  },
  {
    title: "Play Responsibly",
    description: "Set limits, track your session, and enjoy gaming with built-in responsible gaming tools.",
    flamingoState: 'excited' as const,
  },
]

export default function OnboardingCarousel({ onComplete }: OnboardingCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onComplete()
    }
  }

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleSkip = () => {
    onComplete()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-deepGreen via-djungle to-forest"
    >
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <Flamingo3D 
            animationState={slides[currentSlide].flamingoState}
            interactionMode="reactive"
          />
          
          <ParticleField 
            count={300} 
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

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Skip Button */}
        <div className="text-right">
          <button
            onClick={handleSkip}
            className="text-beigeCream/50 hover:text-limeGreen transition-colors"
          >
            Skip
          </button>
        </div>

        {/* Slide Content */}
        <div className="flex-1 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl text-center"
            >
              <motion.h2 
                className="text-5xl lg:text-[143.112px] leading-tight lg:leading-[104.519997px] font-bold mb-6 uppercase"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ 
                  fontWeight: 700,
                  fontVariationSettings: 'normal'
                }}
              >
                <span className="text-limeGreen">
                  {slides[currentSlide].title}
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-sm lg:text-lg text-beigeCream/80"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {slides[currentSlide].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          {/* Progress Dots */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-limeGreen' 
                    : 'bg-beigeCream/30 hover:bg-beigeCream/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex space-x-4">
            {currentSlide > 0 && (
              <motion.button
                onClick={handlePrevious}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-limeGreen/50 rounded-xl text-limeGreen
                         hover:border-limeGreen hover:bg-limeGreen/10 transition-all duration-300"
              >
                Previous
              </motion.button>
            )}
            
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-limeGreen text-darkGreen font-bold rounded-xl
                       hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all duration-300"
            >
              {currentSlide === slides.length - 1 ? "Let's Start" : 'Next'}
            </motion.button>
          </div>
        </div>
      </div>

      {/* WebGL Distortion Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <filter id="distortion">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.01"
                numOctaves="2"
                result="turbulence"
              />
              <feDisplacementMap
                in2="turbulence"
                in="SourceGraphic"
                scale="10"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </motion.div>
  )
}