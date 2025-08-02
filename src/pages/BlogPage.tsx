import { motion } from 'framer-motion'
import { useState } from 'react'
import BlogPost from '../components/BlogPost'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'strategies', name: 'Winning Strategies', count: 8 },
    { id: 'exposes', name: 'Casino Exposés', count: 6 },
    { id: 'tutorials', name: 'AI Tutorials', count: 5 },
    { id: 'news', name: 'Industry News', count: 5 }
  ]

  const featuredPost = {
    title: "How We Cracked MGM's 'Unbreakable' RNG Algorithm",
    excerpt: "Our AI discovered a critical flaw in MGM's random number generation that they've been hiding for years. Here's the pattern that cost them millions.",
    date: "March 20, 2024",
    readTime: "12",
    category: "exposes",
    imageUrl: "/assets/images/blog-featured.jpg"
  }

  const blogPosts = [
    {
      title: "The Mathematics Behind Slot Machine 'Randomness'",
      excerpt: "Dive deep into the pseudo-random number generators used by major casinos and learn why true randomness is a myth they're selling you.",
      date: "March 18, 2024",
      readTime: "8",
      category: "strategies",
      trending: true
    },
    {
      title: "5 Patterns Casinos Don't Want You to Notice",
      excerpt: "Our AI has identified recurring patterns across 50+ online casinos. These are the red flags that indicate when the house is tightening the odds.",
      date: "March 15, 2024",
      readTime: "6",
      category: "strategies",
      trending: true
    },
    {
      title: "Exposed: How Live Dealers Are Trained to Manipulate",
      excerpt: "Former casino employee reveals the psychological tricks and physical techniques dealers use to influence game outcomes.",
      date: "March 12, 2024",
      readTime: "10",
      category: "exposes"
    },
    {
      title: "Beginner's Guide to Pattern Recognition in Slots",
      excerpt: "Start identifying profitable patterns with our step-by-step tutorial. No advanced math required - just follow our AI's guidance.",
      date: "March 10, 2024",
      readTime: "7",
      category: "tutorials"
    },
    {
      title: "Why Tuesday 3AM is the Best Time to Play (Data Proof)",
      excerpt: "Our analysis of 2.7 million spins reveals shocking time-based patterns in casino algorithms. Here's when they're most vulnerable.",
      date: "March 8, 2024",
      readTime: "5",
      category: "strategies"
    },
    {
      title: "Breaking: EU Investigates Major Casino for RNG Fraud",
      excerpt: "Following our exposé, European regulators launch formal investigation into systematic RNG manipulation. Industry insiders are panicking.",
      date: "March 5, 2024",
      readTime: "4",
      category: "news"
    },
    {
      title: "The $50K Weekend: User Success Story",
      excerpt: "How David M. used Flamingo AI to turn a $500 bankroll into $50,000 over one weekend. Verified results with screenshots.",
      date: "March 3, 2024",
      readTime: "9",
      category: "strategies"
    },
    {
      title: "Casino CEO's Leaked Email Confirms Our Theories",
      excerpt: "Whistleblower shares internal communications proving casinos actively monitor and limit winning players. The truth is worse than we thought.",
      date: "February 28, 2024",
      readTime: "11",
      category: "exposes"
    },
    {
      title: "Advanced AI Settings for Maximum Pattern Detection",
      excerpt: "Optimize your Flamingo AI configuration with these pro tips. Increase pattern detection accuracy by up to 15%.",
      date: "February 25, 2024",
      readTime: "8",
      category: "tutorials"
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-darkGreen via-raisinBlack to-darkGreen"
    >
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="text-limeGreen">Exposing</span>{' '}
              <span className="text-pink">the Truth</span>
            </h1>
            <p className="text-xl text-beigeCream/80 max-w-3xl mx-auto">
              Insider secrets, winning strategies, and hard evidence that casinos are rigging the game. 
              Knowledge they've spent millions trying to suppress.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glassmorphism rounded-3xl p-8 mb-12 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <span className="bg-pink text-darkGreen px-4 py-1 rounded-full text-sm font-bold">
                FEATURED
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 text-sm text-beigeCream/60 mb-4">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime} min read</span>
                  <span>•</span>
                  <span className="text-pink">Casino Exposés</span>
                </div>
                <h2 className="text-3xl font-bold text-limeGreen mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-beigeCream/80 mb-6">
                  {featuredPost.excerpt}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-limeGreen text-darkGreen font-bold rounded-xl
                           hover:shadow-[0_0_20px_rgba(171,248,11,0.5)] transition-all"
                >
                  Read Full Exposé →
                </motion.button>
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-pink/20 to-limeGreen/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl opacity-50">🎰</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-limeGreen text-darkGreen'
                    : 'glassmorphism text-beigeCream hover:bg-white/10'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div key={index} className="relative">
                {post.trending && (
                  <div className="absolute -top-3 left-4 z-10">
                    <span className="bg-pink text-darkGreen px-3 py-1 rounded-full text-xs font-bold">
                      🔥 TRENDING
                    </span>
                  </div>
                )}
                <BlogPost
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  index={index}
                />
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 glassmorphism rounded-xl font-semibold text-limeGreen
                       hover:bg-white/10 transition-all"
            >
              Load More Articles
            </motion.button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-raisinBlack/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-pink">Never Miss</span>{' '}
              <span className="text-limeGreen">an Edge</span>
            </h2>
            <p className="text-lg text-beigeCream/80 mb-8">
              Get exclusive strategies, insider leaks, and pattern alerts delivered to your inbox. 
              The kind of information casinos pay millions to keep secret.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-xl
                         text-beigeCream placeholder-beigeCream/50 focus:outline-none
                         focus:border-limeGreen/50 transition-colors"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-limeGreen text-darkGreen font-bold rounded-xl
                         hover:shadow-[0_0_20px_rgba(171,248,11,0.5)] transition-all"
              >
                Subscribe
              </motion.button>
            </form>
            
            <p className="text-sm text-beigeCream/60 mt-4">
              Join 25,000+ readers • Unsubscribe anytime • We expose casinos, not your data
            </p>
          </motion.div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-xl font-bold text-limeGreen mb-6">Popular Topics</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'RNG Exploits', 'Pattern Detection', 'Slot Strategies', 'Live Casino Bias',
              'Bonus Hunting', 'Casino Leaks', 'AI Configuration', 'Success Stories',
              'Legal Updates', 'Whistleblower Reports', 'Time-based Patterns', 'VIP Secrets'
            ].map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 glassmorphism rounded-full text-sm text-beigeCream/80
                         hover:bg-white/10 cursor-pointer transition-all"
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}