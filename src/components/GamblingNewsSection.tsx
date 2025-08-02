import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BlogPost from './BlogPost'

interface NewsItem {
  title: string
  excerpt: string
  date: string
  readTime: string
  imageUrl?: string
  sourceUrl?: string
}

export default function GamblingNewsSection() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [visibleCards, setVisibleCards] = useState(0)

  // Fetch gambling scandal news
  useEffect(() => {
    fetchGamblingScandals()
  }, [])

  // Animate cards appearing one by one
  useEffect(() => {
    if (!loading && news.length > 0) {
      const timer = setInterval(() => {
        setVisibleCards((prev) => {
          if (prev >= news.length) {
            clearInterval(timer)
            return prev
          }
          return prev + 1
        })
      }, 150) // Stagger cards every 150ms

      return () => clearInterval(timer)
    }
  }, [loading, news.length])

  const fetchGamblingScandals = async () => {
    try {
      // Simulate loading delay for smooth transition
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const mockNews: NewsItem[] = [
        {
          title: "Major Online Casino Caught Using Rigged RNG Software",
          excerpt: "Investigation reveals popular online casino manipulated random number generators to reduce player wins by 15%. Regulatory authorities have issued record fines.",
          date: "March 15, 2024",
          readTime: "5",
          sourceUrl: "#"
        },
        {
          title: "Slot Machine Manufacturer Admits to Programming 'Near Miss' Features",
          excerpt: "Leading slot machine manufacturer confesses to deliberately programming machines to show 'near miss' combinations more frequently than statistically probable.",
          date: "March 10, 2024", 
          readTime: "7",
          sourceUrl: "#"
        },
        {
          title: "Whistleblower Exposes Casino's Player Tracking Manipulation",
          excerpt: "Former casino employee reveals how player tracking systems were used to identify and limit winning players while encouraging problem gamblers.",
          date: "March 5, 2024",
          readTime: "6",
          sourceUrl: "#"
        },
        {
          title: "AI Analysis Proves Popular Slots Are Not Truly Random",
          excerpt: "Independent researchers using advanced AI algorithms demonstrate that several popular slot games exhibit patterns that contradict claims of true randomness.",
          date: "February 28, 2024",
          readTime: "8",
          sourceUrl: "#"
        },
        {
          title: "Class Action Lawsuit Filed Against Major Casino Chain",
          excerpt: "Thousands of players join lawsuit claiming systematic manipulation of odds and false advertising of payout percentages across multiple properties.",
          date: "February 20, 2024",
          readTime: "4",
          sourceUrl: "#"
        },
        {
          title: "Regulatory Body Fines Online Casinos $50M for RTP Violations",
          excerpt: "Gaming commission issues massive fines after audit reveals actual return-to-player percentages were significantly lower than advertised.",
          date: "February 15, 2024",
          readTime: "5",
          sourceUrl: "#"
        }
      ]
      
      setNews(mockNews)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching news:', error)
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-beigeCream mb-4">
          <motion.span 
            className="text-pink"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            EXPOSED:
          </motion.span>{' '}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Industry Scandals
          </motion.span>
        </h2>
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-beigeCream/70 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          The truth they don't want you to know. Real investigations revealing how the house always wins.
        </motion.p>
      </motion.div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center h-64"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1, repeat: Infinity }
                }}
                className="w-16 h-16 border-4 border-limeGreen/30 border-t-limeGreen rounded-full"
              />
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center text-limeGreen text-sm font-bold"
              >
                <span className="text-center">Uncovering<br/>truth...</span>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {news.slice(0, visibleCards).map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                layout
              >
                <BlogPost
                  title={item.title}
                  excerpt={item.excerpt}
                  date={item.date}
                  readTime={item.readTime}
                  imageUrl={item.imageUrl}
                  sourceUrl={item.sourceUrl}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && visibleCards >= news.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.p 
            className="text-sm text-beigeCream/50 italic"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            flamingo.ai - Exposing the truth behind "random" number generation
          </motion.p>
        </motion.div>
      )}
    </div>
  )
}