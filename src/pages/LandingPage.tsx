import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import VideoBackground from '../components/VideoBackground'
import Header from '../components/Header'
import GamblingNewsSection from '../components/GamblingNewsSection'
import Footer from '../components/Footer'

export default function LandingPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionsRef = useRef<HTMLDivElement[]>([])
  const isScrollingRef = useRef(false)

  // Section refs
  const heroRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const newsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  // Initialize sections array
  useEffect(() => {
    sectionsRef.current = [
      heroRef.current,
      galleryRef.current,
      newsRef.current,
      ctaRef.current
    ].filter(Boolean) as HTMLDivElement[]
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return

      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const scrollCenter = scrollPosition + windowHeight / 2
      
      // Find which section is currently in view
      for (let i = 0; i < sectionsRef.current.length; i++) {
        const section = sectionsRef.current[i]
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight
          const sectionBottom = sectionTop + sectionHeight
          
          // Check if the center of the viewport is within this section
          if (scrollCenter >= sectionTop && scrollCenter < sectionBottom) {
            if (currentSection !== i) {
              setCurrentSection(i)
            }
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentSection])

  // Auto-advance sections immediately on load
  useEffect(() => {
    // Disabled auto-scroll for now to fix navigation
    // Uncomment below to re-enable auto-scrolling
    /*
    if (!isVideoPlaying && currentSection < sectionsRef.current.length - 1) {
      const timeout = setTimeout(() => {
        scrollToSection(currentSection + 1)
      }, 0) // Immediate execution
      
      return () => clearTimeout(timeout)
    }
    */
  }, [currentSection, isVideoPlaying])

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sectionsRef.current.length) {
      const targetElement = sectionsRef.current[index]
      
      if (targetElement) {
        isScrollingRef.current = true
        setCurrentSection(index) // Update immediately for responsive UI
        
        // Use a custom smooth scroll implementation for better control
        const targetPosition = targetElement.offsetTop
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        const duration = 1500 // 1.5 seconds for smooth but not too slow
        let start: number | null = null
        
        const easeInOutQuad = (t: number): number => {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        }
        
        const animation = (currentTime: number) => {
          if (start === null) start = currentTime
          const timeElapsed = currentTime - start
          const progress = Math.min(timeElapsed / duration, 1)
          const ease = easeInOutQuad(progress)
          
          window.scrollTo(0, startPosition + distance * ease)
          
          if (timeElapsed < duration) {
            requestAnimationFrame(animation)
          } else {
            isScrollingRef.current = false
            // Ensure the section is properly set after animation
            setCurrentSection(index)
          }
        }
        
        requestAnimationFrame(animation)
      }
    }
  }

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleCloseVideo = () => {
    setIsVideoPlaying(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  // Section navigation dots
  const SectionDots = () => (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
      {[0, 1, 2, 3].map((index) => (
        <motion.button
          key={index}
          onClick={() => scrollToSection(index)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
            currentSection === index 
              ? 'bg-limeGreen shadow-[0_0_20px_rgba(171,248,11,0.6)]' 
              : 'bg-beigeCream/30 hover:bg-beigeCream/50'
          }`}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      <Header onLogin={() => navigate('/dashboard')} />
      <SectionDots />
      
      {/* Section 1 - Hero with Video Background */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <VideoBackground videoSrc="/assets/videos/intro-loop-desktop.mp4" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="relative">
              {/* Floating Image on Right - Fixed positioning */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
                style={{ width: '24rem', height: '24rem' }} // Fixed dimensions
              >
                <motion.img
                  src="/assets/images/ui-screenshot-3.png"
                  alt="UI Preview"
                  className="w-full h-full object-contain"
                  animate={{ 
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-center"
                >
                  <div className="flex flex-col items-center justify-center">
                    <div className="mt-8 sm:mt-12 lg:mt-20 text-center">
                      <h1 className="text-beigeCream uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
                                   font-bold leading-tight tracking-tight">
                        {t('landing.hero.title1')}
                      </h1>
                      <h2 className="text-pink uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
                                   font-bold leading-tight tracking-tight">
                        {t('landing.hero.title2')}
                      </h2>
                    </div>
                    <div className="max-w-[600px] px-6 sm:px-8 lg:px-0 mt-6 text-sm sm:text-base lg:text-lg 
                                  text-beigeCream/80 text-center">
                      <p>{t('landing.hero.subtitle')}</p>
                    </div>
                  </div>
                  
                  {/* Video Play Button */}
                  <motion.button
                    onClick={handlePlayVideo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative my-8 sm:my-12 mx-auto block w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
                  >
                    <div className="absolute inset-0 rounded-full border-2 border-limeGreen bg-transparent
                                  shadow-[0_0_50px_rgba(171,248,11,0.6)] hover:shadow-[0_0_70px_rgba(171,248,11,0.8)]
                                  transition-all duration-300">
                      {/* Rotating Text */}
                      <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 128 128">
                        <defs>
                          <path id="circle-text-path" d="M 64, 64 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                        </defs>
                        <text className="fill-limeGreen text-[10px] sm:text-xs font-bold uppercase">
                          <textPath href="#circle-text-path" startOffset="0%">
                            {t('landing.hero.watchStory')} • {t('landing.hero.watchStory')} • 
                          </textPath>
                        </text>
                      </svg>
                      
                      {/* Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg 
                          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-limeGreen ml-1 sm:ml-2" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </motion.button>
                  
                  <motion.button
                    onClick={() => navigate('/onboarding')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-limeGreen text-limeGreen 
                             font-bold rounded-xl text-base sm:text-lg hover:bg-limeGreen/10 
                             hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all duration-300"
                  >
                    {t('landing.hero.cta')}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-limeGreen"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Section 2 - Features Gallery */}
      <section ref={galleryRef} className="min-h-screen bg-gradient-to-b from-darkGreen to-raisinBlack flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-beigeCream">{t('landing.section2.title')}</span>{' '}
              <span className="text-pink">{t('landing.section2.subtitle')}</span>
            </h2>
            <p className="text-lg text-beigeCream/70 max-w-3xl mx-auto">
              {t('landing.section2.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              { 
                img: '/assets/images/flamingo_1_restyled.png', 
                title: 'Quantum Analysis', 
                desc: 'Advanced quantum-neural networks decode hidden patterns',
                color: 'lime'
              },
              { 
                img: '/assets/images/flamingo_2_restyled.png', 
                title: 'Live Predictions', 
                desc: 'Real-time probability calculations updated every millisecond',
                color: 'pink'
              },
              { 
                img: '/assets/images/flamingo_3_restyled.png', 
                title: 'Pattern Recognition', 
                desc: 'AI identifies subtle patterns humans miss',
                color: 'lime'
              },
              { 
                img: '/assets/images/flamingo_4_restyled.png', 
                title: 'Smart Insights', 
                desc: 'Personalized strategies based on your play style',
                color: 'pink'
              },
              { 
                img: '/assets/images/flamingo_5_restyled.png', 
                title: 'Risk Analysis', 
                desc: 'Know when to bet big and when to walk away',
                color: 'lime'
              },
              { 
                img: '/assets/images/flamingo_6_restyled.png', 
                title: 'Win Maximizer', 
                desc: 'Optimize your betting strategy for maximum returns',
                color: 'pink'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glassmorphism p-6 rounded-2xl overflow-hidden group relative"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  feature.color === 'lime' 
                    ? 'bg-gradient-to-br from-limeGreen/0 to-limeGreen/10' 
                    : 'bg-gradient-to-br from-pink/0 to-pink/10'
                }`} />
                
                <div className="relative z-10">
                  <div className="h-48 mb-4 relative overflow-hidden rounded-lg">
                    <img 
                      src={feature.img} 
                      alt={feature.title} 
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    feature.color === 'lime' ? 'text-limeGreen' : 'text-pink'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-beigeCream/70">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Gambling Scandal News */}
      <section ref={newsRef} className="min-h-screen bg-raisinBlack flex items-center justify-center py-20">
        <GamblingNewsSection />
      </section>

      {/* Section 4 - CTA Section */}
      <section ref={ctaRef} className="min-h-screen bg-gradient-to-b from-raisinBlack to-darkGreen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-beigeCream">{t('landing.section3.title')}</span>
            </h2>
            <p className="text-lg sm:text-xl text-beigeCream/70 mb-8 max-w-2xl mx-auto">
              {t('landing.section3.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.button
                onClick={() => navigate('/onboarding')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-limeGreen text-darkGreen font-bold rounded-xl text-lg
                         hover:shadow-[0_0_40px_rgba(171,248,11,0.6)] transition-all duration-300"
              >
                {t('landing.section3.cta')}
              </motion.button>
              <motion.button
                onClick={() => navigate('/about')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-pink text-pink font-bold rounded-xl text-lg
                         hover:bg-pink/10 hover:shadow-[0_0_30px_rgba(229,159,206,0.5)] transition-all duration-300"
              >
                Learn How It Works
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-limeGreen mb-2">15,000+</div>
                <div className="text-beigeCream/70">Active Players</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-pink mb-2">99.5%</div>
                <div className="text-beigeCream/70">Accuracy Rate</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-limeGreen mb-2">$2.3M</div>
                <div className="text-beigeCream/70">Won This Month</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleCloseVideo}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src="/assets/videos/Pinky_Desktop.mp4"
              className="w-full rounded-lg shadow-2xl"
              controls
              autoPlay
            />
            <motion.button
              onClick={handleCloseVideo}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-4 right-4 p-2 bg-limeGreen rounded-full 
                       text-darkGreen hover:bg-limeGreen/80 transition-all duration-300
                       shadow-[0_0_20px_rgba(171,248,11,0.5)]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  )
}