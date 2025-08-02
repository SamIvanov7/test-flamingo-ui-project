import { motion } from 'framer-motion'
import { useState } from 'react'

export default function RequestFeaturePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    featureType: 'pattern-detection',
    title: '',
    description: '',
    urgency: 'medium'
  })

  const [votedFeatures, setVotedFeatures] = useState<number[]>([])

  const featureTypes = [
    { value: 'pattern-detection', label: 'Pattern Detection Enhancement' },
    { value: 'new-casino', label: 'New Casino Support' },
    { value: 'game-analysis', label: 'New Game Analysis' },
    { value: 'automation', label: 'Automation Feature' },
    { value: 'reporting', label: 'Reporting & Analytics' },
    { value: 'mobile', label: 'Mobile App Feature' },
    { value: 'api', label: 'API Enhancement' },
    { value: 'other', label: 'Other' }
  ]

  const popularRequests = [
    {
      id: 1,
      title: "Baccarat Pattern Recognition",
      description: "Add AI analysis for baccarat shoe patterns and banker/player streaks",
      votes: 342,
      status: "in-progress",
      category: "game-analysis"
    },
    {
      id: 2,
      title: "Crypto Casino Integration",
      description: "Support for analyzing patterns in blockchain-based casinos",
      votes: 287,
      status: "planned",
      category: "new-casino"
    },
    {
      id: 3,
      title: "Auto-Stop Loss Feature",
      description: "Automatically stop playing when reaching loss limits with AI predictions",
      votes: 256,
      status: "planned",
      category: "automation"
    },
    {
      id: 4,
      title: "Multi-Account Dashboard",
      description: "Monitor patterns across multiple casino accounts simultaneously",
      votes: 198,
      status: "under-review",
      category: "reporting"
    },
    {
      id: 5,
      title: "Voice Commands",
      description: "Control the AI assistant with voice commands during gameplay",
      votes: 167,
      status: "planned",
      category: "mobile"
    },
    {
      id: 6,
      title: "Poker Room Analysis",
      description: "Detect patterns in online poker player behaviors and betting patterns",
      votes: 145,
      status: "under-review",
      category: "game-analysis"
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Feature request submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleVote = (featureId: number) => {
    if (!votedFeatures.includes(featureId)) {
      setVotedFeatures([...votedFeatures, featureId])
    }
  }


  const getStatusBg = (status: string) => {
    switch (status) {
      case 'in-progress': return 'bg-limeGreen/20 border-limeGreen/30'
      case 'planned': return 'bg-pink/20 border-pink/30'
      case 'under-review': return 'bg-beigeCream/20 border-beigeCream/30'
      default: return 'bg-white/10 border-white/20'
    }
  }

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
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="text-limeGreen">Shape the</span>{' '}
              <span className="text-pink">Future</span>
            </h1>
            <p className="text-xl text-beigeCream/80 max-w-3xl mx-auto">
              Your ideas drive our innovation. Request features that will help you 
              beat the house even harder.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Popular Requests */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-limeGreen mb-6">
                🔥 Popular Feature Requests
              </h2>
              
              <div className="space-y-4">
                {popularRequests.map((feature) => (
                  <motion.div
                    key={feature.id}
                    whileHover={{ scale: 1.02 }}
                    className="glassmorphism rounded-2xl p-6"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-beigeCream mb-1">{feature.title}</h3>
                        <p className="text-sm text-beigeCream/70">{feature.description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBg(feature.status)}`}>
                        {feature.status.replace('-', ' ')}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-beigeCream/60">
                          {feature.votes + (votedFeatures.includes(feature.id) ? 1 : 0)} votes
                        </span>
                        <span className="text-beigeCream/40">•</span>
                        <span className="text-sm text-pink">
                          {feature.category.replace('-', ' ')}
                        </span>
                      </div>
                      
                      <motion.button
                        onClick={() => handleVote(feature.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={votedFeatures.includes(feature.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                          votedFeatures.includes(feature.id)
                            ? 'bg-limeGreen/20 text-limeGreen cursor-not-allowed'
                            : 'bg-pink/20 text-pink hover:bg-pink/30'
                        }`}
                      >
                        {votedFeatures.includes(feature.id) ? '✓ Voted' : '👍 Vote'}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Request Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="glassmorphism rounded-3xl p-8"
            >
              <h2 className="text-2xl font-bold text-pink mb-6">
                💡 Submit Your Feature Request
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-beigeCream mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                               text-beigeCream placeholder-beigeCream/50 focus:outline-none
                               focus:border-limeGreen/50 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-beigeCream mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                               text-beigeCream placeholder-beigeCream/50 focus:outline-none
                               focus:border-limeGreen/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-beigeCream mb-2">Feature Category</label>
                  <select
                    name="featureType"
                    value={formData.featureType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                             text-beigeCream focus:outline-none focus:border-limeGreen/50
                             transition-colors"
                  >
                    {featureTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-darkGreen">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-beigeCream mb-2">Feature Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                             text-beigeCream placeholder-beigeCream/50 focus:outline-none
                             focus:border-limeGreen/50 transition-colors"
                    placeholder="Brief title for your feature idea"
                  />
                </div>

                <div>
                  <label className="block text-beigeCream mb-2">Detailed Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl
                             text-beigeCream placeholder-beigeCream/50 focus:outline-none
                             focus:border-limeGreen/50 transition-colors resize-none"
                    placeholder="Describe your feature idea in detail. How would it help beat the house?"
                  />
                </div>

                <div>
                  <label className="block text-beigeCream mb-2">Urgency Level</label>
                  <div className="flex space-x-4">
                    {['low', 'medium', 'high', 'critical'].map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="radio"
                          name="urgency"
                          value={level}
                          checked={formData.urgency === level}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className={`capitalize ${
                          level === 'critical' ? 'text-pink' : 
                          level === 'high' ? 'text-limeGreen' : 
                          'text-beigeCream/70'
                        }`}>
                          {level}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-limeGreen text-darkGreen font-bold rounded-xl
                           hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all"
                >
                  Submit Feature Request
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-raisinBlack/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold">
              <span className="text-limeGreen">Development</span>{' '}
              <span className="text-pink">Roadmap</span>
            </h2>
            <p className="text-lg text-beigeCream/70 mt-4">
              See what we're building to give you an even bigger edge
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="glassmorphism rounded-2xl p-6 border-t-4 border-limeGreen"
            >
              <h3 className="text-xl font-bold text-limeGreen mb-4">🚀 In Development</h3>
              <ul className="space-y-2 text-beigeCream/80">
                <li>• Baccarat pattern analysis</li>
                <li>• Multi-language support</li>
                <li>• iOS app beta</li>
                <li>• Advanced API webhooks</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="glassmorphism rounded-2xl p-6 border-t-4 border-pink"
            >
              <h3 className="text-xl font-bold text-pink mb-4">📋 Next Quarter</h3>
              <ul className="space-y-2 text-beigeCream/80">
                <li>• Crypto casino support</li>
                <li>• Voice command AI</li>
                <li>• Team accounts</li>
                <li>• Custom alert system</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="glassmorphism rounded-2xl p-6 border-t-4 border-beigeCream"
            >
              <h3 className="text-xl font-bold text-beigeCream mb-4">🔮 Future Plans</h3>
              <ul className="space-y-2 text-beigeCream/80">
                <li>• VR casino analysis</li>
                <li>• Blockchain verification</li>
                <li>• AI prediction marketplace</li>
                <li>• Quantum computing integration</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Your Ideas <span className="text-limeGreen">Shape Our Mission</span>
            </h2>
            <p className="text-lg text-beigeCream/80 max-w-2xl mx-auto mb-8">
              Every feature we build is designed to tilt the odds further in your favor. 
              Keep the suggestions coming.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/blog'}
              className="px-8 py-4 bg-pink text-darkGreen font-bold rounded-xl text-lg
                       hover:shadow-[0_0_30px_rgba(229,159,206,0.5)] transition-all"
            >
              Read Development Updates
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}