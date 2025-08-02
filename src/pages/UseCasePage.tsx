import { motion } from 'framer-motion'
import { useState } from 'react'

export default function UseCasePage() {
  const [activeCase, setActiveCase] = useState(0)

  const useCases = [
    {
      title: "Online Slots Pattern Detection",
      icon: "🎰",
      description: "Identify exploitable patterns in online slot RNG algorithms",
      details: {
        problem: "Online casinos claim their slots use 'certified' RNG, but our analysis shows predictable seed patterns.",
        solution: "Flamingo AI analyzes spin sequences in real-time, detecting pattern emergence before casinos can shuffle seeds.",
        results: [
          "73% pattern detection accuracy",
          "Average 23% increase in RTP",
          "Identifies hot/cold cycles within 50 spins"
        ],
        testimonial: {
          text: "I thought slots were random until Flamingo showed me the patterns. Turned $100 into $3,400 in one session!",
          author: "Alex M., Professional Player"
        }
      }
    },
    {
      title: "Live Casino Bias Exploitation",
      icon: "🎲",
      description: "Detect dealer patterns and wheel biases in live games",
      details: {
        problem: "Live dealers develop unconscious patterns. Roulette wheels develop physical biases over time.",
        solution: "Our AI tracks dealer behavior, ball physics, and wheel sectors to identify exploitable biases.",
        results: [
          "Detected bias in 67% of wheels tested",
          "15-20% edge on biased sectors",
          "Dealer signature recognition in 200 spins"
        ],
        testimonial: {
          text: "The wheel bias detection is insane. Found a biased sector that hit 3x more than probability suggests.",
          author: "Maria S., Former Casino Employee"
        }
      }
    },
    {
      title: "Bonus Hunting Optimization",
      icon: "💰",
      description: "Maximize EV from casino bonuses and promotions",
      details: {
        problem: "Casinos design bonuses with hidden traps and impossible wagering requirements.",
        solution: "Flamingo AI calculates true bonus EV and identifies the optimal strategy for clearing requirements.",
        results: [
          "Average 340% bonus value extraction",
          "Identifies +EV bonus opportunities",
          "Wagering requirement optimization"
        ],
        testimonial: {
          text: "Turned 50+ 'unbeatable' bonuses into $12,000 profit using Flamingo's calculations.",
          author: "James T., Bonus Hunter"
        }
      }
    },
    {
      title: "Session Timing Analysis",
      icon: "⏰",
      description: "Predict optimal play windows based on casino algorithms",
      details: {
        problem: "Casinos adjust their algorithms based on player activity, time of day, and session patterns.",
        solution: "Our AI monitors global casino patterns to identify when RTP is highest and security is lowest.",
        results: [
          "Identified 4-hour daily windows with +5% RTP",
          "Avoided 89% of 'tightening' periods",
          "Session timing increased wins by 41%"
        ],
        testimonial: {
          text: "Playing during Flamingo's recommended windows completely changed my results. It's like insider trading for casinos.",
          author: "Chen W., Data Scientist"
        }
      }
    }
  ]

  const activeUseCase = useCases[activeCase]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-darkGreen via-raisinBlack to-darkGreen"
    >
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/assets/images/pattern-grid.svg')] bg-repeat animate-pulse" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="text-limeGreen">Exploit</span>{' '}
              <span className="text-pink">Every Edge</span>
            </h1>
            <p className="text-xl text-beigeCream/80 max-w-3xl mx-auto">
              Real-world applications of our quantum-neural technology. See how players are crushing 
              the house using patterns casinos don't want you to find.
            </p>
          </motion.div>

          {/* Use Case Selector */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {useCases.map((useCase, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveCase(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  activeCase === index
                    ? 'bg-limeGreen text-darkGreen shadow-[0_0_30px_rgba(171,248,11,0.5)]'
                    : 'glassmorphism hover:bg-white/10'
                }`}
              >
                <div className="text-4xl mb-2">{useCase.icon}</div>
                <h3 className={`font-bold ${activeCase === index ? 'text-darkGreen' : 'text-limeGreen'}`}>
                  {useCase.title}
                </h3>
                <p className={`text-sm mt-2 ${activeCase === index ? 'text-darkGreen/80' : 'text-beigeCream/60'}`}>
                  {useCase.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Active Case Details */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glassmorphism rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl font-bold text-limeGreen mb-6">The Problem</h2>
                <p className="text-lg text-beigeCream/80 mb-8">
                  {activeUseCase.details.problem}
                </p>

                <h2 className="text-3xl font-bold text-pink mb-6">Our Solution</h2>
                <p className="text-lg text-beigeCream/80 mb-8">
                  {activeUseCase.details.solution}
                </p>

                {/* Testimonial */}
                <div className="bg-darkGreen/30 rounded-2xl p-6 border border-limeGreen/20">
                  <p className="text-beigeCream/90 italic mb-3">
                    "{activeUseCase.details.testimonial.text}"
                  </p>
                  <p className="text-limeGreen font-semibold">
                    — {activeUseCase.details.testimonial.author}
                  </p>
                </div>
              </div>

              {/* Right Column - Results */}
              <div>
                <h2 className="text-3xl font-bold text-limeGreen mb-6">Proven Results</h2>
                <div className="space-y-4">
                  {activeUseCase.details.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl"
                    >
                      <div className="w-12 h-12 bg-limeGreen/20 rounded-full flex items-center justify-center">
                        <span className="text-limeGreen font-bold">{index + 1}</span>
                      </div>
                      <p className="text-beigeCream">{result}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Visual Chart */}
                <div className="mt-8 p-6 bg-darkGreen/20 rounded-2xl">
                  <h3 className="text-xl font-bold text-pink mb-4">Performance Metrics</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-beigeCream/70">Detection Accuracy</span>
                        <span className="text-limeGreen">87%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '87%' }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-limeGreen"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-beigeCream/70">Profit Increase</span>
                        <span className="text-pink">+42%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '42%' }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-pink"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-beigeCream/70">User Satisfaction</span>
                        <span className="text-limeGreen">96%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '96%' }}
                          transition={{ duration: 1, delay: 0.4 }}
                          className="h-full bg-gradient-to-r from-pink to-limeGreen"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-raisinBlack/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "$2.3M", label: "Total Winnings", color: "text-limeGreen" },
              { value: "15K+", label: "Active Users", color: "text-pink" },
              { value: "98.3%", label: "Pattern Detection", color: "text-limeGreen" },
              { value: "24/7", label: "AI Analysis", color: "text-pink" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism rounded-2xl p-8"
              >
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-beigeCream/70">{stat.label}</div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-pink">Stop Playing</span>{' '}
              <span className="text-limeGreen">Their Game</span>
            </h2>
            <p className="text-xl text-beigeCream/80 max-w-2xl mx-auto mb-8">
              Every second you play without Flamingo AI, you're letting casinos keep their edge. 
              It's time to flip the script.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/pricing'}
              className="px-8 py-4 bg-limeGreen text-darkGreen font-bold rounded-xl text-lg
                       hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all duration-300"
            >
              See Pricing Plans
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}