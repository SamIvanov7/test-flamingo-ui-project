import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Search, Filter, TrendingUp, Clock, Calendar, Tag, ChevronDown, X, ArrowUp } from 'lucide-react'
import BlogPost from '../components/BlogPost'

export default function BlogPage() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'date' | 'popular' | 'readTime'>('date')
  const [showFilters, setShowFilters] = useState(false)
  const [visiblePosts, setVisiblePosts] = useState(9)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [showScrollTop, setShowScrollTop] = useState(false)
  
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.7])
  const heroScale = useTransform(scrollY, [0, 200], [1, 0.95])

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Show/hide scroll to top button
  useState(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const categories = [
    { id: 'all', name: t('blog.categories.all'), count: 24 },
    { id: 'strategies', name: t('blog.categories.strategies'), count: 8 },
    { id: 'exposes', name: t('blog.categories.exposes'), count: 6 },
    { id: 'tutorials', name: t('blog.categories.tutorials'), count: 5 },
    { id: 'news', name: t('blog.categories.news'), count: 5 }
  ]

  const featuredPost = {
    title: t('blog.featured.title'),
    excerpt: t('blog.featured.excerpt'),
    date: "March 20, 2024",
    readTime: "12",
    category: "exposes",
    author: t('blog.featured.author'),
    imageUrl: "/assets/images/blog-featured.jpg",
    views: 15420,
    trending: true
  }

  const blogPosts = [
    {
      id: 1,
      title: t('blog.posts.post1.title'),
      excerpt: t('blog.posts.post1.excerpt'),
      date: "March 18, 2024",
      readTime: "8",
      category: "strategies",
      author: "Dr. Sarah Chen",
      trending: true,
      views: 8932,
      tags: ['RNG', 'Mathematics', 'Patterns']
    },
    {
      id: 2,
      title: t('blog.posts.post2.title'),
      excerpt: t('blog.posts.post2.excerpt'),
      date: "March 15, 2024",
      readTime: "6",
      category: "strategies",
      author: "Michael Torres",
      trending: true,
      views: 12847,
      tags: ['Patterns', 'AI Analysis', 'Tips']
    },
    {
      id: 3,
      title: t('blog.posts.post3.title'),
      excerpt: t('blog.posts.post3.excerpt'),
      date: "March 12, 2024",
      readTime: "10",
      category: "exposes",
      author: "Anonymous Whistleblower",
      views: 6721,
      tags: ['Live Casino', 'Manipulation', 'Expose']
    },
    {
      id: 4,
      title: t('blog.posts.post4.title'),
      excerpt: t('blog.posts.post4.excerpt'),
      date: "March 10, 2024",
      readTime: "7",
      category: "tutorials",
      author: "Alex Kumar",
      views: 4523,
      tags: ['Tutorial', 'Beginners', 'Patterns']
    },
    {
      id: 5,
      title: t('blog.posts.post5.title'),
      excerpt: t('blog.posts.post5.excerpt'),
      date: "March 8, 2024",
      readTime: "5",
      category: "strategies",
      author: "Data Science Team",
      views: 9876,
      tags: ['Timing', 'Data Analysis', 'Strategy']
    },
    {
      id: 6,
      title: t('blog.posts.post6.title'),
      excerpt: t('blog.posts.post6.excerpt'),
      date: "March 5, 2024",
      readTime: "4",
      category: "news",
      author: "Legal Team",
      views: 11234,
      tags: ['Legal', 'EU', 'Investigation']
    },
    {
      id: 7,
      title: t('blog.posts.post7.title'),
      excerpt: t('blog.posts.post7.excerpt'),
      date: "March 3, 2024",
      readTime: "9",
      category: "strategies",
      author: "Community Team",
      views: 18765,
      tags: ['Success Story', 'User Experience', 'Verified']
    },
    {
      id: 8,
      title: t('blog.posts.post8.title'),
      excerpt: t('blog.posts.post8.excerpt'),
      date: "February 28, 2024",
      readTime: "11",
      category: "exposes",
      author: "Investigation Unit",
      views: 14321,
      tags: ['Whistleblower', 'Leaked', 'Evidence']
    },
    {
      id: 9,
      title: t('blog.posts.post9.title'),
      excerpt: t('blog.posts.post9.excerpt'),
      date: "February 25, 2024",
      readTime: "8",
      category: "tutorials",
      author: "Tech Support",
      views: 3456,
      tags: ['Advanced', 'Configuration', 'AI']
    },
    {
      id: 10,
      title: t('blog.posts.post10.title'),
      excerpt: t('blog.posts.post10.excerpt'),
      date: "February 22, 2024",
      readTime: "6",
      category: "news",
      author: "Industry Watch",
      views: 7890,
      tags: ['Regulation', 'Updates', 'Industry']
    },
    {
      id: 11,
      title: t('blog.posts.post11.title'),
      excerpt: t('blog.posts.post11.excerpt'),
      date: "February 20, 2024",
      readTime: "12",
      category: "exposes",
      author: "Security Research",
      views: 21098,
      tags: ['Security', 'Vulnerability', 'Breaking']
    },
    {
      id: 12,
      title: t('blog.posts.post12.title'),
      excerpt: t('blog.posts.post12.excerpt'),
      date: "February 18, 2024",
      readTime: "5",
      category: "tutorials",
      author: "Getting Started Team",
      views: 5432,
      tags: ['Beginners', 'Guide', 'Setup']
    }
  ]

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.author.toLowerCase().includes(query)
      )
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.views - a.views
        case 'readTime':
          return parseInt(a.readTime) - parseInt(b.readTime)
        case 'date':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
    })

    return filtered
  }, [selectedCategory, searchQuery, sortBy])

  const displayedPosts = filteredAndSortedPosts.slice(0, visiblePosts)
  const hasMorePosts = visiblePosts < filteredAndSortedPosts.length

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterStatus('loading')
    
    // Simulate API call
    setTimeout(() => {
      setNewsletterStatus('success')
      setNewsletterEmail('')
      setTimeout(() => setNewsletterStatus('idle'), 3000)
    }, 1500)
  }

  const popularTags = [
    'RNG Exploits', 'Pattern Detection', 'Slot Strategies', 'Live Casino Bias',
    'Bonus Hunting', 'Casino Leaks', 'AI Configuration', 'Success Stories',
    'Legal Updates', 'Whistleblower Reports', 'Time-based Patterns', 'VIP Secrets'
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const cardHoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-darkGreen via-raisinBlack to-darkGreen"
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-limeGreen/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        className="py-20 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
            style={{ opacity: heroOpacity, scale: heroScale }}
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
            >
              <motion.span 
                className="text-limeGreen inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t('blog.hero.title')}
              </motion.span>{' '}
              <motion.span 
                className="text-pink inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {t('blog.hero.subtitle')}
              </motion.span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-beigeCream/80 max-w-3xl mx-auto"
            >
              {t('blog.hero.description')}
            </motion.p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <motion.div 
                className="flex-1 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-beigeCream/50" />
                <input
                  type="text"
                  placeholder={t('blog.search.placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl
                           text-beigeCream placeholder-beigeCream/50 focus:outline-none
                           focus:border-limeGreen/50 focus:bg-white/15 transition-all duration-300"
                />
              </motion.div>
              
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-6 py-3 glassmorphism rounded-xl font-semibold text-beigeCream
                           hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <Filter className="w-4 h-4" />
                  {t('blog.filters.button')}
                  <motion.div
                    animate={{ rotate: showFilters ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <motion.select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl
                           text-beigeCream focus:outline-none focus:border-limeGreen/50
                           transition-all duration-300 cursor-pointer hover:bg-white/15"
                >
                  <option value="date" className="bg-darkGreen">{t('blog.sort.date')}</option>
                  <option value="popular" className="bg-darkGreen">{t('blog.sort.popular')}</option>
                  <option value="readTime" className="bg-darkGreen">{t('blog.sort.readTime')}</option>
                </motion.select>
              </div>
            </div>

            {/* Expandable Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ 
                    height: { duration: 0.4, ease: "easeInOut" },
                    opacity: { duration: 0.3 }
                  }}
                  className="overflow-hidden"
                >
                  <motion.div 
                    className="mt-4 p-6 glassmorphism rounded-xl"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-limeGreen mb-3">{t('blog.filters.categories')}</h3>
                        <div className="space-y-2">
                          {categories.map((category, index) => (
                            <motion.label 
                              key={category.id} 
                              className="flex items-center cursor-pointer group"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ x: 5 }}
                            >
                              <input
                                type="radio"
                                name="category"
                                checked={selectedCategory === category.id}
                                onChange={() => setSelectedCategory(category.id)}
                                className="mr-2 text-limeGreen"
                              />
                              <span className="text-beigeCream/80 group-hover:text-beigeCream transition-colors">
                                {category.name} ({category.count})
                              </span>
                            </motion.label>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-limeGreen mb-3">{t('blog.filters.popularTags')}</h3>
                        <div className="flex flex-wrap gap-2">
                          {popularTags.slice(0, 8).map((tag, index) => (
                            <motion.button
                              key={tag}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => setSearchQuery(tag)}
                              className="px-3 py-1 bg-white/10 rounded-full text-sm text-beigeCream/80
                                       hover:bg-white/20 hover:text-beigeCream transition-all duration-300"
                            >
                              #{tag}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
            whileHover="hover"
            variants={cardHoverVariants}
            className="glassmorphism rounded-3xl p-8 mb-12 relative overflow-hidden cursor-pointer"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-pink/5 to-limeGreen/5"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              {featuredPost.trending && (
                <motion.span 
                  className="bg-pink/20 text-pink px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <TrendingUp className="w-4 h-4" />
                  {t('blog.badges.trending')}
                </motion.span>
              )}
              <motion.span 
                className="bg-limeGreen text-darkGreen px-4 py-1 rounded-full text-sm font-bold"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {t('blog.badges.featured')}
              </motion.span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              >
                <div className="flex items-center space-x-4 text-sm text-beigeCream/60 mb-4">
                  <motion.span 
                    className="flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </motion.span>
                  <span>•</span>
                  <motion.span 
                    className="flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime} {t('blog.readTime')}
                  </motion.span>
                  <span>•</span>
                  <span className="text-pink">{categories.find(c => c.id === featuredPost.category)?.name}</span>
                </div>
                <h2 className="text-3xl font-bold text-limeGreen mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-beigeCream/80 mb-4">
                  {featuredPost.excerpt}
                </p>
                <p className="text-sm text-beigeCream/60 mb-6">
                  {t('blog.by')} <span className="text-pink font-semibold">{featuredPost.author}</span> • 
                  {featuredPost.views.toLocaleString()} {t('blog.views')}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-limeGreen text-darkGreen font-bold rounded-xl
                           hover:shadow-[0_0_20px_rgba(171,248,11,0.5)] transition-all duration-300"
                >
                  {t('blog.readMore')} →
                </motion.button>
              </motion.div>
              
              <motion.div 
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-pink/20 to-limeGreen/20"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              >
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-6xl font-bold text-pink/30 mb-2"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      MGM
                    </motion.div>
                    <motion.div 
                      className="text-xl text-limeGreen/30"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      RNG EXPOSED
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section className="py-16">
        <div className="container mx-auto px-6">
          {/* Results Summary */}
          <AnimatePresence>
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-8 flex items-center justify-between"
              >
                <p className="text-beigeCream/80">
                  {t('blog.search.results', { count: filteredAndSortedPosts.length, query: searchQuery })}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSearchQuery('')}
                  className="flex items-center gap-2 text-pink hover:text-pink/80 transition-colors"
                >
                  <X className="w-4 h-4" />
                  {t('blog.search.clear')}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Blog Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence mode="popLayout">
              {displayedPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ 
                    opacity: 0, 
                    scale: 0.8,
                    transition: { duration: 0.2 }
                  }}
                  whileHover="hover"
                  className="relative"
                >
                  {post.trending && (
                    <motion.div 
                      className="absolute -top-3 left-4 z-10"
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      <span className="bg-pink text-darkGreen px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {t('blog.badges.trending')}
                      </span>
                    </motion.div>
                  )}
                  
                  <motion.div
                    variants={cardHoverVariants}
                    className="h-full glassmorphism rounded-2xl overflow-hidden hover:border-pink/50 transition-all duration-300 flex flex-col"
                  >
                    <BlogPost
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      readTime={post.readTime}
                      index={index}
                    />
                    
                    <motion.div 
                      className="px-6 pb-4 mt-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <div className="flex items-center justify-between text-sm text-beigeCream/60 mb-3">
                        <span>{post.author}</span>
                        <span>{post.views.toLocaleString()} {t('blog.views')}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            className="px-2 py-1 bg-white/10 rounded-full text-xs text-beigeCream/70"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.05 + tagIndex * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Tag className="w-3 h-3 inline mr-1" />
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More / No Results */}
          {filteredAndSortedPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-beigeCream/60 mb-4">{t('blog.search.noResults')}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="px-6 py-3 glassmorphism rounded-xl font-semibold text-limeGreen
                         hover:bg-white/10 transition-all"
              >
                {t('blog.search.resetFilters')}
              </motion.button>
            </motion.div>
          ) : hasMorePosts && (
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setVisiblePosts(prev => prev + 6)}
                className="px-8 py-3 glassmorphism rounded-xl font-semibold text-limeGreen
                         hover:bg-white/10 transition-all duration-300 group"
              >
                <motion.span
                  initial={{ display: "inline-block" }}
                  whileHover={{ y: -2 }}
                >
                  {t('blog.loadMore')} ({filteredAndSortedPosts.length - visiblePosts} {t('blog.remaining')})
                </motion.span>
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        className="py-20 bg-raisinBlack/50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-pink/5 via-transparent to-limeGreen/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ backgroundSize: "200% 200%" }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-pink">{t('blog.newsletter.title')}</span>{' '}
              <span className="text-limeGreen">{t('blog.newsletter.subtitle')}</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-beigeCream/80 mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('blog.newsletter.description')}
            </motion.p>
            
            <motion.form 
              onSubmit={handleNewsletterSubmit} 
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.input
                type="email"
                placeholder={t('blog.newsletter.placeholder')}
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                disabled={newsletterStatus === 'loading'}
                whileFocus={{ scale: 1.02 }}
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-xl
                         text-beigeCream placeholder-beigeCream/50 focus:outline-none
                         focus:border-limeGreen/50 focus:bg-white/15 transition-all duration-300 disabled:opacity-50"
              />
              <motion.button
                type="submit"
                disabled={newsletterStatus === 'loading'}
                whileHover={{ scale: newsletterStatus === 'loading' ? 1 : 1.05 }}
                whileTap={{ scale: newsletterStatus === 'loading' ? 1 : 0.95 }}
                className={`px-8 py-3 font-bold rounded-xl transition-all duration-300 ${
                  newsletterStatus === 'success' 
                    ? 'bg-green-500 text-white' 
                    : newsletterStatus === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-limeGreen text-darkGreen hover:shadow-[0_0_20px_rgba(171,248,11,0.5)]'
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={newsletterStatus}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {newsletterStatus === 'loading' && t('blog.newsletter.subscribing')}
                    {newsletterStatus === 'success' && t('blog.newsletter.success')}
                    {newsletterStatus === 'error' && t('blog.newsletter.error')}
                    {newsletterStatus === 'idle' && t('blog.newsletter.subscribe')}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </motion.form>
            
            <motion.p 
              className="text-sm text-beigeCream/60 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t('blog.newsletter.privacy')}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Popular Tags Cloud */}
      <motion.section 
        className="py-12 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <motion.h3 
            className="text-xl font-bold text-limeGreen mb-6"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            {t('blog.tags.title')}
          </motion.h3>
          <motion.div 
            className="flex flex-wrap gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {popularTags.map((tag) => (
              <motion.button
                key={tag}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setSearchQuery(tag)
                  scrollToTop()
                }}
                className="px-4 py-2 glassmorphism rounded-full text-sm text-beigeCream/80
                         hover:bg-white/10 cursor-pointer transition-all duration-300 flex items-center gap-1
                         hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-limeGreen text-darkGreen rounded-full
                     shadow-lg hover:shadow-[0_0_20px_rgba(171,248,11,0.5)] transition-all duration-300 z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  )
}