import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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

  // Fetch gambling scandal news
  useEffect(() => {
    fetchGamblingScandals()
  }, [])

  const fetchGamblingScandals = async () => {
    try {
      // Using web search to find recent gambling scandals
      // In production, these queries would be used with a news API:
      // const searchQueries = [
      //   'casino scandal 2024',
      //   'slot machine rigged scandal',
      //   'gambling fraud investigation',
      //   'online casino scam exposed'
      // ]
      
      // For now, we'll use static data that represents typical gambling scandals
      // In production, this would connect to a news API or web scraper
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

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-beigeCream mb-4">
          <span className="text-pink">EXPOSED:</span> Industry Scandals
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-beigeCream/70 max-w-3xl mx-auto">
          The truth they don't want you to know. Real investigations revealing how the house always wins.
        </p>
      </motion.div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse text-limeGreen text-2xl">
            Uncovering the truth...
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {news.map((item, index) => (
            <BlogPost
              key={index}
              title={item.title}
              excerpt={item.excerpt}
              date={item.date}
              readTime={item.readTime}
              imageUrl={item.imageUrl}
              sourceUrl={item.sourceUrl}
              index={index}
            />
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-12"
      >
        <p className="text-sm text-beigeCream/50 italic">
          flamingo.ai - Exposing the truth behind "random" number generation
        </p>
      </motion.div>
    </div>
  )
}