import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { 
  FiChevronDown, 
  FiSearch, 
  FiX, 
  FiGlobe,
  FiCpu,
  FiTarget,
  FiUser,
  FiShield,
  FiCreditCard,
  FiTrendingUp,
  FiCode,
  FiAlertCircle,
  FiArrowRight,
  FiZap,
  FiLock,
  FiDollarSign,
  FiActivity,
  FiUsers,
  FiHelpCircle,
  FiBookOpen,
  FiMessageSquare
} from 'react-icons/fi'

export default function FAQPage() {
  const { t } = useTranslation()
  const [expandedSection, setExpandedSection] = useState<string | null>('general')
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<string>('all')

  // Define icons mapping
  const iconMap: { [key: string]: React.ReactNode } = {
    general: <FiGlobe className="w-6 h-6" />,
    technology: <FiCpu className="w-6 h-6" />,
    usage: <FiTarget className="w-6 h-6" />,
    floyd: <FiUser className="w-6 h-6" />,
    security: <FiShield className="w-6 h-6" />,
    subscription: <FiCreditCard className="w-6 h-6" />,
    results: <FiTrendingUp className="w-6 h-6" />,
    technical: <FiCode className="w-6 h-6" />,
    responsible: <FiAlertCircle className="w-6 h-6" />
  }

  const faqSections = [
    {
      id: 'general',
      title: t('faq.sections.general.title'),
      questions: [
        {
          id: 'what-is-wintuition',
          question: t('faq.sections.general.q1.question'),
          answer: t('faq.sections.general.q1.answer'),
          tags: ['basics', 'introduction']
        },
        {
          id: 'is-it-legal',
          question: t('faq.sections.general.q2.question'),
          answer: t('faq.sections.general.q2.answer'),
          tags: ['legal', 'security']
        },
        {
          id: 'who-behind-project',
          question: t('faq.sections.general.q3.question'),
          answer: t('faq.sections.general.q3.answer'),
          tags: ['team', 'about']
        },
        {
          id: 'how-different',
          question: t('faq.sections.general.q4.question'),
          answer: t('faq.sections.general.q4.answer'),
          tags: ['comparison', 'features']
        }
      ]
    },
    {
      id: 'technology',
      title: t('faq.sections.technology.title'),
      questions: [
        {
          id: 'how-prediction-works',
          question: t('faq.sections.technology.q1.question'),
          answer: t('faq.sections.technology.q1.answer'),
          tags: ['quantum', 'prediction']
        },
        {
          id: 'why-not-100-percent',
          question: t('faq.sections.technology.q2.question'),
          answer: t('faq.sections.technology.q2.answer'),
          tags: ['accuracy', 'limitations']
        },
        {
          id: 'prediction-failed',
          question: t('faq.sections.technology.q3.question'),
          answer: t('faq.sections.technology.q3.answer'),
          tags: ['troubleshooting', 'accuracy']
        },
        {
          id: 'what-is-quantum-request',
          question: t('faq.sections.technology.q4.question'),
          answer: t('faq.sections.technology.q4.answer'),
          tags: ['quantum', 'process']
        }
      ]
    },
    {
      id: 'usage',
      title: t('faq.sections.usage.title'),
      questions: [
        {
          id: 'how-to-start',
          question: t('faq.sections.usage.q1.question'),
          answer: t('faq.sections.usage.q1.answer'),
          tags: ['getting-started', 'guide']
        },
        {
          id: 'analyze-every-spin',
          question: t('faq.sections.usage.q2.question'),
          answer: t('faq.sections.usage.q2.answer'),
          tags: ['strategy', 'efficiency']
        },
        {
          id: 'common-mistakes',
          question: t('faq.sections.usage.q3.question'),
          answer: t('faq.sections.usage.q3.answer'),
          tags: ['tips', 'best-practices']
        },
        {
          id: 'which-slots',
          question: t('faq.sections.usage.q4.question'),
          answer: t('faq.sections.usage.q4.answer'),
          tags: ['compatibility', 'games']
        }
      ]
    },
    {
      id: 'floyd',
      title: t('faq.sections.floyd.title'),
      questions: [
        {
          id: 'who-is-floyd',
          question: t('faq.sections.floyd.q1.question'),
          answer: t('faq.sections.floyd.q1.answer'),
          tags: ['ai', 'assistant']
        },
        {
          id: 'floyd-personality',
          question: t('faq.sections.floyd.q2.question'),
          answer: t('faq.sections.floyd.q2.answer'),
          tags: ['personality', 'features']
        },
        {
          id: 'floyd-learning',
          question: t('faq.sections.floyd.q3.question'),
          answer: t('faq.sections.floyd.q3.answer'),
          tags: ['ai', 'learning']
        },
        {
          id: 'floyd-predictions',
          question: t('faq.sections.floyd.q4.question'),
          answer: t('faq.sections.floyd.q4.answer'),
          tags: ['predictions', 'recommendations']
        }
      ]
    },
    {
      id: 'security',
      title: t('faq.sections.security.title'),
      questions: [
        {
          id: 'casino-detect',
          question: t('faq.sections.security.q1.question'),
          answer: t('faq.sections.security.q1.answer'),
          tags: ['detection', 'safety']
        },
        {
          id: 'data-privacy',
          question: t('faq.sections.security.q2.question'),
          answer: t('faq.sections.security.q2.answer'),
          tags: ['privacy', 'data']
        },
        {
          id: 'anonymous-usage',
          question: t('faq.sections.security.q3.question'),
          answer: t('faq.sections.security.q3.answer'),
          tags: ['anonymity', 'privacy']
        },
        {
          id: 'vpn-usage',
          question: t('faq.sections.security.q4.question'),
          answer: t('faq.sections.security.q4.answer'),
          tags: ['vpn', 'connection']
        }
      ]
    },
    {
      id: 'subscription',
      title: t('faq.sections.subscription.title'),
      questions: [
        {
          id: 'which-plan',
          question: t('faq.sections.subscription.q1.question'),
          answer: t('faq.sections.subscription.q1.answer'),
          tags: ['pricing', 'plans']
        },
        {
          id: 'daily-limit',
          question: t('faq.sections.subscription.q2.question'),
          answer: t('faq.sections.subscription.q2.answer'),
          tags: ['limits', 'usage']
        },
        {
          id: 'cancel-subscription',
          question: t('faq.sections.subscription.q3.question'),
          answer: t('faq.sections.subscription.q3.answer'),
          tags: ['cancellation', 'management']
        },
        {
          id: 'payment-methods',
          question: t('faq.sections.subscription.q4.question'),
          answer: t('faq.sections.subscription.q4.answer'),
          tags: ['payment', 'crypto']
        }
      ]
    },
    {
      id: 'results',
      title: t('faq.sections.results.title'),
      questions: [
        {
          id: 'guaranteed-income',
          question: t('faq.sections.results.q1.question'),
          answer: t('faq.sections.results.q1.answer'),
          tags: ['income', 'expectations']
        },
        {
          id: 'increase-winnings',
          question: t('faq.sections.results.q2.question'),
          answer: t('faq.sections.results.q2.answer'),
          tags: ['roi', 'performance']
        },
        {
          id: 'required-bankroll',
          question: t('faq.sections.results.q3.question'),
          answer: t('faq.sections.results.q3.answer'),
          tags: ['bankroll', 'budget']
        },
        {
          id: 'lose-money',
          question: t('faq.sections.results.q4.question'),
          answer: t('faq.sections.results.q4.answer'),
          tags: ['risk', 'losses']
        }
      ]
    },
    {
      id: 'technical',
      title: t('faq.sections.technical.title'),
      questions: [
        {
          id: 'own-quantum-computer',
          question: t('faq.sections.technical.q1.question'),
          answer: t('faq.sections.technical.q1.answer'),
          tags: ['quantum', 'infrastructure']
        },
        {
          id: 'casino-updates',
          question: t('faq.sections.technical.q2.question'),
          answer: t('faq.sections.technical.q2.answer'),
          tags: ['updates', 'maintenance']
        },
        {
          id: 'other-games',
          question: t('faq.sections.technical.q3.question'),
          answer: t('faq.sections.technical.q3.answer'),
          tags: ['games', 'future']
        },
        {
          id: 'mobile-support',
          question: t('faq.sections.technical.q4.question'),
          answer: t('faq.sections.technical.q4.answer'),
          tags: ['mobile', 'platform']
        }
      ]
    },
    {
      id: 'responsible',
      title: t('faq.sections.responsible.title'),
      questions: [
        {
          id: 'gambling-addiction',
          question: t('faq.sections.responsible.q1.question'),
          answer: t('faq.sections.responsible.q1.answer'),
          tags: ['addiction', 'responsible']
        },
        {
          id: 'age-restriction',
          question: t('faq.sections.responsible.q2.question'),
          answer: t('faq.sections.responsible.q2.answer'),
          tags: ['age', 'restrictions']
        },
        {
          id: 'ethical-concerns',
          question: t('faq.sections.responsible.q3.question'),
          answer: t('faq.sections.responsible.q3.answer'),
          tags: ['ethics', 'philosophy']
        },
        {
          id: 'kill-fun',
          question: t('faq.sections.responsible.q4.question'),
          answer: t('faq.sections.responsible.q4.answer'),
          tags: ['enjoyment', 'experience']
        }
      ]
    }
  ]

  // Filter sections and questions based on search query
  const filteredSections = faqSections.map(section => ({
    ...section,
    questions: section.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(section => activeFilter === 'all' || section.id === activeFilter)
    .filter(section => section.questions.length > 0)

  const toggleQuestion = (questionId: string) => {
    const newExpanded = new Set(expandedQuestions)
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId)
    } else {
      newExpanded.add(questionId)
    }
    setExpandedQuestions(newExpanded)
  }

  // Get total questions count
  const totalQuestions = filteredSections.reduce((acc, section) => acc + section.questions.length, 0)

  // Quick filters
  const quickFilters = [
    { id: 'all', label: t('faq.filters.all'), icon: <FiBookOpen /> },
    { id: 'general', label: t('faq.filters.basics'), icon: <FiHelpCircle /> },
    { id: 'technology', label: t('faq.filters.technical'), icon: <FiCpu /> },
    { id: 'subscription', label: t('faq.filters.pricing'), icon: <FiDollarSign /> },
    { id: 'security', label: t('faq.filters.security'), icon: <FiLock /> }
  ]

  // Format answer text with improved styling
  const formatAnswer = (text: string) => {
    return text.split('\n').map((line, index) => {
      // Handle bold text
      let formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-limeGreen font-semibold">$1</strong>')
      
      // Handle bullet points
      if (line.trim().startsWith('•')) {
        return (
          <li key={index} className="flex items-start gap-3 mb-3 ml-2">
            <span className="text-limeGreen mt-1.5 flex-shrink-0">
              <FiArrowRight className="w-4 h-4" />
            </span>
            <span dangerouslySetInnerHTML={{ __html: formattedLine.replace('•', '').trim() }} />
          </li>
        )
      }
      
      // Handle numbered lists
      if (/^\d+\./.test(line.trim())) {
        const [number, ...rest] = line.trim().split('.')
        return (
          <li key={index} className="flex items-start gap-3 mb-3 ml-2">
            <span className="text-limeGreen font-bold flex-shrink-0 bg-limeGreen/10 rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {number}
            </span>
            <span dangerouslySetInnerHTML={{ __html: rest.join('.').trim() }} />
          </li>
        )
      }
      
      // Regular paragraph
      if (line.trim()) {
        return (
          <p key={index} className="mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedLine }} />
        )
      }
      
      return null
    })
  }

  // Scroll to section when filter changes
  useEffect(() => {
    if (activeFilter !== 'all' && filteredSections.length > 0) {
      const element = document.getElementById(`section-${activeFilter}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [activeFilter])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-darkGreen via-raisinBlack to-darkGreen"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(171,248,11,0.1) 35px, rgba(171,248,11,0.1) 70px)`,
          }} />
        </div>

        <div className="relative z-10 py-20 bg-raisinBlack/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-limeGreen/10 px-4 py-2 rounded-full mb-6"
              >
                <FiZap className="text-limeGreen" />
                <span className="text-limeGreen text-sm font-semibold">{t('faq.hero.badge', 'Knowledge Base')}</span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                <span className="text-beigeCream">{t('faq.hero.title1')}</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-limeGreen to-pink">
                  {t('faq.hero.title2')}
                </span>
              </h1>
              <p className="text-xl text-beigeCream/70 max-w-4xl mx-auto leading-relaxed">
                {t('faq.hero.subtitle')}
              </p>
            </motion.div>

            {/* Search Bar with Quick Stats */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-limeGreen/20 to-pink/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-darkGreen/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                  <div className="flex items-center">
                    <FiSearch className="absolute left-6 text-beigeCream/50 text-xl" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={t('faq.search.placeholder')}
                      className="w-full pl-16 pr-16 py-5 bg-transparent text-beigeCream placeholder-beigeCream/30 
                               focus:outline-none text-lg"
                    />
                    {searchQuery && (
                      <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        onClick={() => setSearchQuery('')}
                        className="absolute right-6 text-beigeCream/50 hover:text-beigeCream transition-colors"
                      >
                        <FiX className="text-xl" />
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center gap-8 mt-6"
              >
                <div className="flex items-center gap-2 text-beigeCream/60">
                  <FiBookOpen className="text-limeGreen" />
                  <span className="text-sm">
                    <strong className="text-limeGreen">{faqSections.length}</strong> {t('faq.stats.categories', 'Categories')}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-beigeCream/60">
                  <FiMessageSquare className="text-pink" />
                  <span className="text-sm">
                    <strong className="text-pink">{totalQuestions}</strong> {t('faq.stats.questions', 'Questions')}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Filters */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mt-12"
            >
              {quickFilters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-limeGreen text-darkGreen shadow-[0_0_20px_rgba(171,248,11,0.4)]'
                      : 'bg-white/5 text-beigeCream/70 hover:bg-white/10 hover:text-beigeCream border border-white/10'
                  }`}
                >
                  {filter.icon}
                  <span>{filter.label}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Category Navigation Sidebar */}
            <div className="lg:flex lg:gap-12">
              <motion.aside
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="hidden lg:block lg:w-72 flex-shrink-0"
              >
                <div className="sticky top-32">
                  <h3 className="text-lg font-semibold text-beigeCream mb-6 flex items-center gap-2">
                    <FiBookOpen className="text-limeGreen" />
                    {t('faq.navigation.title', 'Quick Navigation')}
                  </h3>
                  <nav className="space-y-2">
                    {faqSections.map((section) => {
                      const isActive = expandedSection === section.id
                      const questionCount = section.questions.filter(q => 
                        !searchQuery || 
                        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
                      ).length

                      return (
                        <motion.button
                          key={section.id}
                          onClick={() => {
                            setExpandedSection(section.id)
                            setActiveFilter('all')
                            const element = document.getElementById(`section-${section.id}`)
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            }
                          }}
                          whileHover={{ x: 5 }}
                          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 group ${
                            isActive
                              ? 'bg-limeGreen/10 text-limeGreen border border-limeGreen/30'
                              : 'text-beigeCream/60 hover:bg-white/5 hover:text-beigeCream'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`transition-colors ${isActive ? 'text-limeGreen' : 'text-beigeCream/40 group-hover:text-beigeCream/60'}`}>
                              {iconMap[section.id]}
                            </span>
                            <span className="font-medium">{section.title}</span>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            isActive 
                              ? 'bg-limeGreen/20 text-limeGreen' 
                              : 'bg-white/10 text-beigeCream/40'
                          }`}>
                            {questionCount}
                          </span>
                        </motion.button>
                      )
                    })}
                  </nav>
                </div>
              </motion.aside>

              {/* FAQ Sections */}
              <div className="flex-1 space-y-8">
                {filteredSections.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <FiSearch className="w-16 h-16 text-beigeCream/20 mx-auto mb-4" />
                    <p className="text-xl text-beigeCream/60">{t('faq.search.noResults')}</p>
                    <button
                      onClick={() => {
                        setSearchQuery('')
                        setActiveFilter('all')
                      }}
                      className="mt-4 text-limeGreen hover:text-limeGreen/80 transition-colors"
                    >
                      {t('faq.search.clearSearch', 'Clear search')}
                    </button>
                  </motion.div>
                ) : (
                  filteredSections.map((section, sectionIndex) => (
                    <motion.div
                      key={section.id}
                      id={`section-${section.id}`}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: sectionIndex * 0.1 }}
                      className="scroll-mt-32"
                    >
                      {/* Section Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-gradient-to-br from-limeGreen/20 to-pink/20 rounded-2xl text-limeGreen">
                          {iconMap[section.id]}
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-beigeCream">{section.title}</h2>
                          <p className="text-sm text-beigeCream/50">
                            {section.questions.length} {t('faq.section.questions', 'questions in this category')}
                          </p>
                        </div>
                      </div>

                      {/* Questions */}
                      <div className="space-y-4">
                        {section.questions.map((q, qIndex) => {
                          const isExpanded = expandedQuestions.has(q.id)
                          
                          return (
                            <motion.div
                              key={q.id}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: qIndex * 0.05 }}
                              className="group"
                            >
                              <div className={`glassmorphism rounded-2xl overflow-hidden transition-all duration-300 ${
                                isExpanded ? 'ring-2 ring-limeGreen/30' : ''
                              }`}>
                                <motion.button
                                  onClick={() => toggleQuestion(q.id)}
                                  className="w-full p-6 text-left hover:bg-white/5 transition-colors"
                                  whileHover={{ x: 2 }}
                                >
                                  <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                      <h3 className="text-lg font-semibold text-beigeCream mb-2 pr-8">
                                        {q.question}
                                      </h3>
                                      {/* Tags */}
                                      <div className="flex flex-wrap gap-2">
                                        {q.tags.map((tag) => (
                                          <span
                                            key={tag}
                                            className="text-xs px-2 py-1 bg-white/5 text-beigeCream/50 rounded-full"
                                          >
                                            {tag}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                    <motion.div
                                      animate={{ rotate: isExpanded ? 180 : 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="flex-shrink-0 p-2 bg-white/5 rounded-xl"
                                    >
                                      <FiChevronDown className="text-xl text-limeGreen" />
                                    </motion.div>
                                  </div>
                                </motion.button>

                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: 'auto', opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <div className="px-6 pb-6 border-t border-white/10 pt-4">
                                        <div className="text-beigeCream/80">
                                          {formatAnswer(q.answer)}
                                        </div>
                                        
                                        {/* Helpful Actions */}
                                        <motion.div
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          transition={{ delay: 0.2 }}
                                          className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5"
                                        >
                                          <span className="text-sm text-beigeCream/50">
                                            {t('faq.helpful.question', 'Was this helpful?')}
                                          </span>
                                          <div className="flex gap-2">
                                            <button className="p-2 hover:bg-limeGreen/10 rounded-lg transition-colors group">
                                              <FiActivity className="w-4 h-4 text-beigeCream/50 group-hover:text-limeGreen" />
                                            </button>
                                            <button className="p-2 hover:bg-pink/10 rounded-lg transition-colors group">
                                              <FiAlertCircle className="w-4 h-4 text-beigeCream/50 group-hover:text-pink" />
                                            </button>
                                          </div>
                                        </motion.div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 relative z-10 bg-gradient-to-b from-transparent to-raisinBlack/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-limeGreen/10 to-pink/10 blur-3xl" />
            
            <div className="relative glassmorphism rounded-3xl p-12 text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-limeGreen/20 to-pink/20 rounded-2xl mb-6">
                  <FiMessageSquare className="w-8 h-8 text-limeGreen" />
                </div>
                
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-beigeCream">{t('faq.cta.title1')}</span>{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-limeGreen to-pink">
                    {t('faq.cta.title2')}
                  </span>
                </h2>
                <p className="text-lg text-beigeCream/70 mb-8 max-w-2xl mx-auto">
                  {t('faq.cta.subtitle')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href = '/dashboard'}
                    className="px-8 py-4 bg-limeGreen text-darkGreen font-bold rounded-xl text-lg
                             hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all duration-300
                             flex items-center justify-center gap-2"
                  >
                    <FiZap className="w-5 h-5" />
                    {t('faq.cta.button1')}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href = '/contact'}
                    className="px-8 py-4 border-2 border-pink text-pink font-bold rounded-xl text-lg
                             hover:bg-pink hover:text-darkGreen transition-all duration-300
                             flex items-center justify-center gap-2"
                  >
                    <FiMessageSquare className="w-5 h-5" />
                    {t('faq.cta.button2')}
                  </motion.button>
                </div>

                {/* Additional Help Options */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10"
                >
                  <div className="flex flex-col items-center">
                    <FiUsers className="w-6 h-6 text-limeGreen mb-2" />
                    <span className="text-sm text-beigeCream/70">{t('faq.help.community', 'Join Community')}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FiBookOpen className="w-6 h-6 text-pink mb-2" />
                    <span className="text-sm text-beigeCream/70">{t('faq.help.docs', 'Read Docs')}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <FiShield className="w-6 h-6 text-limeGreen mb-2" />
                    <span className="text-sm text-beigeCream/70">{t('faq.help.support', '24/7 Support')}</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Glassmorphism Styles */}
      <style>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
      `}</style>
    </motion.div>
  )
}