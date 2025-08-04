import { motion } from 'framer-motion'
import { ArrowRight, Clock, Calendar, ExternalLink } from 'lucide-react'

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  imageUrl?: string
  sourceUrl?: string
  index: number
  onImageError?: () => void
}

export default function BlogPost({ title, excerpt, date, readTime, imageUrl, sourceUrl, index, onImageError }: BlogPostProps) {
  return (
    <motion.article
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full flex flex-col group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-darkGreen/40 via-raisinBlack/40 to-darkGreen/40 backdrop-blur-sm border border-beigeCream/10 hover:border-limeGreen/30 transition-all duration-300"
      role="article"
      aria-label={`News article: ${title}`}
    >
      {/* Animated background gradient on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink/5 via-transparent to-limeGreen/5" />
        <motion.div
          className="absolute -inset-40 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(171, 248, 11, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(255, 111, 185, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(171, 248, 11, 0.15) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </motion.div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: 'linear-gradient(45deg, rgba(171, 248, 11, 0.2), rgba(255, 111, 185, 0.2))',
          filter: 'blur(10px)'
        }}
      />

      {imageUrl ? (
        <motion.div 
          className="relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br from-pink/20 to-limeGreen/20"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-darkGreen/90 via-darkGreen/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10"
          />
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
              onImageError?.()
            }}
          />
          {/* Scan line effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 z-20"
            initial={false}
          >
            <motion.div
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-limeGreen to-transparent"
              animate={{
                y: [-48, 192]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>
      ) : (
        <div className="h-40 sm:h-48 bg-gradient-to-br from-pink/10 to-limeGreen/10 flex items-center justify-center relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(255, 111, 185, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(171, 248, 11, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(255, 111, 185, 0.1) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="text-6xl font-bold text-beigeCream/10"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          >
            SCANDAL
          </motion.div>
        </div>
      )}
      
      <div className="p-4 sm:p-6 flex-1 flex flex-col relative z-10">
        <motion.div 
          className="flex items-center justify-between text-sm text-beigeCream/60 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {readTime} min
            </span>
          </div>
        </motion.div>
        
        <motion.h3 
          className="text-lg sm:text-xl font-bold text-pink mb-3 line-clamp-2 group-hover:text-limeGreen transition-colors duration-300"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-sm sm:text-base text-beigeCream/80 line-clamp-3 mb-4 sm:mb-6 flex-1 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          {excerpt}
        </motion.p>
        
        <motion.button
          onClick={() => sourceUrl && window.open(sourceUrl, '_blank')}
          className="relative text-sm sm:text-base text-limeGreen font-semibold hover:text-limeGreen/80 transition-all duration-300 flex items-center gap-2 group/button focus:outline-none focus:ring-2 focus:ring-limeGreen/50 rounded-lg px-3 sm:px-4 py-2 -ml-3 sm:-ml-4"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          tabIndex={0}
          aria-label={`Read more about ${title}`}
        >
          <span className="relative">
            Read Full Story
            <motion.div
              className="absolute -bottom-1 left-0 h-px bg-limeGreen origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </span>
          <motion.div
            className="flex items-center"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowRight className="w-4 h-4" />
            <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover/button:opacity-100 transition-opacity" />
          </motion.div>
        </motion.button>
      </div>

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity"
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 1, rotate: 45 }}
        transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
      >
        <div className="w-full h-full bg-gradient-to-br from-limeGreen to-transparent" />
      </motion.div>
    </motion.article>
  )
}