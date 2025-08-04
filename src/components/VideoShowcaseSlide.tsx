import { motion } from 'framer-motion'
import VideoBackgroundClean from './VideoBackgroundClean'
import { BeamsBackground } from './BeamsBackground'
import InteractiveVideoPlayer from './InteractiveVideoPlayer'

export default function VideoShowcaseSlide() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-raisinBlack">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <VideoBackgroundClean videoSrc="/assets/videos/intro-loop-desktop.mp4" />
      </div>
      
      {/* Focused Beams Background */}
      <div className="absolute inset-0">
        <BeamsBackground intensity="medium" className="opacity-60" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.span 
                className="text-pink inline-block uppercase"
                initial={{ rotateX: -90, opacity: 0 }}
                whileInView={{ rotateX: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                This isn't an ad.
              </motion.span>
              <br />
              <motion.span 
                className="text-beigeCream inline-block"
                initial={{ rotateX: 90, opacity: 0 }}
                whileInView={{ rotateX: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                It's a surveillance recording of the future.
              </motion.span>
            </motion.h2>
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-beigeCream/70 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              We recorded real sessions of our agents so you can see how knowledge turns into results. 
              Watch as Floyd cracks the math of slots live.
            </motion.p>
          </motion.div>
          
          {/* Interactive Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <InteractiveVideoPlayer />
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
          >
            <motion.button
              onClick={() => window.location.href = '/pricing'}
              className="px-8 py-4 bg-transparent border-2 border-limeGreen text-limeGreen font-bold rounded-xl text-base sm:text-lg uppercase tracking-wider
                       hover:bg-limeGreen/10 hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              I WANT THE SAME ADVANTAGE
            </motion.button>
            
            <motion.a
              href="/use-case"
              className="text-beigeCream/60 hover:text-limeGreen transition-colors duration-300 flex items-center gap-2 group"
              whileHover={{ x: 5 }}
            >
              Watch all demos and technical breakdowns
              <motion.span
                className="inline-block text-limeGreen"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}