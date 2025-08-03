import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import VideoBackground from '../components/VideoBackground'
import Header from '../components/Header'
import GamblingNewsSection from '../components/GamblingNewsSection'
import { BackgroundPaths } from '../components/BackgroundPaths'
import Footer from '../components/Footer'

export default function LandingPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header onLogin={() => navigate('/dashboard')} />
      
      {/* Floating Geometric Shapes with Parallax */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-[20%] left-[10%] w-20 h-20 border-2 border-limeGreen/20 rounded-full"
          style={{
            y: useTransform(useScroll().scrollY, [0, 3000], [0, -600]),
            rotate: useTransform(useScroll().scrollY, [0, 3000], [0, 360]),
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[15%] w-16 h-16 bg-pink/10 backdrop-blur-sm"
          style={{
            y: useTransform(useScroll().scrollY, [0, 3000], [0, -400]),
            rotate: useTransform(useScroll().scrollY, [0, 3000], [0, -180]),
          }}
        />
        <motion.div
          className="absolute top-[60%] left-[20%] w-24 h-24 border-2 border-beigeCream/10 transform rotate-45"
          style={{
            y: useTransform(useScroll().scrollY, [0, 3000], [0, -500]),
            x: useTransform(useScroll().scrollY, [0, 3000], [0, 100]),
          }}
        />
        <motion.div
          className="absolute top-[80%] right-[10%] w-32 h-32 bg-gradient-to-br from-limeGreen/5 to-transparent rounded-full blur-xl"
          style={{
            y: useTransform(useScroll().scrollY, [0, 3000], [0, -700]),
            scale: useTransform(useScroll().scrollY, [0, 3000], [1, 1.5]),
          }}
        />
      </div>
      
      {/* Section 1 - Hero with Video Background */}
      <section className="relative h-screen overflow-hidden">
        <VideoBackground videoSrc="/assets/videos/intro-loop-desktop.mp4" />
        
        {/* Parallax background elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            y: useTransform(useScroll().scrollY, [0, 1000], [0, -200]),
          }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-limeGreen/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-pink/10 rounded-full blur-3xl" />
        </motion.div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="relative">
              {/* Floating Image on Right with Parallax */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-64 h-64 xl:w-96 xl:h-96"
                style={{
                  y: useTransform(useScroll().scrollY, [0, 800], [0, -100]),
                }}
              >
                <motion.img
                  src="/assets/images/ui-screenshot-3.png"
                  alt="UI Preview"
                  className="w-full h-full object-contain"
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    scale: useTransform(useScroll().scrollY, [0, 600], [1, 0.8]),
                  }}
                />
              </motion.div>

              <div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-center max-w-4xl mx-auto"
                >
                  <div className="flex flex-col items-center justify-center select-none">
                    <div className="title mt-8 sm:mt-12 lg:mt-20 text-center relative z-20">
                      <h1 
                        className="text-beigeCream uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[143.112px] leading-tight sm:leading-tight md:leading-tight lg:leading-[104.519997px] select-none m-0 p-0"
                        style={{ 
                          fontWeight: 700,
                          fontVariationSettings: 'normal',
                          height: 'auto',
                          marginBlockEnd: '0px',
                          marginBlockStart: '0px',
                          marginBottom: '0px',
                          marginInlineEnd: '0px',
                          marginInlineStart: '0px',
                          marginLeft: '0px',
                          marginRight: '0px',
                          marginTop: '0px',
                          tabSize: 4,
                          WebkitUserSelect: 'none',
                          userSelect: 'none'
                        }}
                      >
                        {t('landing.hero.title1')}
                      </h1>
                      <h2 
                        className="text-pink uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[143.112px] leading-tight sm:leading-tight md:leading-tight lg:leading-[104.519997px] select-none m-0 p-0"
                        style={{ 
                          fontWeight: 700,
                          fontVariationSettings: 'normal',
                          height: 'auto',
                          marginBlockEnd: '0px',
                          marginBlockStart: '0px',
                          marginBottom: '0px',
                          marginInlineEnd: '0px',
                          marginInlineStart: '0px',
                          marginLeft: '0px',
                          marginRight: '0px',
                          marginTop: '0px',
                          tabSize: 4,
                          WebkitUserSelect: 'none',
                          userSelect: 'none'
                        }}
                      >
                        {t('landing.hero.title2')}
                      </h2>
                    </div>
                    <div className="subtitle max-w-[350px] sm:max-w-[500px] lg:max-w-[600px] px-6 sm:px-8 lg:px-0 mt-4 lg:mt-6 text-sm sm:text-base lg:text-lg text-beigeCream text-center flex flex-col relative z-10">
                      <p>
                        {t('landing.hero.subtitle')}
                      </p>
                    </div>
                  </div>
                  
                  {/* Video Play Button */}
                  <motion.button
                    onClick={handlePlayVideo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative mb-8 sm:mb-12 lg:mb-16 mx-auto block w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32"
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
                    className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-limeGreen text-limeGreen font-bold rounded-xl text-base sm:text-lg
                             hover:bg-limeGreen/10 hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all duration-300
                             mt-8 sm:mt-12 lg:mt-16"
                  >
                    Try flamingo.ai
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Flamingo Images Gallery with Scroll Animations */}
      <section className="min-h-screen bg-darkGreen flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-0 relative">
        {/* Animated Background Paths */}
        <BackgroundPaths />
        
        {/* Parallax decorative elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <motion.div
            className="absolute -top-20 -left-20 w-96 h-96 bg-limeGreen/5 rounded-full blur-3xl"
            style={{
              y: useTransform(useScroll().scrollY, [600, 1600], [100, -100]),
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-pink/5 rounded-full blur-3xl"
            style={{
              y: useTransform(useScroll().scrollY, [600, 1600], [-100, 100]),
            }}
          />
        </motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-beigeCream mb-12"
          >
            Discover the Power of AI
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                delay: 0.1,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1.0]
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="glassmorphism p-4 sm:p-6 rounded-2xl overflow-hidden group"
            >
              <img 
                src="/assets/images/flamingo_1_restyled.png" 
                alt="Flamingo 1" 
                className="w-full h-32 sm:h-40 md:h-48 object-contain rounded-lg mb-3 sm:mb-4 
                         group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-limeGreen">AI Technology</h3>
              <p className="text-sm sm:text-base text-beigeCream/70">
                Advanced neural networks analyze patterns in real-time
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                delay: 0.2,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1.0]
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="glassmorphism p-4 sm:p-6 rounded-2xl overflow-hidden group"
            >
              <img 
                src="/assets/images/flamingo_2_restyled.png" 
                alt="Flamingo 2" 
                className="w-full h-32 sm:h-40 md:h-48 object-contain rounded-lg mb-3 sm:mb-4
                         group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-limeGreen">Live Analytics</h3>
              <p className="text-sm sm:text-base text-beigeCream/70">
                Real-time probability calculations for every spin
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                delay: 0.3,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1.0]
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="glassmorphism p-4 sm:p-6 rounded-2xl overflow-hidden group"
            >
              <img 
                src="/assets/images/flamingo_3_restyled.png" 
                alt="Flamingo 3" 
                className="w-full h-32 sm:h-40 md:h-48 object-contain rounded-lg mb-3 sm:mb-4
                         group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-limeGreen">Smart Insights</h3>
              <p className="text-sm sm:text-base text-beigeCream/70">
                Personalized recommendations based on your play style
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                delay: 0.4,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1.0]
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="glassmorphism p-4 sm:p-6 rounded-2xl overflow-hidden group"
            >
              <img 
                src="/assets/images/flamingo_4_restyled.png" 
                alt="Flamingo 4" 
                className="w-full h-32 sm:h-40 md:h-48 object-contain rounded-lg mb-3 sm:mb-4 
                         group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-limeGreen">Pattern Recognition</h3>
              <p className="text-sm sm:text-base text-beigeCream/70">
                Quantum-neural analysis decodes hidden patterns
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                delay: 0.5,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1.0]
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="glassmorphism p-4 sm:p-6 rounded-2xl overflow-hidden group"
            >
              <img 
                src="/assets/images/flamingo_5_restyled.png" 
                alt="Flamingo 5" 
                className="w-full h-32 sm:h-40 md:h-48 object-contain rounded-lg mb-3 sm:mb-4
                         group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-limeGreen">Probability Engine</h3>
              <p className="text-sm sm:text-base text-beigeCream/70">
                Revolutionary algorithms challenge randomness
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                delay: 0.6,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1.0]
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="glassmorphism p-4 sm:p-6 rounded-2xl overflow-hidden group"
            >
              <img 
                src="/assets/images/flamingo_6_restyled.png" 
                alt="Flamingo 6" 
                className="w-full h-32 sm:h-40 md:h-48 object-contain rounded-lg mb-3 sm:mb-4
                         group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-limeGreen">Win Strategy</h3>
              <p className="text-sm sm:text-base text-beigeCream/70">
                Beat the house with data-driven insights
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - Gambling Scandal News with Scroll Animations */}
      <section className="min-h-screen bg-raisinBlack flex items-center justify-center py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Parallax news ticker background */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-20 opacity-10"
          style={{
            x: useTransform(useScroll().scrollY, [1600, 2600], [0, -500]),
          }}
        >
          <div className="flex whitespace-nowrap text-6xl font-bold text-limeGreen">
            <span className="mx-8">BREAKING NEWS • AI BEATS THE HOUSE • </span>
            <span className="mx-8">BREAKING NEWS • AI BEATS THE HOUSE • </span>
            <span className="mx-8">BREAKING NEWS • AI BEATS THE HOUSE • </span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <GamblingNewsSection />
        </motion.div>
      </section>

      {/* Footer Section */}
      <Footer />

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-4 right-4 p-2 bg-limeGreen rounded-full 
                       text-darkGreen hover:bg-limeGreen/80 transition-colors"
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

