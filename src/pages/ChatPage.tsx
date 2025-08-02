import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import ChatPanel from '../components/ChatPanel'
import ChatFlamingo3D from '../components/ChatFlamingo3D'
import VideoBackgroundClean from '../components/VideoBackgroundClean'

export default function ChatPage() {
  // Mock data for demonstration
  const userStats = {
    winRate: 64,
    sessionsToday: 3,
    profitToday: 1250,
    patternsDetected: 27
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Video Background */}
      <VideoBackgroundClean videoSrc="/assets/videos/chat-background-flamingo.mp4" />
      
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="glassmorphism border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <motion.button
                  onClick={() => window.location.href = '/dashboard'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-limeGreen hover:text-limeGreen/80 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Back to Dashboard</span>
                </motion.button>
              </div>
              
              <h1 className="text-2xl font-bold text-beigeCream">AI Assistant Chat</h1>
              
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-limeGreen rounded-full animate-pulse" />
                <span className="text-sm text-limeGreen">Online</span>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-3 gap-8 max-h-[calc(100vh-120px)]">
            {/* Left Panel - 3D Flamingo and Stats */}
            <div className="lg:col-span-1 space-y-6">
              {/* 3D Flamingo Display */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="glassmorphism rounded-3xl p-6 h-64"
              >
                <Canvas camera={{ position: [0, 0, 3] }}>
                  <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
                  <ambientLight intensity={0.3} />
                  <pointLight position={[10, 10, 10]} intensity={0.8} color="#E59FCE" />
                  <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ABF80B" />
                  <spotLight 
                    position={[0, 5, 2]} 
                    angle={0.3} 
                    penumbra={1} 
                    intensity={1} 
                    color="#ABF80B"
                  />
                  <ChatFlamingo3D animationState="happy" scale={1.5} />
                </Canvas>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="glassmorphism rounded-3xl p-6"
              >
                <h3 className="text-xl font-bold text-limeGreen mb-4">Today's Performance</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-beigeCream/70">Win Rate</span>
                    <span className="text-2xl font-bold text-limeGreen">{userStats.winRate}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-beigeCream/70">Sessions</span>
                    <span className="text-2xl font-bold text-pink">{userStats.sessionsToday}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-beigeCream/70">Profit</span>
                    <span className="text-2xl font-bold text-limeGreen">+${userStats.profitToday}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-beigeCream/70">Patterns Found</span>
                    <span className="text-2xl font-bold text-pink">{userStats.patternsDetected}</span>
                  </div>
                </div>
              </motion.div>

              {/* AI Tips */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glassmorphism rounded-3xl p-6"
              >
                <h3 className="text-xl font-bold text-pink mb-4">AI Insights</h3>
                
                <div className="space-y-3">
                  <div className="p-3 bg-limeGreen/10 rounded-xl border border-limeGreen/30">
                    <p className="text-sm text-beigeCream">
                      <span className="text-limeGreen font-semibold">Hot Tip:</span> Slot #47 showing 
                      favorable patterns. 87% confidence in next 50 spins.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-pink/10 rounded-xl border border-pink/30">
                    <p className="text-sm text-beigeCream">
                      <span className="text-pink font-semibold">Warning:</span> Avoid progressive 
                      jackpots for next 2 hours. Algorithm tightening detected.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Panel - Chat Interface */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 h-[calc(100vh-160px)]"
            >
              <ChatPanel 
                probability={userStats.winRate} 
                balance={userStats.profitToday}
                isSpinning={false}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 space-y-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-pink rounded-full flex items-center justify-center
                   shadow-[0_0_20px_rgba(229,159,206,0.5)] hover:shadow-[0_0_30px_rgba(229,159,206,0.7)]
                   transition-all"
          title="Export Chat History"
        >
          <span className="text-2xl">💾</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-limeGreen rounded-full flex items-center justify-center
                   shadow-[0_0_20px_rgba(171,248,11,0.5)] hover:shadow-[0_0_30px_rgba(171,248,11,0.7)]
                   transition-all"
          title="Voice Chat"
        >
          <span className="text-2xl">🎤</span>
        </motion.button>
      </div>
    </motion.div>
  )
}