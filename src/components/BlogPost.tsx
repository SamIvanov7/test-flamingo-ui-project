import { motion } from 'framer-motion'

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
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glassmorphism rounded-2xl overflow-hidden hover:border-pink/50 transition-all duration-300"
    >
      {imageUrl && (
        <div className="h-48 overflow-hidden bg-gradient-to-br from-pink/20 to-limeGreen/20">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover opacity-80"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-beigeCream/60 mb-3">
          <span>{date}</span>
          <span>{readTime} min read</span>
        </div>
        
        <h3 className="text-xl font-bold text-pink mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-beigeCream/80 line-clamp-3 mb-4">
          {excerpt}
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => sourceUrl && window.open(sourceUrl, '_blank')}
          className="text-limeGreen font-semibold hover:text-limeGreen/80 transition-colors"
        >
          Read More →
        </motion.button>
      </div>
    </motion.article>
  )
}