import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  imageUrl?: string
  sourceUrl?: string
  index: number
}

export default function BlogPost({ title, excerpt, date, readTime, imageUrl, sourceUrl, index }: BlogPostProps) {
  return (
    <motion.article
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="glassmorphism rounded-2xl overflow-hidden hover:border-pink/50 
                 transition-all duration-300 h-full flex flex-col group
                 hover:shadow-[0_20px_40px_rgba(229,159,206,0.2)]"
    >
      {imageUrl ? (
        <motion.div 
          className="h-48 overflow-hidden bg-gradient-to-br from-pink/20 to-limeGreen/20 relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-darkGreen/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover opacity-80 transition-transform duration-700 hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        </motion.div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-pink/10 to-limeGreen/10 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-8xl opacity-10 text-pink"
            >
              🦩
            </motion.div>
          </div>
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        <motion.div 
          className="flex items-center justify-between text-sm text-beigeCream/60 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
        >
          <motion.span
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
            className="flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </motion.span>
          <motion.span
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
            className="flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {readTime} min read
          </motion.span>
        </motion.div>
        
        <motion.h3 
          className="text-xl font-bold text-pink mb-3 line-clamp-2 group-hover:text-limeGreen transition-colors duration-300"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-beigeCream/80 line-clamp-3 mb-4 flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          {excerpt}
        </motion.p>
        
        <motion.button
          onClick={() => sourceUrl && window.open(sourceUrl, '_blank')}
          className="text-limeGreen font-semibold hover:text-limeGreen/80 transition-all duration-300 flex items-center gap-2 group/button"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Read More</span>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </motion.article>
  )
}