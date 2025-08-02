import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function PricingPage() {
  const { t } = useTranslation()
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      id: 'scout',
      name: t('pricing.plans.scout.name'),
      englishName: t('pricing.plans.scout.englishName'),
      icon: "⚡",
      monthlyPrice: 29,
      yearlyPrice: 278, // ~20% discount
      tagline: t('pricing.plans.scout.tagline'),
      description: t('pricing.plans.scout.description'),
      features: [
        { icon: "⚡", text: t('pricing.plans.scout.features.0') },
        { icon: "🎯", text: t('pricing.plans.scout.features.1') },
        { icon: "📊", text: t('pricing.plans.scout.features.2') },
        { icon: "✉️", text: t('pricing.plans.scout.features.3') }
      ],
      highlighted: false,
      cta: t('pricing.plans.scout.cta'),
      delay: 0
    },
    {
      id: 'hunter',
      name: t('pricing.plans.hunter.name'),
      englishName: t('pricing.plans.hunter.englishName'),
      icon: "🎯",
      monthlyPrice: 99,
      yearlyPrice: 950, // ~20% discount
      tagline: t('pricing.plans.hunter.tagline'),
      description: t('pricing.plans.hunter.description'),
      features: [
        { icon: "⚡", text: t('pricing.plans.hunter.features.0') },
        { icon: "🎯", text: t('pricing.plans.hunter.features.1') },
        { icon: "📈", text: t('pricing.plans.hunter.features.2') },
        { icon: "🚨", text: t('pricing.plans.hunter.features.3') },
        { icon: "💬", text: t('pricing.plans.hunter.features.4') }
      ],
      highlighted: true,
      badge: t('pricing.plans.hunter.badge'),
      cta: t('pricing.plans.hunter.cta'),
      delay: 0.1
    },
    {
      id: 'oracle',
      name: t('pricing.plans.oracle.name'),
      englishName: t('pricing.plans.oracle.englishName'),
      icon: "🔮",
      monthlyPrice: 299,
      yearlyPrice: 2870, // ~20% discount
      tagline: t('pricing.plans.oracle.tagline'),
      description: t('pricing.plans.oracle.description'),
      features: [
        { icon: "⚡", text: t('pricing.plans.oracle.features.0') },
        { icon: "🎯", text: t('pricing.plans.oracle.features.1') },
        { icon: "🔮", text: t('pricing.plans.oracle.features.2') },
        { icon: "🚨", text: t('pricing.plans.oracle.features.3') },
        { icon: "📞", text: t('pricing.plans.oracle.features.4') }
      ],
      highlighted: false,
      cta: t('pricing.plans.oracle.cta'),
      delay: 0.2
    }
  ]

  const comparisonTable = [
    { 
      icon: "⚡",
      feature: t('pricing.comparison.feature1'), 
      scout: "15", 
      hunter: "50", 
      oracle: "150",
      highlight: true 
    },
    { 
      icon: "🎯",
      feature: t('pricing.comparison.feature2'), 
      scout: "75%", 
      hunter: "95%", 
      oracle: "99%+",
      highlight: true 
    },
    { 
      icon: "📊",
      feature: t('pricing.comparison.feature3'), 
      scout: t('pricing.comparison.values.basic'), 
      hunter: t('pricing.comparison.values.advanced'), 
      oracle: t('pricing.comparison.values.full') 
    },
    { 
      icon: "🚨",
      feature: t('pricing.comparison.feature4'), 
      scout: "❌", 
      hunter: "✅", 
      oracle: "✅" 
    },
    { 
      icon: "🔮",
      feature: t('pricing.comparison.feature5'), 
      scout: "❌", 
      hunter: "❌", 
      oracle: "✅ " + t('pricing.comparison.values.upTo5Spins') 
    },
    { 
      icon: "🎰",
      feature: t('pricing.comparison.feature6'), 
      scout: t('pricing.comparison.values.delay72h'), 
      hunter: t('pricing.comparison.values.instant'), 
      oracle: t('pricing.comparison.values.priority') 
    },
    { 
      icon: "💬",
      feature: t('pricing.comparison.feature7'), 
      scout: t('pricing.comparison.values.email'), 
      hunter: t('pricing.comparison.values.priorityChat'), 
      oracle: t('pricing.comparison.values.personal247') 
    },
    { 
      icon: "🚫",
      feature: t('pricing.comparison.feature8'), 
      scout: "✅", 
      hunter: "✅", 
      oracle: "✅" 
    }
  ]


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-raisinBlack relative overflow-hidden"
    >
      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="text-beigeCream">{t('pricing.hero.title')}</span>
            </h1>
            <p className="text-xl text-beigeCream/70 max-w-4xl mx-auto leading-relaxed mb-8">
              {t('pricing.hero.subtitle')}
            </p>
            
            {/* Billing Cycle Toggle */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center bg-white/10 rounded-2xl p-2 backdrop-blur-md border border-white/20">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-limeGreen text-darkGreen shadow-lg'
                      : 'text-beigeCream/70 hover:text-beigeCream'
                  }`}
                >
                  {t('pricing.billingToggle.monthly')}
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    billingCycle === 'yearly'
                      ? 'bg-limeGreen text-darkGreen shadow-lg'
                      : 'text-beigeCream/70 hover:text-beigeCream'
                  }`}
                >
                  {t('pricing.billingToggle.yearly')}
                  <span className="ml-2 text-sm bg-pink/20 text-pink px-2 py-1 rounded-full">
                    {t('pricing.billingToggle.save')}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20 items-center">
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ y: 50, opacity: 0 }}
                animate={{ 
                  y: plan.highlighted ? -5 : 0, 
                  opacity: 1,
                }}
                transition={{ delay: plan.delay }}
                whileHover={{ y: plan.highlighted ? -15 : -10, transition: { duration: 0.3 } }}
                className={`relative rounded-3xl p-8 backdrop-blur-md transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-limeGreen/40 via-limeGreen/25 to-limeGreen/10 border-2 border-limeGreen shadow-[0_0_60px_rgba(171,248,11,0.5),0_0_120px_rgba(171,248,11,0.3)] scale-110 z-10'
                    : plan.id === 'oracle'
                    ? 'bg-gradient-to-br from-pink/15 via-pink/10 to-transparent border-2 border-pink shadow-[0_0_25px_rgba(255,20,147,0.2)] scale-102'
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Pulsing glow effect for highlighted card */}
                {plan.highlighted && (
                  <motion.div
                    className="absolute inset-0 -z-10 rounded-3xl"
                    animate={{
                      boxShadow: [
                        "0 0 80px rgba(171, 248, 11, 0.4)",
                        "0 0 120px rgba(171, 248, 11, 0.6)",
                        "0 0 80px rgba(171, 248, 11, 0.4)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}

                {plan.badge && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <motion.span 
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [-2, 2, -2]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="inline-block bg-limeGreen text-darkGreen px-8 py-3 rounded-full text-base font-bold shadow-[0_0_30px_rgba(171,248,11,0.6)] whitespace-nowrap"
                    >
                      🔥 {plan.badge}
                    </motion.span>
                  </div>
                )}


                <div className="text-center mb-8 relative z-10">
                  <h3 className={`font-bold mb-4 mt-4 ${
                    plan.highlighted ? 'text-4xl text-limeGreen drop-shadow-[0_0_20px_rgba(171,248,11,0.6)]' : 'text-3xl text-limeGreen'
                  }`}>{plan.name}</h3>
                  <div className={`h-1 mx-auto bg-gradient-to-r from-transparent via-limeGreen to-transparent mb-4 ${
                    plan.highlighted ? 'w-32' : 'w-20'
                  }`} />
                  <p className={`font-semibold mb-4 ${
                    plan.highlighted ? 'text-xl text-pink' : 'text-lg text-pink'
                  }`}>{plan.tagline}</p>
                  <p className={`text-beigeCream/70 leading-relaxed mb-6 ${
                    plan.highlighted ? 'text-base' : 'text-sm'
                  }`}>{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl text-beigeCream/60">$</span>
                      <span className="text-6xl font-bold text-beigeCream">
                        {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                    </div>
                    <span className="text-beigeCream/60 text-sm">
                      {billingCycle === 'monthly' ? t(`pricing.plans.${plan.id}.period`) : t(`pricing.plans.${plan.id}.periodYearly`)}
                    </span>
                    {billingCycle === 'yearly' && (
                      <div className="mt-2">
                        <span className="text-sm line-through text-beigeCream/40">
                          ${(plan.monthlyPrice * 12).toFixed(2)}
                        </span>
                        <span className="text-sm text-limeGreen ml-2">
                          {t('pricing.savings.save')} ${((plan.monthlyPrice * 12) - plan.yearlyPrice).toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => console.log('Selected plan:', plan.id)}
                    className={`w-full rounded-xl font-bold transition-all duration-300 ${
                      plan.highlighted
                        ? 'py-5 px-8 bg-limeGreen text-darkGreen text-lg hover:shadow-[0_0_40px_rgba(171,248,11,0.8)] hover:bg-limeGreen/90 transform hover:-translate-y-1'
                        : 'py-4 px-6 bg-transparent text-limeGreen border-2 border-limeGreen/50 hover:border-limeGreen hover:bg-limeGreen/10'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>

                <div className="space-y-4 relative z-10">
                  {plan.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-start group/feature"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: plan.delay + (idx * 0.1) }}
                    >
                      <div className={`rounded-full mr-3 mt-1.5 flex-shrink-0 transition-all duration-300 group-hover/feature:scale-125 ${
                        plan.highlighted ? 'w-3 h-3 bg-limeGreen shadow-[0_0_10px_rgba(171,248,11,0.6)]' : plan.id === 'oracle' ? 'w-2 h-2 bg-pink' : 'w-2 h-2 bg-beigeCream/60'
                      }`}></div>
                      <span className="text-beigeCream/80 text-sm leading-relaxed group-hover/feature:text-beigeCream transition-colors duration-300">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="text-beigeCream">{t('pricing.comparison.title')}</span>
            </h2>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md border border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-limeGreen/10 to-pink/10">
                      <th className="text-left py-6 px-6 text-beigeCream font-bold text-lg">{t('pricing.comparison.features')}</th>
                      <th className="text-center py-6 px-6">
                        <div className="text-beigeCream font-bold text-lg">{t('pricing.plans.scout.name')}</div>
                        <div className="text-xs text-beigeCream/60 mt-1">$29/{billingCycle === 'monthly' ? t('pricing.plans.scout.period').slice(1) : t('pricing.plans.scout.periodYearly').slice(1)}</div>
                      </th>
                      <th className="text-center py-6 px-6 relative">
                        <div className="absolute inset-0 bg-limeGreen/10"></div>
                        <div className="relative">
                          <div className="text-limeGreen font-bold text-lg">{t('pricing.plans.hunter.name')}</div>
                          <div className="text-xs text-limeGreen/80 mt-1">$99/{billingCycle === 'monthly' ? t('pricing.plans.hunter.period').slice(1) : t('pricing.plans.hunter.periodYearly').slice(1)}</div>
                        </div>
                      </th>
                      <th className="text-center py-6 px-6">
                        <div className="text-pink font-bold text-lg">{t('pricing.plans.oracle.name')}</div>
                        <div className="text-xs text-pink/60 mt-1">$299/{billingCycle === 'monthly' ? t('pricing.plans.oracle.period').slice(1) : t('pricing.plans.oracle.periodYearly').slice(1)}</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row, idx) => (
                      <motion.tr 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`border-b border-white/5 hover:bg-white/5 transition-all duration-300 ${
                          row.highlight ? 'bg-gradient-to-r from-limeGreen/5 to-transparent' : ''
                        }`}
                      >
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{row.icon}</span>
                            <span className="text-beigeCream/90 font-medium">{row.feature}</span>
                          </div>
                        </td>
                        <td className="text-center py-5 px-6">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                            row.scout === '❌' 
                              ? 'text-red-400' 
                              : row.scout.includes('задержкой')
                              ? 'text-yellow-400'
                              : 'text-beigeCream/70'
                          }`}>
                            {row.scout}
                          </span>
                        </td>
                        <td className="text-center py-5 px-6 bg-limeGreen/5 relative">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                            row.hunter === '✅' 
                              ? 'text-limeGreen bg-limeGreen/20' 
                              : row.hunter === '❌'
                              ? 'text-red-400'
                              : 'text-limeGreen'
                          }`}>
                            {row.hunter}
                          </span>
                        </td>
                        <td className="text-center py-5 px-6">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                            row.oracle === '✅' || row.oracle.includes('✅')
                              ? 'text-pink bg-pink/20' 
                              : 'text-pink/80'
                          }`}>
                            {row.oracle}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-r from-pink/10 to-limeGreen/10 rounded-2xl border border-white/10 text-center"
            >
              <p className="text-lg text-beigeCream/80">
                💡 {t('pricing.comparison.hint')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl p-16 max-w-4xl mx-auto"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink/20 via-transparent to-limeGreen/20 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-tr from-limeGreen/10 via-transparent to-pink/10 animate-pulse animation-delay-2000" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-beigeCream">{t('pricing.cta.title')}</span>
              </h2>
              <p className="text-xl text-beigeCream/80 mb-10 max-w-2xl mx-auto">
                {t('pricing.cta.subtitle')}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/dashboard'}
                className="px-10 py-5 bg-limeGreen text-darkGreen font-bold rounded-xl text-lg
                         hover:shadow-[0_0_40px_rgba(171,248,11,0.6)] transition-all duration-300
                         transform hover:-translate-y-1"
              >
                {t('pricing.cta.button')}
              </motion.button>
              
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-beigeCream/60">
                <div className="flex items-center gap-2">
                  <span className="text-limeGreen">✓</span>
                  {t('pricing.cta.features.0')}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-limeGreen">✓</span>
                  {t('pricing.cta.features.1')}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-limeGreen">✓</span>
                  {t('pricing.cta.features.2')}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </motion.div>
  )
}