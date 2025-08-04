import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { BeamsBackground } from '../components/BeamsBackground'
import '../styles/showcase.css'

export default function ComponentShowcase() {
  const { scrollY } = useScroll()
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-darkGreen"
    >
      <Header onLogin={() => {}} />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <BeamsBackground intensity="subtle" className="absolute inset-0" />
        
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            y: useTransform(scrollY, [0, 500], [0, -100]),
          }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-limeGreen/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-pink/10 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="text-beigeCream">Component</span>
            <span className="text-limeGreen"> Showcase</span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-beigeCream/70 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Beautiful UI components styled to match Flamingo's design system
          </motion.p>
        </div>
      </section>

      {/* Dashboard Components Section - Tremor Style */}
      <section className="py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-beigeCream mb-12">
            AI Analytics Dashboard
          </h2>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="glassmorphism p-6 rounded-2xl border border-limeGreen/20"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-beigeCream/60 text-sm">Success Rate</p>
                  <p className="text-3xl font-bold text-limeGreen mt-2">87.5%</p>
                  <p className="text-xs text-limeGreen/60 mt-1">+12.3% from last month</p>
                </div>
                <div className="w-12 h-12 bg-limeGreen/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-limeGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="glassmorphism p-6 rounded-2xl border border-pink/20"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-beigeCream/60 text-sm">Active Patterns</p>
                  <p className="text-3xl font-bold text-pink mt-2">24</p>
                  <p className="text-xs text-pink/60 mt-1">3 new patterns detected</p>
                </div>
                <div className="w-12 h-12 bg-pink/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="glassmorphism p-6 rounded-2xl border border-beigeCream/20"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-beigeCream/60 text-sm">Accuracy Score</p>
                  <p className="text-3xl font-bold text-beigeCream mt-2">96.2%</p>
                  <p className="text-xs text-beigeCream/60 mt-1">Industry leading</p>
                </div>
                <div className="w-12 h-12 bg-beigeCream/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-beigeCream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Chart Placeholder */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glassmorphism p-8 rounded-2xl border border-limeGreen/20"
          >
            <h3 className="text-xl font-semibold text-beigeCream mb-6">Pattern Recognition Timeline</h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {[65, 72, 68, 85, 78, 92, 88, 95, 91, 87, 94, 96].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex-1 bg-gradient-to-t from-limeGreen to-limeGreen/20 rounded-t-lg"
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-beigeCream/60">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Interactive Components Section - NextUI Style */}
      <section className="py-20 px-4 bg-darkGreen/50 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-beigeCream mb-12">
            Interactive Elements
          </h2>

          {/* Tabs */}
          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-xl bg-darkGreen/80 p-1 backdrop-blur-sm border border-limeGreen/20">
                {['Dashboard', 'Analytics', 'Settings'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.toLowerCase()
                        ? 'bg-limeGreen text-darkGreen'
                        : 'text-beigeCream/70 hover:text-beigeCream'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glassmorphism p-8 rounded-2xl border border-limeGreen/20"
            >
              {activeTab === 'dashboard' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-beigeCream mb-4">Dashboard Overview</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-darkGreen/50 p-4 rounded-lg border border-limeGreen/10">
                      <p className="text-beigeCream/60 text-sm">Active Sessions</p>
                      <p className="text-2xl font-bold text-limeGreen">1,234</p>
                    </div>
                    <div className="bg-darkGreen/50 p-4 rounded-lg border border-pink/10">
                      <p className="text-beigeCream/60 text-sm">Success Rate</p>
                      <p className="text-2xl font-bold text-pink">87.5%</p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'analytics' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-beigeCream mb-4">Analytics Details</h3>
                  <p className="text-beigeCream/70">
                    Real-time pattern analysis and predictive modeling insights
                  </p>
                </div>
              )}
              {activeTab === 'settings' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-beigeCream mb-4">Settings</h3>
                  <p className="text-beigeCream/70">
                    Configure your AI assistant preferences
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Action Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glassmorphism p-6 rounded-2xl border border-limeGreen/20 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-limeGreen/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-limeGreen/30 transition-colors">
                <svg className="w-8 h-8 text-limeGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-beigeCream mb-2">Quick Analysis</h3>
              <p className="text-sm text-beigeCream/60">
                Instant pattern recognition with one click
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glassmorphism p-6 rounded-2xl border border-pink/20 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-pink/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink/30 transition-colors">
                <svg className="w-8 h-8 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-beigeCream mb-2">Advanced Settings</h3>
              <p className="text-sm text-beigeCream/60">
                Fine-tune your AI parameters
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glassmorphism p-6 rounded-2xl border border-beigeCream/20 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-beigeCream/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-beigeCream/30 transition-colors">
                <svg className="w-8 h-8 text-beigeCream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-beigeCream mb-2">Reports</h3>
              <p className="text-sm text-beigeCream/60">
                Detailed analysis and insights
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Form Components Section - Flowbite Style */}
      <section className="py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-beigeCream mb-12">
            AI Configuration
          </h2>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glassmorphism p-8 rounded-2xl border border-limeGreen/20"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-beigeCream mb-2">
                  Pattern Recognition Mode
                </label>
                <select className="w-full px-4 py-3 bg-darkGreen/50 border border-limeGreen/20 rounded-lg text-beigeCream focus:border-limeGreen focus:outline-none focus:ring-2 focus:ring-limeGreen/20">
                  <option>Quantum Analysis</option>
                  <option>Neural Network</option>
                  <option>Hybrid Mode</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-beigeCream mb-2">
                  Confidence Threshold
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="85"
                    className="w-full h-2 bg-darkGreen/50 rounded-lg appearance-none cursor-pointer"
                    style={{
                      WebkitAppearance: 'none',
                      MozAppearance: 'none',
                      appearance: 'none',
                    }}
                  />
                  <div className="flex justify-between mt-2 text-xs text-beigeCream/60">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-beigeCream mb-2">
                    Analysis Speed
                  </label>
                  <input
                    type="text"
                    placeholder="Real-time"
                    className="w-full px-4 py-3 bg-darkGreen/50 border border-limeGreen/20 rounded-lg text-beigeCream placeholder-beigeCream/40 focus:border-limeGreen focus:outline-none focus:ring-2 focus:ring-limeGreen/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-beigeCream mb-2">
                    Data Points
                  </label>
                  <input
                    type="number"
                    placeholder="1000"
                    className="w-full px-4 py-3 bg-darkGreen/50 border border-limeGreen/20 rounded-lg text-beigeCream placeholder-beigeCream/40 focus:border-limeGreen focus:outline-none focus:ring-2 focus:ring-limeGreen/20"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="notifications"
                  className="w-4 h-4 text-limeGreen bg-darkGreen/50 border-limeGreen/20 rounded focus:ring-limeGreen focus:ring-2"
                />
                <label htmlFor="notifications" className="text-sm text-beigeCream">
                  Enable real-time notifications for pattern detection
                </label>
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  className="px-6 py-3 text-beigeCream/70 hover:text-beigeCream transition-colors"
                >
                  Cancel
                </button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-limeGreen text-darkGreen font-semibold rounded-lg hover:bg-limeGreen/90 transition-colors"
                >
                  Save Configuration
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </section>

      {/* Notification Toast Example */}
      <section className="py-20 px-4 bg-darkGreen/50 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-beigeCream mb-12">
            System Notifications
          </h2>

          <div className="space-y-4">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glassmorphism p-4 rounded-lg border border-limeGreen/20 flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-limeGreen/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-limeGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-beigeCream">Pattern Detected</h4>
                <p className="text-sm text-beigeCream/60 mt-1">
                  New winning pattern identified with 94.2% confidence
                </p>
              </div>
              <button className="text-beigeCream/40 hover:text-beigeCream">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glassmorphism p-4 rounded-lg border border-pink/20 flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-pink/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-beigeCream">High Risk Alert</h4>
                <p className="text-sm text-beigeCream/60 mt-1">
                  Current pattern shows increased volatility
                </p>
              </div>
              <button className="text-beigeCream/40 hover:text-beigeCream">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glassmorphism p-4 rounded-lg border border-beigeCream/20 flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-beigeCream/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-beigeCream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-beigeCream">System Update</h4>
                <p className="text-sm text-beigeCream/60 mt-1">
                  AI model updated with latest training data
                </p>
              </div>
              <button className="text-beigeCream/40 hover:text-beigeCream">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* New Minimalist Data Card Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-beigeCream mb-12">
            Minimalist Data Visualization
          </h2>

          {/* Sleek Data Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Performance Metrics Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-limeGreen/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="glassmorphism p-6 rounded-2xl border border-limeGreen/10 hover:border-limeGreen/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-10 h-10 bg-limeGreen/10 rounded-lg flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 text-limeGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-xs text-limeGreen/60 font-medium"
                  >
                    LIVE
                  </motion.span>
                </div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-lg font-semibold text-beigeCream mb-2"
                >
                  Performance Index
                </motion.h3>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-baseline gap-2 mb-4"
                >
                  <span className="text-3xl font-bold text-limeGreen">94.7</span>
                  <span className="text-sm text-limeGreen/60">+2.3%</span>
                </motion.div>
                <div className="space-y-2">
                  {[85, 92, 78, 95, 88].map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${value}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      className="h-1 bg-limeGreen/20 rounded-full overflow-hidden"
                    >
                      <motion.div
                        className="h-full bg-limeGreen rounded-full"
                        initial={{ x: "-100%" }}
                        whileInView={{ x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Real-time Activity Monitor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="glassmorphism p-6 rounded-2xl border border-pink/10 hover:border-pink/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="w-10 h-10 bg-pink/10 rounded-lg flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-2 h-2 bg-pink rounded-full"
                  />
                </div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-lg font-semibold text-beigeCream mb-2"
                >
                  Activity Monitor
                </motion.h3>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-baseline gap-2 mb-4"
                >
                  <span className="text-3xl font-bold text-pink">1,287</span>
                  <span className="text-sm text-pink/60">active now</span>
                </motion.div>
                <div className="relative h-32">
                  <svg className="w-full h-full" viewBox="0 0 300 100">
                    <motion.path
                      d="M 0 80 Q 50 20 100 60 T 200 40 T 300 70"
                      fill="none"
                      stroke="rgb(255, 0, 127)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.6 }}
                    />
                    <motion.path
                      d="M 0 80 Q 50 20 100 60 T 200 40 T 300 70 L 300 100 L 0 100 Z"
                      fill="url(#pink-gradient)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                    <defs>
                      <linearGradient id="pink-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgb(255, 0, 127)" />
                        <stop offset="100%" stopColor="rgb(255, 0, 127)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* AI Confidence Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-beigeCream/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="glassmorphism p-6 rounded-2xl border border-beigeCream/10 hover:border-beigeCream/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="w-10 h-10 bg-beigeCream/10 rounded-lg flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 text-beigeCream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-xs text-beigeCream/60 font-medium"
                  >
                    AI POWERED
                  </motion.span>
                </div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-lg font-semibold text-beigeCream mb-2"
                >
                  Confidence Score
                </motion.h3>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex items-baseline gap-2 mb-4"
                >
                  <span className="text-3xl font-bold text-beigeCream">98.3%</span>
                  <span className="text-sm text-beigeCream/60">accuracy</span>
                </motion.div>
                <div className="relative h-32 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
                    className="relative w-24 h-24"
                  >
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="rgba(249, 248, 239, 0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="rgb(249, 248, 239)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={251.2}
                        initial={{ strokeDashoffset: 251.2 }}
                        whileInView={{ strokeDashoffset: 251.2 * 0.017 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.5 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="text-2xl font-bold text-beigeCream">A+</span>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Floating Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            className="mt-12 flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-limeGreen to-pink rounded-full text-darkGreen font-semibold overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink to-limeGreen opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center gap-2">
                Explore Analytics
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Animated Pricing Cards Section - Float UI Inspired */}
      <section className="py-20 px-4 bg-darkGreen/50 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-beigeCream mb-4"
          >
            Premium AI Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-beigeCream/60 mb-12 max-w-2xl mx-auto"
          >
            Choose the perfect AI-powered solution for your pattern recognition needs
          </motion.p>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-limeGreen/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glassmorphism p-8 rounded-3xl border border-limeGreen/20 group-hover:border-limeGreen/40 transition-all duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 bg-limeGreen/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg className="w-6 h-6 text-limeGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-beigeCream mb-2">Starter</h3>
                <p className="text-beigeCream/60 text-sm mb-6">Perfect for beginners exploring AI patterns</p>
                <div className="mb-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="text-4xl font-bold text-limeGreen">$29</span>
                    <span className="text-beigeCream/60">/month</span>
                  </motion.div>
                </div>
                <ul className="space-y-3 mb-8">
                  {['100 pattern analyses/day', 'Basic AI models', 'Email support', 'API access'].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 text-beigeCream/80 text-sm"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                        className="w-5 h-5 bg-limeGreen/20 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <svg className="w-3 h-3 text-limeGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-4 bg-darkGreen/50 border border-limeGreen/20 rounded-xl text-limeGreen font-medium hover:bg-limeGreen/10 transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>

            {/* Professional Plan - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(0deg, rgba(171,248,11,0.2) 0%, transparent 50%)',
                    'linear-gradient(180deg, rgba(171,248,11,0.2) 0%, transparent 50%)',
                    'linear-gradient(360deg, rgba(171,248,11,0.2) 0%, transparent 50%)',
                  ],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute inset-0 rounded-3xl blur-2xl"
              />
              <div className="relative glassmorphism p-8 rounded-3xl border-2 border-limeGreen/40 group-hover:border-limeGreen/60 transition-all duration-300">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-limeGreen text-darkGreen text-sm font-semibold rounded-full"
                >
                  MOST POPULAR
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 bg-limeGreen/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg className="w-6 h-6 text-limeGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-beigeCream mb-2">Professional</h3>
                <p className="text-beigeCream/60 text-sm mb-6">Advanced features for serious pattern hunters</p>
                <div className="mb-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="text-4xl font-bold text-limeGreen">$79</span>
                    <span className="text-beigeCream/60">/month</span>
                  </motion.div>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Unlimited pattern analyses',
                    'Advanced AI models',
                    'Priority support 24/7',
                    'Custom integrations',
                    'Real-time predictions',
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center gap-3 text-beigeCream/80 text-sm"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                        className="w-5 h-5 bg-limeGreen/30 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <svg className="w-3 h-3 text-limeGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-4 bg-limeGreen text-darkGreen rounded-xl font-semibold hover:bg-limeGreen/90 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glassmorphism p-8 rounded-3xl border border-pink/20 group-hover:border-pink/40 transition-all duration-300">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  className="w-12 h-12 bg-pink/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  <svg className="w-6 h-6 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-beigeCream mb-2">Enterprise</h3>
                <p className="text-beigeCream/60 text-sm mb-6">Custom solutions for large organizations</p>
                <div className="mb-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="text-3xl font-bold text-pink">Custom</span>
                  </motion.div>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    'Everything in Professional',
                    'Dedicated infrastructure',
                    'Custom AI training',
                    'White-label options',
                    'SLA guarantee',
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-3 text-beigeCream/80 text-sm"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                        className="w-5 h-5 bg-pink/20 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <svg className="w-3 h-3 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 px-4 bg-darkGreen/50 border border-pink/20 rounded-xl text-pink font-medium hover:bg-pink/10 transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-beigeCream/60"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm">256-bit SSL Security</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-beigeCream/60"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm">99.9% Uptime SLA</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-beigeCream/60"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="text-sm">No hidden fees</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </motion.div>
  )
}