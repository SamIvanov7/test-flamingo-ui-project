import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const features = [
  {
    icon: '🎰',
    title: 'AI-Powered Predictions',
    preview: '2.7M spins analyzed daily',
    details: 'Our advanced neural network analyzes millions of spins to identify patterns invisible to the human eye. Real-time probability calculations help you make informed decisions.',
    stats: [
      { label: 'Accuracy', value: '87.3%' },
      { label: 'Speed', value: '<100ms' }
    ]
  },
  {
    icon: '📊',
    title: 'Live Analytics Dashboard',
    preview: 'Real-time insights at your fingertips',
    details: 'Track your performance, view historical data, and get personalized recommendations based on your playing style. Every spin contributes to smarter predictions.',
    stats: [
      { label: 'Data Points', value: '50+' },
      { label: 'Updates', value: 'Real-time' }
    ]
  },
  {
    icon: '🛡️',
    title: 'Responsible Gaming Tools',
    preview: 'Play smart, play safe',
    details: 'Set limits, track time, and use our AI to maintain healthy gaming habits. We believe in empowering players with tools for long-term success.',
    stats: [
      { label: 'Limit Types', value: '5' },
      { label: 'Alerts', value: 'Custom' }
    ]
  }
]

export default function CompactFeatures() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-darkGreen to-black">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-beigeCream mb-12"
        >
          How It Works
        </motion.h2>
        
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm border border-limeGreen/20 rounded-xl overflow-hidden"
            >
              <motion.button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-limeGreen/50"
                whileHover={{ backgroundColor: 'rgba(171, 248, 11, 0.05)' }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">{feature.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-limeGreen mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-beigeCream/70">
                        {feature.preview}
                      </p>
                    </div>
                  </div>
                  <motion.svg
                    className="w-6 h-6 text-limeGreen mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>
              </motion.button>
              
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-limeGreen/20"
                  >
                    <div className="p-6 space-y-4">
                      <p className="text-beigeCream/80">
                        {feature.details}
                      </p>
                      <div className="flex space-x-6">
                        {feature.stats.map((stat, statIndex) => (
                          <div key={statIndex}>
                            <div className="text-2xl font-bold text-pink">
                              {stat.value}
                            </div>
                            <div className="text-sm text-beigeCream/60">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-6 py-2 bg-transparent border border-limeGreen text-limeGreen 
                                 rounded-lg hover:bg-limeGreen/10 transition-colors"
                      >
                        Learn More →
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}