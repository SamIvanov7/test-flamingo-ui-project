import { useState, useMemo, memo, useCallback } from 'react'
import { motion } from 'framer-motion'

// Memoized news item component to prevent re-renders of individual items
const NewsCard = memo(({ 
  article, 
  index, 
  isActive,
  onClick 
}: { 
  article: any
  index: number
  isActive: boolean
  onClick: () => void
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    onClick={onClick}
    className={`glassmorphism p-6 rounded-xl cursor-pointer transition-all duration-300 ${
      isActive ? 'ring-2 ring-limeGreen shadow-lg shadow-limeGreen/20' : 'hover:shadow-md'
    }`}
  >
    <img
      src={article.image}
      alt={article.title}
      className="w-full h-48 object-cover rounded-lg mb-4"
      loading="lazy" // Lazy load images for better performance
    />
    <h3 className="text-xl font-bold text-limeGreen mb-2">
      {article.title}
    </h3>
    <p className="text-beigeCream/70 text-sm line-clamp-3">
      {article.description}
    </p>
    <div className="mt-4 flex items-center justify-between text-xs text-beigeCream/50">
      <span>{article.date}</span>
      <span className="text-pink">{article.source}</span>
    </div>
  </motion.div>
))
NewsCard.displayName = 'NewsCard'

// Main component with performance optimizations
const GamblingNewsSectionOptimized = memo(() => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null)

  // Memoize news data to prevent recreation on every render
  const newsArticles = useMemo(() => [
    {
      id: 1,
      title: "AI Beats Vegas: The Flamingo Revolution",
      description: "How one pink AI changed the game forever. Casinos scramble as players gain unprecedented advantage through pattern recognition technology.",
      image: "/assets/images/news-ai-vegas.jpg",
      date: "2 hours ago",
      source: "TechGambler",
      fullContent: "In a shocking turn of events, the Flamingo AI system has demonstrated a consistent ability to predict slot machine patterns with 87.3% accuracy..."
    },
    {
      id: 2,
      title: "Casinos Ban AI-Assisted Players",
      description: "Major casinos implement new policies against AI tools as win rates soar. The battle between house edge and technology intensifies.",
      image: "/assets/images/news-casino-ban.jpg",
      date: "5 hours ago",
      source: "Casino Weekly",
      fullContent: "Las Vegas Strip casinos are implementing stringent new policies targeting players using AI assistance..."
    },
    {
      id: 3,
      title: "The $2.3M Flamingo Win",
      description: "Player turns $100 into millions using AI predictions. The story that has casinos worldwide on high alert.",
      image: "/assets/images/news-big-win.jpg",
      date: "Yesterday",
      source: "Winners Circle",
      fullContent: "A lucky player in Atlantic City has become an overnight millionaire thanks to the Flamingo AI system..."
    },
    {
      id: 4,
      title: "Is AI Gambling Legal?",
      description: "Legal experts weigh in on the use of AI in casinos. The gray area that's reshaping gambling laws worldwide.",
      image: "/assets/images/news-legal.jpg",
      date: "2 days ago",
      source: "Legal Gaming",
      fullContent: "As AI technology becomes more prevalent in gambling, legal experts are divided on its implications..."
    }
  ], [])

  // UseCallback for click handler to prevent recreation
  const handleArticleClick = useCallback((index: number) => {
    setSelectedArticle(index === selectedArticle ? null : index)
  }, [selectedArticle])

  // Memoize selected article details to prevent recalculation
  const selectedArticleData = useMemo(() => 
    selectedArticle !== null ? newsArticles[selectedArticle] : null,
    [selectedArticle, newsArticles]
  )

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-pink">Breaking:</span>{' '}
            <span className="text-limeGreen">AI Shakes Gambling World</span>
          </h2>
          <p className="text-beigeCream/70 text-lg">
            The latest scandals and wins from the AI revolution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newsArticles.map((article, index) => (
            <NewsCard
              key={article.id}
              article={article}
              index={index}
              isActive={selectedArticle === index}
              onClick={() => handleArticleClick(index)}
            />
          ))}
        </div>

        {/* Article Details - Only renders when article is selected */}
        {selectedArticleData && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glassmorphism p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-limeGreen mb-4">
              {selectedArticleData.title}
            </h3>
            <p className="text-beigeCream/80 mb-6">
              {selectedArticleData.fullContent}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedArticle(null)}
              className="px-6 py-2 bg-pink/20 border border-pink text-pink rounded-lg
                       hover:bg-pink/30 transition-colors"
            >
              Close Article
            </motion.button>
          </motion.div>
        )}

        {/* Live ticker - Memoized to prevent unnecessary animations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden"
        >
          <div className="flex animate-scroll-left">
            <div className="flex space-x-8 text-limeGreen/50 text-sm whitespace-nowrap">
              <span>🎰 AI WIN: $45,000 on Mega Slots</span>
              <span>•</span>
              <span>📈 Flamingo Users: +2,847 today</span>
              <span>•</span>
              <span>🏆 Biggest Win Today: $128,000</span>
              <span>•</span>
              <span>⚡ Live Predictions: 98.3% accuracy</span>
              <span>•</span>
            </div>
            {/* Duplicate for seamless scroll */}
            <div className="flex space-x-8 text-limeGreen/50 text-sm whitespace-nowrap ml-8">
              <span>🎰 AI WIN: $45,000 on Mega Slots</span>
              <span>•</span>
              <span>📈 Flamingo Users: +2,847 today</span>
              <span>•</span>
              <span>🏆 Biggest Win Today: $128,000</span>
              <span>•</span>
              <span>⚡ Live Predictions: 98.3% accuracy</span>
              <span>•</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

GamblingNewsSectionOptimized.displayName = 'GamblingNewsSectionOptimized'

export default GamblingNewsSectionOptimized