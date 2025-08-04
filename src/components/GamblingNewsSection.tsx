import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import BlogPost from './BlogPost'
import { Zap, AlertTriangle, TrendingUp } from 'lucide-react'

interface NewsItem {
  title: string
  excerpt: string
  date: string
  readTime: string
  imageUrl?: string
  sourceUrl?: string
  category?: 'scandal' | 'investigation' | 'lawsuit'
  trending?: boolean
}

export default function GamblingNewsSection() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const { scrollY } = useScroll()
  
  const parallaxY = useTransform(scrollY, [2000, 3000], [0, -50])
  const scaleProgress = useTransform(scrollY, [2000, 2500], [0.9, 1])

  useEffect(() => {
    fetchGamblingScandals()
  }, [])

  const fetchGamblingScandals = async () => {
    try {
      const mockNews: NewsItem[] = [
        {
          title: "Resorts World Casino Hit with $10.5M Fine in Money Laundering Scandal",
          excerpt: "Nevada Gaming Control Board exposes shocking connections to illegal bookmakers and the Shohei Ohtani interpreter scandal. Internal documents reveal systematic failures.",
          date: "March 15, 2024",
          readTime: "5",
          imageUrl: "/content/images/resorts-world-money-laundering.jpg",
          sourceUrl: "#",
          category: "scandal",
          trending: true
        },
        {
          title: "INTERPOL Raids: 5,100 Arrests in $1.7 Trillion Gambling Network",
          excerpt: "Operation SOGA X uncovers massive international gambling syndicate spanning 28 countries. Rescued trafficking victims and exposed money laundering networks.",
          date: "March 10, 2024", 
          readTime: "7",
          imageUrl: "/content/images/interpol-gambling-crackdown.jpg",
          sourceUrl: "#",
          category: "investigation"
        },
        {
          title: "Shohei Ohtani's Interpreter Steals $17 Million for Gambling Debts",
          excerpt: "Ippei Mizuhara faces 33 years in prison after pleading guilty to bank and tax fraud. Shocking details reveal 19,000 illegal bets placed.",
          date: "March 5, 2024",
          readTime: "6",
          imageUrl: "/content/images/ohtani-interpreter-theft.jpg",
          sourceUrl: "#",
          category: "scandal",
          trending: true
        },
        {
          title: "Southeast Asian Casinos: Dark Heart of Cyber Fraud Networks",
          excerpt: "UN report exposes how casino industry facilitates pig-butchering scams and human trafficking. Hundreds of thousands forced into scamming compounds.",
          date: "February 28, 2024",
          readTime: "8",
          imageUrl: "/content/images/southeast-asia-casino-fraud.jpg",
          sourceUrl: "#",
          category: "investigation"
        },
        {
          title: "NBA's First Lifetime Ban: Jontay Porter's Betting Manipulation",
          excerpt: "Former Raptor provided injury information to gamblers, bet on NBA games, and manipulated his playing availability. Historic ruling by Commissioner Adam Silver.",
          date: "February 20, 2024",
          readTime: "4",
          imageUrl: "/content/images/jontay-porter-lifetime-ban.jpg",
          sourceUrl: "#",
          category: "lawsuit"
        },
        {
          title: "MGM Resorts Pays $8.5M Fine for Illegal Bookmaker Connections",
          excerpt: "Nevada Gaming Control Board reveals MGM Grand and Cosmopolitan's ties to illegal bookmaker Wayne Nix. Settlement exposes systematic failures in compliance.",
          date: "February 15, 2024",
          readTime: "5",
          imageUrl: "/content/images/mgm-resorts-fine.jpg",
          sourceUrl: "#",
          category: "scandal"
        }
      ]
      
      setNews(mockNews)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching news:', error)
      setLoading(false)
    }
  }

  const categoryIcons = {
    scandal: <Zap className="w-4 h-4" />,
    investigation: <AlertTriangle className="w-4 h-4" />,
    lawsuit: <TrendingUp className="w-4 h-4" />
  }

  const categoryColors = {
    scandal: 'bg-pink/20 text-pink border-pink/30',
    investigation: 'bg-limeGreen/20 text-limeGreen border-limeGreen/30',
    lawsuit: 'bg-beigeCream/20 text-beigeCream border-beigeCream/30'
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
        style={{ y: parallaxY }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          className="inline-flex items-center gap-2 px-6 py-2 bg-pink/10 border border-pink/30 rounded-full mb-6"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink"></span>
          </span>
          <span className="text-pink font-semibold text-sm uppercase tracking-wider">Breaking News</span>
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          style={{ scale: scaleProgress }}
        >
          <motion.span 
            className="text-pink inline-block"
            initial={{ rotateX: -90, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            EXPOSED:
          </motion.span>{' '}
          <motion.span 
            className="text-beigeCream inline-block"
            initial={{ rotateX: 90, opacity: 0 }}
            whileInView={{ rotateX: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Industry Scandals
          </motion.span>
        </motion.h2>
        
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-beigeCream/70 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          The truth they don't want you to know. Real investigations revealing how the house always wins.
        </motion.p>
      </motion.div>

      {loading ? (
        <motion.div 
          className="flex items-center justify-center h-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative">
            <motion.div
              className="w-20 h-20 border-4 border-pink/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-limeGreen rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.p
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-limeGreen text-lg font-semibold"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Uncovering the truth...
            </motion.p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              className="relative"
            >
              {item.trending && (
                <motion.div
                  className="absolute -top-3 -right-3 z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-limeGreen blur-xl opacity-50 animate-pulse" />
                    <div className="relative bg-limeGreen text-darkGreen px-3 py-1 rounded-full text-xs font-bold uppercase">
                      🔥 Trending
                    </div>
                  </div>
                </motion.div>
              )}
              
              {item.category && (
                <motion.div
                  className={`absolute -top-3 left-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[item.category]}`}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {categoryIcons[item.category]}
                  <span className="capitalize">{item.category}</span>
                </motion.div>
              )}
              
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-16"
      >
        <motion.div
          className="inline-flex items-center gap-4 text-sm text-beigeCream/50 italic"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="w-8 h-[1px] bg-beigeCream/30"
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            transition={{ delay: 1, duration: 0.6 }}
          />
          <p>flamingo.ai - Exposing the truth behind "random" number generation</p>
          <motion.div
            className="w-8 h-[1px] bg-beigeCream/30"
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            transition={{ delay: 1, duration: 0.6 }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}