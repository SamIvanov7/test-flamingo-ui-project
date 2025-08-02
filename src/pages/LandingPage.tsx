import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import VideoBackground from '../components/VideoBackground'
import Header from '../components/Header'
import GamblingNewsSection from '../components/GamblingNewsSection'

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
      
      {/* Section 1 - Hero with Video Background */}
      <section className="relative h-screen overflow-hidden">
        <VideoBackground videoSrc="/assets/videos/intro-loop-desktop.mp4" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="relative">
              {/* Floating Image on Right */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-64 h-64 xl:w-96 xl:h-96"
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

      {/* Section 2 - Flamingo Images Gallery */}
      <section className="min-h-screen bg-darkGreen flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-0">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
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
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
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
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10 }}
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
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -10 }}
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
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -10 }}
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
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -10 }}
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

      {/* Section 3 - Gambling Scandal News */}
      <section className="min-h-screen bg-raisinBlack flex items-center justify-center py-12 sm:py-16 lg:py-20">
        <GamblingNewsSection />
      </section>

      {/* Section 4 - Footer */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Duo-colored background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-darkGreen" />
          <div className="absolute inset-0 bg-gradient-to-br from-pink/90 via-transparent to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between p-6 sm:p-8 lg:p-12">
          {/* Top Footer Content */}
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12"
            >
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <img 
                    src="/assets/images/logo-variant-3.png" 
                    alt="flamingo.ai" 
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  />
                  <h3 className="text-xl sm:text-2xl font-bold text-beigeCream">flamingo.ai</h3>
                </div>
                <p className="text-sm sm:text-base text-beigeCream/70 mb-4 sm:mb-6">
                  Revolutionizing gaming with quantum-neural analysis. 
                  We prove that true randomness is a myth.
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-limeGreen/20 rounded-full flex items-center justify-center
                             hover:bg-limeGreen/30 transition-colors"
                  >
                    <span className="text-limeGreen">𝕏</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-limeGreen/20 rounded-full flex items-center justify-center
                             hover:bg-limeGreen/30 transition-colors"
                  >
                    <span className="text-limeGreen">📧</span>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-limeGreen/20 rounded-full flex items-center justify-center
                             hover:bg-limeGreen/30 transition-colors"
                  >
                    <span className="text-limeGreen">🔗</span>
                  </motion.a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-limeGreen mb-4 sm:mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {['About Us', 'Use Case', 'Pricing', 'Blog', 'Contact'].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm sm:text-base text-beigeCream/70 hover:text-limeGreen transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-lg sm:text-xl font-semibold text-limeGreen mb-4 sm:mb-6">Stay Updated</h4>
                <p className="text-sm sm:text-base text-beigeCream/70 mb-4">
                  Get the latest updates on our quantum-neural breakthroughs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg sm:rounded-l-lg sm:rounded-r-none
                             text-beigeCream placeholder-beigeCream/50 focus:outline-none
                             focus:border-limeGreen/50 transition-colors"
                  />
                  <button className="px-6 py-3 bg-limeGreen text-darkGreen font-bold rounded-lg sm:rounded-l-none sm:rounded-r-lg
                                   hover:bg-limeGreen/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center CTA */}
          <div className="container mx-auto text-center my-12 sm:my-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-beigeCream mb-4 sm:mb-6">
                Ready to Beat the House?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-beigeCream/70 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands who've discovered that the house doesn't always win.
              </p>
              <motion.button
                onClick={() => navigate('/onboarding')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 sm:px-12 sm:py-5 bg-limeGreen text-darkGreen font-bold rounded-xl text-lg sm:text-xl
                         hover:shadow-[0_0_40px_rgba(171,248,11,0.6)] transition-all duration-300"
              >
                Start Winning Now
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="container mx-auto">
            <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs sm:text-sm text-beigeCream/60 mb-4 md:mb-0">
                © 2024 flamingo.ai. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <a href="#" className="text-beigeCream/60 hover:text-limeGreen transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-beigeCream/60 hover:text-limeGreen transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-beigeCream/60 hover:text-limeGreen transition-colors">
                  Responsible Gaming
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-pink/20 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-limeGreen/10 rounded-full blur-3xl" />
      </section>

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

