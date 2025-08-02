import { motion } from 'framer-motion'
import { useState } from 'react'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: "Rookie",
      icon: "🎰",
      monthlyPrice: 49,
      yearlyPrice: 470,
      description: "Perfect for beginners ready to beat the house",
      features: [
        "Basic pattern detection for online slots",
        "Up to 1,000 spins analyzed per day",
        "Email support within 48 hours",
        "Access to beginner strategies",
        "Basic probability calculator",
        "1 casino account monitoring"
      ],
      highlighted: false,
      cta: "Start Winning"
    },
    {
      name: "Professional",
      icon: "💎",
      monthlyPrice: 149,
      yearlyPrice: 1430,
      description: "For serious players who want maximum edge",
      features: [
        "Advanced AI pattern detection",
        "Unlimited spin analysis",
        "Real-time alerts & notifications",
        "Live casino bias detection",
        "Bonus hunting optimizer",
        "5 casino accounts monitoring",
        "Priority 24/7 support",
        "Session timing analysis"
      ],
      highlighted: true,
      cta: "Go Professional"
    },
    {
      name: "Whale",
      icon: "🐋",
      monthlyPrice: 499,
      yearlyPrice: 4790,
      description: "Exclusive features for high-stakes players",
      features: [
        "Everything in Professional",
        "Custom AI model training",
        "VIP direct phone support",
        "Unlimited casino accounts",
        "API access for automation",
        "Personal success manager",
        "Exclusive insider strategies",
        "Legal consultation included",
        "Money-back guarantee"
      ],
      highlighted: false,
      cta: "Become a Whale"
    }
  ]

  const faqs = [
    {
      question: "Is this legal?",
      answer: "Yes. We use publicly available data and mathematical analysis. We don't hack or manipulate casino software - we simply identify patterns they don't want you to see."
    },
    {
      question: "Will casinos ban me?",
      answer: "Our AI operates invisibly. Casinos can't detect pattern analysis happening on your device. We also teach you how to avoid detection patterns."
    },
    {
      question: "What's your success rate?",
      answer: "Our users report an average 42% increase in winnings. Top performers using our Whale plan have reported 300%+ ROI within 6 months."
    },
    {
      question: "Do you offer refunds?",
      answer: "Whale plan members get a 30-day money-back guarantee. If you don't see improved results, we'll refund your investment."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most users report significant pattern detection within the first week. Actual winnings depend on your bankroll and discipline in following our strategies."
    }
  ]

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
              <span className="text-limeGreen">Invest in</span>{' '}
              <span className="text-pink">Your Edge</span>
            </h1>
            <p className="text-xl text-beigeCream/80 max-w-3xl mx-auto mb-8">
              Every day without Flamingo AI is money left on the casino floor. 
              Choose your weapon and start taking back what's yours.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white/10 rounded-xl p-1 backdrop-blur-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-limeGreen text-darkGreen'
                    : 'text-beigeCream hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-limeGreen text-darkGreen'
                    : 'text-beigeCream hover:text-white'
                }`}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-3xl p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-limeGreen/20 to-pink/20 border-2 border-limeGreen'
                    : 'glassmorphism'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-limeGreen text-darkGreen px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold text-limeGreen mb-2">{plan.name}</h3>
                  <p className="text-beigeCream/70 text-sm mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-pink">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-beigeCream/60">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                    {billingCycle === 'yearly' && (
                      <div className="text-limeGreen text-sm mt-1">
                        Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice}/year
                      </div>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-xl font-bold transition-all ${
                      plan.highlighted
                        ? 'bg-limeGreen text-darkGreen hover:shadow-[0_0_20px_rgba(171,248,11,0.5)]'
                        : 'bg-pink/20 text-pink border border-pink/50 hover:bg-pink/30'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-limeGreen mr-2">✓</span>
                      <span className="text-beigeCream/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🔒</span>
                <span className="text-beigeCream/70">256-bit Encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💳</span>
                <span className="text-beigeCream/70">Secure Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌍</span>
                <span className="text-beigeCream/70">Available Worldwide</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🚫</span>
                <span className="text-beigeCream/70">No Casino Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-raisinBlack/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-pink">Calculate Your</span>{' '}
              <span className="text-limeGreen">Potential ROI</span>
            </h2>

            <div className="glassmorphism rounded-3xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-limeGreen mb-4">Without Flamingo AI</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-beigeCream/70">Average Monthly Loss</span>
                      <span className="text-pink">-$500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-beigeCream/70">Win Rate</span>
                      <span className="text-pink">47%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-beigeCream/70">Pattern Detection</span>
                      <span className="text-pink">0%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-limeGreen mb-4">With Flamingo AI</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-beigeCream/70">Average Monthly Profit</span>
                      <span className="text-limeGreen">+$1,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-beigeCream/70">Win Rate</span>
                      <span className="text-limeGreen">64%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-beigeCream/70">Pattern Detection</span>
                      <span className="text-limeGreen">87%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-limeGreen/10 rounded-2xl border border-limeGreen/30">
                <p className="text-center text-lg">
                  <span className="text-beigeCream">Potential Monthly Improvement: </span>
                  <span className="text-2xl font-bold text-limeGreen">+$1,700</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold">
              <span className="text-limeGreen">Frequently Asked</span>{' '}
              <span className="text-pink">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-limeGreen mb-3">{faq.question}</h3>
                <p className="text-beigeCream/80">{faq.answer}</p>
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
            className="glassmorphism rounded-3xl p-12 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Every Spin Without <span className="text-limeGreen">Flamingo</span> is Money Lost
            </h2>
            <p className="text-lg text-beigeCream/80 mb-8">
              Join 15,000+ players who've stopped letting casinos dictate the odds. 
              Your edge is waiting.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/dashboard'}
              className="px-8 py-4 bg-limeGreen text-darkGreen font-bold rounded-xl text-lg
                       hover:shadow-[0_0_30px_rgba(171,248,11,0.5)] transition-all duration-300"
            >
              Start Your Free Trial
            </motion.button>
            <p className="text-sm text-beigeCream/60 mt-4">
              No credit card required • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}